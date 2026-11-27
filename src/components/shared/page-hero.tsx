import Link from "next/link";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";

export function PageHero({ page, eyebrow, title, description, children, wideTitle = false }: {
  page: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
  wideTitle?: boolean;
}) {
  return (
    <section aria-labelledby="page-title" className="inner-container pt-12 pb-16 md:pt-[calc(82*var(--unit))] md:pb-20">
      <nav aria-label="Breadcrumb" className="text-[length:calc(12*var(--unit))] leading-[calc(15*var(--unit))] font-medium text-white/70 uppercase"><Link href="/" prefetch={false} className="hover:text-white">Home</Link><span aria-hidden="true" className="mx-3">/</span><span aria-current="page">{page}</span></nav>
      <p className="inner-eyebrow mt-8 font-medium">{eyebrow}</p>
      <h1 id="page-title" className={`mt-8 text-[42px] leading-[1.15] font-medium tracking-[-1.5px] md:text-[64px] min-[1200px]:text-page-title min-[1200px]:leading-[calc(109*var(--unit))] min-[1200px]:tracking-[calc(-3.08*var(--unit))] ${wideTitle ? "max-w-[calc(1200*var(--unit))]" : "max-w-[calc(1120*var(--unit))]"}`}>{title}</h1>
      <div className="mt-8 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <p className="max-w-[calc(680*var(--unit))] text-lg leading-[calc(22*var(--unit))]">{description}</p>
        {children ?? <ConsultationTrigger className="shrink-0 border border-white bg-white px-[calc(22*var(--unit))] py-[calc(17*var(--unit))] text-base leading-5 font-medium text-page hover:bg-page hover:text-white">Book Free Consultation ↗</ConsultationTrigger>}
      </div>
    </section>
  );
}
