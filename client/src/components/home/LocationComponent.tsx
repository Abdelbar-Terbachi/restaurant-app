import React from "react";
import { Box, Typography } from "@mui/material";

const LocationComponent = () => {
  return (
    <Box
      sx={{ mt: "5rem", mb: "5rem", textAlign: "center" }}
      width="70%"
      margin="auto"
    >
      <Box sx={{ my: "4rem" }}>
        <Typography variant="h2">Où nous trouvez ?</Typography>
      </Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12948.332954736072!2d-5.8024669!3d35.7733316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b817886311a9d%3A0xf9abb06d6b980d19!2sBlack%20Tulip!5e0!3m2!1sen!2sma!4v1722420015127!5m2!1sen!2sma"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default LocationComponent;
