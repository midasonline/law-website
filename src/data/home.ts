export const practiceAreas = [
  { number: "01", title: "Family Law &", secondLine: "Domestic Relations", className: "practice-family", light: false },
  { number: "02", title: "Employment &", secondLine: "Labor Law", className: "practice-employment", light: true },
  { number: "03", title: "Corporate &", secondLine: "Commercial Litigation", className: "practice-corporate", light: false },
  { number: "04", title: "Real Estate &", secondLine: "Property", className: "practice-property", light: true },
  { number: "05", title: "Technology &", secondLine: "Intellectual Property", className: "practice-technology", light: false },
  { number: "06", title: "Criminal Defense", secondLine: "", className: "practice-criminal", light: false },
] as const;

export const insights = [
  {
    title: "AI Regulation and Liability: Current Issues from the Industry’s Perspective",
    summary: "The EU AI Act is reshaping how companies develop, deploy, and govern artificial intelligence. We analyze what the new obligations mean in practice – and how businesses can prepare now.",
    date: "30 Jul 2026", dateTime: "2026-07-30", image: "/images/insight-team.png",
    imageAlt: "Five legal professionals in their modern office", kind: "team",
  },
  {
    title: "The History of the Law Firm’s Founding",
    summary: "Our firm was founded on a simple conviction: that outstanding legal advice should be clear & built around the client.",
    date: "12 Jun 2026", dateTime: "2026-06-12", image: "/images/legal-consultation.png",
    imageAlt: "Lady Justice on a table during a legal consultation", kind: "history",
  },
  {
    title: "The First Steps in a Corporate Transaction",
    summary: "Buying, selling, or merging – the early stages of a transaction. A structured approach protects your interests.",
    date: "24 Jun 2026", dateTime: "2026-06-24", image: "/images/insight-transaction.png",
    imageAlt: "Business professional reviewing documents on a tablet", kind: "transaction",
  },
] as const;

export type Insight = (typeof insights)[number];
