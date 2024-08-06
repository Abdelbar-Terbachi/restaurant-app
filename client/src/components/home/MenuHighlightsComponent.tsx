"use client";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import GotoSVG from "../SVG/GotoSVG";
import Link from "next/link";

const MenuHighlightsComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          width: "60vw",
          margin: "auto",
          mb: "4rem",
          padding: "1rem 2rem",
          backgroundColor: "#fff",
          fontWeight: "bold",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0.5rem",
          fontStyle: "italic",
          color: "black",
        }}
        variant={
          isLargeScreen
            ? "h2"
            : isMediumScreen
            ? "h3"
            : isSmallScreen
            ? "h5"
            : "h2"
        }
      >
        Menu Highlights
      </Typography>
      <Grid container spacing={3} width="75%" margin="auto" mb="5rem">
        {[
          { src: "/assets/menu1.jpg", title: "Dish 1" },
          { src: "/assets/test.jpg", title: "Dish 2" },
          { src: "/assets/test2.jpg", title: "Dish 3" },
          { src: "/assets/menu4.jpg", title: "Dish 4" },
          { src: "/assets/menu5.jpg", title: "Dish 5" },
          { src: "/assets/menu1-6.jpg", title: "Dish 6" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
              <Image
                src={item.src}
                layout="fill"
                objectFit="cover"
                alt={item.title}
                style={{
                  borderRadius: "1rem",
                  boxShadow: "5px 5px 5px 5px grey",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" sx={{ bgcolor: "black" }}>
          <Typography
            color="gold"
            sx={{
              mr: "1rem",
              "& a": {
                color: "gold",
                textDecoration: "none",
              },
            }}
          >
            <Link href="/menu">Go to Menu</Link>
          </Typography>
          <GotoSVG />
        </Button>
      </Box>
    </>
  );
};

export default MenuHighlightsComponent;
