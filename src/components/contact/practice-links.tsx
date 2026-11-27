import Link from "next/link";
import { practiceDirectory } from "@/data/practice-areas";

export function PracticeLinks() {
  return <section aria-labelledby="contact-practice-title" className="bg-stage pt-18 pb-20"><div className="inner-container"><p className="inner-eyebrow">Practice areas</p><h2 id="contact-practice-title" className="mt-10 max-w-[calc(1020*var(--unit))] text-[36px] leading-tight font-medium md:text-[length:calc(48*var(--unit))] md:leading-[calc(60*var(--unit))]">Legal support tailored to your unique situation.</h2><ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{practiceDirectory.map((area) => <li key={area.id}><Link href={`/practice-areas/#${area.id}`} prefetch={false} className="block border-y border-line py-6 text-[length:calc(20*var(--unit))] leading-[calc(25*var(--unit))] hover:border-white">{area.title} ↗</Link></li>)}</ul></div></section>;
}
