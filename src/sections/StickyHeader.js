import React, { useState } from "react";

const sections = [
  { id: "about", label: "O mnie" },
  { id: "howDoIwork", label: "Jak pracuję" },
  { id: "specialistaions", label: "Specializacje" },
  { id: "methods", label: "Metody pracy" },
  { id: "when", label: "Dla kogo"},
  { id: "practical", label: "Informacje"},
  { id: "contact", label: "Kontakt" },
];

const StickyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg z-50 border-b border-teal-800">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-5 px-8 md:px-2 lg:px-8">
        <a
          href="#top"
          className="text-white text-xl lg:text-2xl font-semibold cursor-pointer select-none hover:text-teal-300 transition-colors duration-300 mb-0"
        >
          <h1 className="m-0">Danuta Koziełło-Doherty</h1>
        </a>


        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4 font-medium text-sm mb-0">
          {sections.map(({ id, label }) => (
            <li key={id} className="mb-0">
              <button
                onClick={() => handleScroll(id)}
                className={`text-white font-medium px-1 py-2 hover:text-teal-50 focus:outline-none text-shadow-white transition-colors duration-300 ${id === "practical" ? "md:hidden lg:inline" : ""}`}              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white focus:outline-none"
            aria-label="Otwórz menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown fullscreen */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-teal-600 z-50 flex flex-col items-center justify-center space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            aria-label="Zamknij menu"
          >
            ✕
          </button>

          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-white text-xl font-medium hover:text-teal-200 transition"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default StickyHeader;
