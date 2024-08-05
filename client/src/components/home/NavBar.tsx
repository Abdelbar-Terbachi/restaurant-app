"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Slide } from "@mui/material";
import TulipSVG from "../SVG/TulipSVG";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        height: "100%",
        color: "gold",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Menu", "Reservation", "Galery", "Contact"].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            href={`/${text.toLowerCase().replace(" ", "")}`}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
          color: "gold",
          boxShadow: "none",
          width: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1200,
        }}
      >
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: isSmallScreen ? "0 1rem" : "0 2rem",
            }}
          >
            <Box>
              <Link href="/">
                <TulipSVG />
              </Link>
            </Box>
            {isSmallScreen ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {["Menu", "Reservation", "Galery", "Contact"].map((text) => (
                  <Typography
                    key={text}
                    variant="h6"
                    component="div"
                    sx={{
                      "& a": {
                        color: "gold",
                        textDecoration: "none",
                      },
                    }}
                  >
                    <Link href={`/${text.toLowerCase().replace(" ", "")}`}>
                      {text}
                    </Link>
                  </Typography>
                ))}
              </Box>
            )}
          </Toolbar>
        </Slide>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
}
