import { insights } from "@/data/home";
import { InsightCard } from "./insight-card";

export function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="bg-page py-18 md:min-h-[calc(845.49*var(--unit))] md:py-28">
      <div className="page-container">
        <h2 id="insights-title" className="mb-[calc(30*var(--unit))] text-[40px] leading-[1.2] font-medium tracking-[-1.28px] md:text-section md:leading-[1.2]">Latest Insights</h2>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight, index) => <InsightCard key={insight.title} insight={insight} featured={index === 0} />)}
        </div>
      </div>
    </section>
  );
}
