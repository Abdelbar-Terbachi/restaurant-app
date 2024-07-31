"use client";
import React from "react";
import { Box, Card, CardContent, Typography, Rating } from "@mui/material";
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
  <Card sx={{ maxWidth: 345, mx: "auto" }}>
    <CardContent>
      <Typography variant="h6">{review.name}</Typography>
      <Rating value={review.rating} precision={0.5} readOnly />
      <Typography variant="body2" color="textSecondary">
        {review.comment}
      </Typography>
    </CardContent>
  </Card>
);

const ReviewsSection = () => {
  return (
    <Box sx={{ mt: "4rem", width: "50%", margin: "auto" }}>
      <Typography variant="h2" sx={{ textAlign: "center", mb: "4rem" }}>
        Customer Reviews
      </Typography>
      <Carousel
        autoPlay
        interval={5000}
        indicators={false}
        navButtonsAlwaysVisible
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
