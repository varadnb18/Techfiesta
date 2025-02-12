import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { auth, db } from "../FireBase/FireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

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
  const [screenTimeData, setScreenTimeData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [labels, setLabels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScreenTime = async () => {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        setIsLoading(false);
        return;
      }

      try {
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const screenTime = userData.screenTime || {};

          const last7Days = [...Array(7)].map((_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (6 - i));
            return date.toISOString().split("T")[0];
          });

          const weekLabels = last7Days.map((day) => {
            const date = new Date(day);
            return date.toLocaleDateString("en-US", { weekday: "short" });
          });

          const orderedData = last7Days.map((day) => screenTime[day] || 0);

          await updateDoc(userRef, {
            screenTime: {
              ...screenTime,
              ...last7Days.reduce((acc, day, index) => {
                acc[day] = orderedData[index];
                return acc;
              }, {}),
            },
          });

          setLabels(weekLabels);
          setScreenTimeData(orderedData);
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching or updating screen time:", error);
      } finally {
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
    return (
      <div className="flex flex-col space-y-2 p-6 w-full max-w-2xl mx-auto animate-pulse">
        <div className="h-7 bg-gray-300 rounded w-1/3"></div>
        <div className="h-48 bg-gray-300 rounded-md"></div>
        <div className="flex space-x-2 mt-2">
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-4 w-8 bg-gray-300 rounded"></div>
            ))}
        </div>
      </div>
    );
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Screen Time (minutes)",
        data: screenTimeData,
        backgroundColor: "rgba(50, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        responsive: true,
        scales: { y: { beginAtZero: true } },
      }}
    />
  );
};

export default YogaScreenTimeChart;
