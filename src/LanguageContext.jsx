import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultTexts } from "./data/defaultTexts";

const LanguageContext = createContext();
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "portfolioLanguage";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return savedLanguage === "es" || savedLanguage === "en"
        ? savedLanguage
        : DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });
  const [texts, setTexts] = useState(defaultTexts[DEFAULT_LANGUAGE]);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage failures and keep in-memory language state.
    }
  }, [language]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolioTexts");
      if (saved) {
        const parsed = JSON.parse(saved);
        const langData = parsed[language];
        if (
          langData?.navbar?.home &&
          langData?.about?.title &&
          langData?.contact?.title &&
          langData?.experience?.title &&
          Array.isArray(langData.experience.jobs)
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
