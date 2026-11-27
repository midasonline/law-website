import { attorneys } from "@/data/attorneys";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";

export function Roster() {
  return (
    <section aria-label="Our attorneys" className="inner-container pb-24">
      {attorneys.map((attorney, index) => <article key={attorney.name} className="grid gap-6 border-t border-line py-10 lg:min-h-[calc(184*var(--unit))] lg:grid-cols-[calc(50*var(--unit))_minmax(0,1.83fr)_minmax(0,1fr)_calc(214*var(--unit))] lg:items-center lg:gap-8 lg:py-[calc(45*var(--unit))]">
        <p className="text-sm">0{index + 1}</p>
        <div><h2 className="text-[36px] leading-tight font-medium md:text-[length:calc(48*var(--unit))] md:leading-[calc(60*var(--unit))]">{attorney.name}</h2><p className="inner-eyebrow mt-[calc(18*var(--unit))]">{attorney.practice}</p></div>
        <div><p className="text-[length:calc(24*var(--unit))] leading-[calc(30*var(--unit))]">{attorney.years} YEARS</p><p className="mt-3 text-lg leading-[calc(22.5*var(--unit))]">{attorney.cases} cases won</p></div>
        <ConsultationTrigger topic={`Consultation with ${attorney.name}`} className="justify-self-start text-base leading-5 hover:underline">Consult ↗</ConsultationTrigger>
      </article>)}
    </section>
  );
}
