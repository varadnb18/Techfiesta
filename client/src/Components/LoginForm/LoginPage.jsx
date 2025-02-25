import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Carousel from "./Carousel";
import SignUpNext from "./SignUpNext";
import "./LoginPage.css";
import { SignupProvider } from "./SignupContext"; // Import the provider

const LoginPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(1);
  const [page, setPage] = useState(0);

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
            setPage={setPage}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            toggleForm={toggleForm}
          />
        );
      case 1:
        return (
          <SignUpNext
            setPage={setPage}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            toggleForm={toggleForm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main
      className={`flex justify-center items-center min-h-screen ${
        isSignUpMode ? "sign-up-mode" : ""
      }`}
    >
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {/* Wrap forms that need signup state with the provider */}
            <SignupProvider>
              {!isSignUpMode && (
                <SignInForm
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  toggleForm={toggleForm}
                />
              )}
              {isSignUpMode && PageDisplay()}
            </SignupProvider>
          </div>
          <Carousel activeBullet={activeBullet} moveSlider={moveSlider} />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
