import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultTexts } from "./data/defaultTexts";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [texts, setTexts] = useState(defaultTexts[language]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioTexts");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTexts(parsed[language] || defaultTexts[language]);
    } else {
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
