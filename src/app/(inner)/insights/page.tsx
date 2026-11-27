import type { Metadata } from "next";
import { Hero } from "@/components/insights/hero";
import { Articles } from "@/components/insights/articles";
import { Newsletter } from "@/components/insights/newsletter";

export const metadata: Metadata = { title: "Insights | Lawvia & Partners", description: "Explore Lawvia’s legal guides, client education, and commentary on legal challenges, case procedure, and real situations." };
export default function InsightsPage() { return <><Hero /><Articles /><Newsletter /></>; }
