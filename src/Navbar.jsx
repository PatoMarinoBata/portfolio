import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { texts, toggleLanguage, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Cierra el menú en mobile
  };

  const links = [
    { id: "home", label: texts.navbar.home },
    { id: "about", label: texts.navbar.about },
    { id: "experience", label: texts.navbar.experience },
    { id: "studies", label: texts.navbar.studies },
    { id: "contact", label: texts.navbar.contact },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-95 h-28 flex items-center px-4 md:px-10 shadow-lg">
      <div className="flex justify-between items-center w-full">
        {/* Logo o Nombre */}
        <div className="text-white text-xl font-bold">Patricio Marino Bata</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-blue-400 transition"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleLanguage}
            className="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400 text-sm"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-28 left-0 w-full bg-black border-t border-gray-700 flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-blue-400 transition"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleLanguage}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400 text-sm"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      )}
    </header>
  );
}
