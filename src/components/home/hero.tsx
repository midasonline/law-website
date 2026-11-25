"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const media = window.matchMedia("(min-width: 1440px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

const words = [
  { text: "Legal", offset: 327, stop: 0.3024, node: "23:2443", position: "left-5 top-10 md:left-10 min-[1200px]:left-[7.3611%] min-[1200px]:top-[calc(62.2*var(--unit))]" },
  { text: "advice", offset: -374, stop: 0.302, node: "23:2815", position: "right-5 top-10 md:right-10 min-[1200px]:right-auto min-[1200px]:left-[74.7917%] min-[1200px]:top-[calc(62.2*var(--unit))]" },
  { text: "made", offset: 326, stop: 0.3016, node: "9:1250", position: "bottom-28 left-5 md:left-10 min-[1200px]:bottom-auto min-[1200px]:left-[7.3611%] min-[1200px]:top-[calc(580.2*var(--unit))]" },
  { text: "simple", offset: -391, stop: 0.3024, node: "9:1253", position: "right-5 bottom-28 md:right-10 min-[1200px]:right-auto min-[1200px]:bottom-auto min-[1200px]:left-[74.7917%] min-[1200px]:top-[calc(580.2*var(--unit))]" },
] as const;

export function Hero() {
  const largeScreen = useSyncExternalStore(subscribe, () => window.matchMedia("(min-width: 1440px)").matches, () => false);
  const reducedMotion = useReducedMotion();
  const animate = largeScreen && !reducedMotion;
  const designUnit = (value: number) => `calc(${value} * var(--unit))`;

  return (
    <section aria-labelledby="hero-title" className="relative h-[600px] overflow-hidden bg-stage md:h-[720px] min-[1200px]:h-[calc(763*var(--unit))]">
      <h1 id="hero-title" className="sr-only">Legal advice made simple.</h1>
      {words.map((word) => (
        <div key={word.text} aria-hidden="true" className={`absolute ${word.position}`}>
          <motion.div data-node-id={word.node} style={{ transformOrigin: "50% 50%" }}
            initial={false} animate={{ x: animate ? [designUnit(0), designUnit(word.offset), designUnit(word.offset)] : designUnit(0) }}
            transition={{ duration: animate ? 2 : 0, times: [0, word.stop, 1], ease: "linear" }}
            className="text-[46px] leading-[1.2] font-medium tracking-[-1.2px] md:text-[72px] min-[1200px]:text-hero min-[1200px]:tracking-[calc(-1.76*var(--unit))]">
            {word.text}
          </motion.div>
        </div>
      ))}
      <div className="absolute top-[190px] left-[calc(50%-110px)] md:top-[220px] md:left-[calc(50%-140px)] min-[1200px]:top-[calc(237*var(--unit))] min-[1200px]:left-[calc(50%-157*var(--unit))]">
        <motion.div data-node-id="23:3" style={{ transformOrigin: "50% 50%" }} initial={false}
          animate={animate ? {
            height: [designUnit(277.817), designUnit(341.318), designUnit(341.318)],
            width: [designUnit(280), designUnit(344), designUnit(344)],
            x: [designUnit(0), designUnit(-32), designUnit(-32)],
            y: [designUnit(0), designUnit(-31.657), designUnit(-31.657)],
          } : { x: 0, y: 0 }}
          transition={{ duration: animate ? 2 : 0, times: [0, 0.3007, 1], ease: "linear" }}
          className="relative h-[218px] w-[220px] md:h-[277.817px] md:w-[280px] min-[1200px]:h-[calc(277.817*var(--unit))] min-[1200px]:w-[calc(280*var(--unit))]">
          <Image src="/images/lawvia-monogram.png" alt="" fill preload sizes="(min-width: 1440px) 24vw, 280px" className="object-contain" />
        </motion.div>
      </div>
      <div className="page-container absolute inset-x-0 bottom-6 flex flex-wrap justify-between gap-3 text-sm text-white/50 min-[1200px]:bottom-6">
        <p>Legal advice made simple.</p>
        <a href="mailto:contact@lawvia.com" className="hover:text-white">contact@lawvia.com</a>
      </div>
    </section>
  );
}
