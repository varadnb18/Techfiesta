import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { auth, db } from "../FireBase/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExerciseTimeChart = () => {
  const [exerciseData, setExerciseData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExerciseTime = async () => {
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
          const exerciseTime = userData.exerciseTime || {};

          const exercises = Object.keys(exerciseTime);
          const timeData = exercises.map((exercise) => {
            const totalTime = Object.values(exerciseTime[exercise]).reduce(
              (sum, time) => sum + time,
              0
            );
            return totalTime;
          });

          setExerciseData({
            labels: exercises,
            datasets: [
              {
                data: timeData,
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#FF9F40",
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4BC0C0",
                  "#FF9F40",
                ],
              },
            ],
          });
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching exercise time:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchExerciseTime();
      } else {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div style={{ width: "100%" }}>
        <Pie
          data={exerciseData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  boxWidth: 15,
                  paddingtop: 5,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ExerciseTimeChart;
