"use client";
import Link from "next/link";
import { House } from "lucide-react";
import { useLang } from "./LanguageProvider";

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fffdf8]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-[#24483a] text-white"><House size={18}/></span>
          <span>
            <b className="block text-[15px] leading-4">CASA CUTUCO</b>
            <span className="text-[10px] uppercase tracking-[.17em] text-black/45">Berlín · El Salvador</span>
          </span>
        </Link>
        <nav className="hidden gap-7 text-sm font-semibold md:flex">
          <a href="#homes">{t.navHomes}</a>
          <a href="#photos">{lang === "es" ? "Fotos" : "Photos"}</a>
          <a href="#location">{t.navLocation}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="rounded-full border border-black/10 px-3 py-2 text-xs font-black">
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a href="#homes" className="rounded-full bg-[#24483a] px-4 py-2.5 text-sm font-bold text-white">{t.book}</a>
        </div>
      </div>
    </header>
  );
}
