"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";

const screenshot = "/images/casa-cutuco-2-airbnb-reviews.png";

export default function AirbnbReviews() {
  const { lang } = useLang();
  const spanish = lang === "es";

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="border-y border-black/6 bg-[#fbf5e9]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">Casa Cutuco #2 · Airbnb</p>
        <h2 id="reviews-title" className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">
          {spanish ? "Lo que dicen nuestros huéspedes" : "What our guests say"}
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-black/60">
          {spanish
            ? "Captura de nuestras reseñas en Airbnb: 4.88 de 5, con 8 reseñas. La imagen se muestra completa, tal como fue compartida; no se actualiza automáticamente."
            : "A snapshot of our Airbnb reviews: 4.88 out of 5, from 8 reviews. The complete image is shown as shared; it does not update automatically."}
        </p>
        <figure className="mx-auto mt-8 max-w-[980px]">
          <a
            href={screenshot}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl bg-white shadow-[0_18px_50px_rgba(20,34,27,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#24483a]"
            aria-label={spanish ? "Abrir la captura completa de reseñas en una pestaña nueva" : "Open the complete review screenshot in a new tab"}
          >
            <Image
              src={screenshot}
              width={980}
              height={1031}
              unoptimized
              className="h-auto w-full rounded-2xl"
              alt={spanish
                ? "Airbnb: favorito entre huéspedes, 4.88 de 5. Limpieza 4.8; precisión, llegada y comunicación 5.0; ubicación y calidad-precio 4.9. Menciones: ubicación 5, hospitalidad 4, limpieza 2. Reseñas visibles de Josué Neftalí (dos), Txell, Charles, Wendy Ramírez y Jenny Carmelina. Algunos comentarios están truncados en la captura original."
                : "Airbnb Guest favorite, rated 4.88 out of 5. Cleanliness 4.8; accuracy, check-in and communication 5.0; location and value 4.9. Guests mention location 5, hospitality 4, cleanliness 2. Visible reviews by Josué Neftalí (two), Txell, Charles, Wendy Ramírez and Jenny Carmelina. Some comments are truncated in the original screenshot."}
            />
          </a>
          <figcaption className="mt-4 text-center text-sm leading-6 text-black/60">
            <a href={screenshot} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              {spanish ? "Abrir imagen a tamaño completo" : "Open full-size image"}
            </a>
            <span className="mt-1 block">
              {spanish ? "Los botones dentro de la captura forman parte de la imagen. Para leer las reseñas completas, visita Airbnb." : "Buttons inside the screenshot are part of the image. Visit Airbnb to read the complete reviews."}
            </span>
          </figcaption>
        </figure>
        <div className="mt-6 text-center">
          <a href="https://airbnb.com/h/casacutuco2-berlin-usulutan-es" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#24483a] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#173228] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#24483a]">
            {spanish ? "Leer todas las reseñas en Airbnb" : "Read all reviews on Airbnb"}
          </a>
        </div>
      </div>
    </section>
  );
}
