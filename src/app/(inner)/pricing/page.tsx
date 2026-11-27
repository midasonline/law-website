import type { Metadata } from "next";
import { Hero } from "@/components/pricing/hero";
import { Plans } from "@/components/pricing/plans";
import { ClientPromise } from "@/components/pricing/client-promise";

export const metadata: Metadata = { title: "Pricing | Lawvia & Partners", description: "Explore Lawvia’s Basic, Standard, and Premium consultation packages and choose the legal support that fits your needs." };
export default function PricingPage() { return <><Hero /><Plans /><ClientPromise /></>; }
