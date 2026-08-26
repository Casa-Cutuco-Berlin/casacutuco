"use client";

import { PlayCircle } from "lucide-react";
import { useLang } from "./LanguageProvider";

const videos = [
  "/videos/casa-cutuco-tour-1.mp4",
  "/videos/casa-cutuco-tour-2.mp4",
  "/videos/casa-cutuco-tour-3.mp4",
];

export default function VideoTour() {
  const { lang } = useLang();

  return (
    <section id="video" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
          <PlayCircle size={16}/>
          {lang === "es" ? "Videos de Casa Cutuco" : "Casa Cutuco videos"}
        </span>
        <h2 className="mt-3 text-4xl font-black tracking-[-.045em]">
          {lang === "es" ? "Conoce Casa Cutuco antes de llegar." : "See Casa Cutuco before you arrive."}
        </h2>
        <p className="mt-4 leading-7 text-black/55">
          {lang === "es"
            ? "Mira nuestros videos para conocer mejor los espacios y sentir cómo sería tu estadía en Berlín."
            : "Watch our videos for a closer look at the spaces and a feel for what your stay in Berlín could be like."}
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {videos.map((src, index) => (
          <div key={src} className="overflow-hidden rounded-[26px] bg-black shadow-lg shadow-black/10">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] max-h-[620px] w-full bg-black object-contain"
            >
              <source src={src} type="video/mp4" />
              {lang === "es"
                ? "Tu navegador no puede reproducir este video."
                : "Your browser does not support this video."}
            </video>
            <div className="bg-white px-4 py-3 text-sm font-bold">
              {lang === "es" ? `Video ${index + 1}` : `Video ${index + 1}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
