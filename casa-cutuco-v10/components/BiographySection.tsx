"use client";

import { useLang } from "./LanguageProvider";

export default function BiographySection() {
  const { lang } = useLang();

  return (
    <section id="biography" className="bg-[#f8f5ee]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
          {lang === "es" ? "Biografía" : "Biography"}
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.045em] text-gray-900 sm:text-5xl">
          {lang === "es" ? "La historia de Casa Cutuco" : "The story behind Casa Cutuco"}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          {lang === "es"
            ? "Casa Cutuco nació como un espacio para compartir la tranquilidad de Berlín, Usulután, con viajeros que buscan naturaleza, descanso y cultura local. Nuestro enfoque es ofrecer una experiencia cálida y auténtica, cuidando cada detalle para que te sientas como en casa."
            : "Casa Cutuco was created to share the calm of Berlín, Usulután with travelers looking for nature, rest, and local culture. Our focus is to offer a warm, authentic stay, with thoughtful details that make you feel at home."}
        </p>
      </div>
    </section>
  );
}
