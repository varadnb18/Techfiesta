import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginForm/LoginPage";
import NotFound from "./Components/UI/NotFoundPage";
import "./index.css";
import SecondPage from "./Components/Pages/SecondPage";
import ProfilePage from "./Components/Pages/ProfilePage";
import SplitingWindow from "./Components/Pages/SplitingWindow";
import NewFP from "./Components/Pages/NewFP";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewFP />} />{" "}
      <Route path="/programs" element={<SecondPage />} />{" "}
      <Route path="/Profile" element={<ProfilePage />} />{" "}
      <Route path="/:name" element={<SplitingWindow />} />{" "}
      <Route path="/Login-Page" element={<LoginPage />} />{" "}
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
}

export default App;
