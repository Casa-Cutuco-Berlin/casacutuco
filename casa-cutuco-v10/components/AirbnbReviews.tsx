"use client";

import Image from "next/image";
import { reviews, reviewCategories, reviewMentions } from "@/lib/reviews";
import type { Lang } from "@/lib/i18n";
import { useLang } from "./LanguageProvider";

const screenshot = "/images/casa-cutuco-2-airbnb-reviews.png";
const listing = "https://airbnb.com/h/casacutuco2-berlin-usulutan-es";

export default function AirbnbReviews() {
  const { lang }: { lang: Lang } = useLang();
  const spanish = lang === "es";

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="border-y border-black/6 bg-[#fbf5e9]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">Casa Cutuco #2 · Airbnb</p>
        <h2 id="reviews-title" className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">
          {spanish ? "Lo que dicen nuestros huéspedes" : "What our guests say"}
        </h2>

        <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <p className="text-6xl font-black tracking-[-.04em] text-[#24483a]" aria-label={spanish ? "4.88 de 5" : "4.88 out of 5"}>4.88<span className="ml-2 text-xl font-medium text-black/50">/ 5</span></p>
            <h3 className="mt-3 text-xl font-bold">{spanish ? "Favorito entre huéspedes" : "Guest favorite"}</h3>
            <p className="mt-2 text-sm text-black/60">
              {spanish ? "8 reseñas · Basado en las calificaciones, las reseñas y la fiabilidad en Airbnb." : "8 reviews · Based on ratings, reviews and reliability on Airbnb."}
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {reviewCategories.map((category) => (
              <div key={category.en} className="border-t border-black/10 pt-3">
                <dt className="text-sm text-black/60">{category[lang]}</dt>
                <dd className="mt-1 text-xl font-bold text-[#24483a]">{category.score}<span className="sr-only">{spanish ? " de 5" : " out of 5"}</span></dd>
              </div>
            ))}
          </dl>
          <p className="mt-7 text-sm font-bold">{spanish ? "Los huéspedes mencionan" : "Guests mention"}</p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {reviewMentions.map((mention) => (
              <li key={mention.en} className="rounded-full bg-[#f8f5ee] px-4 py-2 text-sm">{mention[lang]} <span className="font-bold">{mention.count}</span></li>
            ))}
          </ul>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-black/60">
          {spanish
            ? "Estas son las 6 reseñas visibles de las 8 que aparecen en la captura compartida. Las traducciones al español fueron preparadas para este sitio. Los fragmentos incompletos conservan los puntos suspensivos; consulta los textos completos en Airbnb. Estos datos no se actualizan automáticamente."
            : "These are the 6 visible reviews from the 8 shown in the shared screenshot. Spanish translations were prepared for this website. Incomplete excerpts keep their ellipses; read the full text on Airbnb. These details do not update automatically."}
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review.id} data-review-id={review.id} className="rounded-[28px] border border-black/6 bg-white p-6 sm:p-7">
              <h3 className="text-lg font-bold text-[#173228]">{review.name}</h3>
              <p className="mt-1 text-sm text-black/55">{review.profile[lang]}</p>
              <p className="mt-3 text-sm text-black/55">{review.date[lang]} · {review.stay[lang]}</p>
              <blockquote lang={lang} className="mt-4 leading-7 text-black/80">
                <p>{review.text[lang]}</p>
              </blockquote>
              {review.excerpt && (
                <a href={listing} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-bold text-[#24483a] underline underline-offset-4">
                  {spanish ? "Leer reseña completa en Airbnb" : "Read full review on Airbnb"}
                </a>
              )}
            </article>
          ))}
        </div>

        <details className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
          <summary className="cursor-pointer font-bold text-[#24483a]">{spanish ? "Ver la captura original completa (en inglés)" : "View the complete original screenshot (in English)"}</summary>
          <figure className="mx-auto mt-5 max-w-[980px]">
            <a href={screenshot} target="_blank" rel="noreferrer" aria-label={spanish ? "Abrir la captura original a tamaño completo" : "Open the original screenshot at full size"}>
              <Image
                src={screenshot}
                width={980}
                height={1031}
                unoptimized
                className="h-auto w-full"
                alt={spanish ? "Captura original de Airbnb en inglés con la calificación 4.88, las categorías, las menciones y las seis reseñas transcritas arriba." : "Original Airbnb screenshot in English showing the 4.88 rating, categories, guest mentions and the six reviews transcribed above."}
              />
            </a>
            <figcaption className="mt-4 text-center text-sm leading-6 text-black/60">
              <a href={screenshot} target="_blank" rel="noreferrer" className="underline underline-offset-4">{spanish ? "Abrir imagen a tamaño completo" : "Open full-size image"}</a>
              <span className="mt-1 block">{spanish ? "Los botones dentro de la captura forman parte de la imagen. Para leer las reseñas completas, visita Airbnb." : "Buttons inside the screenshot are part of the image. Visit Airbnb to read the complete reviews."}</span>
            </figcaption>
          </figure>
        </details>
        <div className="mt-6 text-center">
          <a href={listing} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#24483a] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#173228] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#24483a]">
            {spanish ? "Leer todas las reseñas en Airbnb" : "Read all reviews on Airbnb"}
          </a>
        </div>
      </div>
    </section>
  );
}
