"use client";
import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <AppBar
      position="fixed" // Make the navbar sticky
      sx={{
        backgroundColor: "black", // Set background to black
        color: "gold", // Set text color to gold
        boxShadow: "none", // Remove box shadow
        width: "100%", // Full width
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 1200, // Ensure it stays on top
      }}
    >
      <Toolbar
        sx={{
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              "& a": {
                color: "gold",
                textDecoration: "none",
              },
            }}
          >
            <Link href={"/menu"}>Notre Menu</Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              "& a": {
                color: "gold",
                textDecoration: "none",
              },
            }}
          >
            <Link href={"/reservation"}>Reservation</Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              "& a": {
                color: "gold",
                textDecoration: "none",
              },
            }}
          >
            <Link href={"/galery"}>Galerie</Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              "& a": {
                color: "gold",
                textDecoration: "none",
              },
            }}
          >
            <Link href={"/contact"}>Contact</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
