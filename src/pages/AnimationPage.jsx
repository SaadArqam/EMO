import React from "react";
import Animation from "../components/Animation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const AnimationPage = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors mb-6"
          >
            <IoArrowBack className="mr-2" />
            Back to Home
          </Link>
          <Animation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimationPage;
