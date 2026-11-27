import { clientBenefits } from "@/data/pricing";

export function ClientPromise() {
  return (
    <section aria-labelledby="promise-title" className="bg-stage pt-18 pb-20">
      <div className="inner-container">
        <div className="grid gap-8 md:grid-cols-2"><h2 id="promise-title" className="text-[40px] leading-tight font-medium md:text-[length:calc(56*var(--unit))] md:leading-[calc(70*var(--unit))]">Clear Process</h2><p className="text-[length:calc(22*var(--unit))] leading-[calc(27.5*var(--unit))]">Transparent strategy, communication and predictable outcomes.</p></div>
        <ol className="mt-12 grid gap-7 md:grid-cols-3">{clientBenefits.map((benefit, index) => <li key={benefit}><p className="text-base leading-5">0{index + 1}</p><h3 className="mt-7 text-[length:calc(28*var(--unit))] leading-[calc(35*var(--unit))] font-medium">{benefit}</h3></li>)}</ol>
      </div>
    </section>
  );
}
