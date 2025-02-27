import React from "react";
import girl from "../../Images/girl-workout.webp";
import "./LowerFP.css";

const LowerFP = () => {
  return (
    <div className="lower-fp-container">
      <div className="lower-fp-wrapper">
        {/* Center - AI Tracked Image */}
        <div className="lower-fp-image">
          <img src={girl} alt="Workout AI Tracking" />
        </div>

        {/* Right Section - Content */}
        <div className="lower-fp-content">
          <h2>Elevate Engagement and Value with AI</h2>

          <div className="lower-fp-feature">
            <div
              className="lower-fp-icon"
              style={{ backgroundColor: "#EBFEB1" }}
            >
              <img
                src="https://img.icons8.com/?size=45&id=105414&format=png&color=000000"
                alt="Increase Revenue"
              />
            </div>
            <div>
              <h3 className="font-bold text-[1.3rem]">Increase revenue</h3>
              <p className="text-md text-gray-600 text-[1.1rem]">
                Scale swiftly and amplify revenue with AI-driven insights.
              </p>
            </div>
          </div>

          <div className="lower-fp-feature">
            <div
              className="lower-fp-icon"
              style={{ backgroundColor: "#C4F2FE" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=79306&format=png&color=000000"
                alt="Boost User Engagement"
              />
            </div>
            <div>
              <h3 className="font-bold text-[1.3rem]">Boost User Engagement</h3>
              <p className="text-md text-gray-600 text-[1.1rem]">
                Skyrocket user involvement and interaction by up to 10x.
              </p>
            </div>
          </div>

          <button className="STUDIES">VIEW CASE STUDIES &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default LowerFP;
