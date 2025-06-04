import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./LanguageContext";
import Portfolio from "./portfolio.jsx"; // o admin.jsx si estás editando
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  </React.StrictMode>
);
