import React from "react";
import Animation from "../components/Animation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AnimationPage = () => {
  return (
    <div
      className="relative min-h-screen w-screen overflow-x-hidden"
      style={{ backgroundColor: "#323441" }}
    >
      <Navbar />
      <div className="pt-24 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Animation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimationPage;
