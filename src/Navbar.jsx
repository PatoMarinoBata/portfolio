import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { texts, toggleLanguage, language } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black shadow-md z-50">
      <div className="flex justify-between items-center h-full px-6 text-white">
        <div className="font-bold text-lg">Patricio Marino Bata</div>
        <div className="space-x-4 text-sm md:text-base">
          <a href="#home" className="hover:text-blue-400 transition">{texts.navbar.home}</a>
          <a href="#about" className="hover:text-blue-400 transition">{texts.navbar.about}</a>
          <a href="#experience" className="hover:text-blue-400 transition">{texts.navbar.experience}</a>
          <a href="#studies" className="hover:text-blue-400 transition">{texts.navbar.studies}</a>
          <a href="#contact" className="hover:text-blue-400 transition">{texts.navbar.contact}</a>
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
}
