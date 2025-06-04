import React from "react";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() {
  const { texts } = useLanguage();

  // Validación para evitar errores si texts no está cargado
  if (!texts?.about?.title || !texts?.contact?.title || !texts?.navbar?.home) {
    return <div className="text-white p-10">Cargando contenido...</div>;
  }

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white scroll-smooth">
      <Navbar />

      {/* Home */}
      <section
        id="home"
        className="snap-start h-screen pt-24 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900"
      >
        <h1 className="text-4xl md:text-6xl font-bold">{texts.home.title}</h1>
        <p className="mt-4 text-xl text-gray-300">{texts.home.subtitle}</p>
      </section>

      {/* Sobre mí */}
      <section
        id="about"
        className="snap-start h-screen p-10 flex flex-col md:flex-row items-center justify-center bg-gray-900 gap-10"
      >
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-lg max-w-md mx-auto">
            <div className="whitespace-nowrap animate-slide">
              <img src="/images/about/foto1.jpeg" alt="Foto 1" className="inline-block w-full" />
              <img src="/images/about/foto2.jpeg" alt="Foto 2" className="inline-block w-full" />
              <img src="/images/about/foto3.jpg" alt="Foto 3" className="inline-block w-full" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">{texts.about.title}</h2>
          <p>{texts.about.description}</p>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experience" className="snap-start min-h-screen p-10 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-10 text-center">{texts.experience.title}</h2>
        {texts.experience.jobs.map((job, idx) => (
          <div key={idx} className="mb-8">
            <div className="flex justify-between items-center text-lg font-semibold border-b border-gray-700 pb-1">
              <span>{job.role}</span>
              <span>{job.company}</span>
            </div>
            {job.dates && <p className="text-sm text-gray-400 italic">{job.dates}</p>}
            <p className="mt-2 text-gray-300 whitespace-pre-line">{job.description}</p>
          </div>
        ))}
      </section>

      {/* Estudios */}
      <section id="studies" className="snap-start h-screen p-10 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">{texts.studies.title}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {texts.studies.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Contacto */}
      <section
        id="contact"
        className="snap-start h-screen p-10 bg-gray-950 flex flex-col justify-center items-center"
      >
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
          </a>
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
