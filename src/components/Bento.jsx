import React from "react";
import { useState, useRef } from "react";
import { FaCamera, FaMicrophone, FaHandPaper } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const Bento = () => {
  const BentoTilt = ({ children, className = " " }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef();
    const handleMouseMove = (e) => {
      if (!itemRef.current) return;
      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;
      const tiltX = (relativeY - 0.5) * 5;
      const tiltY = (relativeX - 0.5) * -5;

      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;
      setTransformStyle(newTransform);
    };
    const handleMouseLeave = () => {};
    return (
      <div
        className={className}
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {children}
      </div>
    );
  };

  const BentoCard = ({ icon, title, description, className }) => {
    return (
      <div
        className={`relative overflow-hidden rounded-xl bg-black/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${className}`}
      >
        <div className="absolute -right-8 -top-8 size-40 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              {icon}
            </div>
            <h3 className="bento-title special-font mb-2 text-xl font-bold">
              {title}
            </h3>
            <p className="mt-2 text-sm text-blue-200/90">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  const features = [
    {
      title: "See",
      icon: <FaCamera size={24} />,
      description:
        "Emo features an HD camera with face recognition that can remember you and your family members. He gets to know you by seeing you every day.",
      className: "col-span-1 row-span-1 md:col-span-2",
    },
    {
      title: "Hear",
      icon: <FaMicrophone size={24} />,
      description:
        'Emo has a 4-microphone array which can capture sounds and locate the source direction instantly. If you need him, just say "Hey Emo!"',
      className: "col-span-1 row-span-1 md:col-span-1",
    },
    {
      title: "Feel",
      icon: <FaHandPaper size={24} />,
      description:
        "Emo is equipped with a touch sensor on its head, which enables him to sense your touch. Like any pet, he likes a nice pat on the head.",
      className: "col-span-1 row-span-1 md:col-span-1",
    },
    {
      title: "Communicate",
      icon: <BsSoundwave size={24} />,
      description:
        "Emo's high-quality speaker can play your favorite playlist and communicate with you with adorable simulated sounds.",
      className: "col-span-1 row-span-1 md:col-span-1",
    },
    {
      title: "Learn",
      icon: <MdSchool size={24} />,
      description:
        "Emo's self-learning system enables him understand the world around him and get familiar with you and the environment. His personality and actions change as his relationship with the world evolves.",
      className: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      title: "Think",
      icon: <GiBrain size={24} />,
      description:
        "Emo has an advanced Neural Network Processor and three different AI Processing Models, which enable him to process large amounts of images, sound and sensor data simultaneously to think and respond in a thoughtful, authentic, and natural manner.",
      className: "col-span-1 row-span-1 md:col-span-2",
    },
  ];

  return (
    <div className="px-4 py-12 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="special-font text-3xl md:text-5xl font-bold mb-4">
          EMO's Superpowers
        </h2>
        <p className="text-blue-200/80 max-w-2xl mx-auto">
          Discover all the amazing features that make EMO a truly intelligent
          companion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <BentoTilt key={index} className={feature.className}>
            <BentoCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="h-full"
            />
          </BentoTilt>
        ))}
      </div>
    </div>
  );
};

export default Bento;
