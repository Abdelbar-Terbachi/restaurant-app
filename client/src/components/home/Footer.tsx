import { Box, TableFooter, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        pt: "1rem",
        bgcolor: "black",
        color: "gold",
        width: "100vw",
        height: "25vh",
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
