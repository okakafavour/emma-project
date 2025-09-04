import React from "react";
import { FaBirthdayCake } from "react-icons/fa";

const BirthdayCard = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        background: "linear-gradient(to right, #ffc0cb, #dda0dd, #fffacd)",
        textAlign: "center",
        padding: "20px",
        borderRadius: "25px",
        margin: "20px 0",
      }}
    >
      <FaBirthdayCake
        style={{ fontSize: "4rem", color: "#ff69b4", marginBottom: "10px" }}
      />
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        🎉 Happy Birthday {name}! 🎉
      </h1>
      <p style={{ fontSize: "1rem", maxWidth: "500px" }}>
        Wishing you a day filled with love, laughter, and everything that makes
        you smile 💖
      </p>
    </div>
  );
};

export default BirthdayCard;
