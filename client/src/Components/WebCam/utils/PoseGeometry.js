export const angleBetween = (A, B, C) => {
    const BA = { x: A.x - B.x, y: A.y - B.y };
    const BC = { x: C.x - B.x, y: C.y - B.y };
    const dot = BA.x * BC.x + BA.y * BC.y;
    const magBA = Math.sqrt(BA.x * BA.x + BA.y * BA.y);
    const magBC = Math.sqrt(BC.x * BC.x + BC.y * BC.y);
    if (magBA < 1e-6 || magBC < 1e-6) return 180;
    return (
      Math.acos(Math.max(-1, Math.min(1, dot / (magBA * magBC)))) *
      (180 / Math.PI)
    );
  };

export const geometricGate = (landmarks, targetPose) => {
    if (!landmarks || landmarks.length < 33) return { score: 0, feedback: "", failingLimbs: [] };

    const gp = (i) => landmarks[i] || { x: 0, y: 0, z: 0, visibility: 0 };

    const nose = gp(0);
    const leftShoulder = gp(11);
    const rightShoulder = gp(12);
    const leftElbow = gp(13);
    const rightElbow = gp(14);
    const leftWrist = gp(15);
    const rightWrist = gp(16);
    const leftHip = gp(23);
    const rightHip = gp(24);
    const leftKnee = gp(25);
    const rightKnee = gp(26);
    const leftAnkle = gp(27);
    const rightAnkle = gp(28);
    const leftHeel = gp(29);
    const rightHeel = gp(30);
    const leftFootIdx = gp(31);
    const rightFootIdx = gp(32);

    let failingLimbs = [];
    let feedback = "";

    switch (targetPose) {
      // ── TREE POSE ──────────────────────────────────────────────────
      case "tree": {
        const leftFootRaised = leftAnkle.y < rightKnee.y + 0.1;
        const rightFootRaised = rightAnkle.y < leftKnee.y + 0.1;

        if (!leftFootRaised && !rightFootRaised) {
          failingLimbs.push("left_leg", "right_leg");
          feedback = "Lift one foot and place it on your inner thigh.";
          return { score: 0, feedback, failingLimbs };
        }

        const leftArmUp = leftWrist.y < leftShoulder.y;
        const rightArmUp = rightWrist.y < rightShoulder.y;
        const armsUp = leftArmUp && rightArmUp;
        const oneArmUp = leftArmUp || rightArmUp;

        // Check if arms are actually straight, not just bent at 90 degrees (cactus arms)
        const leftArmAngle = angleBetween(leftShoulder, leftElbow, leftWrist);
        const rightArmAngle = angleBetween(rightShoulder, rightElbow, rightWrist);
        const armsStraight = leftArmAngle > 140 && rightArmAngle > 140;

        if (!armsUp) {
            failingLimbs.push("left_arm", "right_arm");
            feedback = "Raise both arms above your head!";
        } else if (!armsStraight) {
            failingLimbs.push("left_arm", "right_arm");
            feedback = "Straighten your arms completely overhead!";
        } else {
            feedback = "Great tree pose!";
        }

        const midHipX = (leftHip.x + rightHip.x) / 2;
        const balanceScore = Math.max(0, 1 - Math.abs(nose.x - midHipX) * 2);

        let score = 10; // lower base score
        score += balanceScore * 30; // up to 30 for balance

        if (armsUp && armsStraight) {
            score += 60; 
        } else if (armsUp && !armsStraight) {
            score += 25; // partial credit for cactus arms
        } else if (oneArmUp) {
            score += 10;
        }

        return { score: Math.min(100, Math.round(score)), feedback, failingLimbs };
      }

      // ── CHAIR POSE ────────────────────────────────────────────────
      case "chair": {
        const leftKneeAngleDeg = angleBetween(leftHip, leftKnee, leftAnkle);
        const rightKneeAngleDeg = angleBetween(rightHip, rightKnee, rightAnkle);
        const avgKneeBend = (leftKneeAngleDeg + rightKneeAngleDeg) / 2;

        if (avgKneeBend > 165) {
          failingLimbs.push("left_leg", "right_leg");
          feedback = "Bend your knees to sit in the chair!";
          return { score: 0, feedback, failingLimbs };
        }

        const torsoUpright = (leftShoulder.y < leftHip.y) && (rightShoulder.y < rightHip.y);
        if (!torsoUpright) {
            failingLimbs.push("torso");
            feedback = "Keep your chest lifted!";
        }

        const leftArmUp = leftWrist.y < leftShoulder.y;
        const rightArmUp = rightWrist.y < rightShoulder.y;
        const armsUp = leftArmUp && rightArmUp;
        const oneArmUp = leftArmUp || rightArmUp;
        
        if (torsoUpright && !armsUp) {
             failingLimbs.push("left_arm", "right_arm");
             feedback = "Reach your arms overhead!";
        } else if (torsoUpright && armsUp) {
            feedback = "Perfect chair posture!";
        }

        const bendScore = Math.max(0, Math.min(1, (165 - avgKneeBend) / 75));
        const midHipX = (leftHip.x + rightHip.x) / 2;
        const balanceScore = Math.max(0, 1 - Math.abs(nose.x - midHipX) * 5);

        let score = 10;
        score += bendScore * 40;
        if (armsUp) score += 20;
        else if (oneArmUp) score += 10;
        if (torsoUpright) score += 10;
        score += balanceScore * 20;

        return { score: Math.min(100, Math.round(score)), feedback, failingLimbs };
      }

      // ── PLANK POSE ────────────────────────────────────────────────
      case "plank": {
        const shoulderHipDiffL = Math.abs(leftShoulder.y - leftHip.y);
        const shoulderHipDiffR = Math.abs(rightShoulder.y - rightHip.y);
        const avgShoulderHipDiff = (shoulderHipDiffL + shoulderHipDiffR) / 2;
        
        const bodyIsHorizontal = avgShoulderHipDiff < 0.25;
        const bodyLength = Math.abs((leftShoulder.x + rightShoulder.x) / 2 - (leftAnkle.x + rightAnkle.x) / 2);
        const isSideOn = bodyLength > 0.3;

        if (!bodyIsHorizontal || !isSideOn) {
            failingLimbs.push("torso", "left_leg", "right_leg");
            feedback = "Get down into a pushup position!";
            return { score: 0, feedback, failingLimbs };
        }

        const hipAngleL = angleBetween(leftShoulder, leftHip, leftAnkle);
        const hipAngleR = angleBetween(rightShoulder, rightHip, rightAnkle);
        const avgHipAngle = (hipAngleL + hipAngleR) / 2;
        
        if (avgHipAngle < 150) {
            failingLimbs.push("torso");
            feedback = "Keep your body straight, don't let hips sag or pike!";
        } else {
            feedback = "Strong plank!";
        }

        const straightnessScore = Math.max(0, Math.min(1, 1 - Math.abs(180 - avgHipAngle) / 90));
        const onForearms = leftElbow.y > leftShoulder.y - 0.05 && rightElbow.y > rightShoulder.y - 0.05;
        const onHands = leftWrist.y > leftShoulder.y - 0.05 && rightWrist.y > rightShoulder.y - 0.05;
        const hasSupport = onForearms || onHands;

        let score = 10;
        score += straightnessScore * 40;
        score += hasSupport ? 30 : 0;
        const flatnessScore = Math.max(0, 1 - avgShoulderHipDiff * 4);
        score += flatnessScore * 20;

        return { score: Math.min(100, Math.round(score)), feedback, failingLimbs };
      }

      // ── SHOULDER STAND ────────────────────────────────────────────
      case "shoulder_stand": {
        const anklesAboveHips = leftAnkle.y < leftHip.y - 0.1 || rightAnkle.y < rightHip.y - 0.1;
        const hipsAboveShoulders = leftHip.y < leftShoulder.y - 0.1 || rightHip.y < rightShoulder.y - 0.1;

        if (!anklesAboveHips || !hipsAboveShoulders) {
            failingLimbs.push("left_leg", "right_leg", "torso");
            feedback = "Lie on your back and lift your legs and hips straight up!";
            return { score: 0, feedback, failingLimbs };
        }

        const leftLegAngle = angleBetween(leftHip, leftKnee, leftAnkle);
        const rightLegAngle = angleBetween(rightHip, rightKnee, rightAnkle);
        const legsStraight = (leftLegAngle + rightLegAngle) / 2 > 140;

        if (!legsStraight) {
            failingLimbs.push("left_leg", "right_leg");
            feedback = "Keep your legs straight!";
        } else {
            feedback = "Excellent balance!";
        }

        const legVerticality = Math.max(0, Math.max(leftHip.y - leftAnkle.y, rightHip.y - rightAnkle.y));
        const verticalScore = Math.min(1, legVerticality * 4);
        const backSupport = leftElbow.y > leftShoulder.y - 0.15 || rightElbow.y > rightShoulder.y - 0.15;

        let score = 10;
        score += verticalScore * 50;
        score += backSupport ? 20 : 0;
        score += legsStraight ? 20 : 0;

        return { score: Math.min(100, Math.round(score)), feedback, failingLimbs };
      }

      // ── COBRA POSE ────────────────────────────────────────────────
      case "cobra": {
        const isLyingDown = leftHip.y > leftKnee.y - 0.1 && leftAnkle.y > leftKnee.y - 0.1;
        const chestLifted = leftShoulder.y < leftHip.y - 0.1 || rightShoulder.y < rightHip.y - 0.1;

        if (!isLyingDown || !chestLifted) {
            failingLimbs.push("torso", "left_leg", "right_leg");
            feedback = "Lie on your stomach and lift your chest!";
            return { score: 0, feedback, failingLimbs };
        }

        const spineAngleL = angleBetween(leftShoulder, leftHip, leftAnkle);
        const spineAngleR = angleBetween(rightShoulder, rightHip, rightAnkle);
        const avgSpineAngle = (spineAngleL + spineAngleR) / 2;
        
        if (avgSpineAngle > 165) {
            failingLimbs.push("torso");
            feedback = "Arch your back more by lifting your chest higher.";
        } else {
            feedback = "Beautiful cobra arch!";
        }

        const liftAmount = Math.max(leftHip.y - leftShoulder.y, rightHip.y - rightShoulder.y);
        const liftScore = Math.max(0, Math.min(1, liftAmount * 4));
        const armsPropping = leftElbow.y > leftShoulder.y - 0.15 || rightElbow.y > rightShoulder.y - 0.15;
        const hipsLow = leftHip.y > leftKnee.y - 0.2 || rightHip.y > rightKnee.y - 0.2;
        const archScore = Math.max(0, Math.min(1, (180 - avgSpineAngle) / 60));

        let score = 10;
        score += liftScore * 30;
        score += armsPropping ? 20 : 0;
        score += hipsLow ? 10 : 0;
        score += archScore * 30;

        return { score: Math.min(100, Math.round(score)), feedback, failingLimbs };
      }

      // ── DOWNDOG ───────────────────────────────────────────────────
      case "downdog": {
        const avgHipY = (leftHip.y + rightHip.y) / 2;
        const avgShoulderY = (leftShoulder.y + rightShoulder.y) / 2;
        const avgAnkleY = (leftAnkle.y + rightAnkle.y) / 2;
        const avgWristY = (leftWrist.y + rightWrist.y) / 2;

        const hipsUp = avgHipY < avgShoulderY - 0.1;
        const handsDown = avgWristY > avgShoulderY + 0.1;
        const feetDown = avgAnkleY > avgHipY + 0.1;

        if (!hipsUp || !handsDown || !feetDown) {
            failingLimbs.push("torso");
            feedback = "Push your hips up and back into an inverted V.";
            return { score: 0, feedback, failingLimbs };
        }

        const leftArmAngle = angleBetween(leftShoulder, leftElbow, leftWrist);
        const rightArmAngle = angleBetween(rightShoulder, rightElbow, rightWrist);
        const armsStraight = (leftArmAngle + rightArmAngle) / 2 > 150;

        const leftLegAngle = angleBetween(leftHip, leftKnee, leftAnkle);
        const rightLegAngle = angleBetween(rightHip, rightKnee, rightAnkle);
        const legsStraight = (leftLegAngle + rightLegAngle) / 2 > 150;

        if (!armsStraight) {
            failingLimbs.push("left_arm", "right_arm");
            feedback = "Straighten your arms!";
        } else if (!legsStraight) {
            failingLimbs.push("left_leg", "right_leg");
            feedback = "Try to straighten your legs and push heels down.";
        } else {
            feedback = "Great downward dog!";
        }

        const hipElevation = Math.max(0, ((avgShoulderY - avgHipY) + (avgAnkleY - avgHipY)) / 2);
        const vShapeScore = Math.min(1, hipElevation * 5);

        let score = 10;
        score += vShapeScore * 50;
        score += armsStraight ? 20 : 0;
        score += legsStraight ? 20 : 0;

        return { score: Math.min(100, Math.round(score)), feedback, failingLimbs };
      }

      default:
        return { score: 0, feedback: "", failingLimbs: [] };
    }
  };