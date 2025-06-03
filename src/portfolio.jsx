import React from "react";
import Navbar from "./Navbar.jsx";
import { useLanguage } from "./LanguageContext";

export default function Portfolio() { const { texts } = useLanguage();

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white scroll-smooth">
      <Navbar />

      {/* Home */}
      <section id="home" className="snap-start h-screen pt-20 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-4xl md:text-6xl font-bold">{texts.home.title}</h1>
        <p className="mt-4 text-xl text-gray-300">{texts.home.subtitle}</p>

      </section>

      {/* Sobre mí */}
      <section id="about" className="snap-start h-screen p-10 flex flex-col justify-center bg-gray-900">
      <h2 className="text-3xl font-semibold mb-4">{texts.about.title}</h2>
        <p>{texts.about.description}</p>
      </section>

      {/* Experiencia Laboral */}
      <section id="experience" className="snap-start min-h-screen p-10 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-10 text-center">Experiencia Laboral</h2>
        <div className="space-y-8">

          <div>
            <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
              <span>SR Project Manager</span>
              <span>SCALEMOTE IT</span>
            </div>
            <p className="mt-2 text-gray-300">
              Actualmente trabajo para SCALEMOTE IT, una software factory australiana enfocada principalmente en proyectos de Blockchain.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
              <span>IT Project Manager</span>
              <span>WERDEN IT</span>
            </div>
            <p className="mt-2 text-gray-300">
              Trabajé como Project Manager en una empresa nacional de soluciones tecnológicas. Tuve también responsabilidades como Product Owner y Analista Funcional, participando en creación de roadmaps, estimaciones, definiciones de producto y presentaciones a stakeholders.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
              <span>Project Analyst</span>
              <span>HANSEN Technologies</span>
            </div>
            <p className="mt-2 text-gray-300">
              Participé en proyectos de análisis y optimización en inglés. Usé herramientas de Atlassian, Office y propias para automatizar procesos, crear templates y presentar avances a stakeholders.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
              <span>Project Administrator</span>
              <span>PwC</span>
            </div>
            <p className="mt-2 text-gray-300">
              Carga, control y análisis de documentos. Optimización de procesos, plantillas y presentación de avances con el equipo de Project Managers.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
              <span>Project Manager / Delivery Manager</span>
              <span>Correo Argentino</span>
            </div>
            <p className="mt-2 text-gray-300">
              Responsable de estudios de viabilidad, relevamiento técnico y funcional, requerimientos presupuestarios y presentaciones ejecutivas.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
              <span>Analista Funcional</span>
              <span>OSPe</span>
            </div>
            <p className="mt-2 text-gray-300">
              Análisis, prototipado, reuniones con usuarios y testing funcional para sistemas internos. Metodologías ágiles aplicadas.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center text-lg font-semibold text-white border-b border-gray-700 pb-1">
              <span>Fullstack Developer / Analista Funcional</span>
              <span>Freelance</span>
            </div>
            <p className="mt-2 text-gray-300">
              Desarrollo y documentación de aplicaciones para PyMEs. Diseño de pantallas, casos de uso, seguimiento con clientes y testing.
            </p>
          </div>
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
  <a href="https://torre.ai/patriciomarinobata" className="text-blue-400 underline">
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
