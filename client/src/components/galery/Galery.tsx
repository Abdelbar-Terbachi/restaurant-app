"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Galery = () => {
  const restaurants = ["rest1.jpg", "rest2.jpg", "rest3.jpg"];
  const kitchens = ["kitchen1.jpg", "kitchen2.jpg", "kitchen3.jpg"];
  const teams = ["team1.png", "team2.png", "team3.png"];

  return (
    <>
      <Box sx={{ my: "6rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              my: "3rem",
              padding: "1rem 2rem",
              backgroundColor: "#fff",
              backgroundImage: "url('/assets/bgs/scratch.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0.5rem",
              fontStyle: "italic",
              fontWeight: "bold",

              display: "inline-block",
              color: "gold",
            }}
          >
            Our Restaurant
          </Typography>
          <Grid container spacing={4}>
            {restaurants.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                <Image
                  width={280}
                  height={280}
                  src={`/assets/restaurant/${item}`}
                  alt={item.split(".")[0]}
                  style={{
                    borderRadius: "1rem",
                    boxShadow: "5px 5px 5px 5px grey",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              my: "3rem",
              padding: "1rem 2rem",
              backgroundColor: "#fff",
              backgroundImage: "url('/assets/bgs/scratch.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0.5rem",
              fontStyle: "italic",
              fontWeight: "bold",

              display: "inline-block",
              color: "gold",
            }}
          >
            Our Kitchen
          </Typography>
          <Grid container spacing={4}>
            {kitchens.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                <Image
                  width={280}
                  height={280}
                  src={`/assets/kitchen/${item}`}
                  alt={item.split(".")[0]}
                  style={{
                    borderRadius: "1rem",
                    boxShadow: "5px 5px 5px 5px grey",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              my: "3rem",
              padding: "1rem 2rem",
              backgroundColor: "#fff",
              backgroundImage: "url('/assets/bgs/scratch.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "0.5rem",
              fontStyle: "italic",
              fontWeight: "bold",

              display: "inline-block",
              color: "gold",
            }}
          >
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {teams.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                <Image
                  width={280}
                  height={280}
                  src={`/assets/team/${item}`}
                  alt={item.split(".")[0]}
                  style={{
                    borderRadius: "1rem",
                    boxShadow: "5px 5px 5px 5px grey",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Galery;
