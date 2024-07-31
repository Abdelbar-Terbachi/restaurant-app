import { Box, TableFooter, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        pt: "1rem",
        position: "absolute",
        bottom: 0,
        bgcolor: "black",
        color: "gold",
        width: "100vw",
        height: "20vh",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Typography>Logo</Typography>
      </Box>
      <Box>
        <Typography>Nous Trouver</Typography>
      </Box>
      <Box>
        <Typography>Nous Contactez</Typography>
      </Box>
      <Box>
        <Typography>Black Tulip</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
