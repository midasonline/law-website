import type { Metadata } from "next";
import { Hero } from "@/components/attorneys/hero";
import { Roster } from "@/components/attorneys/roster";
import { Testimonials } from "@/components/attorneys/testimonials";

export const metadata: Metadata = { title: "Attorneys | Lawvia & Partners", description: "Meet Lawvia’s team of trial lawyers, negotiators, and counselors across family, criminal, corporate, and personal injury law." };
export default function AttorneysPage() { return <><Hero /><Roster /><Testimonials /></>; }
