import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() {
  const { texts, language } = useLanguage();

  const images = [
    "/images/about/foto1.jpeg",
    "/images/about/foto2.jpeg",
    "/images/about/foto3.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (
    !texts?.home?.title ||
    !texts?.about?.title ||
    !texts?.experience?.title ||
    !Array.isArray(texts.experience.jobs) ||
    !texts?.studies?.title ||
    !Array.isArray(texts.studies.items) ||
    !texts?.contact?.title
  ) {
    return <div className="text-white p-10">Cargando contenido...</div>;
  }

  const toggleDescription = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black text-white">
      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="snap-start min-h-screen pt-24 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 px-4 text-center"
      >
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {texts.home.title}
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto">
            {texts.home.subtitle}
          </p>
        </motion.div>
      </section>

      {/* SOBRE MÍ */}
      <section
        id="about"
        className="snap-start pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 px-4 md:px-10 gap-10"
      >
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center items-center overflow-hidden relative h-[250px] md:h-[350px] lg:h-[400px]"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`Foto ${current + 1}`}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[90%] max-h-full object-cover rounded-2xl shadow-xl absolute"
            />
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left"
        >
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            {texts.about.title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300">
            {texts.about.description}
          </p>
        </motion.div>
      </section>

      {/* EXPERIENCIA */}
      <section
        id="experience"
        className="snap-start pt-24 bg-gray-950 px-4 md:px-10 pb-12"
      >
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-xl md:text-3xl font-semibold mb-6 text-center">
            {texts.experience.title}
          </h2>

          <div className="space-y-6">
            {texts.experience.jobs.map((job, idx) => (
              <div key={idx} className="border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center">
                  <div className="text-base md:text-lg font-semibold">
                    <span>{job.role}</span>
                    {job.dates && (
                      <span className="ml-2 text-xs md:text-sm text-gray-400 italic">
                        {job.dates}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => toggleDescription(idx)}
                    className="text-xl md:text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
                  >
                    {openIndex === idx ? "−" : "+"}
                  </button>
                </div>
                <p className="mt-1 text-sm md:text-base text-gray-300">
                  {job.company}
                </p>
                {openIndex === idx && (
                  <p className="mt-2 text-sm md:text-base text-gray-300 whitespace-pre-line">
                    {job.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ESTUDIOS */}
      <section
        id="studies"
        className="snap-start pt-24 pb-16 bg-gray-900 px-4 md:px-10"
      >
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-left"
        >
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            {texts.studies.title}
          </h2>
          <ul className="list-disc list-inside text-sm md:text-base lg:text-lg text-gray-300 space-y-2">
            {texts.studies.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CONTACTO */}
      <section
        id="contact"
        className="snap-start pt-24 pb-24 flex flex-col justify-center items-center bg-gray-950 px-4 md:px-10 text-center"
      >
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto"
        >
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            {texts.contact.title}
          </h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
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
            href={
              language === "es"
                ? "/CV_PatricioMarino_ES.pdf"
                : "/CV_PatricioMarino_EN.pdf"
            }
            download
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition text-sm md:text-base"
          >
            {language === "es" ? "Descargar CV" : "Download CV"}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
