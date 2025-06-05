import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { texts, toggleLanguage, language } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 text-white text-sm md:text-base">
        <div className="font-bold text-lg md:text-xl">Patricio Marino Bata</div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-blue-400 transition">{texts.navbar.home}</a>
          <a href="#about" className="hover:text-blue-400 transition">{texts.navbar.about}</a>
          <a href="#experience" className="hover:text-blue-400 transition">{texts.navbar.experience}</a>
          <a href="#studies" className="hover:text-blue-400 transition">{texts.navbar.studies}</a>
          <a href="#contact" className="hover:text-blue-400 transition">{texts.navbar.contact}</a>
          <button onClick={toggleLanguage} className="ml-2 bg-white text-black px-2 rounded hover:bg-gray-300 transition">
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </nav>
    </header>
  );
}
