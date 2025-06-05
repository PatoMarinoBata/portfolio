import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() {
  const { texts } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  // Validación mínima: si no existen los campos esperados, mostramos “Cargando…”
  if (
    !texts?.home?.title ||
    !texts?.about?.title ||
    !texts?.experience?.jobs ||
    !Array.isArray(texts.experience.jobs) ||
    !texts?.studies?.items ||
    !Array.isArray(texts.studies.items) ||
    !texts?.contact?.title
  ) {
    return <div className="text-white p-10">Cargando contenido...</div>;
  }

  // Alterna el desplegable de la experiencia
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-black text-white pt-20">
      <Navbar />

      {/* ----------------------------
          1) HOME
      ---------------------------- */}
      <section
        id="home"
        className="snap-start h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900"
      >
        <h1 className="text-4xl md:text-6xl font-bold">{texts.home.title}</h1>
        <p className="mt-4 text-xl text-gray-300 max-w-xl text-center">
          {texts.home.subtitle}
        </p>
      </section>

      {/* ----------------------------
          2) SOBRE MÍ
      ---------------------------- */}
      <section
        id="about"
        className="snap-start h-screen p-6 md:p-10 flex flex-col justify-center bg-gray-900"
      >
        <h2 className="text-3xl font-semibold mb-4">{texts.about.title}</h2>
        <p className="text-gray-300">{texts.about.description}</p>
      </section>

      {/* ----------------------------
          3) EXPERIENCIA
      ---------------------------- */}
      <section
        id="experience"
        className="snap-start min-h-screen p-6 md:p-10 bg-gray-950"
      >
        <h2 className="text-3xl font-semibold mb-6">{texts.experience.title}</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {texts.experience.jobs.map((exp, i) => (
            <div key={i} className="border-b border-gray-700 pb-2 pl-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="text-lg font-semibold">
                  <span>{exp.role}</span>
                  {exp.dates && (
                    <span className="ml-2 text-sm italic text-gray-400">
                      {exp.dates}
                    </span>
                  )}
                </div>
                <span className="text-2xl">{openIndex === i ? "−" : "+"}</span>
              </div>
              <p className="mt-1 text-gray-300">{exp.company}</p>
              {openIndex === i && (
                <p className="mt-2 text-gray-300 whitespace-pre-line">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------
          4) ESTUDIOS Y CERTIFICACIONES
      ---------------------------- */}
      <section
        id="studies"
        className="snap-start h-screen p-6 md:p-10 bg-gray-900 overflow-y-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">{texts.studies.title}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 max-w-2xl">
          {texts.studies.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ----------------------------
          5) CONTACTO
      ---------------------------- */}
      <section
        id="contact"
        className="snap-start h-screen p-6 md:p-10 flex flex-col justify-center items-center bg-gray-950"
      >
        <h2 className="text-3xl font-semibold mb-4">{texts.contact.title}</h2>
        <p className="mb-4 text-gray-300 text-center max-w-md">
          {texts.contact.text}{" "}
          <a
            href="https://www.linkedin.com/in/patricio-marino/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
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
