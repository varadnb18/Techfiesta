import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase";
import "react-calendar/dist/Calendar.css";

const StreakCalendar = () => {
  const [streak, setStreak] = useState([]);

  useEffect(() => {
    const fetchStreak = async () => {
      const userId = auth.currentUser?.uid;

      if (userId) {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          setStreak(userDoc.data().streak || []);
        }
      }
    };

    fetchStreak();
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      if (streak.includes(dateString)) {
        return "streak-day";
      }
    }
    return null;
  };

  return (
    <div>
      <h1>Your Login Streak</h1>
      <Calendar tileClassName={tileClassName} />
      <style>{`
        .streak-day {
          background-color: #4caf50;
          color: white;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default StreakCalendar;
