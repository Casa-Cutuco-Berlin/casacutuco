"use client";
import React, { useEffect, useState } from "react";
import { MapPin, Droplets, Wind, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "./LanguageProvider";

// Weather Widget Component
function WeatherWidget() {
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // Using Open-Meteo free API (no API key required)
        const lat = 13.496171711959391;
        const lon = -88.53015834864676;

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=celsius&wind_speed_unit=kmh&forecast_days=5&timezone=auto`,
          { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) throw new Error("Failed to fetch weather");

        const data = await response.json();
        setWeather(data.current);
        setForecast(data.daily);
        setError(null);
      } catch (err) {
        setError("Unable to load weather");
        console.error("Weather fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (code: number) => {
    if (code === 0 || code === 1) return "☀️";
    if (code === 2 || code === 3) return "⛅";
    if (code === 45 || code === 48) return "🌫️";
    if (code === 51 || code === 53 || code === 55) return "🌧️";
    if (code === 61 || code === 63 || code === 65) return "🌧️";
    if (code === 71 || code === 73 || code === 75) return "❄️";
    if (code === 80 || code === 81 || code === 82) return "⛈️";
    return "🌤️";
  };

  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="h-32 animate-pulse bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  if (error || !weather) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Current Weather</p>
          <div className="flex items-center gap-3">
            <span className="text-5xl">{getWeatherIcon(weather.weather_code)}</span>
            <div>
              <p className="text-4xl font-bold text-gray-900">{Math.round(weather.temperature_2m)}°C</p>
              <p className="text-sm text-gray-600 mt-1">Berlín, Usulután</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-100">
        <div className="flex items-center gap-2">
          <Droplets size={18} className="text-blue-500" />
          <div>
            <p className="text-xs text-gray-600">Humidity</p>
            <p className="font-semibold text-gray-900">{weather.relative_humidity_2m}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Wind size={18} className="text-blue-500" />
          <div>
            <p className="text-xs text-gray-600">Wind Speed</p>
            <p className="font-semibold text-gray-900">{Math.round(weather.wind_speed_10m)} km/h</p>
          </div>
        </div>
      </div>

      {forecast && (
        <div className="mt-6 pt-4 border-t border-blue-100">
          <p className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">5-Day Forecast</p>
          <div className="flex gap-2">
            {forecast.time.slice(0, 5).map((date: string, idx: number) => (
              <div key={idx} className="flex-1 text-center p-2 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">
                  {new Date(date).toLocaleDateString("en-US", { weekday: "short" })}
                </p>
                <p className="text-xl mb-1">{getWeatherIcon(forecast.weather_code[idx])}</p>
                <p className="text-xs font-semibold text-gray-900">
                  {Math.round(forecast.temperature_2m_max[idx])}°
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type AttractionContent = {
  id: number;
  icon: string;
  time: string;
  image: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: { es: string; en: string };
};

const attractionsContent: AttractionContent[] = [
  {
    id: 1,
    icon: "🏛️",
    title: { es: "Parque Central de Berlín", en: "Berlín Central Park" },
    description: {
      es: "Plaza principal de Berlín con ambiente local, árboles y espacios culturales.",
      en: "Berlín’s main square with local atmosphere, trees, and cultural gathering spaces."
    },
    time: "5 min",
    category: { es: "Pueblo", en: "Town" },
    image: "https://github.com/user-attachments/assets/6f0d0ef2-a3e0-4251-8b5c-a79ce854734c"
  },
  {
    id: 2,
    icon: "🌄",
    title: { es: "Paisajes de Berlín", en: "Berlín Scenic Landscapes" },
    description: {
      es: "Vistas panorámicas de la zona de Berlín y sus alrededores montañosos.",
      en: "Panoramic views around Berlín and its mountainous surroundings."
    },
    time: "10-20 min",
    category: { es: "Vistas", en: "Views" },
    image: "https://github.com/user-attachments/assets/9f64f545-6e2e-43e5-9ba6-a74cbdc1d657"
  },
  {
    id: 3,
    icon: "🌿",
    title: { es: "Naturaleza y Senderos", en: "Nature & Trails" },
    description: {
      es: "Rutas y áreas verdes para caminar y disfrutar el clima fresco de la zona.",
      en: "Trails and green areas to walk and enjoy the region’s cool weather."
    },
    time: "20-30 min",
    category: { es: "Naturaleza", en: "Nature" },
    image: "https://github.com/user-attachments/assets/54d3de71-f395-4eea-aa19-d1b18eef5eab"
  },
  {
    id: 4,
    icon: "🎭",
    title: { es: "Cultura Local", en: "Local Culture" },
    description: {
      es: "Lugares representativos para conocer la identidad y vida local de Berlín.",
      en: "Representative spots to experience Berlín’s local identity and everyday life."
    },
    time: "10-15 min",
    category: { es: "Cultura", en: "Culture" },
    image: "https://github.com/user-attachments/assets/acc1d6a2-c885-44a2-96e5-cda4915dcebf"
  }
];

// Attractions Carousel with Images
function AttractionsCarousel() {
  const { lang } = useLang();
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const attractions = attractionsContent.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: lang === "es" ? item.title.es : item.title.en,
    description: lang === "es" ? item.description.es : item.description.en,
    time: item.time,
    category: lang === "es" ? item.category.es : item.category.en,
    image: item.image
  }));

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 320;
    const newPos = direction === "left" 
      ? Math.max(0, scrollPos - scrollAmount)
      : Math.min(
          containerRef.current.scrollWidth - containerRef.current.clientWidth,
          scrollPos + scrollAmount
        );
    
    containerRef.current.scrollTo({ left: newPos, behavior: "smooth" });
    setScrollPos(newPos);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-semibold text-[#b96745] uppercase tracking-wider">
            {lang === "es" ? "Explorar" : "Explore"}
          </p>
          <h3 className="text-2xl font-black text-gray-900 mt-1">
            {lang === "es" ? "Lugares Cercanos" : "Nearby Attractions"}
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {attractions.map((attraction) => (
          <div
            key={attraction.id}
            className="snap-start flex-shrink-0 w-80 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden bg-gray-200">
              <img 
                src={attraction.image} 
                alt={attraction.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{attraction.icon}</span>
                <span className="inline-block bg-gray-100 px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {attraction.category}
                </span>
              </div>
              <h4 className="font-black text-lg text-gray-900 mb-2">{attraction.title}</h4>
              <p className="text-sm text-gray-600 mb-4 leading-6">{attraction.description}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#b96745]">
                <MapPin size={16} />
                {attraction.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Separate Photo Gallery Section
function AttractionsPhotoGallery() {
  const { lang } = useLang();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = attractionsContent.map((item) => ({
    id: item.id,
    title: lang === "es" ? item.title.es : item.title.en,
    category: lang === "es" ? item.category.es : item.category.en,
    image: item.image,
    description: lang === "es" ? item.description.es : item.description.en
  }));

  return (
    <div className="space-y-8">
      {/* Gallery Title */}
      <div>
        <p className="text-sm font-semibold text-[#b96745] uppercase tracking-wider">
          {lang === "es" ? "Galería" : "Gallery"}
        </p>
        <h3 className="text-3xl font-black text-gray-900 mt-2">
          {lang === "es" ? "Atracciones Cercanas de Berlín" : "Attractions Around Berlín"}
        </h3>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(idx)}
            className="cursor-pointer group overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 text-blue-200">{item.category}</p>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-white/90 mt-1 leading-5">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={galleryImages[selectedImage].image}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto max-h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage + 1) % galleryImages.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm font-bold text-[#b96745] uppercase tracking-wider mb-2">
                {galleryImages[selectedImage].category}
              </p>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-600 leading-7">
                {galleryImages[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Feature Highlights Component
function FeatureHighlights() {
  const { lang } = useLang();

  const features = [
    { icon: "☕", title: lang === "es" ? "Región Cafetera" : "Coffee Region", color: "from-amber-50 to-amber-100" },
    { icon: "🌄", title: lang === "es" ? "Vistas Montañosas" : "Mountain Views", color: "from-emerald-50 to-emerald-100" },
    { icon: "🥾", title: lang === "es" ? "Senderos" : "Nature Trails", color: "from-green-50 to-green-100" },
    { icon: "🍽️", title: lang === "es" ? "Gastronomía Local" : "Local Dining", color: "from-orange-50 to-orange-100" },
    { icon: "🏡", title: lang === "es" ? "Pueblo Histórico" : "Historic Town", color: "from-blue-50 to-blue-100" },
    { icon: "🌿", title: lang === "es" ? "Clima Fresco" : "Cool Climate", color: "from-teal-50 to-teal-100" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${feature.color} rounded-2xl p-5 text-center hover:shadow-md transition-all duration-300 transform hover:scale-105`}
        >
          <p className="text-3xl mb-2">{feature.icon}</p>
          <p className="text-sm font-bold text-gray-800">{feature.title}</p>
        </div>
      ))}
    </div>
  );
}

