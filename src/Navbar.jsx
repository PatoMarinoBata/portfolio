import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { texts, toggleLanguage, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: texts.navbar.home },
    { id: "about", label: texts.navbar.about },
    { id: "experience", label: texts.navbar.experience },
    { id: "studies", label: texts.navbar.studies },
    { id: "contact", label: texts.navbar.contact },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Patricio Marino Bata</h1>

        {/* Menú en Desktop */}
        <ul className="hidden md:flex space-x-6 text-white text-sm">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className="hover:text-blue-400 cursor-pointer transition"
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </li>
          ))}
          <li
            onClick={toggleLanguage}
            className="cursor-pointer hover:text-blue-400"
          >
            {language === "es" ? "EN" : "ES"}
          </li>
        </ul>

        {/* Botón menú en mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 py-2">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="py-2 text-white border-b border-gray-700"
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </div>
          ))}
          <div
            onClick={toggleLanguage}
            className="py-2 text-white border-b border-gray-700"
          >
            {language === "es" ? "EN" : "ES"}
          </div>
        </div>
      )}
    </header>
  );
}
