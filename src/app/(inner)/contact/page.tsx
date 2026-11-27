import type { Metadata } from "next";
import { Hero } from "@/components/contact/hero";
import { ContactOptions } from "@/components/contact/contact-options";
import { PracticeLinks } from "@/components/contact/practice-links";

export const metadata: Metadata = { title: "Contact | Lawvia & Partners", description: "Contact Lawvia to arrange an initial legal consultation, discuss your selected package, or speak with our team." };
export default function ContactPage() { return <><Hero /><ContactOptions /><PracticeLinks /></>; }
