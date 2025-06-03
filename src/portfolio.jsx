import React from "react";
import { useState } from "react";
import Navbar from "./Navbar.jsx";

const experiences = [
  { company: "Trabajo Freelance", description: "Proyectos de desarrollo web y gestión para clientes diversos." },
  { company: "OSPe", description: "Coordinación de proyectos IT para la obra social." },
  { company: "Correo Argentino", description: "Analista funcional en iniciativas de modernización digital." },
  { company: "PwC", description: "Business Analyst en proyectos de transformación tecnológica." },
  { company: "Hansen", description: "Project Manager para productos energéticos y de automatización." },
  { company: "IT Rock", description: "Gestión de proyectos y equipos de desarrollo ágil." },
  { company: "BIGGER", description: "Senior Project Manager en proyectos blockchain." }
];

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white scroll-smooth">
      <Navbar />

      <section id="home" className="snap-start h-screen pt-20 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold">Patricio Marino Bata</h1>
        <p className="mt-4 text-xl text-gray-300">Senior Project Manager especializado en IT y Blockchain</p>
      </section>

      <section id="about" className="snap-start h-screen p-10 flex flex-col justify-center bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
        <p>
          Soy un SR Project Manager que trabajó en diferentes sectores de IT (como Fullstack Developer,
          Business Analyst y Project Coordinator) y descubrió el lugar donde su trabajo puede tener mayor impacto.
        </p>
      </section>

      <section id="experience" className="snap-start min-h-screen p-10 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-4">Experiencia</h2>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-b border-gray-700 pb-2">
              <button
                className="w-full text-left text-lg font-medium text-white hover:text-blue-400"
                onClick={() => toggleDropdown(idx)}
              >
                {exp.company} {openIndex === idx ? "-" : "+"}
              </button>
              {openIndex === idx && (
                <p className="text-gray-400 mt-2">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="studies" className="snap-start h-screen p-10 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Estudios y Certificaciones</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Lic. en Sistemas de Información (90% completado)</li>
          <li>Scrum Master / Agile methodologies</li>
          <li>Certificaciones en Jira, Power BI, DevOps</li>
        </ul>
      </section>

      <section id="contact" className="snap-start h-screen p-10 bg-gray-950 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p className="mb-4">Podés contactarme en <a href="https://torre.ai/patriciomarinobata" className="text-blue-400 underline">mi perfil de LinkedIn</a>.</p>
        <a href="/CV%20Junio%202025,%20Patricio%20Marino%20Bata.pdf" download className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">Descargar CV</a>
      </section>
    </div>
  );
}
