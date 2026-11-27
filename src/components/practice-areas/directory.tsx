import { practiceDirectory } from "@/data/practice-areas";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";

export function Directory() {
  return (
    <section aria-label="Practice directory" className="inner-container grid gap-6 pb-24 md:grid-cols-2">
      {practiceDirectory.map((area) => <article id={area.id} key={area.id} className={`p-7 md:p-10 ${area.light ? "bg-white text-page" : "bg-stage"}`}>
        <p className="text-sm leading-[calc(18*var(--unit))]">{area.number}</p>
        <h2 className="mt-9 text-[34px] leading-tight font-medium md:text-[length:calc(40*var(--unit))] md:leading-[calc(50*var(--unit))]">{area.title}</h2>
        <p className="mt-9 max-w-[calc(520*var(--unit))] text-lg leading-[calc(22.5*var(--unit))]">Comprehensive legal support tailored to your unique situation.</p>
        <ConsultationTrigger topic={area.title} className="mt-9 text-base leading-5 hover:underline">Discuss your case ↗</ConsultationTrigger>
      </article>)}
      <article className="bg-stage p-7 md:p-10">
        <p className="inner-eyebrow">Your next step</p>
        <h2 className="mt-9 text-[34px] leading-tight font-medium md:text-[length:calc(40*var(--unit))] md:leading-[calc(50*var(--unit))]">Free Initial Consultation</h2>
        <p className="mt-9 max-w-[calc(540*var(--unit))] text-[length:calc(17*var(--unit))] leading-[calc(21.25*var(--unit))]">Experienced attorneys providing strategic legal guidance for individuals, families, and businesses across every jurisdiction we serve.</p>
        <ConsultationTrigger className="mt-9 text-base leading-5 hover:underline">Book Free Consultation ↗</ConsultationTrigger>
      </article>
    </section>
  );
}
