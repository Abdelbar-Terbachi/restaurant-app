import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import FoodSVG from "../SVG/FoodSVG";

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
                width: "100%", // Full width within grid item
                borderRadius: "1rem",
                boxShadow: ".3rem .3rem .5rem 0.1rem grey",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FoodSVG />
                <Typography mt="1rem" variant="h5">
                  Plats Delicieux
                </Typography>
                <Typography mt="1rem">
                  Découvrez la qualité supérieure de nos produits au sein de
                  notre restaurant sur Tanger. Des produits frais et des
                  ingrédients de haute qualité pour des plats aux saveurs
                  uniques.
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
