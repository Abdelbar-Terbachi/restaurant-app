"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import Image from "next/legacy/image";
import TypingText from "./TypingText";

const items = [
  {
    image: "/assets/restaurant1.jpg",
    caption: "Caption for Slide 1",
  },
  {
    image: "/assets/restaurant2.jpg",
    caption: "Caption for Slide 2",
  },
];

const ImageSlider = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        marginTop: "64px",
      }}
    >
      <Carousel
        sx={{ width: "100vw", height: "100vh" }}
        indicators={false}
        autoPlay={true}
      >
        {items.map((item, index) => (
          <Paper
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "90vw",
              height: "100vh",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <TypingText />
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
