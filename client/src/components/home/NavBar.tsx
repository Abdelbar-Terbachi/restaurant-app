"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <AppBar
      position="fixed" // Changed to fixed to ensure alignment
      sx={{
        background: "none",
        boxShadow: "none",
        zIndex: 2,
        width: "100%",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
      }}
    >
      <Toolbar
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <Box>
            <Typography sx={{ color: "white" }} variant="h6" component="div">
              Logo
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", cursor: "pointer" }}
            >
              Notre Menu
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", cursor: "pointer" }}
            >
              Reservation
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", cursor: "pointer" }}
            >
              Galerie
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", cursor: "pointer" }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
