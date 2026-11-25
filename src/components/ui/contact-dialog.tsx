"use client";

import { createContext, useContext, useState } from "react";
import { Modal } from "./modal";

const ContactContext = createContext<(topic?: string) => void>(() => {});

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [inquiry, setInquiry] = useState<string | null>(null);
  return (
    <ContactContext.Provider value={(topic = "Consultation") => setInquiry(topic)}>
      {children}
      <Modal open={inquiry !== null} onClose={() => setInquiry(null)} title={inquiry === "Pricing" ? "Discuss your legal needs & pricing" : "Let’s talk about your next step"}>
        <p className="mb-7 text-base text-white/70">Tell us a little about your matter. Our team can help you arrange a consultation.</p>
        <form className="grid gap-5" onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const subject = `${inquiry}: ${String(data.get("name"))}`;
          const body = `Name: ${String(data.get("name"))}\nEmail: ${String(data.get("email"))}\n\n${String(data.get("message"))}`;
          window.location.href = `mailto:contact@lawvia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }}>
          <label className="grid gap-2 text-sm">Your name<input name="name" required autoComplete="name" className="border border-line bg-transparent px-4 py-3 text-base" /></label>
          <label className="grid gap-2 text-sm">Email address<input name="email" type="email" required autoComplete="email" className="border border-line bg-transparent px-4 py-3 text-base" /></label>
          <label className="grid gap-2 text-sm">How can we help?<textarea name="message" required rows={4} defaultValue={inquiry && inquiry !== "Consultation" ? `I would like to discuss ${inquiry.toLowerCase()}.` : ""} key={inquiry} className="resize-y border border-line bg-transparent px-4 py-3 text-base" /></label>
          <button type="submit" className="border border-white bg-white px-6 py-4 font-medium text-black hover:bg-page hover:text-white">Continue in your email app</button>
          <p className="text-sm text-white/55">This opens an email draft to contact@lawvia.com. You can also call <a href="tel:+10509909090" className="underline underline-offset-4">+1 050 990 9090</a>.</p>
        </form>
      </Modal>
    </ContactContext.Provider>
  );
}

export function ConsultationTrigger({ children, className = "", topic = "Consultation", onActivate }: {
  children: React.ReactNode;
  className?: string;
  topic?: string;
  onActivate?: () => void;
}) {
  const openContact = useContext(ContactContext);
  return <button type="button" onClick={() => { onActivate?.(); openContact(topic); }} className={className}>{children}</button>;
}
