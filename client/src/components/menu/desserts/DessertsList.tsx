"use client";
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const DessertsList = () => {
  const items: MenuItem[] = [
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake",
      price: 50,
    },
    {
      name: "Cheesecake",
      description: "Classic cheesecake",
      price: 65,
    },
    {
      name: "Apple Pie",
      description: "Homemade apple pie",
      price: 45,
    },
    {
      name: "Tiramisu",
      description: "Classic Italian tiramisu",
      price: 60,
    },
    {
      name: "Brownies",
      description: "Fudgy brownies",
      price: 40,
    },
    {
      name: "Panna Cotta",
      description: "Vanilla panna cotta",
      price: 55,
    },
    {
      name: "Ice Cream Sundae",
      description: "Sundae with toppings",
      price: 50,
    },
    {
      name: "Crème Brûlée",
      description: "Creamy crème brûlée",
      price: 60,
    },
    {
      name: "Lemon Tart",
      description: "Tangy lemon tart",
      price: 45,
    },
    {
      name: "Fruit Salad",
      description: "Fresh fruit salad",
      price: 40,
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
              image={`/assets/desserts/${item.name
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

export default DessertsList;
