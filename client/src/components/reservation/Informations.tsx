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
                Book your table online
              </Typography>
              <Typography>
                We are open every day from 12:30 PM to 1:00 AM, except on
                Fridays from 2:00 PM to 1:00 AM.
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
                <Typography>Call Us</Typography>
                <Typography>+212-8000000 | +212-8000000</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: "1rem" }}>
                <LocationSVG />{" "}
              </Box>
              <Box>
                <Typography>Visit Us</Typography>
                <Typography>
                  109 Avenue xxx xxx Riad Tetouan, Tangier 9000
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
