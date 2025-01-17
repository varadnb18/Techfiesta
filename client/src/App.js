import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginForm/LoginPage";
import NotFound from "./Components/UI/NotFoundPage";
import FirstPage from "./Components/Pages/FirstPage";
import "./index.css";
import StreakCalendar from "./Components/Calendar/StreakCalendar";
import SecondPage from "./Components/Pages/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SecondPage />} />{" "}
      <Route path="/Login-Page" element={<LoginPage />} />{" "}
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
}

export default App;
