import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { texts, toggleLanguage } = useLanguage();
  const links = [
    { id: "home", label: texts.navbar.home },
    { id: "about", label: texts.navbar.about },
    { id: "experience", label: texts.navbar.experience },
    { id: "studies", label: texts.navbar.studies },
    { id: "contact", label: texts.navbar.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white flex justify-between items-center px-8 z-50 shadow-md">
      <ul className="flex space-x-6 py-4 text-sm md:text-base">
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className="hover:text-blue-400 transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={toggleLanguage}
        className="text-xs md:text-sm bg-white text-black px-2 py-1 rounded hover:bg-gray-200 transition"
      >
        {texts.navbar.language}
      </button>
    </nav>
  );
}
