"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import Image from "next/image";
import NavBar from "./NavBar";
// comment
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
        margin: 0,
        padding: 0,
        position: "relative",
        top: 0,
      }}
    >
      <NavBar />
      <Carousel
        sx={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}
        indicators={false}
        autoPlay={false}
      >
        {items.map((item, index) => (
          <Paper
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100vw",
              height: "100vh",
              backgroundColor: "transparent",
              boxShadow: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                overflow: "hidden",
              }}
            >
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                quality={100}
              />
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
