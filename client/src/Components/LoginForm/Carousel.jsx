import React from "react";
import image1 from "../../Images/image1.png";
import image2 from "../../Images/image2.png";
import image3 from "../../Images/image3.png";

const Carousel = ({ activeBullet, moveSlider }) => {
  return (
    <div className="carousel">
      <div className="images-wrapper">
        <img
          src={image1}
          className={`image img-1 ${activeBullet === 1 ? "show" : ""}`}
          alt=""
        />
        <img
          src={image2}
          className={`image img-2 ${activeBullet === 2 ? "show" : ""}`}
          alt=""
        />
        <img
          src={image3}
          className={`image img-3 ${activeBullet === 3 ? "show" : ""}`}
          alt=""
        />
      </div>

      <div className="text-slider">
        <div className="text-wrap">
          <div className="text-group">
            <h2>Create your own courses</h2>
            <h2>Customize as you like</h2>
            <h2>Invite students to your class</h2>
          </div>
        </div>

        <div className="bullets">
          {[1, 2, 3].map((index) => (
            <span
              key={index}
              className={activeBullet === index ? "active" : ""}
              onClick={() => moveSlider(index)}
              data-value={index}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
