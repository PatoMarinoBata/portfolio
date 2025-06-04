import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultTexts } from "./data/defaultTexts";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [texts, setTexts] = useState(defaultTexts["es"]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolioTexts");
      if (saved) {
        const parsed = JSON.parse(saved);
        const langData = parsed[language];
        if (
          langData?.navbar?.home &&
          langData?.about?.title &&
          langData?.contact?.title
        ) {
          setTexts(langData);
        } else {
          console.warn("❗ Datos incompletos en localStorage. Usando defaultTexts.");
          setTexts(defaultTexts[language]);
        }
      } else {
        setTexts(defaultTexts[language]);
      }
    } catch (e) {
      console.error("❗ Error al leer textos. Usando defaultTexts.", e);
      setTexts(defaultTexts[language]);
    }
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
