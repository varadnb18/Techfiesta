import React from "react";
import StreakCalendar from "../Calendar/StreakCalendar";
import Title from "../UI/Title";
import BarChart from "../UI/BarChart";
import YogaScreenTimeChart from "../UI/YogaScreenTimeChart";

const StatBox = ({ number, label }) => {
  return (
    <div className="w-32 h-32 border border-gray-300 rounded flex flex-col items-center justify-center text-center">
      <span className="text-2xl font-bold">{number}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
};

function ProfilePage() {
  const stats = [
    { number: 428, label: "Total Sessions" },
    { number: 95, label: "Total Visitors" },
    { number: 88, label: "New Visitors" },
    { number: "1.0 days", label: "Time Spent" },
  ];

  return (
    <div className="">
      <div>
        <Title />
      </div>
      <div className="flex justify-evenly ">
        <div>
          <div className="p-8 pb-3 pt-7 flex flex-col items-start">
            <h1 className="text-3xl font-bold text-left text-[#333] mb-2 leading-[1.4]">
              Breathe deep, 🧘🏻‍♀️🌿
              <br />
              Find balance, flow with peace!
            </h1>
            <p className="text-lg text-center text-[#666] leading-relaxed">
              Embrace the journey. The body achieves what the mind believes.
            </p>
          </div>

          <div style={{ width: "600px" }}>
            {/* <BarChart /> */}
            <YogaScreenTimeChart />
          </div>

          <div className="p-4">
            <div className="flex gap-4 ml-5">
              {stats.map((stat, index) => (
                <StatBox key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ width: "600px", paddingTop: "50px" }}>
          <StreakCalendar />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
