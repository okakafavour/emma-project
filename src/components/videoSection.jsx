import React from "react";

const VideoSection = ({ videoSrc }) => {
  return (
    <div style={{ margin: "40px 0", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        A Special Moment 🎥
      </h2>
      <video
        controls
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "auto",
          borderRadius: "20px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.25)",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
