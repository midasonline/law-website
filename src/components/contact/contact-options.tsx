import { clientBenefits } from "@/data/pricing";
import { SelectedConsultation } from "./selected-consultation";

export function ContactOptions() {
  return (
    <section aria-label="Contact our office" className="inner-container pb-24">
      <div className="grid items-start gap-10 lg:grid-cols-[1.423fr_1fr]">
        <SelectedConsultation />
        <dl className="grid gap-[calc(30*var(--unit))]">
          <div><dt className="text-xs leading-[calc(15*var(--unit))] uppercase">Call us</dt><dd className="mt-3 text-[length:calc(24*var(--unit))] leading-[calc(30*var(--unit))]"><a href="tel:+15550102200" className="hover:underline">+1 (555) 010-2200</a></dd></div>
          <div><dt className="text-xs leading-[calc(15*var(--unit))] uppercase">Email us</dt><dd className="mt-3 text-[length:calc(24*var(--unit))] leading-[calc(30*var(--unit))]"><a href="mailto:contact@lawvia.com" className="hover:underline">contact@lawvia.com</a></dd></div>
          <div><dt className="text-xs leading-[calc(15*var(--unit))] uppercase">Visit our office</dt><dd className="mt-3 text-[length:calc(24*var(--unit))] leading-[calc(30*var(--unit))]"><a href="https://www.google.com/maps/search/?api=1&query=500%20Madison%20Avenue%20New%20York%20NY%2010022" target="_blank" rel="noopener noreferrer" className="hover:underline">500 Madison Avenue, New York, NY 10022</a></dd></div>
          <div><dt className="text-xs leading-[calc(15*var(--unit))] uppercase">Opening hours</dt><dd className="mt-3 text-[length:calc(24*var(--unit))] leading-[calc(30*var(--unit))]">Mon–Fri: 9:00 AM – 6:00 PM</dd></div>
        </dl>
      </div>
      <ol className="mt-14 grid gap-7 md:grid-cols-3">{clientBenefits.map((benefit, index) => <li key={benefit} className="border-t border-line pt-7"><p className="text-sm leading-[calc(18*var(--unit))]">0{index + 1}</p><h3 className="mt-7 text-[length:calc(28*var(--unit))] leading-[calc(35*var(--unit))] font-medium">{benefit}</h3></li>)}</ol>
    </section>
  );
}
