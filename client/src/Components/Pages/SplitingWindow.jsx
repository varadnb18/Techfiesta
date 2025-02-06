import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import SplitPane from "react-split-pane";
import { auth, db } from "../FireBase/FireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function SplitingWindow() {
  const { name } = useParams();
  const userId = auth.currentUser?.uid;
  const startTimeRef = useRef(Date.now());
  const totalStartTimeRef = useRef(Date.now());
  const screenStartTimeRef = useRef(Date.now()); // Reference to track screen time

  useEffect(() => {
    if (!userId) return;

    const updateExerciseTime = async () => {
      const endTime = Date.now();
      const durationInMs = endTime - startTimeRef.current;
      const durationInMinutes = Math.floor(durationInMs / 60000);

      if (durationInMinutes === 0) return;

      const today = new Date().toISOString().split("T")[0];

      try {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();

          // Update exercise time
          const currentExerciseTime = userData.exerciseTime?.[name] || {};
          const updatedMinutes =
            (currentExerciseTime[today] || 0) + durationInMinutes;

          const updatedExerciseTime = {
            ...userData.exerciseTime,
            [name]: {
              ...currentExerciseTime,
              [today]: updatedMinutes,
            },
          };

          // Update total time
          const totalTimeInMs = Date.now() - totalStartTimeRef.current;
          const totalTimeInMinutes = Math.floor(totalTimeInMs / 60000);

          const updatedTotalTime = userData.totalTime || 0;
          const updatedTotalTimeInMinutes =
            updatedTotalTime + totalTimeInMinutes;

          // Update screen time
          const screenTimeInMs = Date.now() - screenStartTimeRef.current;
          const screenTimeInMinutes = Math.floor(screenTimeInMs / 60000);

          const updatedScreenTime = userData.screenTime || {};
          const updatedScreenTimeForToday =
            (updatedScreenTime[today] || 0) + screenTimeInMinutes;

          const updatedScreenTimeData = {
            ...updatedScreenTime,
            [today]: updatedScreenTimeForToday,
          };

          // Update Firestore with exercise time, total time, and screen time
          await updateDoc(userRef, {
            exerciseTime: updatedExerciseTime,
            totalTime: updatedTotalTimeInMinutes,
            screenTime: updatedScreenTimeData,
          });

          console.log(
            "Exercise time, total time, and screen time updated in Firestore!"
          );

          // Reset start times
          startTimeRef.current = Date.now();
          totalStartTimeRef.current = Date.now();
          screenStartTimeRef.current = Date.now();
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Firestore update error:", error);
      }
    };

    const interval = setInterval(updateExerciseTime, 10000); // Update every 10 seconds

    return () => {
      updateExerciseTime();
      clearInterval(interval);
    };
  }, [userId, name]);

  return (
    <SplitPane
      split="vertical"
      defaultSize="50%"
      resizerStyle={{
        background: "#ccc",
        width: "5px",
        cursor: "col-resize",
      }}
    >
      <div className="bg-gray-100 h-full flex items-center justify-center">
        {/* Left pane content */}
        <h2 className="text-xl font-bold">{name} – Left Pane</h2>
      </div>
      <div className="bg-white h-full flex items-center justify-center">
        {/* Right pane content */}
        <h2 className="text-xl font-bold">{name} – Right Pane</h2>
      </div>
    </SplitPane>
  );
}

export default SplitingWindow;
