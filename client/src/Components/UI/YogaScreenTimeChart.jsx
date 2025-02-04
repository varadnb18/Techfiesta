import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { auth, db } from "../FireBase/FireBase";
import { doc, getDoc } from "firebase/firestore";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const YogaScreenTimeChart = () => {
  const [screenTimeData, setScreenTimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScreenTime = async () => {
      const userId = auth.currentUser?.uid;
      console.log("User ID:", userId);
      if (!userId) {
        setIsLoading(false);
        return <div>Please log in to see the data.</div>;
      }

      try {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const screenTime = userData.screenTime || {};

          const days = [...Array(7)]
            .map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (i - 5));
              return date.toISOString().split("T")[0];
            })
            .reverse();

          setScreenTimeData(days.map((day) => screenTime[day] || 0));
          setIsLoading(false);
        } else {
          console.log("User document does not exist.");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching screen time:", error);
        setIsLoading(false);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchScreenTime();
      } else {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Screen Time (minutes)",
        data: screenTimeData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
    />
  );
};

export default YogaScreenTimeChart;
