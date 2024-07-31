import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const MenuHighlightsComponent = () => {
  return (
    <>
      <Typography sx={{ textAlign: "center", mb: "4rem" }} variant="h2">
        Menu HightLights
      </Typography>
      <Grid container spacing={3} width="75%" margin="auto" mb="5rem">
        {[
          { src: "/assets/menu1.jpg", title: "Dish 1" },
          { src: "/assets/test.jpg", title: "Dish 2" },
          { src: "/assets/test2.jpg", title: "Dish 3" },
          { src: "/assets/menu4.jpg", title: "Dish 4" },
          { src: "/assets/menu5.jpg", title: "Dish 5" },
          { src: "/assets/menu1-6.jpg", title: "Dish 6" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
              <Image
                src={item.src}
                layout="fill"
                objectFit="cover"
                alt={item.title}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MenuHighlightsComponent;
