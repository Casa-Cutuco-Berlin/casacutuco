"use client";
import { useState } from "react";
import Header from "./Header";
import PropertyCard from "./PropertyCard";
import VideoTour from "./VideoTour";
import PhotoGalleries from "./PhotoGalleries";
import LocationSection from "./LocationSection";
import BiographySection from "./BiographySection";
import { useLang } from "./LanguageProvider";
import { CalendarSync, ShieldCheck, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

function BerlinTownCarousel() {
  const { lang } = useLang();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://elsalvador.travel/system/wp-content/uploads/2021/04/Berlin6E9A4842.jpg",
      title: lang === "es" ? "Centro de Berlín" : "Berlín town center",
      description: lang === "es" ? "Arquitectura, parque y vida local en el corazón del pueblo." : "Architecture, park views, and local life in the heart of town."
    },
    {
      image: "https://ak-d.tripcdn.com/images/0HJ6t12000isxdnw9DEDC_C_500_280.jpg?proc=source%2ftrip",
      title: lang === "es" ? "Paisajes cafetaleros" : "Coffee landscapes",
      description: lang === "es" ? "Montañas frescas y vistas que rodean Berlín, Usulután." : "Cool mountain scenery and views surrounding Berlín, Usulután."
    },
    {
      image: "https://ak-d.tripcdn.com/images/0HJ2i12000gndc9z0C36E_C_500_280.jpg?proc=source%2ftrip",
      title: lang === "es" ? "Ambiente del pueblo" : "Town atmosphere",
      description: lang === "es" ? "Una mirada al carácter cálido y tranquilo de la zona." : "A look at the warm, peaceful character of the area."
    }
  ];

  const goToPrevious = () => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentIndex((currentIndex + 1) % slides.length);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
            Berlín, Usulután
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.045em] sm:text-5xl">
            {lang === "es" ? "Imágenes del pueblo" : "Town images"}
          </h2>
          <p className="mt-4 leading-7 text-black/55">
            {lang === "es"
              ? "Un vistazo visual al encanto de Berlín, sus paisajes y su ambiente tranquilo."
              : "A visual glimpse of Berlín, its landscapes, and its peaceful atmosphere."}
          </p>
        </div>

        <div className="hidden gap-3 sm:flex">
          <button
            onClick={goToPrevious}
            className="rounded-full border border-black/10 bg-white p-3 text-[#173228] shadow-sm transition hover:bg-[#f8f5ee]"
            aria-label={lang === "es" ? "Imagen anterior" : "Previous image"}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="rounded-full border border-black/10 bg-white p-3 text-[#173228] shadow-sm transition hover:bg-[#f8f5ee]"
            aria-label={lang === "es" ? "Siguiente imagen" : "Next image"}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(20,34,27,0.12)]">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="h-[320px] sm:h-[420px] lg:h-[520px]">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between bg-[#fffdf8] p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745]">
                {lang === "es" ? `Imagen ${currentIndex + 1} de ${slides.length}` : `Image ${currentIndex + 1} of ${slides.length}`}
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-[-.04em] text-[#173228]">
                {slides[currentIndex].title}
              </h3>
              <p className="mt-4 leading-7 text-black/60">
                {slides[currentIndex].description}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition ${index === currentIndex ? "w-10 bg-[#24483a]" : "w-2.5 bg-black/15"}`}
                    aria-label={lang === "es" ? `Ir a imagen ${index + 1}` : `Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3 sm:hidden">
                <button
                  onClick={goToPrevious}
                  className="rounded-full border border-black/10 bg-white p-3 text-[#173228] shadow-sm"
                  aria-label={lang === "es" ? "Imagen anterior" : "Previous image"}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNext}
                  className="rounded-full border border-black/10 bg-white p-3 text-[#173228] shadow-sm"
                  aria-label={lang === "es" ? "Siguiente imagen" : "Next image"}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  const { t, lang } = useLang();

  return (
    <main>
      <Header />
      <section className="hero min-h-[720px] text-white">
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-xs font-bold tracking-[0.08em] uppercase backdrop-blur"><MapPin size={14}/> Berlín, Usulután</span>
            <h1 className="mt-6 text-5xl font-black leading-[.97] tracking-[-.055em] sm:text-6xl lg:text-7xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#homes" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 font-bold text-[#173228] shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5">{t.heroPrimary}</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80">{t.contact}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/6 bg-[#fbf5e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8 lg:py-20">
          <div className="order-1">
            <div className="h-[520px] overflow-hidden rounded-[32px] bg-white shadow-[0_18px_50px_rgba(20,34,27,0.12)] sm:h-[640px] lg:h-[720px]">
              <img
                src="https://github.com/user-attachments/assets/263df52a-eede-4b51-8a21-57cd8581dbba"
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
                «Yo nunca le he negado mi casa a nadie. Mi puerta siempre estará abierta para mi familia y amigos, mientras haya respeto y amor.»
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

      <BerlinTownCarousel />

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

      {/* Keep biography before location details to preserve the story-to-place flow on the homepage. */}
      <BiographySection />

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
