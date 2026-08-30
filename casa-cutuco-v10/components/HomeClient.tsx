"use client";
import Header from "./Header";
import PropertyCard from "./PropertyCard";
import VideoTour from "./VideoTour";
import PhotoGalleries from "./PhotoGalleries";
import LocationSection from "./LocationSection";
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

      <section className="border-y border-black/6 bg-[#fbf5e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8 lg:py-20">
          <div className="order-1">
            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(20,34,27,0.12)]">
              <img
                src="https://github.com/user-attachments/assets/37349318-3c7e-46c7-89a1-84f80c27fdd6"
                alt="Portrait of Jose Eliseo Soriano, Chepe Cutuco"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="order-2">
            <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
              {lang === "es" ? "Nuestra historia" : "Our story"}
            </p>
            <blockquote className="mt-5">
              <p
                className="text-[2.5rem] leading-[1.2] text-[#24483a] sm:text-[3.2rem] lg:text-[3.8rem]"
                style={{ fontFamily: "\"Snell Roundhand\", \"Brush Script MT\", \"Segoe Script\", cursive" }}
              >
                “Yo nunca le he negado mi casa a nadie. Mi puerta siempre estará abierta para mi familia y amigos, mientras haya respeto y amor.”
              </p>
            </blockquote>
            <p className="mt-6 text-lg font-semibold text-[#173228]">
              — Jose Eliseo Soriano “Chepe Cutuco”
            </p>
            <p className="mt-2 text-sm uppercase tracking-[.22em] text-black/45">
              Casacutuco.com
            </p>
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
        <a href="https://wa.me/17605965501" target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#b96745] px-7 py-4 font-bold text-white">
          {t.contact}
        </a>
        <p className="mt-3 text-sm text-black/45">+1 (760) 596-5501</p>
      </section>
    </main>
  );
}
