import React from "react";
import lotusFlower from "../images/lotus-flower.webp";


const HowDoIWorkSection = () => (
  <section id="howDoIwork" className="pb-6 pt-6 px-6 max-w-6xl mx-2 md:mx-auto scroll-mt-20 bg-white shadow-md rounded-lg">
    <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
      Jak pracuję
    </h2>
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 items-center">
      {/* Text */}
      <div className="order-2 md:order-first text-gray-700">
        <p className="mb-6 leading-relaxed text-lg">
          W pracy terapeutycznej koncentruję się na podejściu 'bottom-up', które angażuje głębokie,
          nieuświadomione procesy zapisane w ciele i układzie nerwowym. W przeciwieństwie do metod
          'top-down' (opartych na analizie poznawczej), podejście 'bottom-up' skuteczniej wspiera osoby
          z doświadczeniem traumy, dysocjacji czy przewlekłego stresu.
        </p>
        <p className="mb-6 leading-relaxed text-lg">
          Dzięki wykorzystaniu nowoczesnych metod somatycznych i neurobiologicznych możliwe jest
          dotarcie do źródeł cierpienia i ich realna transformacja. W pracy uwzględniam m.in. regulację
          układu nerwowego, tworzenie zasobów psychicznych oraz integrację wspomnień i emocji.
        </p>
      </div>
    </div>
     <div className="mt-8 flex justify-between space-x-6">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={lotusFlower}
          alt="lotus flower"
          className="w-12 md:w-24 h-12 md:h-24 object-contain"
          loading="lazy"
        />
      ))}
    </div>
  </section>
);

export default HowDoIWorkSection;
