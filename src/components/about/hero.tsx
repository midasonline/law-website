import { PageHero } from "@/components/shared/page-hero";

export function Hero() {
  return <PageHero page="About" eyebrow="About us" wideTitle title={<>We Are the Leading Law Firm<br className="hidden min-[1200px]:block" /> For Annual Revenues</>} description="With decades of combined experience across civil, criminal, and corporate practice, our attorneys deliver strategic counsel that prioritizes results — backed by a meticulous, client-first approach." />;
}
