import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import EmailSVG from "../SVG/EmailSVG";
import PhoneSVG from "../SVG/PhoneSVG";
import LocationSVG from "../SVG/LocationSVG";

const Informations = () => {
  return (
    <Box sx={{ mt: "5rem", flexGrow: 1, mb: 0, pb: "1rem" }}>
      <Card sx={{ width: "100%", borderRadius: "1rem" }}>
        <CardHeader
          title={
            <Typography variant="h4" marginBottom="1rem">
              Black Tulip
            </Typography>
          }
          subheader={
            <Box>
              <Typography variant="h5" marginBottom="1rem">
                Réservez votre table en ligne
              </Typography>
              <Typography>
                Nous sommes ouverts tous les jours de 12h30 à 01h00, sauf le
                vendredi de 14h00 à 01h00.
              </Typography>
            </Box>
          }
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: "1rem" }}>
                <EmailSVG />
              </Box>
              <Box>
                <Typography>Email</Typography>
                <Typography>contact@mail.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: "1rem" }}>
                <PhoneSVG />
              </Box>
              <Box>
                <Typography>Applez Nous</Typography>
                <Typography>+212-8000000 | +212-8000000</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: "1rem" }}>
                <LocationSVG />{" "}
              </Box>
              <Box>
                <Typography>Rendez nous visite</Typography>
                <Typography>
                  109 Avenue xxx xxx Riad Tétouane, Tanger 9000
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Informations;
