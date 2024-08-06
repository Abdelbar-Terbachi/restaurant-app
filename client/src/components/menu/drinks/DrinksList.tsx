"use client";
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const DrinksList = () => {
  const items: MenuItem[] = [
    {
      name: "Avocado",
      description: "Freshly squeezed avocado juice",
      price: 25,
    },
    {
      name: "Orange Juice",
      description: "Freshly squeezed orange juice",
      price: 30,
    },
    {
      name: "Lemonade",
      description: "Refreshing lemonade",
      price: 28,
    },
    {
      name: "Iced Tea",
      description: "Cold brewed iced tea",
      price: 27,
    },
    {
      name: "Coffee",
      description: "Freshly brewed coffee",
      price: 35,
    },
    {
      name: "Hot Chocolate",
      description: "Rich hot chocolate",
      price: 38,
    },
    {
      name: "Mineral Water",
      description: "Sparkling mineral water",
      price: 20,
    },
    {
      name: "Milkshake",
      description: "Chocolate milkshake",
      price: 40,
    },
    {
      name: "Panache",
      description: "Freshly squeezed panache juice",
      price: 45,
    },
    {
      name: "Strawberies",
      description: "Freshly squeezed strawberies juice",
      price: 50,
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
              image={`/assets/drinks/${
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
                {item.price.toFixed(2)} MAD
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DrinksList;
