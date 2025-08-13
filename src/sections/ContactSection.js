import React from "react";

const ContactSection = () => (
  <section
    id="contact"
    className="pb-16 pt-0 px-6 max-w-6xl mx-auto scroll-mt-20"
  >
    <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2 mx-2">
      Kontakt
    </h2>
    <p className="mb-3 text-lg mx-2">📞 <a href="tel:+447792772661" className="text-teal-600 hover:underline">0044 7792772661</a></p>
    <p className="mb-3 text-lg mx-2">✉️ <a href="mailto:danuta.koziello@gmail.com" className="text-teal-600 hover:underline">danuta.koziello@gmail.com</a></p>
    <p className="text-gray-600 mt-6 max-w-md mx-2">
      Jestem czlonkiem British Psychological Society (BPS), European Association for Body Psychotherapy (EABP);
      EMDR Association for UK & Irland; Polish Association of Somatic Experiencing (PSSE), The Health and Care Professions Council in UK.
    </p>
    <p className="text-gray-600 mt-2 max-w-md mx-2">
      Pracuję zgodnie z zasadami poufności oraz polityką ochrony danych osobowych. Regularnie korzystam z Superwizji.
    </p>
    <p className="text-gray-600 mt-6 italic max-w-md mx-2">
      „Terapia to nie tylko leczenie ran. To także proces odzyskiwania kontaktu ze sobą i budowania życia w zgodzie z własną prawdą.”
    </p>
  </section>
);

export default ContactSection;