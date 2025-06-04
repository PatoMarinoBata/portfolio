import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultTexts } from "./data/defaultTexts";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [texts, setTexts] = useState(defaultTexts["es"]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioTexts");
    if (saved) {
      const parsed = JSON.parse(saved);
      const langTexts = parsed[language];
      // Validación: si no hay datos completos, usar los defaults
      if (
        langTexts?.about?.title &&
        langTexts?.contact?.title &&
        langTexts?.navbar?.home
      ) {
        setTexts(langTexts);
      } else {
        console.warn("⚠️ Faltan campos en localStorage. Usando valores por defecto.");
        setTexts(defaultTexts[language]);
      }
    } else {
      setTexts(defaultTexts[language]);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
