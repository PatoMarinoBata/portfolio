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
    <header className="fixed top-0 left-0 w-full h-16 bg-black z-50 flex items-center justify-between px-6 shadow-md">
      {/* Nombre */}
      <div className="text-white text-xl font-bold">Patricio Marino Bata</div>

      {/* Menú de escritorio */}
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

      {/* Botón menú hamburguesa */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-700 flex flex-col items-center py-6 space-y-4 md:hidden z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-blue-400 transition text-lg"
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
