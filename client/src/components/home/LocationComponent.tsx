"use client";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const LocationComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{ mt: "4rem", mb: "4rem", textAlign: "center" }}
      width="70%"
      margin="auto"
    >
      <Box sx={{ my: "4rem" }}>
        <Typography
          sx={{
            textAlign: "center",
            width: "60vw",
            margin: "auto",
            mb: "4rem",
            padding: "1rem 2rem",
            backgroundColor: "#fff",

            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0.5rem",
            fontStyle: "italic",
            fontWeight: "bold",
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
          Our Location
        </Typography>
      </Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12948.332954736072!2d-5.8024669!3d35.7733316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b817886311a9d%3A0xf9abb06d6b980d19!2sBlack%20Tulip!5e0!3m2!1sen!2sma!4v1722420015127!5m2!1sen!2sma"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default LocationComponent;
