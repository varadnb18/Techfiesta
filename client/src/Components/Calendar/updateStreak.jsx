import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase";

export const updateStreak = async () => {
  const userId = auth.currentUser?.uid;

  if (!userId) return;

  const userRef = doc(db, "users", userId);

  try {
    const userDoc = await getDoc(userRef);

    let currentDate = new Date().toLocaleDateString("en-CA"); // Local date in YYYY-MM-DD format
    let streak = [];

    if (userDoc.exists()) {
      streak = userDoc.data().streak || [];
    }

    console.log("Current Date:", currentDate);
    console.log("Existing Streak:", streak);

    if (!streak.includes(currentDate)) {
      const lastDate = streak[streak.length - 1];
      console.log("Last Date in Streak:", lastDate);

      if (lastDate) {
        const difference = new Date(currentDate) - new Date(lastDate);
        const daysGap = difference / (1000 * 60 * 60 * 24);

        console.log("Days Gap:", daysGap);

        if (daysGap === 1) {
          streak.push(currentDate);
          console.log("Streak Continued. Updated Streak:", streak);
        } else {
          streak = [currentDate];
          console.log("Streak Reset. New Streak:", streak);
        }
      } else {
        streak = [currentDate];
        console.log("First Entry in Streak. New Streak:", streak);
      }

      await updateDoc(userRef, { streak });
      console.log("Database Updated Successfully with Streak:", streak);
    } else {
      console.log("Today's date is already in the streak. No update needed.");
    }
  } catch (error) {
    console.error("Error updating streak:", error.message);
  }
};
