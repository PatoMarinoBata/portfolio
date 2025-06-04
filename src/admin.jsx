import React, { useEffect, useState } from "react";
import { defaultTexts } from "./data/defaultTexts";

export default function Admin() {
  const [texts, setTexts] = useState({ es: {}, en: {} });

  useEffect(() => {
    const saved = localStorage.getItem("portfolioTexts");
    if (saved) {
      setTexts(JSON.parse(saved));
    } else {
      setTexts(defaultTexts);
    }
  }, []);

  const handleChange = (lang, section, key, value) => {
    setTexts((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [section]: {
          ...prev[lang][section],
          [key]: value
        }
      }
    }));
  };

  const handleListChange = (lang, index, value) => {
    const updated = [...texts[lang].studies.items];
    updated[index] = value;
    setTexts((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        studies: {
          ...prev[lang].studies,
          items: updated
        }
      }
    }));
  };

  const handleExperienceChange = (lang, index, key, value) => {
    const updated = [...texts[lang].experience];
    updated[index][key] = value;
    setTexts((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        experience: updated
      }
    }));
  };

  const saveChanges = () => {
    localStorage.setItem("portfolioTexts", JSON.stringify(texts));
    alert("Cambios guardados con éxito ✅");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Panel de Administración</h1>

      {["es", "en"].map((lang) => (
        <div key={lang} className="bg-white shadow p-6 rounded space-y-6">
          <h2 className="text-xl font-semibold">
            Contenido en {lang === "es" ? "Español" : "Inglés"}
          </h2>

          {/* SOBRE MÍ */}
          <div>
            <h3 className="font-semibold mb-1">Sobre mí</h3>
            <input
              type="text"
              className="w-full border p-2 mb-2"
              value={texts[lang].about.title}
              onChange={(e) => handleChange(lang, "about", "title", e.target.value)}
              placeholder="Título"
            />
            <textarea
              className="w-full border p-2"
              rows={4}
              value={texts[lang].about.description}
              onChange={(e) => handleChange(lang, "about", "description", e.target.value)}
              placeholder="Descripción"
            />
          </div>

          {/* ESTUDIOS */}
          <div>
            <h3 className="font-semibold mb-1 mt-4">Estudios y Certificaciones</h3>
            <input
              type="text"
              className="w-full border p-2 mb-2"
              value={texts[lang].studies.title}
              onChange={(e) => handleChange(lang, "studies", "title", e.target.value)}
              placeholder="Título"
            />
            {texts[lang].studies.items.map((item, idx) => (
              <input
                key={idx}
                className="w-full border p-2 mb-2"
                value={item}
                onChange={(e) => handleListChange(lang, idx, e.target.value)}
                placeholder={`Certificación #${idx + 1}`}
              />
            ))}
          </div>

          {/* EXPERIENCIA */}
          <div>
            <h3 className="font-semibold mb-1 mt-4">Experiencia Laboral</h3>
            {texts[lang].experience.map((exp, idx) => (
              <div key={idx} className="border-t pt-4 mt-4">
                <input
                  type="text"
                  className="w-full border p-2 mb-2"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(lang, idx, "position", e.target.value)}
                  placeholder="Puesto"
                />
                <input
                  type="text"
                  className="w-full border p-2 mb-2"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(lang, idx, "company", e.target.value)}
                  placeholder="Empresa"
                />
                <input
                  type="text"
                  className="w-full border p-2 mb-2"
                  value={exp.period}
                  onChange={(e) => handleExperienceChange(lang, idx, "period", e.target.value)}
                  placeholder="Fechas (ej. 01/2023 - 04/2023)"
                />
                <textarea
                  className="w-full border p-2"
                  rows={4}
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(lang, idx, "description", e.target.value)}
                  placeholder="Descripción larga"
                />
              </div>
            ))}
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="font-semibold mb-1 mt-4">Contacto</h3>
            <input
              type="text"
              className="w-full border p-2 mb-2"
              value={texts[lang].contact.title}
              onChange={(e) => handleChange(lang, "contact", "title", e.target.value)}
              placeholder="Título"
            />
            <input
              type="text"
              className="w-full border p-2 mb-2"
              value={texts[lang].contact.text}
              onChange={(e) => handleChange(lang, "contact", "text", e.target.value)}
              placeholder="Texto de contacto"
            />
            <input
              type="text"
              className="w-full border p-2"
              value={texts[lang].contact.cv}
              onChange={(e) => handleChange(lang, "contact", "cv", e.target.value)}
              placeholder="Texto botón CV"
            />
          </div>
        </div>
      ))}

      <div className="text-center">
        <button
          onClick={saveChanges}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
