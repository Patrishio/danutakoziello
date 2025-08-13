import React from "react";

const SpecializationSection = () => {
  const items = [
    "Praca z traumą (sytuacyjną i rozwojową)",
    "Dysocjacja i objawy psychosomatyczne",
    "Regulacja układu nerwowego (teoria poliwagalna)",
    "Neuroplastyczność i przetwarzanie wspomnień",
    "Obciążenia międzypokoleniowe",
    "Teoria przywiązania i deficyty rozwojowe",
  ];

  const circleItems = items.slice(0, 5);

  return (
    <section id="specialistaions" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2 mx-2">
        Obszary specjalizacji
      </h2>

      {/* Mobile */}
      <ul className="list-none ml-0 space-y-3 text-lg text-gray-700 mb-12 md:hidden mx-2">
        {items.map((item, i) => (
          <li key={i}>🪷 {item}</li>
        ))}
      </ul>

      {/* Desktop */}
      <div className="relative w-96 h-96 my-40 mx-auto hidden md:block">
        {/* Central */}
        <div className="specialization-blob absolute top-1/2 left-1/2 w-44 h-44 bg-teal-500 text-white rounded-full flex items-center justify-center text-center p-2 transform -translate-x-1/2 -translate-y-1/2">
          Teoria przywiązania i deficyty rozwojowe
        </div>

        {/* Orbiting */}
        {circleItems.map((text, i) => {
          const angle = (i * (360 / circleItems.length)) * (Math.PI / 180);
          const radius = 220;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              className="specialization-blob absolute w-44 h-44 bg-pink-800 text-white rounded-full flex items-center justify-center text-center p-2 shadow-lg"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)"
              }}
            >
              {text}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpecializationSection;
