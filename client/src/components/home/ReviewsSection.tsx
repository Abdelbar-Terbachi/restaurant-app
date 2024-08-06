"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const reviews = [
  {
    name: "John Doe",
    rating: 4.5,
    comment: "Great food and excellent service. Highly recommend!",
  },
  {
    name: "Jane Smith",
    rating: 5,
    comment: "Amazing atmosphere and delicious dishes. Will visit again!",
  },
  {
    name: "Alice Johnson",
    rating: 4,
    comment: "Good variety and tasty meals. A bit pricey but worth it.",
  },
  // Add more reviews as needed
];

const ReviewCard = ({
  review,
}: {
  review: { name: string; rating: number; comment: string };
}) => (
  <Card
    sx={{
      maxWidth: 345,
      mx: "auto",
      bgcolor: "black",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    }}
  >
    <CardContent>
      <Typography variant="h6" color="gold">
        {review.name}
      </Typography>
      <Rating value={review.rating} precision={0.5} readOnly />
      <Typography variant="body2" color="white">
        {review.comment}
      </Typography>
    </CardContent>
  </Card>
);

const ReviewsSection = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: "4rem", width: "70%", margin: "auto" }}>
      <Typography
        variant={
          isLargeScreen
            ? "h2"
            : isMediumScreen
            ? "h3"
            : isSmallScreen
            ? "h5"
            : "h2"
        }
        sx={{
          textAlign: "center",
          margin: "auto",
          padding: "3rem 5rem",
          backgroundColor: "#fff",
          fontWeight: "bold",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0.5rem",
          fontStyle: "italic",
          color: "black",
        }}
      >
        Customer Reviews
      </Typography>
      <Carousel
        autoPlay
        interval={5000}
        indicators={false}
        navButtonsAlwaysVisible={isLargeScreen || isMediumScreen}
        animation="slide"
      >
        {reviews.map((review, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <ReviewCard review={review} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ReviewsSection;
