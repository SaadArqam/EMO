import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Bento from "../components/Bento";
import useScrollToHash from "../hooks/useScrollToHash";

const HomePage = () => {
  // Use the scroll to hash hook to handle navigation to specific sections
  useScrollToHash();

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Features />
      <div id="story">
        <Story />
      </div>
      <Bento />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
