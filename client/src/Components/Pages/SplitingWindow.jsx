import React, { useEffect, useState, useRef } from "react";
import SplitPane from "react-split-pane";
import { auth, db } from "../FireBase/FireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function SplitingWindow() {
  const userId = auth.currentUser?.uid;
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (!userId) return;

    const updateScreenTime = async () => {
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
          const updatedScreenTime = {
            ...userData.screenTime,
            [today]: (userData.screenTime?.[today] || 0) + durationInMinutes,
          };

          console.log("Updating screenTime:", updatedScreenTime);

          await updateDoc(userRef, { screenTime: updatedScreenTime });
          console.log("Screen time updated in Firestore!");

          startTimeRef.current = Date.now();
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Firestore update error:", error);
      }
    };

    const interval = setInterval(updateScreenTime, 10000);

    return () => {
      updateScreenTime();
      clearInterval(interval);
    };
  }, [userId]);

  return (
    <div className="h-screen">
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
          Left Pane
        </div>
        <div className="bg-white h-full flex items-center justify-center">
          Right Pane
        </div>
      </SplitPane>
    </div>
  );
}

export default SplitingWindow;
