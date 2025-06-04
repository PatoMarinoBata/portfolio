import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultTexts } from "./data/defaultTexts";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [texts, setTexts] = useState(defaultTexts["es"]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioTexts");
    const fallback = defaultTexts[language];

    try {
      if (saved) {
        const parsed = JSON.parse(saved);
        const loaded = parsed[language];

        // Validar que tenga estructura mínima
        if (
          loaded &&
          loaded.about?.title &&
          loaded.contact?.title &&
          loaded.navbar?.home
        ) {
          setTexts(loaded);
        } else {
          console.warn("❗ Textos cargados incompletos. Usando valores por defecto.");
          setTexts(fallback);
        }
      } else {
        setTexts(fallback);
      }
    } catch (e) {
      console.error("❗ Error al cargar textos. Usando valores por defecto.");
      setTexts(fallback);
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
