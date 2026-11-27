import type { Metadata } from "next";
import { Hero } from "@/components/practice-areas/hero";
import { Directory } from "@/components/practice-areas/directory";
import { Process } from "@/components/practice-areas/process";

export const metadata: Metadata = { title: "Practice Areas | Lawvia & Partners", description: "Explore Lawvia’s family law, criminal defense, health care, personal injury, and intellectual property legal services." };
export default function PracticeAreasPage() { return <><Hero /><Directory /><Process /></>; }
