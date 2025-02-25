import React from "react";
import Title from "../UI/Title";
import "./Pages.css";
import varad from "../../Images/varad.webp";
import "./NewFP.css";

function NewFP() {
  return (
    <div className="element">
      <div className="image-container">
        <img src={varad} alt="Shape" className="top-image" />
      </div>
      <div className="mr-5 ml-5">
        <Title />
      </div>
      <div className="grid grid-cols-2 w-full mt-2 h-[40.3rem]">
        <div className="relative flex justify-center items-center w-[36rem] mx-auto ">
          <div className="area flex flex-col items-start max-w-[40rem] mx-auto text-left translate-y-[-45px] translate-x-[25px]">
            <h1 className="text-[52px] font-medium leading-[1.1] ">
              <span className="A">A</span>n{" "}
              <span className="word">AI-driven</span> <br />
              virtual trainer for <br />
              better health and fitness
            </h1>
            <p className="text-gray-500 text-lg mt-4 ">
              Boost Productivity with AI for Effective Compliance,
              <br /> Improved Adherence, and Impactful Results
            </p>
            <button className="demo mt-4 text-white px-6 py-4 rounded-2xl text-lg font-semibold">
              Book A Demo
            </button>
          </div>
        </div>

        <div className="video flex flex-col items-center p-10 mr-32 h-[600px]">
          {/* Top Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/3TJ_sOgMZd8?autoplay=1&controls=0&enablejsapi=1&rel=0&loop=1&modestbranding=1&showsearch=0&showinfo=0&autohide=1&playsinline=1&cc_load_policy=0"
              title="Trainer Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className=" w-[630px] h-[530px] rounded-sm"
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFP;
