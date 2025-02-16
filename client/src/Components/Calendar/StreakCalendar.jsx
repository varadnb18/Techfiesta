import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase";
import "react-calendar/dist/Calendar.css";
import CalendarUI from "./CalendarUI";
import "./StreakCalendar.css";

const StreakCalendar = () => {
  const [streak, setStreak] = useState([]);

  useEffect(() => {
    const fetchStreak = async (userId) => {
      if (userId) {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const fetchedStreak = userDoc.data().streak || [];
          const formattedStreak = fetchedStreak.map((date) =>
            new Date(date).toLocaleDateString("en-CA")
          );
          setStreak(formattedStreak);
        }
      }
    };

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await fetchStreak(user.uid);
      } else {
        setStreak([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const normalizeDate = (date) => {
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().split("T")[0];
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateString = normalizeDate(date);
      if (streak.includes(dateString)) {
        return "streak-day";
      }
    }
    return null;
  };

  console.log("yohoo", streak);

  return (
    <div className="calendar-container">
      <CalendarUI streak={streak} tileClassName={tileClassName} />
    </div>
  );
};

export default StreakCalendar;
