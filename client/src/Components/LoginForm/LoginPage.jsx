import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Carousel from "./Carousel";
import SignUpNext from "./SignUpNext";
import "./LoginPage.css";

const LoginPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(1);
  const [page, setPage] = useState(0);

  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    DOB: "",
    Gender: "",
    heightWeight: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value,
    }));
  };

  const handleFocus = (e) => {
    e.target.classList.add("active");
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.classList.remove("active");
    }
  };

  const toggleForm = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  const moveSlider = (index) => {
    setActiveBullet(index);
  };

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <SignUpForm
            signup={signup}
            handleChange={handleChange}
            setPage={setPage}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            toggleForm={toggleForm}
          />
        );
      case 1:
        return (
          <SignUpNext
            signup={signup}
            handleChange={handleChange}
            setPage={setPage}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            toggleForm={toggleForm}
            setSignup={setSignup}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {!isSignUpMode && (
              <SignInForm
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                toggleForm={toggleForm}
              />
            )}

            {isSignUpMode && PageDisplay()}
          </div>
          <Carousel activeBullet={activeBullet} moveSlider={moveSlider} />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
