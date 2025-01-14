import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase";

export const updateStreak = async () => {
  const userId = auth.currentUser?.uid;

  if (!userId) return;

  const userRef = doc(db, "users", userId);

  try {
    const userDoc = await getDoc(userRef);

    let currentDate = new Date().toLocaleDateString("en-CA");
    let streaks = [];

    if (userDoc.exists()) {
      streaks = userDoc.data().streak || [];
    }

    console.log("Current Date:", currentDate);
    console.log("Existing Streaks:", streaks);

    const lastStreak = streaks[streaks.length - 1] || [];
    const lastDate = lastStreak[lastStreak.length - 1];

    if (!lastStreak.includes(currentDate)) {
      if (lastDate) {
        const difference = new Date(currentDate) - new Date(lastDate);
        const daysGap = difference / (1000 * 60 * 60 * 24);

        console.log("Days Gap:", daysGap);

        if (daysGap === 1) {
          lastStreak.push(currentDate);
          console.log("Streak Continued. Updated Last Streak:", lastStreak);
        } else {
          streaks.push([currentDate]); // A new streak is started
          console.log("New Streak Started. Updated Streaks:", streaks);
        }
      } else {
        streaks.push([currentDate]); // First streak entry
        console.log("First Entry in Streaks. New Streaks:", streaks);
      }

      // Flatten the streaks array before updating Firebase
      const flattenedStreaks = streaks.flat();
      console.log("Flattened Streaks (1D):", flattenedStreaks);

      // Update Firebase with the flattened streaks array
      await updateDoc(userRef, { streak: flattenedStreaks });
      console.log(
        "Database Updated Successfully with Streaks:",
        flattenedStreaks
      );
    } else {
      console.log("Today's date is already in the streak. No update needed.");
    }
  } catch (error) {
    console.error("Error updating streak:", error.message);
  }
};
