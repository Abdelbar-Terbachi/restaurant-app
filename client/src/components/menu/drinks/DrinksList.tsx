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
      price: 2.5,
    },
    {
      name: "Orange Juice",
      description: "Freshly squeezed orange juice",
      price: 3.0,
    },
    {
      name: "Lemonade",
      description: "Refreshing lemonade",
      price: 2.8,
    },
    {
      name: "Iced Tea",
      description: "Cold brewed iced tea",
      price: 2.7,
    },
    {
      name: "Coffee",
      description: "Freshly brewed coffee",
      price: 3.5,
    },
    {
      name: "Hot Chocolate",
      description: "Rich hot chocolate",
      price: 3.8,
    },
    {
      name: "Mineral Water",
      description: "Sparkling mineral water",
      price: 2.0,
    },
    {
      name: "Milkshake",
      description: "Chocolate milkshake",
      price: 4.0,
    },
    {
      name: "Panache",
      description: "Freshly squeezed panache juice",
      price: 4.5,
    },
    {
      name: "Strawberies",
      description: "Freshly squeezed strawberies juice",
      price: 5.0,
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
              height="140"
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
                ${item.price.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DrinksList;
