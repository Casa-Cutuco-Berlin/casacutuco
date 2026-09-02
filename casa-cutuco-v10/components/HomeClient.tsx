"use client";
import Header from "./Header";
import PropertyCard from "./PropertyCard";
import VideoTour from "./VideoTour";
import PhotoGalleries from "./PhotoGalleries";
import LocationSection from "./LocationSection";
import { properties } from "@/lib/properties";
import { useLang } from "./LanguageProvider";
import { CalendarSync, ShieldCheck, MapPin } from "lucide-react";

export default function HomeClient() {
  const { t, lang } = useLang();

  return (
    <main>
      <Header />
      <section className="hero min-h-[720px] text-white">
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-xs font-bold backdrop-blur"><MapPin size={14}/>{t.heroEyebrow}</span>
            <h1 className="mt-6 text-5xl font-black leading-[.97] tracking-[-.055em] sm:text-6xl lg:text-7xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{t.heroText}</p>
            <a href="#homes" className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 font-bold text-[#173228]">{t.explore}</a>
          </div>
        </div>
      </section>

      <section id="homes" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">{t.choose}</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">{t.chooseTitle}</h2>
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          <PropertyCard id="casa-1"/>
          <PropertyCard id="casa-2"/>
        </div>
      </section>

      <PhotoGalleries />

      <VideoTour />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 rounded-[30px] border border-black/8 bg-[#f8f5ee] p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://github.com/user-attachments/assets/121b437c-f698-46b0-a7c3-309d19a3b0a1"
              alt="Casa Cutuco IM"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
              {lang === "es" ? "Historia" : "Story"}
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">
              {lang === "es" ? "Casa Cutuco IM" : "Casa Cutuco IM"}
            </h2>
            <p className="mt-4 leading-7 text-black/65">
              {lang === "es"
                ? "Casa Cutuco IM representa la esencia de Berlín, Usulután: tranquilidad, hospitalidad y conexión con la cultura local. Es una experiencia pensada para descansar y disfrutar la montaña."
                : "Casa Cutuco IM reflects the essence of Berlín, Usulután: calm, hospitality, and connection with local culture. It is designed as a stay experience to rest and enjoy the mountain setting."}
            </p>
          </div>
        </div>
      </section>

      <LocationSection />

      <section id="location-info" className="bg-[#24483a] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 lg:px-8">
          <div className="rounded-[28px] border border-white/15 p-7">
            <CalendarSync size={28}/>
            <h3 className="mt-5 text-2xl font-black">{t.syncTitle}</h3>
            <p className="mt-3 leading-7 text-white/70">{t.syncText}</p>
          </div>
          <div className="rounded-[28px] border border-white/15 p-7">
            <ShieldCheck size={28}/>
            <h3 className="mt-5 text-2xl font-black">{t.directTitle}</h3>
            <p className="mt-3 leading-7 text-white/70">{t.directText}</p>
          </div>
        </div>
      </section>

      
      <section className="border-t border-black/8 bg-[#f8f5ee]">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
            {lang === "es" ? "Cómo reservar" : "How booking works"}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">
            {lang === "es" ? "Conoce la propiedad aquí. Reserva en Airbnb." : "Discover the property here. Book on Airbnb."}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-black/55">
            {lang === "es"
              ? "Casa Cutuco te muestra ambas opciones, fotos y detalles en un solo lugar. Cuando estés listo, Airbnb maneja disponibilidad en vivo, precio final, pago y confirmación."
              : "Casa Cutuco brings both homes, photos and key details together in one place. When you're ready, Airbnb handles live availability, final pricing, payment and confirmation."}
          </p>
        </div>
      </section>

<section id="contact" className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8">
        <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
          {lang === "es" ? "Reserva" : "Booking"}
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">
          {lang === "es" ? "Elige tu casa y reserva en Airbnb" : "Choose your home and book on Airbnb"}
        </h2>
        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          <a
            href={properties[0].airbnb}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[#24483a] px-7 py-4 font-bold text-white"
          >
            {lang === "es" ? "Reservar Casa Cutuco #1" : "Book Casa Cutuco #1"}
          </a>
          <a
            href={properties[1].airbnb}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[#b96745] px-7 py-4 font-bold text-white"
          >
            {lang === "es" ? "Reservar Casa Cutuco #2" : "Book Casa Cutuco #2"}
          </a>
        </div>
      </section>
    </main>
  );
}
