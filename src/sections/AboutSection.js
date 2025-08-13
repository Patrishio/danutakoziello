import React from "react";
import portrait from "../images/portrait.webp";

const AboutSection = () => (
  <section id="about" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
    <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2 mx-2">
      O mnie
    </h2>

    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 items-center">
      {/* Text */}
      <div className="md:w-1/2 order-2 md:order-first text-gray-700">
        <p className="mb-6 leading-relaxed text-lg">
          Nazywam się Danuta Koziełło-Doherty i jestem psychologiem klinicznym oraz certyfikowanym psychoterapeutą.
          Od 1995 roku prowadzę terapię indywidualną dorosłych, opartą na aktualnej wiedzy neurobiologicznej i psychologicznej.
          Specjalizuję się w pracy z traumą, teorią przywiązania oraz trudnościami wynikającymi z deficytów rozwojowych.
        </p>
        <p className="leading-relaxed text-lg">
          Ukończyłam studia psychologiczne ze specjalnością Psychologia Kliniczna na Uniwersytecie im. Adama Mickiewicza w Poznaniu.
          Przez wiele lat pracowałam naukowo w Instytucie Psychologii UAM. Jeszcze w trakcie studiów ukończyłam 3-letnie szkolenie
          psychoterapeutyczne w Laboratorium Psychoedukacji w Warszawie.
        </p>
        <p className="leading-relaxed text-lg">
          W 1997 roku przeprowadziłam się do Wielkiej Brytanii. Po uzyskaniu wymaganych kwalifikacji zawodowych,
          rozpoczęłam pracę jako psycholog kliniczny w NHS oraz jako biegły sądowy w sprawach rodzinnych.
        </p>
        <p className="leading-relaxed text-lg">
          Moim głównym obszarem zainteresowań była i jest jednak psychoterapia – łączę w niej wiedzę, doświadczenie i głęboką
          wrażliwość na potrzeby moich klientów. Systematycznie rozwijałam swoje kompetencje, uzyskując certyfikaty w takich
          podejściach jak: EMDR, Somatic Experiencing (SE), Brainspotting, Pesso-Boyden Psychomotor System, Terapia Bodynamic,
          Gestalt, Internal Family Systems (IFS) oraz Terapia Bioenergetyczna.
        </p>
        <p className="leading-relaxed text-lg">
          Każdą z metod starałam się poznać również od wewnątrz – poprzez własne doświadczenie terapeutyczne.
          Dzięki temu nauczyłam się prawdziwego słuchania bez narzucania oczekiwań, co pozwala mi prowadzić terapię w sposób
          skuteczny, indywidualny i holistyczny.
        </p>
      </div>

      {/* Photo */}
      <div className="md:w-1/2 flex justify-center order-1">
        <img
          src={portrait}
          alt="Danuta Koziełło-Doherty"
          className="w-full max-w-sm object-cover"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
