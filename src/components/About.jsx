import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
      duration: 1,
    });
  });

  return (
    <div id="about" className="relative min-h-screen w-screen bg-white">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-4">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          EMO Welcomes You
        </h2>

        <AnimatedTitle
          title="Meet EM<b>O</b>: the r<b>o</b>b<b>o</b>t with em<b>o</b>ti<b>o</b>ns <br /> and smart intellig<b>e</b>nce"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p className="mb-2">
            Built with multiple sensors and cutting-edge techs, EMO is a cool
            desktop AI robot pet with character.
          </p>
          <p className="text-gray-600">
            It can self-explore the world and react to you with 1000+ faces and
            movements.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
