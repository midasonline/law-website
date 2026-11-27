import { ConsultationTrigger } from "@/components/ui/contact-dialog";

export function ConsultationBanner() {
  return (
    <section aria-labelledby="consultation-title" className="bg-white py-14 text-page md:py-18">
      <div className="inner-container">
        <p className="inner-eyebrow font-medium">Legal advice made simple.</p>
        <div className="mt-[calc(30*var(--unit))] flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 id="consultation-title" className="text-[40px] leading-tight font-medium tracking-[-1.4px] md:text-inner-heading md:leading-[calc(79*var(--unit))] md:tracking-[calc(-2.24*var(--unit))]">Defending Your Future</h2>
          <ConsultationTrigger className="shrink-0 border border-page px-[calc(22*var(--unit))] py-[calc(17*var(--unit))] text-base leading-5 font-medium hover:bg-page hover:text-white">Free Consultation ↗</ConsultationTrigger>
        </div>
      </div>
    </section>
  );
}
