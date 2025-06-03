import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./LanguageContext.jsx";
import Portfolio from "./portfolio.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  </React.StrictMode>
);
