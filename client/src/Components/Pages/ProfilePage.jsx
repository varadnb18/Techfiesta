import React from "react";
import StreakCalendar from "../Calendar/StreakCalendar";
import Title from "../UI/Title";
import YogaScreenTimeChart from "../UI/YogaScreenTimeChart";
import ExerciseTimeChart from "../UI/ExerciseTimeChart";
import ProfileTitle from "../UI/ProfileTitle";

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
    <div>
      <div>
        <ProfileTitle />
      </div>

      <div
        className="grid grid-cols-3"
        style={{ gridTemplateColumns: "45% 35% 20%" }}
      >
        <div className="flex flex-col items-center w-[100%] ml-10">
          <div className="p-8 w-[90%] pb-5 pt-5 flex flex-col items-start">
            <h1 className="text-3xl font-bold text-left text-[#333] mb-3 leading-normal">
              Breathe deep, 🧘🏻‍♀️🌿
              <br />
              Find balance, flow with peace!
            </h1>
            <p className="text-lg text-center text-[#666] leading-relaxed mb-3">
              Embrace the journey. The body achieves what the mind believes.
            </p>
          </div>

          <div style={{ minWidth: "600px" }}>
            <YogaScreenTimeChart />
          </div>

          <div className="p-4">
            <div className="flex gap-6 ml-5">
              {stats.map((stat, index) => (
                <StatBox key={index} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-[100%]">
          <div className="w-[320px] pb-5">
            <ExerciseTimeChart />
          </div>
          <div className="w-[105%] mt-[-40px] z-30">
            <StreakCalendar />
          </div>
        </div>

        <div className="flex flex-col items-center p-[30px] pl-[0px] space-y-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            omnis exercitationem, nesciunt laboriosam molestias voluptates?
            Voluptates explicabo, libero optio ipsam quae expedita a corrupti
            illum minima, quibusdam blanditiis. Odit id earum ullam veniam
            nesciunt, quo optio iusto nam voluptatibus ipsa perspiciatis cumque
            totam tempore modi nobis porro fugiat eligendi! Autem provident
            minima omnis placeat consequuntur corporis magnam ratione eius,
            molestias quibusdam sint illo labore debitis explicabo, possimus
            fuga. Est, doloremque ipsam at neque unde qui molestiae vero in illo
            libero, doloribus dolorum laudantium animi error eius amet, nobis
            distinctio veritatis perspiciatis odio quos!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
