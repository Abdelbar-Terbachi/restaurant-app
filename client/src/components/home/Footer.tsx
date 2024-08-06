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
import SocialComponent from "./SocialComponent";
import Link from "next/link";

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
          <SocialComponent />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography variant="h6" sx={{ color: "gold" }}>
            Find us
          </Typography>
          <Typography>
            109 Avenue xxx xxx Riad Tétouane,
            <br /> Tanger 9000
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography variant="h6" sx={{ color: "gold" }}>
            Contact us
          </Typography>
          <Typography>Phones:</Typography>
          <Typography>+212-8000000 | +212-8000000</Typography>
          <Typography>Emails:</Typography>
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
            <ListItem>
              <Typography
                sx={{
                  "& a": {
                    color: "white",
                    textDecoration: "none",
                  },
                }}
              >
                <Link href="/menu">Our Menu</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  "& a": {
                    color: "white",
                    textDecoration: "none",
                  },
                }}
              >
                <Link href="/reservation">Reservation</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  "& a": {
                    color: "white",
                    textDecoration: "none",
                  },
                }}
              >
                <Link href="/gallery">Gallery</Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                sx={{
                  "& a": {
                    color: "white",
                    textDecoration: "none",
                  },
                }}
              >
                <Link href="/contact">Contact</Link>
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