// Main Location Section
export default function LocationSection() {
  const { lang } = useLang();

  const mapEmbedUrl = "https://www.google.com/maps?q=Berl%C3%ADn%2C%20Usulut%C3%A1n%2C%20El%20Salvador&output=embed";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Berl%C3%ADn%2C%20Usulut%C3%A1n%2C%20El%20Salvador";

  return (
    <section id="location" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-black uppercase tracking-[.18em] text-[#b96745] mb-3">
            {lang === "es" ? "Ubicación" : "Location"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-[-.045em] text-gray-900 mb-4">
            {lang === "es" ? "Donde Te Alojarás" : "Where You'll Be"}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            {lang === "es"
            ? "Casa Cutuco está en Berlín, Usulután, rodeado de vistas a las montañas, paisajes de cultivo de café y auténtica cultura salvadoreña."
            : "Casa Cutuco is in Berlín, Usulután, surrounded by mountain views, coffee-growing landscapes, and authentic Salvadoran culture."}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column: Map */}
          <div className="space-y-6">
            {/* Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "24px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Berlín Town Map"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Weather & Features */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <WeatherWidget />

            {/* Feature Highlights */}
            <div>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                {lang === "es" ? "Lo Que Disfrutarás" : "What You'll Enjoy"}
              </p>
              <FeatureHighlights />
            </div>
          </div>
        </div>

        {/* Attractions Carousel with Images */}
        <div className="my-20">
          <AttractionsCarousel />
        </div>

        {/* Photo Gallery Section */}
        <div className="my-20 py-16 border-t border-b border-gray-100">
          <AttractionsPhotoGallery />
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4">
            {lang === "es"
              ? "¿Listo para planificar tu viaje a Berlín, Usulután?"
              : "Ready to plan your trip to Berlín, Usulután?"}
          </p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#b96745] text-white font-bold py-4 px-8 rounded-full hover:bg-[#a85738] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MapPin size={20} />
            {lang === "es" ? "Explorar la Ubicación" : "Explore the Location"}
          </a>
        </div>
      </div>
    </section>
  );
}
