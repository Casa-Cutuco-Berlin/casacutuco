"use client";

import { useState } from "react";
import { X, Images } from "lucide-react";
import { galleries } from "@/lib/galleries";
import { useLang } from "./LanguageProvider";

function GalleryBlock({ propertyId, title }: { propertyId: keyof typeof galleries; title: string }) {
  const { lang } = useLang();
  const photos = galleries[propertyId];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mt-10 first:mt-0">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[.16em] text-[#b96745]">
            {lang === "es" ? "Galería de fotos" : "Photo gallery"}
          </p>
          <h3 className="mt-1 text-2xl font-black">{title}</h3>
        </div>
        <span className="flex items-center gap-2 text-sm font-semibold text-black/45">
          <Images size={16}/> {photos.length} {lang === "es" ? "fotos" : "photos"}
        </span>
      </div>

      <div className="grid auto-rows-[180px] gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelected(src)}
            className={`group overflow-hidden rounded-[22px] bg-black/5 ${
              index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
            aria-label={`${title} photo ${index + 1}`}
          >
            <img
              src={src}
              alt={`${title} photo ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white text-black"
            onClick={() => setSelected(null)}
            aria-label="Close gallery"
          >
            <X size={22}/>
          </button>
          <img
            src={selected}
            alt={title}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default function PhotoGalleries() {
  const { lang } = useLang();

  return (
    <section id="photos" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
          {lang === "es" ? "Explora los espacios" : "Explore the spaces"}
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">
          {lang === "es" ? "Fotos de Casa Cutuco" : "Casa Cutuco photos"}
        </h2>
        <p className="mt-4 leading-7 text-black/55">
          {lang === "es"
            ? "Mira las áreas, habitaciones y detalles de cada alojamiento antes de reservar."
            : "Browse the rooms, spaces and details of each stay before you reserve."}
        </p>
      </div>

      <div className="mt-10">
        <GalleryBlock propertyId="casa-1" title="Casa Cutuco #1" />
        <GalleryBlock propertyId="casa-2" title="Casa Cutuco #2" />
        <GalleryBlock
          propertyId="garden-terrace-views"
          title={lang === "es" ? "Jardín, terraza y vistas" : "Garden, terrace & views"}
        />
      </div>
    </section>
  );
}
