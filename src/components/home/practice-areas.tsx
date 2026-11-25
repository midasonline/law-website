import Image from "next/image";
import { practiceAreas } from "@/data/home";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";
import { CornerMarks } from "@/components/ui/corner-marks";
import { ExpertiseHeading } from "./expertise-heading";

export function PracticeAreas() {
  return (
    <section id="practice" aria-labelledby="practice-title" className="relative bg-page pt-18 pb-14 md:pt-28 md:pb-9">
      <div className="page-container relative">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-[-48px] md:flex-row">
          <ExpertiseHeading />
          <ConsultationTrigger className="mt-2 shrink-0 border-b border-white/30 px-5 pb-2 text-sm hover:border-white" topic="Practice areas">Our Practice</ConsultationTrigger>
        </div>
        <div className="practice-layout">
          {practiceAreas.map((area) => (
            <ConsultationTrigger key={area.number} topic={`${area.title} ${area.secondLine}`.trim()} className={`practice-card ${area.className} group flex flex-col justify-between border p-6 text-left transition-colors ${area.light ? "border-white bg-white text-page hover:bg-[#e0e6dc]" : "border-white/50 bg-page text-white hover:border-white hover:bg-white/5"}`}>
              <span className="flex items-start justify-between gap-4"><span className="text-sm font-medium">{area.number}</span>{!area.light && <span aria-hidden="true" className="flex size-12 items-center justify-center bg-white"><Image src="/images/arrow-up-right.svg" alt="" width={28.82} height={28.82} unoptimized /></span>}</span>
              <h3 className="text-[26px] leading-[1.15] font-medium tracking-[-0.64px] min-[1200px]:text-card">{area.title}{area.secondLine && <><br />{area.secondLine}</>}</h3>
            </ConsultationTrigger>
          ))}
          <ConsultationTrigger topic="Practice areas" className="practice-next group flex min-h-[calc(432*var(--unit))] items-center justify-center bg-white max-[1199px]:min-h-[340px]" >
            <span className="sr-only">Discuss your legal matter</span>
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><Image src="/images/practice-arrow.svg" alt="" width={220} height={220} unoptimized /></span>
          </ConsultationTrigger>
        </div>
        <CornerMarks className="bottom-18 hidden md:flex" />
      </div>
    </section>
  );
}
