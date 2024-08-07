import { Box, IconButton } from "@mui/material";
import React from "react";
import FacebookSVG from "../SVG/FacebookSVG";
import TiktokSVG from "../SVG/tiktokSVG";
import InstagramSVG from "../SVG/InstagramSVG";
import YoutubeSVG from "../SVG/youtubeSVG";

const SocialComponent = () => {
  const handleRedirect = (url: string) => {
    // window.open("url", "_blank");
    return;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        onClick={() =>
          handleRedirect("https://www.facebook.com/Black.Tulip.Tanger")
        }
        aria-label="Facebook"
      >
        <FacebookSVG />
      </IconButton>
      <IconButton
        onClick={() =>
          handleRedirect("https://www.instagram.com/blacktulipcafe/")
        }
        aria-label="Instagram"
      >
        <InstagramSVG />
      </IconButton>
      <IconButton
        onClick={() =>
          handleRedirect("https://www.tiktok.com/@BlackTulipTanger")
        }
        aria-label="TikTok"
      >
        <TiktokSVG />
      </IconButton>
      <IconButton
        onClick={() => handleRedirect("https://www.youtube.com/BlackTulip")}
        aria-label="YouTube"
      >
        <YoutubeSVG />
      </IconButton>
    </Box>
  );
};

export default SocialComponent;
