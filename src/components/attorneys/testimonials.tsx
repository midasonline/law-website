import { testimonials } from "@/data/attorneys";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-stage py-20">
      <div className="inner-container">
        <p className="inner-eyebrow">Testimonials</p>
        <div className="mt-12 flex flex-col justify-between gap-7 lg:flex-row lg:gap-12">
          <h2 id="testimonials-title" className="text-[40px] leading-tight font-medium md:text-[length:calc(56*var(--unit))] md:leading-[calc(70*var(--unit))]">Our Happy Clients Say About Us</h2>
          <p className="shrink-0 text-lg leading-[calc(22.5*var(--unit))] lg:w-[calc(384*var(--unit))]">4.9/5 &nbsp; · &nbsp; 500+ REVIEWS</p>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-7">
          {testimonials.map((story) => <figure key={story.name}><blockquote className="max-w-[calc(590*var(--unit))] text-[length:calc(28*var(--unit))] leading-[calc(35*var(--unit))]">“{story.quote}”</blockquote><figcaption className="mt-8 text-lg leading-[calc(22.5*var(--unit))]">{story.name}<span className="mt-8 block text-[length:calc(12*var(--unit))] leading-[calc(15*var(--unit))] uppercase">Client · Verified</span></figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}
