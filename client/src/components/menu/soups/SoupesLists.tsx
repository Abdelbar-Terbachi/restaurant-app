"use client";
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const SoupsList = () => {
  const items: MenuItem[] = [
    {
      name: "Tomato Soup",
      description: "Creamy tomato soup with basil",
      price: 45,
    },
    {
      name: "Minestrone",
      description: "Italian vegetable soup with pasta",
      price: 50,
    },
    {
      name: "Chicken Noodle Soup",
      description: "Classic chicken noodle soup",
      price: 55,
    },
    {
      name: "French Onion Soup",
      description: "Onion soup with cheese and croutons",
      price: 60,
    },
    {
      name: "Clam Chowder",
      description: "Creamy clam chowder with potatoes",
      price: 65,
    },
    {
      name: "Lentil Soup",
      description: "Hearty lentil soup with vegetables",
      price: 50,
    },
    {
      name: "Miso Soup",
      description: "Traditional Japanese miso soup",
      price: 40,
    },
    {
      name: "Pumpkin Soup",
      description: "Smooth pumpkin soup with spices",
      price: 50,
    },
    {
      name: "Gazpacho",
      description: "Chilled tomato and vegetable soup",
      price: 45,
    },
    {
      name: "Seafood Bisque",
      description: "Rich seafood bisque",
      price: 70,
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
              image={`/assets/soupes/${item.name
                .split(" ")[0]
                .toLowerCase()}.jpg`} // Use the first word of the name
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

export default SoupsList;
