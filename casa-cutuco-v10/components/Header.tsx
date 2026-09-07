"use client";
import Link from "next/link";
import { House } from "lucide-react";
import { useLang } from "./LanguageProvider";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffdf8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b96745]/60 focus-visible:ring-offset-2">
          <span className="grid size-9 place-items-center rounded-full bg-[#24483a] text-white shadow-sm"><House size={18}/></span>
          <span>
            <b className="block text-[15px] leading-4 tracking-[0.08em]">CASA CUTUCO</b>
            <span className="text-[10px] uppercase tracking-[.17em] text-black/45">Berlín · El Salvador</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <a href="#homes" className="transition-colors hover:text-[#b96745]">{t.navHomes}</a>
          <a href="#photos" className="transition-colors hover:text-[#b96745]">{t.navPhotos}</a>
          <a href="#location" className="transition-colors hover:text-[#b96745]">{t.navLocation}</a>
          <a href="#contact" className="transition-colors hover:text-[#b96745]">{t.navContact}</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-black transition-colors hover:border-[#b96745]/40 hover:text-[#b96745] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b96745]/60 focus-visible:ring-offset-2"
            aria-label={lang === "en" ? "Switch language to Spanish" : "Switch language to English"}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a href="#homes" className="rounded-full bg-[#24483a] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#1d352d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24483a]/60 focus-visible:ring-offset-2">{t.book}</a>
        </div>
      </div>
    </header>
  );
}
