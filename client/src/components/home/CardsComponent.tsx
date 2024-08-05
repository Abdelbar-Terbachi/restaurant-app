import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceSVG from "../SVG/ServiceSVG"; // Custom SVG for service
import AtmosphereSVG from "../SVG/AtmosphereSVG"; // Custom SVG for atmosphere
import TeamSVG from "../SVG/TeamSVG"; // Custom SVG for staff

const CardsComponent = () => {
  return (
    <Box
      sx={{
        mt: "7rem",
        mb: "7rem",
        px: 2, // Add some padding on the sides
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
                boxShadow: ".3rem .3rem .5rem 0.1rem grey",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {item === 1 && <ServiceSVG />}
                {item === 2 && <AtmosphereSVG />}
                {item === 3 && <TeamSVG />}
                <Typography mt="1rem" variant="h5" color="gold">
                  {item === 1 && "Excellent Service"}
                  {item === 2 && "Cozy Atmosphere"}
                  {item === 3 && "Friendly Staff"}
                </Typography>
                <Typography mt="1rem">
                  {item === 1 &&
                    "Our staff is dedicated to providing exceptional service to ensure a delightful dining experience for every guest."}
                  {item === 2 &&
                    "Enjoy a cozy and comfortable atmosphere that makes you feel right at home while savoring your meal."}
                  {item === 3 &&
                    "Our friendly and welcoming staff are here to make your dining experience pleasant and memorable."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsComponent;
