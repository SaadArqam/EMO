"use client";
import React, { useRef, useState } from "react";
import { FaCamera, FaMicrophone, FaHandPaper } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

// BentoTilt component for the image tiles
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03,1.03,1.03)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
  };

  return (
    <div
      className={`transition-transform duration-200 ease-out ${className}`}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const [scrollYProgress, setScrollYProgress] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress (0 when element enters viewport, 1 when it leaves)
      let progress = 1 - elementTop / (elementHeight - windowHeight);
      progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1

      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateRotate = () => {
    return 20 - scrollYProgress * 20;
  };

  const calculateScale = () => {
    const scaleRange = isMobile ? [0.7, 0.9] : [1.05, 1];
    return scaleRange[0] + scrollYProgress * (scaleRange[1] - scaleRange[0]);
  };

  const calculateTranslate = () => {
    return -scrollYProgress * 100;
  };

  return (
    <div
      className="h-[80rem] md:h-[110rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header
          translate={calculateTranslate()}
          titleComponent={titleComponent}
        />
        <Card rotate={calculateRotate()} scale={calculateScale()}>
          {children}
        </Card>

        {/* Image Grid Below the Card */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
            <span className="text-blue-400">Explore</span> EMO's World
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoTilt className="relative h-64 md:h-80 overflow-hidden rounded-xl border-2 border-[#4A4D5E]">
              <img
                src="/img/1.webp"
                alt="EMO in action"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E28]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">EMO's World</h3>
                <p className="text-sm text-gray-300">Explore the environment</p>
              </div>
            </BentoTilt>

            <BentoTilt className="relative h-64 md:h-80 overflow-hidden rounded-xl border-2 border-[#4A4D5E]">
              <img
                src="/img/2.webp"
                alt="EMO details"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E28]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Interactive AI</h3>
                <p className="text-sm text-gray-300">
                  Responsive and intuitive
                </p>
              </div>
            </BentoTilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <div
      style={{
        transform: `translateY(${translate}px)`,
        transition: "transform 0.5s ease-out",
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <div
      style={{
        transform: `rotateX(${rotate}deg) scale(${scale})`,
        transition: "transform 0.5s ease-out",
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        height: "45rem",
        width: "120%",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#4A4D5E] p-2 md:p-6 bg-[#272935] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#1C1E28] dark:bg-[#1C1E28] md:rounded-2xl md:p-4">
        {children}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, active }) => {
  return (
    <div
      className={`p-6 rounded-xl mb-4 border transition-all duration-500 ease-out ${
        active
          ? "border-blue-400 bg-blue-900/30 text-white transform-none"
          : "border-[#4A4D5E] bg-[#272935]/70 text-gray-300"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg ${
            active ? "bg-blue-600" : "bg-[#1C1E28]"
          }`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p
            className={`text-sm ${active ? "text-blue-100" : "text-gray-400"}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Animation = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "See",
      icon: <FaCamera size={24} />,
      description:
        "Emo features an HD camera with face recognition that can remember you and your family members. He gets to know you by seeing you every day.",
    },
    {
      title: "Hear",
      icon: <FaMicrophone size={24} />,
      description:
        'Emo has a 4-microphone array which can capture sounds and locate the source direction instantly. If you need him, just say "Hey Emo!"',
    },
    {
      title: "Feel",
      icon: <FaHandPaper size={24} />,
      description:
        "Emo is equipped with a touch sensor on its head, which enables him to sense your touch. Like any pet, he likes a nice pat on the head.",
    },
    {
      title: "Communicate",
      icon: <BsSoundwave size={24} />,
      description:
        "Emo's high-quality speaker can play your favorite playlist and communicate with you with adorable simulated sounds.",
    },
    {
      title: "Learn",
      icon: <MdSchool size={24} />,
      description:
        "Emo's self-learning system enables him understand the world around him and get familiar with you and the environment. His personality and actions change as his relationship with the world evolves.",
    },
    {
      title: "Think",
      icon: <GiBrain size={24} />,
      description:
        "Emo has an advanced Neural Network Processor and three different AI Processing Models, which enable him to process large amounts of images, sound and sensor data simultaneously to think and respond in a thoughtful, authentic, and natural manner.",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000); // Increased time between transitions to reduce perceived lag

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <ContainerScroll
      titleComponent={
        <h1 className="text-4xl font-bold text-white mb-4 text-center md:text-6xl">
          Meet EMO <br />
          <span className="special-font text-2xl md:text-3xl text-blue-400">
            EMO's Superpowers
          </span>
        </h1>
      }
    >
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src="/img/1.jpg"
                alt="EMO Environment"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <img
                src="/img/logo.png"
                alt="EMO Robot"
                className="relative z-10 w-[60%] object-contain"
              />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-4">Features</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  active={index === activeFeature}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <h3 className="text-xl font-bold text-white mb-4">
            Technical Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#4A4D5E] text-sm">
              <tbody className="divide-y divide-[#4A4D5E]">
                <tr>
                  <td className="py-2 px-4 text-white font-medium w-1/3">
                    Dimensions
                  </td>
                  <td className="py-2 px-4 text-gray-300">
                    3.7×2.6×4.6 inches
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium">Weight</td>
                  <td className="py-2 px-4 text-gray-300">248g</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium">
                    Wifi+Bluetooth
                  </td>
                  <td className="py-2 px-4 text-gray-300">
                    802.11b/g/n BLE 4.2
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium">CPU</td>
                  <td className="py-2 px-4 text-gray-300">
                    AI Processor+CPU (Up to 1.2 Tops)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium">
                    Microphone
                  </td>
                  <td className="py-2 px-4 text-gray-300">
                    Far field 4-Microphone Array
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium">Camera</td>
                  <td className="py-2 px-4 text-gray-300">
                    AI wide-angle camera (up to 60fps)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium" rowSpan="5">
                    Sensors
                  </td>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">
                      Distance sensor:
                    </span>{" "}
                    TOF laser sensor (9.8 inches)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">
                      Drop sensor:
                    </span>{" "}
                    4 Sensor under EMO's feet
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">
                      Acceleration sensor:
                    </span>{" "}
                    6-Axis Gyro&Acc
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">
                      Touch sensor:
                    </span>{" "}
                    Senses touch
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">
                      Light sensor:
                    </span>{" "}
                    Senses ambient light
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium" rowSpan="3">
                    Accessories
                  </td>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">
                      Skateboard:
                    </span>{" "}
                    5W wireless charge supported
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">Headset:</span>{" "}
                    Detachable
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-300">
                    <span className="font-medium text-blue-400">
                      Smart light:
                    </span>{" "}
                    Variable color
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-white font-medium">
                    Battery life
                  </td>
                  <td className="py-2 px-4 text-gray-300">Up to 4 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContainerScroll>
  );
};

export default Animation;
