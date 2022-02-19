import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

import { StoreProvider } from "./StoreProvider";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
