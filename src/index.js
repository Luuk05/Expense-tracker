import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import Read from "./components/Read.jsx";
import Popup from "./components/Popup.jsx";

const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: "capitalize",
      fontSize: 17,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Popup />
  </ThemeProvider>
);
