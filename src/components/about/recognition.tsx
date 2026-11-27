const statistics = [{ value: "10K+", label: "Cases handled" }, { value: "212+", label: "Legal consultations" }, { value: "20+", label: "Practice areas" }, { value: "4.9", label: "Client rating" }] as const;
const recognition = ["Forbes", "Super Lawyers", "Avvo", "Martindale-Hubbell", "Best Lawyers"] as const;

export function Recognition() {
  return (
    <section aria-label="Firm statistics and recognition" className="bg-stage py-18">
      <div className="inner-container">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statistics.map((stat) => <div key={stat.label}><dd className="text-[52px] leading-[1.25] font-medium tracking-[-2px] md:text-inner-heading md:tracking-[calc(-2.24*var(--unit))]">{stat.value}</dd><dt className="mt-4 text-[length:calc(12*var(--unit))] leading-[calc(15*var(--unit))] uppercase">{stat.label}</dt></div>)}
        </dl>
        <p className="inner-eyebrow mt-12">As featured &amp; recognized by</p>
        <ul className="mt-12 flex flex-wrap gap-x-[calc(42*var(--unit))] gap-y-8 text-[length:calc(23*var(--unit))] leading-[calc(29*var(--unit))]">{recognition.map((name) => <li key={name} className={name === "Martindale-Hubbell" ? "min-w-[calc(252*var(--unit))]" : "min-w-[calc(180*var(--unit))]"}>{name}</li>)}</ul>
      </div>
    </section>
  );
}
