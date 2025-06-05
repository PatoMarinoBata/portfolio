import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { texts, toggleLanguage, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md h-20">
      <div className="flex justify-between items-center h-full px-6">
        <div className="font-bold text-lg md:text-xl text-white">
          Patricio Marino Bata
        </div>

        {/* Enlaces para desktop */}
        <nav className="hidden md:flex space-x-6 text-white text-sm md:text-base">
          <a href="#home" className="hover:text-blue-400 transition">
            {texts.navbar.home}
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            {texts.navbar.about}
          </a>
          <a href="#experience" className="hover:text-blue-400 transition">
            {texts.navbar.experience}
          </a>
          <a href="#studies" className="hover:text-blue-400 transition">
            {texts.navbar.studies}
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            {texts.navbar.contact}
          </a>
        </nav>

        {/* Botón idioma en desktop */}
        <button
          onClick={toggleLanguage}
          className="hidden md:block bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition text-sm"
        >
          {language === "es" ? "EN" : "ES"}
        </button>

        {/* Burger menu para mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menú desplegable en mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black/95">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <a
              href="#home"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.home}
            </a>
            <a
              href="#about"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.about}
            </a>
            <a
              href="#experience"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.experience}
            </a>
            <a
              href="#studies"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.studies}
            </a>
            <a
              href="#contact"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.contact}
            </a>
            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </nav>
        </div>
      )}
    </header>
);
}
