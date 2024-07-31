"use client";
import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const categories = [
  { title: "Snacks", image: "/assets/plats.jpg" },
  { title: "Boissons", image: "/assets/drinks.jpg" },
  { title: "Petits Déjeuners", image: "/assets/breakfast.jpg" },
  { title: "Desserts", image: "/assets/desserts.jpg" },
  { title: "Salades", image: "/assets/salades.jpg" },
  { title: "Déjeuner", image: "/assets/lunch.jpg" },
  { title: "Entrées", image: "/assets/plats.jpg" },
  { title: "Soupes", image: "/assets/soupes.jpg" },
];

const MenuList = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, mt: "4rem" }}>
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: "1rem" }}>
              <CardMedia
                component="img"
                height="140"
                image={category.image}
                alt={category.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuList;
