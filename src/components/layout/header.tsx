"use client";

import Image from "next/image";
import { useState } from "react";
import { navigation } from "@/data/home";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="home" className="relative z-30 border-b border-line bg-page">
      <div className="page-container flex min-h-[calc(136*var(--unit))] items-center gap-6 py-7 max-[1199px]:min-h-24 max-[767px]:min-h-22">
        <a href="#home" aria-label="Lawvia home" onClick={() => setMenuOpen(false)} className="relative block h-[calc(51*var(--unit))] w-[calc(205*var(--unit))] shrink-0 max-[767px]:h-10 max-[767px]:w-40">
          <Image src="/images/lawvia-logo.png" alt="Lawvia" fill sizes="(min-width: 1440px) 14.24vw, 205px" className="object-contain" preload />
        </a>
        <nav aria-label="Main navigation" className="hidden flex-1 items-center gap-[calc(25*var(--unit))] min-[1200px]:flex">
          {navigation.map((item) => "inquiry" in item ? (
            <ConsultationTrigger key={item.label} topic={item.inquiry} className="text-sm font-medium hover:text-white/60">{item.label}</ConsultationTrigger>
          ) : <a key={item.label} href={item.href} className={`text-sm font-medium whitespace-nowrap hover:text-white/60 ${item.label === "Home" ? "underline underline-offset-3" : ""}`}>{item.label}</a>)}
        </nav>
        <ConsultationTrigger className="ml-auto hidden shrink-0 border border-line px-[calc(22*var(--unit))] py-[calc(17*var(--unit))] text-[length:calc(16*var(--unit))] leading-5 font-medium transition-colors hover:bg-white hover:text-black sm:block">Book Consultation ↗</ConsultationTrigger>
        <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="ml-auto flex size-12 flex-col items-center justify-center gap-1.5 border border-line min-[1200px]:hidden">
          <span className={`h-px w-5 bg-white transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-white transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }} className="absolute inset-x-0 top-full grid border-b border-line bg-page px-5 py-6 shadow-2xl min-[1200px]:hidden">
        {navigation.map((item) => "inquiry" in item ? (
          <ConsultationTrigger key={item.label} topic={item.inquiry} onActivate={() => setMenuOpen(false)} className="border-b border-white/10 py-4 text-left text-xl">{item.label}</ConsultationTrigger>
        ) : <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 py-4 text-xl">{item.label}</a>)}
        <ConsultationTrigger onActivate={() => setMenuOpen(false)} className="mt-6 bg-white px-5 py-4 text-black">Book Consultation ↗</ConsultationTrigger>
      </nav>}
    </header>
  );
}
