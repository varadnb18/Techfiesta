import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSignup } from "./SignupContext"; // Import the custom hook

const SignUpForm = ({ handleFocus, handleBlur, toggleForm, setPage }) => {
  // Consume signup state and handler from context
  const { signup, handleChange } = useSignup();

  return (
    <form action="index.html" autoComplete="off" className="sign-up-form">
      <Logo />
      <div className="heading">
        <h2>Get Started</h2>
        <h6>Already have an account?</h6>
        <button type="button" className="toggle" onClick={toggleForm}>
          Sign in
        </button>
      </div>

      <div className="actual-form">
        <div className="input-wrap">
          <input
            type="text"
            name="username"
            value={signup.username}
            className={`input-field ${signup.username ? "active" : ""}`}
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        <div className="input-wrap">
          <input
            type="email"
            name="email"
            className={`input-field ${signup.email ? "active" : ""}`}
            value={signup.email}
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        <div className="input-wrap">
          <input
            type="password"
            name="password"
            minLength="4"
            className={`input-field ${signup.password ? "active" : ""}`}
            value={signup.password}
            autoComplete="off"
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>
        <input
          type="button"
          value="Next"
          className="sign-btn"
          onClick={() => {
            setPage((currpage) => currpage + 1);
          }}
        />

        <p className="text">
          By signing up, I agree to the
          <Link to="#">Terms of Services</Link> and
          <Link to="#">Privacy Policy</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
