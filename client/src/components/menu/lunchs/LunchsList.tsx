"use client";
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const LunchsList = () => {
  const items: MenuItem[] = [
    {
      name: "Grilled Chicken Sandwich",
      description: "Chicken sandwich with veggies",
      price: 8.0,
    },
    {
      name: "Beef Burger",
      description: "Juicy beef burger with fries",
      price: 9.0,
    },
    {
      name: "Vegetable Stir-Fry",
      description: "Stir-fried vegetables with rice",
      price: 8.5,
    },
    {
      name: "Pasta Bolognese",
      description: "Pasta with rich meat sauce",
      price: 10.0,
    },
    {
      name: "Fish Tacos",
      description: "Tacos with grilled fish",
      price: 8.5,
    },
    {
      name: "Chicken Curry",
      description: "Spicy chicken curry with rice",
      price: 9.5,
    },
    {
      name: "BBQ Ribs",
      description: "Tender BBQ ribs with sides",
      price: 11.0,
    },
    {
      name: "VegetableSoup",
      description: "Hearty vegetable soup",
      price: 7.5,
    },
    {
      name: "Chickens Caesar Wrap",
      description: "Wrap with chicken Caesar salad",
      price: 8.0,
    },
    {
      name: "Cheeseburger",
      description: "Classic cheeseburger with lettuce",
      price: 9.0,
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
              image={`/assets/lunchs/${
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

export default LunchsList;
