import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem("authToken");
  const [showPopup, setShowPopup] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!authToken) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
      setTimeout(() => setRedirect(true), 1000);
    }
  }, [authToken]);

  if (redirect) {
    return <Navigate to="/Login-Page" replace />;
  }

  if (!authToken) {
    return <>{showPopup && alert("Login First")}</>;
  }

  return children;
};

export default ProtectedRoute;
