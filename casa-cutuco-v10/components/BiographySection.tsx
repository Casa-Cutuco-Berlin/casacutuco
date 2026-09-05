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
        {/* Source quote: uploaded file `chepe cutco.......pdf` (commit 1e2b669). English copy is a direct translation of the Spanish quote. */}
        <blockquote className="mt-6 max-w-4xl border-l-4 border-[#b96745] pl-6">
          <p className="text-xl leading-9 text-gray-800">
            {lang === "es"
              ? "“Yo nunca le he negado mi casa a nadie. Mi puerta siempre estará abierta para mi familia y amigos, mientras haya respeto y amor.”"
              : "“I have never denied my home to anyone. My door will always be open to my family and friends, as long as there is respect and love.”"}
          </p>
          <footer className="mt-4 text-sm font-semibold tracking-wider text-gray-600">
            {lang === "es"
              ? "— José Eliseo Soriano “Chepe Cutuco” · Casa Cutuco"
              : "— José Eliseo Soriano “Chepe Cutuco” · Casa Cutuco"}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
