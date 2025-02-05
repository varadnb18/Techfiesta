import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExerciseTimeChart = () => {
  const exerciseData = {
    labels: ["Vinyasa", "Hatha", "Ashtanga", "Yin", "Restorative"],
    datasets: [
      {
        data: [120, 60, 80, 40, 30],
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
  };

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
