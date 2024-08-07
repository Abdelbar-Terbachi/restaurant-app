"use client";
import Footer from "@/components/home/Footer";
import { SnackbarProvider } from "notistack";
import LocationComponent from "@/components/home/LocationComponent";
import NavBar from "@/components/home/NavBar";
import Informations from "@/components/reservation/Informations";
import ReservationForm from "@/components/reservation/ReservationForm";
import { Box } from "@mui/material";
import React from "react";

const ContactComponent = () => {
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
        <LocationComponent />
        <Footer />
      </SnackbarProvider>
    </>
  );
};

export default ContactComponent;
