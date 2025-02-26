import React from "react";
import girl from "../../Images/girl-workout.webp";

const LowerFP = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex justify-between item-start bg-white w-[85%] ">
        {/* Center - AI Tracked Image */}
        <div className="relative max-w-[400px] mr-10 mr-7 ml-7">
          <img
            src={girl}
            alt="Workout AI Tracking"
            className="rounded-lg h-[500px] w-full object-contain"
          />
        </div>

        {/* Right Section - Content */}
        <div className="flex flex-col mt-5 max-w-[520px] mr-7 ml-7">
          <h2 className="text-[2.2rem] font-bold mb-5">
            Elevate Engagement and Value with AI
          </h2>

          <div className="flex items-center mt-5 gap-3 mb-2">
            <div className="bg-[#EBFEB1] p-[5px] rounded-full flex items-center justify-center w-[65px] h-[65px]">
              <img
                src="https://img.icons8.com/?size=45&id=105414&format=png&color=000000"
                className="w-12"
              />
            </div>
            <div>
              <h3 className="font-bold text-[1.3rem]">Increase revenue</h3>
              <p className="text-md text-gray-600 text-[1.1rem]">
                Scale swiftly and amplify revenue with the AI-driven
              </p>
            </div>
          </div>

          <div className="flex items-center mt-5 gap-3 mb-3">
            <div className="bg-[#C4F2FE] p-[5px] rounded-full flex items-center justify-center w-[65px] h-[65px]">
              <img
                src="https://img.icons8.com/?size=100&id=79306&format=png&color=000000"
                className="w-12"
              />
            </div>
            <div>
              <h3 className="font-bold text-[1.3rem]">Boost User Engagement</h3>
              <p className="text-md text-gray-600 text-[1.1rem]">
                Skyrocket user involvement and interaction by up to 10x.
              </p>
            </div>
          </div>
          <div>
            <button className=" mt-6 bg-gray-800 text-white px-7 py-4 rounded-xl hover:bg-gray-700 font-bold">
              VIEW CASE STUDIES &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerFP;
