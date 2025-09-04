import React from "react";
import AboutHer from "./components/AboutHer";
import BirthdayCard from "./components/birthdayCard";
import Gallery from "./components/Gallery";
import VideoSection from "./components/videoSection";
import Wishes from "./components/wishes";

function App() {
  const images = [
    "/images/emma1.jpeg",
    "/images/emma2.jpeg",
    "/images/emma3.jpeg",
    "/images/emma4.jpeg"
  ];

  return (
    <div>
      <BirthdayCard name="ADEOLA" />
      <AboutHer />
      <Gallery images={images} />
      <VideoSection videoSrc="/videos/emma.mp4" />
      <Wishes />
    </div>
  );
}

export default App;
