import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimationPage from "./pages/AnimationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<AnimationPage />} />
    </Routes>
  );
};

export default App;
