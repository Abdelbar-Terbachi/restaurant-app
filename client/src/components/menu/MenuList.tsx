"use client";
import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";

const categories = [
  { title: "Snacks", image: "/assets/plats.jpg", slug: "snacks" },
  { title: "Boissons", image: "/assets/drinks.jpg", slug: "drinks" },
  {
    title: "Petits Déjeuners",
    image: "/assets/breakfast.jpg",
    slug: "breakfasts",
  },
  { title: "Desserts", image: "/assets/desserts.jpg", slug: "desserts" },
  { title: "Salades", image: "/assets/salades.jpg", slug: "salades" },
  { title: "Déjeuner", image: "/assets/lunch.jpg", slug: "lunchs" },
  { title: "Entrées", image: "/assets/plats.jpg", slug: "appetizers" },
  { title: "Soupes", image: "/assets/soupes.jpg", slug: "soups" },
];

const MenuList = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, mt: "5rem", mb: "5rem" }}>
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ borderRadius: "1rem", boxShadow: "5px 5px 5px 5px grey" }}
            >
              <CardMedia
                component="img"
                height="280"
                image={category.image}
                alt={category.title}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {category.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined">
                    <Typography
                      sx={{
                        "& a": {
                          color: "black",
                          textDecoration: "none",
                        },
                      }}
                    >
                      <Link href={`/menu/${category.slug}`}>Voire</Link>
                    </Typography>
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuList;
