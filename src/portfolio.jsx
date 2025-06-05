import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() {
  const { texts } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-black text-white pt-20">
      <Navbar />

      {/* Home */}
      <section id="home" className="snap-start h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold">Patricio Marino Bata</h1>
        <p className="mt-4 text-xl text-gray-300">{texts.about.description}</p>
      </section>

      {/* Sobre mí */}
      <section id="about" className="snap-start h-screen p-6 md:p-10 flex flex-col justify-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">{texts.about.title}</h2>
        <p className="text-gray-300">{texts.about.description}</p>
      </section>

      {/* Experiencia */}
      <section id="experience" className="snap-start min-h-screen p-6 md:p-10 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-6">{texts.navbar.experience}</h2>
        <div className="space-y-6">
          {texts.experience.map((exp, i) => (
            <div key={i} className="border-b border-gray-700 pb-2">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(i)}>
                <div className="text-left ml-2">
                  <span className="font-semibold text-lg">{exp.position}</span>
                  <span className="ml-2 italic text-sm text-gray-400">{exp.period}</span>
                </div>
                <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
              </div>
              {openIndex === i && <p className="text-gray-400 mt-2">{exp.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Estudios */}
      <section id="studies" className="snap-start h-screen p-6 md:p-10 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">{texts.studies.title}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {texts.studies.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Contacto */}
      <section id="contact" className="snap-start h-screen p-6 md:p-10 flex flex-col justify-center items-center bg-gray-950">
        <h2 className="text-3xl font-semibold mb-4">{texts.contact.title}</h2>
        <p className="mb-4 text-gray-300">
          {texts.contact.text}{" "}
          <a href="https://www.linkedin.com/in/patricio-marino/" className="text-blue-400 underline">LinkedIn</a>.
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
