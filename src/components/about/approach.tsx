import Image from "next/image";

const values = [
  { number: "01", title: "Excellence", description: "Award-winning representation rooted in deep legal expertise." },
  { number: "02", title: "Clear Process", description: "Transparent strategy, communication and predictable outcomes." },
] as const;

export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="inner-container">
      <div className="relative aspect-[1306/871] overflow-hidden"><Image src="/images/insight-team.png" alt="Five Lawvia legal professionals in their office" fill sizes="(min-width: 1440px) 90vw, (max-width: 767px) calc(100vw - 40px), calc(100vw - 128px)" className="-scale-x-100 object-cover" /></div>
      <div className="grid gap-12 pt-14 pb-18 lg:grid-cols-[.94fr_1.06fr] lg:gap-8 lg:pt-18 lg:pb-24">
        <div>
          <p className="inner-eyebrow">A meticulous, client-first approach</p>
          <h2 id="approach-title" className="mt-8 text-[42px] leading-tight font-medium tracking-[-1.4px] md:text-inner-heading md:tracking-[calc(-2.24*var(--unit))]">Excellence. At<br /> every step.</h2>
        </div>
        <div className="grid gap-8">
          {values.map((value) => <article key={value.number} className="flex gap-6 border-t border-line pt-6 pb-8 md:gap-8"><span className="w-10 shrink-0 pt-1 text-sm md:w-12">{value.number}</span><div className="pr-5"><h3 className="text-card font-medium leading-[calc(40*var(--unit))]">{value.title}</h3><p className="mt-4 text-lg leading-[calc(23*var(--unit))]">{value.description}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
