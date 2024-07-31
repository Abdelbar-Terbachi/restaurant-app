"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Best Restaurant In Tangier",
        1000,
        "Awesome and Healthy Breakfast",
        1000,
        "Awesome and Healthy Lunch",
        1000,
        "Awesome and Healthy Dinner",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "3em", display: "inline-block", color: "white" }}
      repeat={Infinity}
    />
  );
};

export default TypingText;
