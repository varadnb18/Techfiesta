import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const SignUpForm = ({
  handleFocus,
  handleBlur,
  toggleForm,
  setPage,
  signup,
  handleChange,
}) => {
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
            minLength="4"
            name="username"
            value={signup.username}
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
