import React, { useState } from "react";

const methods = [
  {
    title: "Terapia Systemu Wewnętrznej Rodziny (IFS)",
    content: `IFS (Internal Family Systems), opracowana przez dr. Richarda Schwartza, zakłada że umysł składa się z wielu „części” – subosobowości, które mają własne emocje, wspomnienia i funkcje. W ujęciu neuropsychologicznym można je porównać do sieci neuronowych powiązanych z określonymi doświadczeniami. Terapia polega na nawiązywaniu kontaktu z tymi częściami i przywracaniu wewnętrznej równowagi. Pozwala zachować świadomość i kontrolę nad procesem, prowadząc do głębszego kontaktu z własnym Ja i redukcji objawów.`
  },
  {
    title: "Terapia EMDR",
    content: `EMDR (Eye Movement Desensitisation and Reprocessing) opiera się na założeniu, że traumatyczne wspomnienia mogą zakłócać komunikację w mózgu, „blokując” procesy adaptacyjne. Poprzez ruch gałek ocznych i inne formy stymulacji bilateralnej, metoda ta pomaga przetwarzać te wspomnienia i przywracać emocjonalną równowagę. Jest skuteczna m.in. w leczeniu lęków, fobii, żałoby, traumy złożonej, bólu chronicznego i niskiej samooceny.`
  },
  {
    title: "Brainspotting",
    content: `Brainspotting to metoda oparta na obserwacji, że kierunek spojrzenia może aktywować określone obszary mózgu związane z emocjami i wspomnieniami. Podczas sesji terapeuta pomaga odnaleźć tzw. brainspot – punkt spojrzenia związany z nierozwiązanym materiałem emocjonalnym. Klient staje się świadkiem procesów wewnętrznych, umożliwiając mózgowi naturalne przetwarzanie i integrację trudnych doświadczeń.`
  },
  {
    title: "Somatic Experiencing (SE)",
    content: `SE to podejście koncentrujące się na fizjologicznych skutkach traumy. Zamiast analizować zdarzenia, klient uczy się odczytywać i regulować sygnały z ciała. Dzięki pracy z napięciami i odczuciami cielesnymi, możliwe jest odzyskanie równowagi emocjonalnej i lepsze funkcjonowanie na co dzień.`
  },
  {
    title: "Terapia Gestalt",
    content: `Terapia Gestalt kładzie nacisk na doświadczanie siebie w chwili obecnej – „tu i teraz”. Pomaga zrozumieć własne emocje, potrzeby i wzorce zachowań, co prowadzi do głębszego kontaktu z samym sobą i poprawy relacji z innymi.`
  },
  {
    title: "Terapia Bioenergetyczna",
    content: `Analiza bioenergetyczna oparta na pracach Aleksandra Lowena i Wilhelma Reicha zakłada, że chroniczny stres prowadzi do utworzenia tzw. zbroi mięśniowej. Praca z ciałem – poprzez oddech, ruch, ekspresję i dialog – pozwala uwalniać napięcia i przywracać swobodny przepływ energii, co wpływa na ogólne samopoczucie, kontakt z emocjami i zdolność do budowania zdrowych relacji.`
  }
];

const MethodsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="methods" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2 mx-2">
        Metody pracy
      </h2>
      <p className="mb-6 text-lg mx-2">
        W zależności od potrzeb klienta korzystam z różnych podejść terapeutycznych:
      </p>

      <div className="space-y-4 mx-2">
        {methods.map((method, index) => (
          <div
            key={index}
            className="border border-teal-300 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-teal-800 font-medium bg-teal-50 hover:bg-teal-100 transition"
            >
              <span>{method.title}</span>
              <span className="ml-4 text-teal-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`accordion-content ${
                openIndex === index ? "open" : ""
              }`}
            >
              <div className="px-4 py-3 text-gray-700 bg-white">
                {method.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MethodsSection;
