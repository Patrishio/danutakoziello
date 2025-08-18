import React from "react";
import ContactSection from "./ContactSection";

const InfoSection = () => (
  <section
    id="practical"
    className="bg-white pb-16 pt-6 px-6 shadow-md max-w-6xl mx-auto rounded-lg scroll-mt-20"
  >
    <div className="flex flex-col md:flex-row md:space-x-12 mx-2">
      <div className="md:w-1/2 w-full mb-10 md:mb-0">
        <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
          Informacje praktyczne
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li><strong>Czas trwania sesji:</strong> 90 minut</li>
          <li><strong>Koszt:</strong> 50 funtów</li>
          <li><strong>Częstotliwość:</strong> co dwa tygodnie lub – w razie potrzeby – co tydzień</li>
          <li><strong>Godziny pracy:</strong> Poniedziałek–Piątek, 10:00–19:00</li>
          <li><strong>Forma spotkań:</strong>  online lub stacjonarnie (w zależności od dostępności)</li>
          <li>
            <p className="text-gray-700 mt-0 ml-0 max-w-md mx-2">
              <span className="font-bold">Przyjmuje w Leeds rejon Headingley. </span>

              Dokładny adres podaje po umówieniu wizyty.
            </p>
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 w-full">
        <ContactSection />
      </div>
    </div>
  </section>
);

export default InfoSection;
