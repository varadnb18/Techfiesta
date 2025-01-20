import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase";
import "react-calendar/dist/Calendar.css";

const StreakCalendar = () => {
  const [streak, setStreak] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Calendar tileClassName={tileClassName} />
      <style>{`
  .streak-day {
    background-color: #4caf50;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 20px;
    font-size: 10px;
  }

  .react-calendar {
  width: 400px; 
  height: auto;  
}
  .react-calendar {
    border: none;
  }

  .react-calendar__month-view__days__day {
    padding: 10px;  /* Increase padding around each day */
  }

  .react-calendar__month-view__weekdays {
    font-weight: 300;
    color: #7f7f7f;
    text-decoration: none !important;
  }
`}</style>
    </div>
  );
};

export default StreakCalendar;
