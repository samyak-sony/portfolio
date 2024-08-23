"use client";
import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Space Grotesk, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 800,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight:700
    },
    h3: {
      fontSize: "2rem",
      fontWeight:700
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight:700,
      lineHeight: "2rem",
      textTransform:"uppercase"
    },
    body1: {
      color:COLORS.gray,
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight:"1.625rem"
    },
    body2: {
      color:COLORS.gray,
      fontSize: "1.125rem",
      fontWeight: 500
    },
  },
});

export default theme;
