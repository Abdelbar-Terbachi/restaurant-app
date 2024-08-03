"use client";
import { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MenuItem } from "@/types/types";

const SnacksList = () => {
  const [items] = useState<MenuItem[]>([
    {
      name: "Cheese Sticks",
      description: "Crispy cheese sticks",
      price: 6.0,
    },
    {
      name: "Nachos",
      description: "Tortilla chips with cheese",
      price: 7.5,
    },
    {
      name: "Spring Rolls",
      description: "Vegetable spring rolls",
      price: 5.5,
    },
    {
      name: "Onion Rings",
      description: "Crispy onion rings",
      price: 4.5,
    },
    {
      name: "Chicken Wings",
      description: "Spicy chicken wings",
      price: 8.0,
    },
    {
      name: "Garlic Bread",
      description: "Toasted garlic bread",
      price: 3.5,
    },
    {
      name: "Quesadilla",
      description: "Cheese quesadilla",
      price: 6.5,
    },
    {
      name: "Potato Wedges",
      description: "Seasoned potato wedges",
      price: 5.0,
    },
    {
      name: "Stuffed Mushrooms",
      description: "Mushrooms stuffed with cheese",
      price: 7.0,
    },
    {
      name: "Bruschetta",
      description: "Tomato and basil bruschetta",
      price: 5.5,
    },
  ]);

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
              image={`/assets/snacks/${item.name
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

export default SnacksList;
