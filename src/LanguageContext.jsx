import React, { createContext, useContext, useState, useEffect } from "react";
import es from "./locales/es.json";
import en from "./locales/en.json";

const languages = { es, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored && languages[stored]) {
      setLanguage(stored);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === "es" ? "en" : "es";
    setLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts: languages[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
