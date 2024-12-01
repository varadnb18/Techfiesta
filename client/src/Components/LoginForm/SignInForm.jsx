import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/FireBase";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ handleFocus, handleBlur, toggleForm }) => {
  const navigate = useNavigate();

  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setSignin((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        signin.email,
        signin.password
      );
      const user = userCredential.user;

      console.log("User logged in successfully", signin);

      // Get the ID token
      const token = await user.getIdToken();

      // Store the token in localStorage (or a cookie if preferred)
      localStorage.setItem("authToken", token);

      setSignin({
        email: "",
        password: "",
      });

      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <form
      action="index.html"
      autoComplete="off"
      className="sign-in-form"
      onSubmit={handleSubmit}
    >
      <Logo />
      <div className="heading">
        <h2>Welcome Back</h2>
        <h6>Not registered yet?</h6>
        <button type="button" className="toggle" onClick={toggleForm}>
          Sign up
        </button>
      </div>

      <div className="actual-form">
        <div className="input-wrap">
          <input
            type="email"
            className="input-field"
            autoComplete="off"
            name="email"
            value={signin.email}
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
            minLength="4"
            className="input-field"
            autoComplete="off"
            name="password"
            value={signin.password}
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <input type="submit" value="Sign In" className="sign-btn" />

        <p className="text">
          Forgotten your password or your login details?
          <Link to="#">Get help</Link> signing in
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
