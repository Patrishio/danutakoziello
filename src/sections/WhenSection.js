import React from "react";

const cardsData = [
  {
    title: "Powtarzające się trudności",
    points: [
      "Ciągle wracasz do tych samych problemów w relacjach, pracy czy w codziennym funkcjonowaniu",
      "Masz wrażenie że utknęłaś w jakimś schemacie, z którego trudno się wydostać",
    ],
  },
  {
    title: "Objawy psychiczne lub fizyczne",
    points: [
      "Doświadczasz długotrwałego smutku, złości, przygnębienia, pustki",
      "Masz trudności z zasypianiem, koncentracją, napięciem w ciele",
      "Czujesz przewlekły stres lub wyczerpanie",
    ],
  },
  {
    title: "Trauma i przeszłość",
    points: [
      "Przeżyłeś trudne doświadczenia np. przemoc, zaniedbanie, utrata bliskiej osoby, które nadal wpływają na Twoje życie",
      "Masz poczucie, że przeszłość nie daje spokoju - pojawiają się wspomnienia, emocje, reakcje w ciele",
    ],
  },
  {
    title: "Poczucie samotności i niezrozumienia",
    points: [
      "Czujesz się samotna wśród ludzi",
      "Trudno Ci mówić o swoich emocjach, lub masz poczucie, że nikt Cię nie rozumie",
    ],
  },
  {
    title: "Brak kontaktu z sobą",
    points: [
      "Nie wiesz czego chcesz, co czujesz, co jest dla Ciebie ważne",
    ],
  },
  {
    title: "Chęć zmiany, rozwoju, poznania siebie",
    points: [
      "Czujesz, że chcesz lepiej poznać siebie, swoje reakcje, wybory, emocje, sposób budowania relacji",
      "Zależy Ci na pogłębieniu samoświadomości, pracy nad sobą",
    ],
  },
];

const WhenSection = () => {
  return (
    <section
      id="when"
      className="py-16 px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <h2 className="text-3xl font-semibold mb-10 text-teal-700 border-b-2 border-teal-300 pb-2">
        Kiedy na psychoterapię
      </h2>
      <div className="grid gap-8 md:grid-cols-2 mx-2">
        {cardsData.map(({ title, points }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 border border-teal-200"
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-700">{title}</h3>
            <ul className="list-none list-inside space-y-2 text-gray-700 text-lg">
              {points.map((point, i) => (
                <li key={i}>🪷 {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhenSection;
