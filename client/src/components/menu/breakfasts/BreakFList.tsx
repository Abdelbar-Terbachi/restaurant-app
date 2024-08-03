"use client";
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const BreakfastsList = () => {
  const items: MenuItem[] = [
    {
      name: "Pancakes",
      description: "Fluffy pancakes with syrup",
      price: 7.0,
    },
    {
      name: "Waffles",
      description: "Crispy waffles with toppings",
      price: 6.5,
    },
    {
      name: "French Toast",
      description: "Classic French toast with butter",
      price: 6.0,
    },
    {
      name: "Omelette",
      description: "Egg omelette with your choice of fillings",
      price: 7.5,
    },
    {
      name: "Avocado Toast",
      description: "Toasted bread with avocado spread",
      price: 5.0,
    },
    {
      name: "Smoothie Bowl",
      description: "Healthy smoothie bowl with toppings",
      price: 6.0,
    },
    {
      name: "Breakfast Burrito",
      description: "Burrito filled with eggs, bacon, and cheese",
      price: 8.0,
    },
    {
      name: "Bagel with Lox",
      description: "Bagel with smoked salmon and cream cheese",
      price: 7.5,
    },
    {
      name: "Yogurt Parfait",
      description: "Yogurt layered with granola and fruit",
      price: 5.5,
    },
    {
      name: "Eggs Benedict",
      description: "Poached eggs on English muffin with hollandaise sauce",
      price: 8.5,
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getGridColumns = () => {
    if (isMobile) return 12; // 1 column
    if (isTablet) return 6; // 2 columns
    if (isDesktop) return 4; // 3 columns
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2, mt: "4rem" }}>
      {items.map((item: MenuItem, index: number) => (
        <Grid item xs={getGridColumns()} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="280"
              image={`/assets/breakfasts/${
                item.name.toLowerCase().split(" ")[0]
              }.jpg`}
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

export default BreakfastsList;
