"use client";

import { useEffect, useState } from "react";
import { properties } from "@/lib/properties";
import { useLang } from "./LanguageProvider";
import { BedDouble, Star, Users, CalendarCheck2, ExternalLink } from "lucide-react";

type BlockedRange = { start: string; end: string };

export default function PropertyCard({ id }: { id: string }) {
  const p = properties.find(x => x.id === id)!;
  const { t, lang } = useLang();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    fetch(`/api/availability?property=${id}`)
      .then(r => r.json())
      .then(data => setConnected(Boolean(data.connected)))
      .catch(() => setConnected(false));
  }, [id]);

  return (
    <article className="overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-sm">
      <img src={p.image} alt={p.name} className="aspect-[4/3] w-full object-cover"/>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-black uppercase tracking-[.14em] text-[#b96745]">
          {id === "casa-1" ? t.casa1 : t.casa2}
        </p>

        <div className="mt-2 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-black">{p.name}</h3>
          <span className="flex items-center gap-1 text-sm font-bold">
            <Star size={14} fill="currentColor"/>{p.rating}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-4 border-y border-black/8 py-4 text-sm text-black/60">
          <span className="flex items-center gap-2"><Users size={16}/>{p.guests} {t.guests}</span>
          <span className="flex items-center gap-2"><BedDouble size={16}/>{p.beds} {t.beds}</span>
          <span>1 {t.bath}</span>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-[#f4f8f5] px-4 py-3 text-sm font-semibold text-[#24483a]">
          <CalendarCheck2 size={17}/>
          {connected
            ? (lang === "es" ? "Calendario de Airbnb conectado" : "Airbnb calendar connected")
            : (lang === "es" ? "Disponibilidad en Airbnb" : "Availability on Airbnb")}
        </div>

        <a
          href={p.airbnb}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#24483a] px-5 py-3.5 font-bold text-white"
        >
          {lang === "es" ? "Reservar en Airbnb" : "Reserve on Airbnb"}
          <ExternalLink size={17}/>
        </a>

        <p className="mt-3 text-center text-xs leading-5 text-black/40">
          {lang === "es"
            ? "Precios, fechas y pago final se confirman de forma segura en Airbnb."
            : "Pricing, dates and final payment are securely confirmed on Airbnb."}
        </p>
      </div>
    </article>
  );
}
