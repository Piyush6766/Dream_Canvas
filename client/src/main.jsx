import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </BrowserRouter>
);
