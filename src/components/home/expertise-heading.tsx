import type { CSSProperties } from "react";

export function ExpertiseHeading() {
  return (
    <h2 id="practice-title" aria-label="Our areas of expertise" className="relative z-10 text-[38px] leading-[1.05] font-medium tracking-[-1.28px] md:text-section">
      {[{ text: "Our areas", node: "9:1213" }, { text: "of expertise", node: "9:1216" }].map((line, lineIndex) => (
        <span key={line.text} data-node-id={line.node} className={`expertise-line block whitespace-nowrap ${lineIndex === 1 ? "expertise-line-second" : ""}`} aria-hidden="true">
          {Array.from(line.text).map((character, index) => <span key={index} className="expertise-character inline-block" style={{ "--letter-index": index } as CSSProperties}>{character === " " ? "\u00a0" : character}</span>)}
        </span>
      ))}
    </h2>
  );
}
