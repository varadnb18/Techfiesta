import React from "react";
import { Link } from "react-router-dom";

function FirstHeader() {
  return (
    <>
      <div className="w-44 h-9 ml-5">
        <img
          src="https://www.ekhartyoga.com/media/image/articles/logo-with-text.svg"
          alt=""
        />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-8 font-medium" style={{ color: "#08656e" }}>
          <li>Classes</li>
          <li>Programs</li>
          <li>Teachers</li>
          <li>Articles</li>
          <li>Resources</li>
          <li>Academy</li>
        </ul>
      </div>
      <div className="flex items-center">
        <Link to="/Login-Page">
          <button
            className=" mr-5 text-white font-[600] rounded-3xl text-[1rem]"
            style={{
              backgroundColor: "#08656e",
              paddingRight: "3.4em",
              paddingLeft: "3.4em",
              paddingTop: "0.7em",
              paddingBottom: "0.7em",
              fontFamily: '"sofia-pro", sans-serif',
            }}
          >
            Sign in
          </button>
        </Link>
      </div>
    </>
  );
}

export default FirstHeader;
