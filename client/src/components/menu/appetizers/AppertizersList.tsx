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
      price: 7.0,
    },
    {
      name: "Bruschetta",
      description: "Tomato and basil bruschetta",
      price: 6.0,
    },
    {
      name: "Spring Rolls",
      description: "Vegetable spring rolls",
      price: 5.5,
    },
    {
      name: "Chicken Skewers",
      description: "Grilled chicken skewers",
      price: 7.5,
    },
    {
      name: "Prawn Cocktail",
      description: "Prawns with cocktail sauce",
      price: 8.0,
    },
    {
      name: "Queso Fundido",
      description: "Melted cheese with chorizo",
      price: 7.0,
    },
    {
      name: "Crab Cakes",
      description: "Golden crab cakes with sauce",
      price: 9.0,
    },
    {
      name: "Mozzarella Sticks",
      description: "Fried mozzarella sticks",
      price: 6.0,
    },
    {
      name: "Guacamole & Chips",
      description: "Fresh guacamole with chips",
      price: 5.0,
    },
    {
      name: "Calamari",
      description: "Fried calamari with sauce",
      price: 8.5,
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
                ${item.price.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AppetizersList;
