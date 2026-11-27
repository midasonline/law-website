"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function InnerBrand() {
  const pathname = usePathname();
  return <Link href="/" prefetch={false} className="text-[length:calc(30*var(--unit))] leading-[calc(37*var(--unit))] font-medium">{pathname.replace(/\/$/, "") === "/practice-areas" ? "Lawvia & Partners" : "Lawvia"}</Link>;
}
