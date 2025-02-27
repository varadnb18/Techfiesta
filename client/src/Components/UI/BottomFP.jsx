import React from "react";
import boy from "../../Images/plankexc.webp";
import "./BottomFP.css";

const BottomFP = () => {
  return (
    <div className="bottomfp-container flex justify-center items-start mb-20 bg-white">
      <div className="bottomfp-wrapper flex justify-between bg-white w-[85%]">
        {/* Right Section - Content */}
        <div className="bottomfp-content flex flex-col ml-10 max-w-[520px]">
          <h2 className="bottomfp-title text-[2.3rem] font-bold mb-5">
            AI Solutions for Precision and Customization
          </h2>

          <div className="bottomfp-feature flex items-center mt-5 gap-3 mb-2">
            <div className="bottomfp-icon bg-[#EBFEB1] p-[5px] rounded-full flex items-center justify-center w-[65px] h-[65px]">
              <img
                src="https://img.icons8.com/?size=100&id=58892&format=png&color=000000"
                className="bottomfp-img w-12"
              />
            </div>
            <div>
              <h3 className="bottomfp-heading font-bold text-[1.2rem]">
                Motion Tracking: Differentiate Yourself
              </h3>
              <p className="bottomfp-text text-md text-gray-600 text-[1rem]">
                Using AI to improve compliance, adherence & outcomes.
              </p>
            </div>
          </div>

          <div className="bottomfp-feature flex items-center mt-5 gap-3 mb-3">
            <div className="bottomfp-icon bg-[#C4F2FE] p-[5px] rounded-full flex items-center justify-center w-[65px] h-[65px]">
              <img
                src="https://img.icons8.com/?size=60&id=77451&format=png&color=000000"
                className="bottomfp-img w-12"
              />
            </div>
            <div>
              <h3 className="bottomfp-heading font-bold text-[1.2rem]">
                Integration: Unlimited Content
              </h3>
              <p className="bottomfp-text text-md text-gray-600 text-[1rem]">
                Use your content with our API + SDK integration.
              </p>
            </div>
          </div>
          <div>
            <button className="STUDIES mt-6 bg-gray-800 text-white px-7 py-4 rounded-xl hover:bg-gray-700 font-bold">
              VIEW CASE STUDIES &gt;
            </button>
          </div>
        </div>
        {/* Center - AI Tracked Image */}
        <div className="bottomfp-image-container relative max-w-[500px] mr-10">
          <img
            src={boy}
            alt="Workout AI Tracking"
            className="bottomfp-image rounded-3xl h-[500px] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomFP;
