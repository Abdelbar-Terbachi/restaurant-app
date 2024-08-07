"use client";
import React from "react";
import { SnackbarProvider } from "notistack";
import Footer from "../home/Footer";
import { Box } from "@mui/material";
import ReservationForm from "./ReservationForm";
import Informations from "./Informations";
import NavBar from "../home/NavBar";

const ReservationComponent = () => {
  return (
    <>
      <SnackbarProvider>
        <NavBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            width: "100%",
            px: "2rem",
            py: "3rem",
            margin: "auto",
            maxWidth: "80vw",
            gap: "3rem",
          }}
        >
          <Informations />
          <ReservationForm />
        </Box>
        <Footer />
      </SnackbarProvider>
    </>
  );
};

export default ReservationComponent;
