import Image from "next/image";
import { CornerMarks } from "@/components/ui/corner-marks";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";

export function Attorneys() {
  return (
    <section id="attorneys" aria-labelledby="attorneys-title" className="relative isolate flex h-[720px] items-end overflow-hidden md:h-[calc(960*var(--unit))]">
      <div className="team-image-crop absolute -z-20"><Image src="/images/team.png" alt="Four Lawvia attorneys standing together outside a modern office building" fill sizes="(max-width: 767px) 230vw, 123vw" className="object-cover" /></div>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/65 via-transparent to-transparent" />
      <CornerMarks className="page-container top-10 md:top-18" />
      <div className="page-container flex flex-col items-start justify-between gap-8 pb-14 md:flex-row md:items-end md:pb-18">
        <h2 id="attorneys-title" className="max-w-[calc(905*var(--unit))] text-[40px] leading-[1.08] font-medium tracking-[-1.28px] md:text-section">Meet the Minds Behind<br className="hidden md:block" /> Every Verdict</h2>
        <ConsultationTrigger className="shrink-0 border-b border-white/30 pb-2 text-left text-sm leading-tight hover:border-white">Schedule<br />Consultation</ConsultationTrigger>
      </div>
    </section>
  );
}
