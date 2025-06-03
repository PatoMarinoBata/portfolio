import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() {
  const { texts } = useLanguage();

  // Carrusel de fotos
  const images = [
    "/images/about/foto1.jpeg",
    "/images/about/foto2.jpeg",
    "/images/about/foto3.jpg"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white scroll-smooth">
      <Navbar />

      {/* Home */}
      <section id="home" className="snap-start h-screen pt-20 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold">{texts.home.title}</h1>
        <p className="mt-4 text-xl text-gray-300">{texts.home.subtitle}</p>
      </section>

      {/* Sobre mí con carrusel */}
      <section id="about" className="snap-start h-screen p-10 flex flex-col md:flex-row items-center justify-center bg-gray-900">
        {/* Carrusel */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={images[current]}
            alt={`Foto ${current + 1}`}
            className="w-72 h-72 object-cover rounded-2xl shadow-lg transition-all duration-500"
          />
        </div>

        {/* Descripción */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-left">
          <h2 className="text-3xl font-semibold mb-4">{texts.about.title}</h2>
          <p className="text-gray-300">{texts.about.description}</p>
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section id="experience" className="snap-start min-h-screen p-10 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-10 text-center">Experiencia Laboral</h2>
        <div className="space-y-8">
          {/* Jobs... (omitidos por brevedad) */}
        </div>
      </section>

      {/* Estudios */}
      <section id="studies" className="snap-start h-screen p-10 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">{texts.studies.title}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {texts.studies.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Contacto */}
      <section id="contact" className="snap-start h-screen p-10 bg-gray-950 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4">{texts.contact.title}</h2>
        <p className="mb-4">
          {texts.contact.text}{" "}
          <a
            href="https://www.linkedin.com/in/patricio-marino/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>.
        </p>
        <a
          href="/CV%20Junio%202025,%20Patricio%20Marino%20Bata.pdf"
          download
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          {texts.contact.cv}
        </a>
      </section>
    </div>
  );
}
