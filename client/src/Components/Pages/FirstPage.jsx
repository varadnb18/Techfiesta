import React from "react";
import FirstHeader from "../Header/FirstHeader";
import Heading from "../UI/Heading";
import Container from "../UI/Container";
import { data } from "../../data";

function FirstPage() {
  return (
    <div style={{ backgroundColor: "#d6e5e3", width: "100%", height: "39rem" }}>
      <div
        className="flex items-center"
        style={{ width: "100%", height: "7rem" }}
      >
        <div
          className="flex justify-between "
          style={{ width: "100%", height: "3rem" }}
        >
          <FirstHeader />
        </div>
      </div>
      <div className="flex justify-center mt-1 mb-16">
        <Heading />
      </div>
      <div className="flex justify-center">
        <div className="w-[98.5%] h-[26rem]">
          <Container datas={data} />
        </div>
      </div>
      <div>hii</div>
    </div>
  );
}

export default FirstPage;
