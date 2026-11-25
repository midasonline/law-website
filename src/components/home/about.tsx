import Image from "next/image";
import { CornerMarks } from "@/components/ui/corner-marks";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate flex h-[680px] items-end overflow-hidden md:h-[calc(960*var(--unit))]">
      <div className="about-image-crop absolute -z-20">
        <Image src="/images/legal-consultation.png" alt="Attorneys discussing a case, with a Lady Justice statue on the table" fill sizes="(max-width: 767px) 180vw, 114vw" className="-scale-x-100 object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/5 to-transparent" />
      <CornerMarks className="page-container top-10 md:top-18" />
      <div className="page-container pb-14">
        <div className="max-w-[calc(900*var(--unit))] md:pl-12">
          <h2 id="about-title" className="max-w-[calc(841*var(--unit))] text-[38px] leading-[1.2] font-bold md:text-[length:calc(60*var(--unit))] md:leading-[calc(75.6*var(--unit))]">We Are The Leading Law Firm For Annual Revenues</h2>
          <p className="mt-6 max-w-[calc(700*var(--unit))] text-base leading-[1.4] md:text-lg md:leading-[calc(22.6*var(--unit))]">We combine deep experience with clear, forward-thinking strategies,<br className="hidden lg:block" /> delivering trusted counsel across a wide range of practice areas.</p>
        </div>
      </div>
    </section>
  );
}
