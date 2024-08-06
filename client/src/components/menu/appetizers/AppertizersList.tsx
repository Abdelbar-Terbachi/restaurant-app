"use client";
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const AppetizersList = () => {
  const items: MenuItem[] = [
    {
      name: "Stuffed Mushrooms",
      description: "Mushrooms filled with cheese",
      price: 70,
    },
    {
      name: "Bruschetta",
      description: "Tomato and basil bruschetta",
      price: 60,
    },
    {
      name: "Spring Rolls",
      description: "Vegetable spring rolls",
      price: 55,
    },
    {
      name: "Chicken Skewers",
      description: "Grilled chicken skewers",
      price: 75,
    },
    {
      name: "Prawn Cocktail",
      description: "Prawns with cocktail sauce",
      price: 80,
    },
    {
      name: "Queso Fundido",
      description: "Melted cheese with chorizo",
      price: 70,
    },
    {
      name: "Crab Cakes",
      description: "Golden crab cakes with sauce",
      price: 90,
    },
    {
      name: "Mozzarella Sticks",
      description: "Fried mozzarella sticks",
      price: 60,
    },
    {
      name: "Guacamole & Chips",
      description: "Fresh guacamole with chips",
      price: 50,
    },
    {
      name: "Calamari",
      description: "Fried calamari with sauce",
      price: 85,
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getGridColumns = () => {
    if (isMobile) return 12;
    if (isTablet) return 6;
    if (isDesktop) return 4;
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2, mt: "4rem" }}>
      {items.map((item: MenuItem, index: number) => (
        <Grid item xs={getGridColumns()} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="280"
              image={`/assets/appetizers/${item.name
                .split(" ")[0]
                .toLowerCase()}.jpg`}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {item.price.toFixed(2)} MAD
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AppetizersList;
