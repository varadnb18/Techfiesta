import React from "react";

function Heading() {
  return (
    <>
      <div style={{ width: "90%", height: "14.9rem" }}>
        <div
          className="flex justify-center items-center h-18 text-[4rem] text-[#08656e] font-[700]"
          style={{ fontFamily: '"Sofia Pro", sans-serif' }}
        >
          <h1>Your online exercise studio</h1>
        </div>
        <div
          className="flex justify-center items-center h-20 text-[#628c91] text-[1.2em]"
          style={{ fontFamily: "PT Serif, serif" }}
        >
          <p>Over 5000 yoga and meditaion classes and guided programs</p>
        </div>
        <div className="flex justify-center items-center h-18 font-bold">
          <button className="px-[6.2rem] py-[1.2rem] bg-[#fb625a] text-white font-semibold rounded-[3rem] text-[1em]">
            Try us free
          </button>
        </div>
      </div>
    </>
  );
}

export default Heading;
