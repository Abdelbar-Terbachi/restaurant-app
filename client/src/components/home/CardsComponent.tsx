import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import FoodSVG from "../SVG/FoodSVG";

const CardsComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        mt: "7rem",
        mb: "7rem",
      }}
    >
      <Card
        sx={{
          width: "25vw",
          borderRadius: "1rem",
          boxShadow: ".3rem .3rem .5rem 0.1rem grey ",
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
            Découvrez la qualité supérieure de nos produits au sein de notre
            restaurant sur Tanger. Des produits frais et des ingrédients de
            haute qualité pour des plats aux saveurs uniques.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: "25vw", boxShadow: ".3rem .3rem .5rem 0.1rem grey " }}>
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
            Découvrez la qualité supérieure de nos produits au sein de notre
            restaurant sur Tanger. Des produits frais et des ingrédients de
            haute qualité pour des plats aux saveurs uniques.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ width: "25vw", boxShadow: ".3rem .3rem .5rem 0.1rem grey " }}>
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
            Découvrez la qualité supérieure de nos produits au sein de notre
            restaurant sur Tanger. Des produits frais et des ingrédients de
            haute qualité pour des plats aux saveurs uniques.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardsComponent;
