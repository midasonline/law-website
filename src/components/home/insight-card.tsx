"use client";

import Image from "next/image";
import { useState } from "react";
import type { Insight } from "@/data/home";
import { Modal } from "@/components/ui/modal";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";

function InsightPhoto({ insight }: { insight: Insight }) {
  return (
    <div className="relative h-[300px] overflow-hidden md:h-[calc(300*var(--unit))]">
      <div className={`absolute ${insight.kind === "team" ? "top-[-25.23%] left-[-2.11%] h-[150.67%] w-[102.11%]" : insight.kind === "history" ? "top-[-2.57%] left-[-56%] h-[110.67%] w-[157.6%]" : "inset-x-0 top-[-2.67%] aspect-square"}`}>
        <Image src={insight.image} alt={insight.imageAlt} fill sizes={insight.kind === "team" ? "(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 47vw" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"} className={`object-cover transition-transform duration-500 group-hover:scale-[1.025] ${insight.kind === "history" ? "-scale-x-100 group-hover:scale-x-[-1.025]" : ""}`} />
      </div>
    </div>
  );
}

export function InsightCard({ insight, featured }: { insight: Insight; featured: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={featured ? "md:col-span-2" : ""}>
      <button type="button" onClick={() => setOpen(true)} aria-label={`Read ${insight.title}`} className="group block w-full text-left">
        <InsightPhoto insight={insight} />
        <div className="mt-7 flex flex-wrap items-center gap-2.5 text-xs leading-3 font-medium uppercase">
          <span className="bg-tag px-[calc(9*var(--unit))] py-1.5">Business</span>
          <time dateTime={insight.dateTime} className="bg-tag px-[calc(9*var(--unit))] py-1.5">{insight.date}</time>
        </div>
        <h3 className={`mt-[calc(26*var(--unit))] text-xl font-medium tracking-[-0.48px] group-hover:underline group-hover:underline-offset-4 ${featured ? "max-w-[calc(543.46*var(--unit))]" : ""}`}>{insight.title}</h3>
      </button>
      <p className={`mt-3 text-base ${featured ? "max-w-[calc(543.46*var(--unit))]" : ""}`}>{insight.summary}</p>
      <Modal open={open} onClose={() => setOpen(false)} title={insight.title}>
        <div className="mb-5"><InsightPhoto insight={insight} /></div>
        <p className="mb-5 text-sm text-white/60">Business · {insight.date}</p>
        <p className="text-base">{insight.summary}</p>
        <ConsultationTrigger topic={insight.title} onActivate={() => setOpen(false)} className="mt-8 border border-line px-5 py-4 hover:bg-white hover:text-black">Discuss this topic with our team</ConsultationTrigger>
      </Modal>
    </article>
  );
}
