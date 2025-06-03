import React from "react";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() {
  const { texts } = useLanguage();

  const experiences = [
    {
      position: "SR Project Manager",
      company: "SCALEMOTE IT",
      description:
        "Actualmente trabajo para SCALEMOTE IT, una software factory australiana enfocada principalmente en proyectos de Blockchain.",
    },
    {
      position: "IT Project Manager",
      company: "WERDEN IT",
      description:
        "Trabajé como Project Manager en una empresa nacional de soluciones tecnológicas. Tuve también responsabilidades como Product Owner y Analista Funcional, participando en creación de roadmaps, estimaciones, definiciones de producto y presentaciones a stakeholders.",
    },
    {
      position: "Project Analyst",
      company: "HANSEN Technologies",
      description:
        "Participé en proyectos de análisis y optimización en inglés. Usé herramientas de Atlassian, Office y propias para automatizar procesos, crear templates y presentar avances a stakeholders.",
    },
    {
      position: "Project Administrator",
      company: "PwC",
      description:
        "Carga, control y análisis de documentos. Optimización de procesos, plantillas y presentación de avances con el equipo de Project Managers.",
    },
    {
      position: "Project Manager / Delivery Manager",
      company: "Correo Argentino",
      description:
        "Responsable de estudios de viabilidad, relevamiento técnico y funcional, requerimientos presupuestarios y presentaciones ejecutivas.",
    },
    {
      position: "Analista Funcional",
      company: "OSPe",
      description:
        "Análisis, prototipado, reuniones con usuarios y testing funcional para sistemas internos. Metodologías ágiles aplicadas.",
    },
    {
      position: "Fullstack Developer / Analista Funcional",
      company: "Freelance",
      description:
        "Desarrollo y documentación de aplicaciones para PyMEs. Diseño de pantallas, casos de uso, seguimiento con clientes y testing.",
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white scroll-smooth">
      <Navbar />

      {/* Home */}
      <section
        id="home"
        className="snap-start h-screen pt-20 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900"
      >
        <h1 className="text-4xl md:text-6xl font-bold">{texts.home.title}</h1>
        <p className="mt-4 text-xl text-gray-300">{texts.home.subtitle}</p>
      </section>

      {/* Sobre mí */}
      <section
        id="about"
        className="snap-start h-screen p-10 flex flex-col justify-center bg-gray-900"
      >
        <h2 className="text-3xl font-semibold mb-4">{texts.about.title}</h2>
        <p>{texts.about.description}</p>
      </section>

      {/* Experiencia Laboral */}
      <section
        id="experience"
        className="snap-start min-h-screen p-10 bg-gray-950"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">
          {texts.experience.title}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
                <span>{exp.position}</span>
                <span>{exp.company}</span>
              </div>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estudios */}
      <section
        id="studies"
        className="snap-start h-screen p-10 bg-gray-900"
      >
        <h2 className="text-3xl font-semibold mb-4">{texts.studies.title}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {texts.studies.items.map((item, index) => (
            <li key={index}>{item}</li>
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
