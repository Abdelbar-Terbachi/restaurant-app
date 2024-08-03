"use client";
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const SaladesList = () => {
  const items: MenuItem[] = [
    {
      name: "Caesar Salad",
      description: "Classic Caesar salad",
      price: 7.0,
    },
    {
      name: "Greek Salad",
      description: "Salad with feta and olives",
      price: 6.5,
    },
    {
      name: "Cobb Salad",
      description: "Salad with chicken and bacon",
      price: 8.0,
    },
    {
      name: "Caprese Salad",
      description: "Tomato, mozzarella, and basil",
      price: 6.0,
    },
    {
      name: "Waldorf Salad",
      description: "Salad with apples and walnuts",
      price: 7.5,
    },
    {
      name: "Quinoa Salad",
      description: "Healthy quinoa salad",
      price: 6.5,
    },
    {
      name: "Spinach Salad",
      description: "Spinach with berries and nuts",
      price: 7.0,
    },
    {
      name: "Avocado Salad",
      description: "Salad with avocado and tomatoes",
      price: 7.5,
    },
    {
      name: "Asian Salad",
      description: "Salad with sesame dressing",
      price: 6.5,
    },
    {
      name: "Chickpea Salad",
      description: "Salad with chickpeas and vegetables",
      price: 6.0,
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
              image={`/assets/salades/${
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

export default SaladesList;
