"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { pricingPlans } from "@/data/pricing";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}
function getSnapshot() { return new URLSearchParams(window.location.search).get("plan") || ""; }

export function SelectedConsultation() {
  const selection = useSyncExternalStore(subscribe, getSnapshot, () => "");
  const plan = pricingPlans.find((item) => item.id === selection);
  const subject = plan ? `${plan.name} consultation — ${plan.price}/case` : "Free initial consultation";
  return (
    <div className="bg-white p-7 text-page md:p-11">
      <p className="inner-eyebrow">Your consultation</p>
      <h2 className="mt-7 text-[36px] leading-tight font-medium md:text-[length:calc(48*var(--unit))] md:leading-[calc(60*var(--unit))]">{plan?.name || "Free Initial Consultation"}</h2>
      <p className="mt-7 text-lg leading-[calc(22.5*var(--unit))]">{plan ? `${plan.price}/case · One time payment. ${plan.features.join("; ")}.` : "Experienced attorneys providing strategic legal guidance for individuals, families, and businesses across every jurisdiction we serve."}</p>
      <a href={`mailto:contact@lawvia.com?subject=${encodeURIComponent(subject)}`} className="mt-7 inline-block text-[length:calc(22*var(--unit))] leading-[calc(27.5*var(--unit))] underline underline-offset-4">Book by email ↗</a>
      <Link href="/pricing/" prefetch={false} className="mt-7 block text-base leading-5 hover:underline">Explore pricing packages →</Link>
    </div>
  );
}
