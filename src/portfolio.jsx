import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() {
  const { texts } = useLanguage();

  // Carrusel de “Sobre mí”
  const images = [
    "/images/about/foto1.jpeg",
    "/images/about/foto2.jpeg",
    "/images/about/foto3.jpg",
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Estado para desplegar/ocultar descripciones en “Experiencia”
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Validación mínima antes de renderizar
  if (
    !texts?.home?.title ||
    !texts?.home?.subtitle ||
    !texts?.about?.title ||
    !texts?.about?.description ||
    !texts?.experience?.jobs ||
    !Array.isArray(texts.experience.jobs) ||
    !texts?.studies?.items ||
    !Array.isArray(texts.studies.items) ||
    !texts?.contact?.title ||
    !texts?.contact?.text ||
    !texts?.contact?.cv
  ) {
    return <div className="text-white p-10">Cargando contenido...</div>;
  }

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-black text-white pt-20">
      <Navbar />

      {/* 1) HOME */}
      <section
        id="home"
        className="snap-start h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold">{texts.home.title}</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl">
          {texts.home.subtitle}
        </p>
      </section>

      {/* 2) SOBRE MÍ */}
      <section
        id="about"
        className="snap-start h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 px-4 md:px-10 gap-10"
      >
        <div className="w-full md:w-1/2 h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden relative rounded-2xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`Foto ${current + 1}`}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="object-cover w-full h-full"
            />
          </AnimatePresence>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {texts.about.title}
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-lg">
            {texts.about.description}
          </p>
        </div>
      </section>

      {/* 3) EXPERIENCIA */}
      <section
        id="experience"
        className="snap-start h-screen bg-gray-950 px-4 md:px-10 py-8 overflow-y-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          {texts.experience.title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {texts.experience.jobs.map((job, i) => (
            <div key={i} className="border-b border-gray-700 pb-4 pl-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="text-lg md:text-xl font-semibold">
                  <span>{job.role}</span>
                  {job.dates && (
                    <span className="ml-2 text-sm md:text-base italic text-gray-400">
                      {job.dates}
                    </span>
                  )}
                </div>
                <span className="text-2xl md:text-3xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              <p className="mt-1 text-sm md:text-base text-gray-300">
                {job.company}
              </p>
              {openIndex === i && (
                <p className="mt-2 text-sm md:text-base text-gray-300 whitespace-pre-line">
                  {job.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4) ESTUDIOS Y CERTIFICACIONES */}
      <section
        id="studies"
        className="snap-start h-screen bg-gray-900 px-4 md:px-10 py-8 overflow-y-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {texts.studies.title}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          {texts.studies.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 5) CONTACTO */}
      <section
        id="contact"
        className="snap-start h-screen flex flex-col justify-center items-center bg-gray-950 px-4 md:px-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {texts.contact.title}
        </h2>
        <p className="mb-4 text-base md:text-lg text-gray-300 max-w-md">
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
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base"
        >
          {texts.contact.cv}
        </a>
      </section>
    </div>
  );
}
