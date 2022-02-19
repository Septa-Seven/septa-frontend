import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#6d50ff",
      light: "#25210e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff1b5b",
    },
    background: {
      default: "#fff9f9",
    },
    info: {
      main: "#2196f3",
    },
  },
});
