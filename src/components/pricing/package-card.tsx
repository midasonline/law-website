"use client";

import { useState } from "react";
import Link from "next/link";
import type { PricingPlan } from "@/data/pricing";
import { Modal } from "@/components/ui/modal";

export function PackageCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`flex flex-col px-8 py-10 ${plan.light ? "bg-white text-page" : "bg-stage"}`}>
      <p className="text-[length:calc(12*var(--unit))] leading-[calc(15*var(--unit))] uppercase">0{index + 1} &nbsp;/&nbsp; One time payment</p>
      <h2 className="mt-7 text-card font-medium leading-[calc(40*var(--unit))]">{plan.name}</h2>
      <p className="mt-7 flex items-end justify-between gap-4 text-[44px] leading-[55px] font-medium md:text-[length:calc(52*var(--unit))] md:leading-[calc(65*var(--unit))]">{plan.price}<span className="w-[calc(76*var(--unit))] shrink-0 pb-2.5 text-base leading-5 font-normal">/case</span></p>
      <ul className="mt-7 grid gap-[calc(20.75*var(--unit))] text-[length:calc(17*var(--unit))] leading-[calc(21.25*var(--unit))]">{plan.features.map((feature) => <li key={feature}>✓ &nbsp;{feature}</li>)}</ul>
      <button type="button" onClick={() => setOpen(true)} aria-label={`Choose ${plan.name}`} className={`mt-7 w-full border px-5 py-[calc(17*var(--unit))] text-left text-base leading-5 transition-colors ${plan.light ? "border-page bg-page text-white hover:bg-white hover:text-page" : "border-white bg-white text-page hover:bg-stage hover:text-white"}`}>Choose Package ↗</button>
      <Modal open={open} onClose={() => setOpen(false)} title={plan.name} variant="package" eyebrow="Your selected package">
        <p className="text-[36px] leading-[45px] font-medium">{plan.price}/case</p>
        <p className="mt-6 text-xs leading-[15px] uppercase">One time payment</p>
        <ul className="mt-6 grid gap-6 text-lg leading-[23px]">{plan.features.map((feature) => <li key={feature}>✓ &nbsp;{feature}</li>)}</ul>
        <Link href={`/contact/?plan=${plan.id}`} prefetch={false} className="mt-6 block text-[20px] leading-[25px] underline underline-offset-4">Arrange this consultation ↗</Link>
        <button type="button" onClick={() => setOpen(false)} className="mt-6 text-base underline underline-offset-4">Close consultation summary</button>
      </Modal>
    </article>
  );
}
