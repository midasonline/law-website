import type { Metadata } from "next";
import { Hero } from "@/components/about/hero";
import { Approach } from "@/components/about/approach";
import { Recognition } from "@/components/about/recognition";

export const metadata: Metadata = { title: "About | Lawvia & Partners", description: "Meet Lawvia: a meticulous, client-first law firm built on legal expertise, transparent strategy, and decades of courtroom experience." };

export default function AboutPage() {
  return <><Hero /><Approach /><Recognition /></>;
}
