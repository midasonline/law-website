import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { PracticeAreas } from "@/components/home/practice-areas";
import { Attorneys } from "@/components/home/attorneys";
import { Insights } from "@/components/home/insights";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <PracticeAreas />
        <Attorneys />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
