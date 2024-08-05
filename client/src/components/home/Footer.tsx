"use client";
import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import TulipSVG from "../SVG/TulipSVG";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        pt: "1rem",
        pb: "1rem",
        mb: "0px",
        bgcolor: "black",
        color: "white",
        width: "100%",
        minHeight: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3}>
          <TulipSVG />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography variant="h6" sx={{ color: "gold" }}>
            Nous Trouver
          </Typography>
          <Typography>
            109 Avenue xxx xxx Riad Tétouane,
            <br /> Tanger 9000
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography variant="h6" sx={{ color: "gold" }}>
            Nous Contactez
          </Typography>
          <Typography>Téléphones:</Typography>
          <Typography>+212-8000000 | +212-8000000</Typography>
          <Typography>Email:</Typography>
          <Typography>
            reservation@blacktulip.com | info@blacktulip.com
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ color: "gold" }}>
            Black Tulip
          </Typography>
          <List sx={{ color: "white", textAlign: "center" }}>
            <ListItem>Notre Menu</ListItem>
            <ListItem>Reservation</ListItem>
            <ListItem>Gallerie</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
