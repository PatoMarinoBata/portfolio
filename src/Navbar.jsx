export default function Navbar() {
    const links = [
      { id: "home", label: "Inicio" },
      { id: "about", label: "Sobre mí" },
      { id: "experience", label: "Experiencia" },
      { id: "studies", label: "Estudios" },
      { id: "contact", label: "Contacto" },
    ];
  
    return (
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white flex justify-center z-50 shadow-md">
        <ul className="flex space-x-6 py-4 text-sm md:text-base">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-blue-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
    