import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../FireBase/FireBase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUpNext = ({
  handleFocus,
  handleBlur,
  toggleForm,
  setPage,
  signup,
  handleChange,
  setSignup,
}) => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const { username, email, password, heightWeight, DOB, Gender } = signup;

    const [height, weight] = heightWeight
      .split(" / ")
      .map((value) => parseInt(value.trim()));

    try {
      if (!email || !password || !height || !weight || !username) {
        console.log("Missing fields!");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User registered successfully!", user);

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          username: username,
          email: user.email,
          date_of_birth: DOB,
          gender: Gender,
          height: height,
          weight: weight,
        });
      }

      // Get the ID token
      const token = await user.getIdToken();

      // Store the token in localStorage (or a cookie if preferred)
      localStorage.setItem("authToken", token);

      setSignup({
        username: "",
        email: "",
        password: "",
        DOB: "",
        Gender: "",
        heightWeight: "",
      });

      navigate("/");
    } catch (err) {
      console.log("Error during sign up:", err.message);
    }
  }

  return (
    <form
      action="index.html"
      autoComplete="off"
      className="sign-up-form"
      onSubmit={handleSubmit}
    >
      <Logo />
      <div className="heading">
        <h2>Get Started</h2>
        <h6>Already have an account?</h6>
        <button type="button" className="toggle" onClick={toggleForm}>
          Sign in
        </button>
      </div>

      <div className="actual-form">
        <div className="input-wrap1">
          <input
            type="date"
            name="DOB"
            className="input-field1"
            value={signup.DOB}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <label className="label1">Date of Birth</label>
        </div>

        <div className="input-wrap">
          <select
            name="Gender"
            className="input-field"
            value={signup.Gender}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label>Gender</label>
        </div>

        <div className="input-wrap">
          <input
            type="text"
            name="heightWeight"
            className="input-field"
            value={signup.heightWeight}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <label>Height/Weight (e.g., 170cm / 70kg)</label>
        </div>

        <div className="submit-btn">
          <input
            value="Prev"
            className="sign-btn"
            onClick={() => {
              setPage((currpage) => currpage - 1);
            }}
          />
          <input type="submit" value="Sign Up" className="sign-btn" />
        </div>

        <p className="text">
          By signing up, I agree to the
          <Link to="#">Terms of Services</Link> and
          <Link to="#">Privacy Policy</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpNext;
