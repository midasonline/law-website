import Image from "next/image";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";

export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden p-4 md:p-7">
      <div className="absolute inset-y-0 left-[-18.3333%] -z-10 w-[136.6667%]"><Image src="/images/footer-background.png" alt="" fill sizes="137vw" className="object-bottom" /></div>
      <div className="relative flex min-h-[calc(742.33*var(--unit))] flex-col bg-page pt-14 pb-7 md:pt-24">
        <div className="page-container flex flex-1 flex-col">
          <div className="relative grid grid-cols-2 gap-x-7 gap-y-10 text-base md:grid-cols-[1.53fr_1fr_.84fr_.94fr] md:gap-x-0">
            <div className="col-span-2 sm:col-span-1 lg:pl-[calc(90*var(--unit))]">
              <a href="#home" aria-label="Lawvia home" className="relative block h-[calc(54*var(--unit))] w-[calc(218*var(--unit))]"><Image src="/images/lawvia-logo.png" alt="Lawvia" fill sizes="(min-width: 1440px) 15.14vw, 218px" className="object-contain" /></a>
              <p className="mt-6 max-w-[calc(238*var(--unit))] leading-6">Specialized counsel built on decades of experience and a commitment to your interests.</p>
            </div>
            <div className="pt-3 text-[length:calc(16.1*var(--unit))] leading-[calc(21*var(--unit))]">
              <p className="mb-1.5 font-semibold">Contact</p>
              <a href="tel:+10509909090" className="hover:underline">+1 050 990 9090</a>
              <p className="mt-1.5 mb-1.5 font-semibold">Office</p>
              <p>Our Years 34<br />29000</p>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-col items-start pt-3 leading-6">
              <a href="#practice" className="hover:underline">Services</a>
              <a href="#about" className="hover:underline">About</a>
              <ConsultationTrigger topic="Your case" className="hover:underline">Cases</ConsultationTrigger>
              <a href="#insights" className="hover:underline">Insights</a>
              <a href="mailto:contact@lawvia.com" className="hover:underline">Contact</a>
            </nav>
            <div className="pt-3 leading-6">
              <p>Opening hours:</p>
              <p className="mt-6">Monday to Friday<br />08:00am – 16:00pm</p>
            </div>
            <span aria-hidden="true" className="absolute top-0 right-0 size-[calc(11.19*var(--unit))] bg-white" />
          </div>
          <p aria-label="Lawvia and Partners" className="mt-24 mb-20 whitespace-nowrap text-[34px] leading-none font-medium tracking-[calc(-1.28*var(--unit))] sm:text-[60px] md:mt-auto md:mb-24 md:pt-20 md:text-[72px] lg:text-[104px] xl:text-[128px] min-[1440px]:text-display">Lawvia &amp; Partners</p>
          <div className="grid grid-cols-2 items-end gap-5 text-[10px] leading-3 font-medium uppercase md:grid-cols-[2fr_1fr_1fr_auto] md:text-xs">
            <p>Design: Lukas Rudrof</p>
            <a href="mailto:contact@lawvia.com?subject=Privacy%20policy%20request" className="hover:underline">PrivacyPolicy</a>
            <a href="mailto:contact@lawvia.com?subject=Legal%20notice%20request" className="hover:underline">LegalNotice</a>
            <p className="text-right">2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
