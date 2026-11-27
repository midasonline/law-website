import Link from "next/link";
import { navigation } from "@/data/navigation";
import { InnerBrand } from "./inner-brand";

export function InnerFooter() {
  return (
    <footer id="contact" className="inner-container pt-16 pb-7">
      <div className="grid gap-12 md:grid-cols-2 min-[1200px]:grid-cols-[calc(380*var(--unit))_calc(180*var(--unit))_calc(320*var(--unit))] min-[1200px]:gap-18">
        <div>
          <InnerBrand />
          <p className="mt-6 max-w-[calc(330*var(--unit))] text-base leading-5">Premium legal representation built on integrity, strategy, and decades of courtroom experience.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3 text-base leading-5">
          <p className="inner-eyebrow normal-case text-white/75">Pages</p>
          {navigation.map((item) => <Link key={item.label} href={item.href} prefetch={false} className="hover:underline">{item.label}</Link>)}
        </nav>
        <div className="text-base leading-5">
          <p className="inner-eyebrow normal-case text-white/75">Contact Us</p>
          <address className="mt-3 max-w-[calc(300*var(--unit))] not-italic">500 Madison Avenue, New York, NY 10022</address>
          <a href="tel:+15550102200" className="mt-3 block hover:underline">+1 (555) 010-2200</a>
          <a href="mailto:contact@lawvia.com" className="mt-3 block hover:underline">contact@lawvia.com</a>
          <p className="mt-3 text-sm text-white/75">Mon–Fri: 9:00 AM – 6:00 PM</p>
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-between gap-5 border-t border-line pt-[calc(22*var(--unit))] text-[length:calc(13*var(--unit))] leading-4 text-white/75">
        <p>© 2026 Lawvia. All rights reserved.</p>
        <a href="#page-top" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  );
}
