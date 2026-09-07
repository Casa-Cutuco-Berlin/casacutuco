"use client";
import { useEffect, useState } from "react";
import { MapPin, Droplets, Wind } from "lucide-react";
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
              ? "Casa Cutuco está en Berlín, Usulután, rodeado de vistas a las montañas, paisajes cafetaleros y cultura salvadoreña. Compartimos los detalles exactos de llegada de forma privada después de reservar."
              : "Casa Cutuco is in Berlín, Usulután, surrounded by mountain views, coffee-growing landscapes, and Salvadoran culture. Exact arrival details are shared privately after booking."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#24483a] to-[#173228] p-8 text-white shadow-lg border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur">
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-1">
                    {lang === "es" ? "Privacidad" : "Privacy"}
                  </p>
                  <p className="text-xl font-black mb-2">
                    {lang === "es" ? "Ubicación exacta compartida después de reservar" : "Exact location shared after booking"}
                  </p>
                  <p className="text-white/80">
                    {lang === "es"
                      ? "Mostramos la zona general de Berlín, Usulután, pero no publicamos la dirección exacta en el sitio."
                      : "We show the general Berlín, Usulután area, but do not publish the exact property address on the site."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <WeatherWidget />
            <div>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                {lang === "es" ? "Lo Que Disfrutarás" : "What You'll Enjoy"}
              </p>
              <FeatureHighlights />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
