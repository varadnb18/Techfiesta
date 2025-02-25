import React, { createContext, useContext, useState } from "react";

// Create the context
const SignupContext = createContext();

// Create a provider component
export const SignupProvider = ({ children }) => {
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

  // Any other shared functions related to signup can go here

  return (
    <SignupContext.Provider value={{ signup, setSignup, handleChange }}>
      {children}
    </SignupContext.Provider>
  );
};

// Custom hook for easier consumption
export const useSignup = () => useContext(SignupContext);
