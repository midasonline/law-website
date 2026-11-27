const process = [
  { title: "Crafting Justice, Case By Case", description: "Each matter is met with custom strategy, not template responses." },
  { title: "Defending Your Future", description: "Your rights and reputation safeguarded at every procedural step." },
  { title: "Skilled in the Legal Battle", description: "Trial-tested litigators who know how to win in court." },
] as const;

export function Process() {
  return (
    <section aria-labelledby="process-title" className="inner-container pt-18 pb-20">
      <p className="inner-eyebrow">Personal liberty</p>
      <h2 id="process-title" className="mt-12 text-[40px] leading-tight font-medium md:text-[length:calc(56*var(--unit))] md:leading-[calc(70*var(--unit))]">Crafting Justice, Case By Case</h2>
      <div className="mt-12 grid items-start gap-10 md:grid-cols-3">
        {process.map((step, index) => <article key={step.title}><p className="text-base leading-5">0{index + 1}</p><h3 className="mt-7 max-w-[calc(390*var(--unit))] text-[length:calc(28*var(--unit))] leading-[calc(35*var(--unit))] font-medium">{step.title}</h3><p className="mt-7 max-w-[calc(390*var(--unit))] text-lg leading-[calc(22.5*var(--unit))]">{step.description}</p></article>)}
      </div>
    </section>
  );
}
