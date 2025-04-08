import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index + 1}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Centered Mini Preview Video */}
        <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 size-65 cursor-pointer overflow-hidden rounded-lg flex justify-center items-center">
          <div
            onClick={handleMiniVdClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        {/* Invisible Preload */}
        <video
          src={getVideoSrc(currentIndex)}
          loop
          muted
          className="invisible absolute z-20 size-64 object-cover object-center"
        />

        {/* Main Fullscreen Background Video */}
        <video
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        {/* Text Overlay */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Livi<b>n</b>g
        </h1>

        <div className="absolute left-0 right-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              E<b>M</b>O
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
