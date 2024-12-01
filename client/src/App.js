import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import LoginPage from "./Components/LoginForm/LoginPage";
import NotFound from "./Components/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />{" "}
      <Route path="/Login-Page" element={<LoginPage />} />{" "}
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
}

export default App;
