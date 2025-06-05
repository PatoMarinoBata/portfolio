import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { texts, toggleLanguage, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md h-20">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
        {/* Nombre a la izquierda */}
        <div className="text-xl font-bold">Patricio Marino Bata</div>

        {/* Enlaces desktop */}
        <ul className="hidden md:flex space-x-6 text-white text-sm md:text-base">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              {texts.navbar.home}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              {texts.navbar.about}
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400 transition">
              {texts.navbar.experience}
            </a>
          </li>
          <li>
            <a href="#studies" className="hover:text-blue-400 transition">
              {texts.navbar.studies}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              {texts.navbar.contact}
            </a>
          </li>
        </ul>

        {/* Botón idioma desktop */}
        <button
          onClick={toggleLanguage}
          className="hidden md:block bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition text-sm"
        >
          {language === "es" ? "EN" : "ES"}
        </button>

        {/* Burger mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menú desplegable mobile */}
      {menuOpen && (
        <ul className="md:hidden absolute top-20 left-0 w-full bg-black text-center space-y-4 py-4 z-50">
          <li>
            <a
              href="#home"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.home}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.about}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.experience}
            </a>
          </li>
          <li>
            <a
              href="#studies"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.studies}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white text-lg hover:text-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {texts.navbar.contact}
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="mt-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition text-base"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
