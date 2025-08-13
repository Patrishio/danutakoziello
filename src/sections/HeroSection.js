import React from "react";
import heroBgDesktop from "../images/hero-bg.webp";
import heroBgMobile from "../images/hero-bg-mobile.webp";

const HeroSection = () => (
  <section className="relative text-white py-52 md:py-20 px-6 text-center bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-black bg-opacity-0 md:bg-opacity-25 z-10"></div>
    <style>
      {`
        .hero-bg {
          background-image: url(${heroBgMobile});
        }

        @media (min-width: 750px) {
          .hero-bg {
            background-image: url(${heroBgDesktop});
          }
        }
      `}
    </style>

    <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat z-0" />

    <div className="relative z-10 bg-opacity-50 md:bg-opacity-0 bg-black py-4 md:py-0">
      <h2 className="text-2xl md:text-5xl font-extrabold mb-6 md:mb-3 leading-tight">
        Danuta Koziełło-Doherty
      </h2>
      <p className="text-xl max-w-xl mx-auto">
        Psychoterapia indywidualna dorosłych – oparcie na neurobiologii i psychologii
      </p>
    </div>
  </section>
);

export default HeroSection;
