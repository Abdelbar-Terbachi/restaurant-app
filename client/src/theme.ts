"use client";
import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material";
const PRIMARY = {
  lighter: "#334D6E",
  light: "#334D6E",
  main: "#334D6E",
  dark: "#334D6E",
  darker: "#334D6E",
  contrastText: "#fff",
};
export const SECONDARY = {
  lighter: "#F5F6F8",
  light: "#F5F6F8",
  main: "#F5F6F8",
  dark: "#F5F6F8",
  darker: "#F5F6F8",
  contrastText: "#000000",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: "#fff",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#BC8952",
  dark: "#C18A3E",
  darker: "#7A4F01",
  contrastText: "#fff",
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "40px",
          textTransform: "capitalize",
          padding: "5px 35px",
          borderRadius: "25px",
          fontSize: "0.875rem",
          fontWeight: "500",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default theme;
