import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginForm/LoginPage";
import NotFound from "./Components/UI/NotFoundPage";
import "./index.css";
import SecondPage from "./Components/Pages/SecondPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import SplitingWindow from "./Components/Pages/SplitingWindow";
import NewFP from "./Components/Pages/NewFP";
import ProtectedRoute from "./ProtectedRoute";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewFP />} />

      <Route
        path="/Login-Page"
        element={isAuthenticated() ? <Navigate to="/" /> : <LoginPage />}
      />

      {/* Protected Routes */}
      <Route
        path="/programs"
        element={
          <ProtectedRoute>
            <SecondPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/:name"
        element={
          <ProtectedRoute>
            <SplitingWindow />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
