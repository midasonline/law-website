export const articles = [
  { id: "legal-challenges", title: "Navigating Legal Challenges and Opportunities", category: "Featured / Legal guides", date: "Mar 14, 2025", dateTime: "2025-03-14", readingTime: "5 min read", image: "/images/insight-team.png", imageAlt: "Lawvia professionals gathered in their office", kind: "featured" },
  { id: "case-procedure", title: "Timelines and Procedure for Complexity of the Case", category: "Client education", date: "Mar 12, 2025", dateTime: "2025-03-12", readingTime: "3 min read", image: "/images/insight-procedure.jpg", imageAlt: "A legal consultation with Lady Justice on the table", kind: "procedure" },
  { id: "real-situations", title: "An In-Depth Analysis Based on Real Situations", category: "Law updates", date: "Mar 09, 2025", dateTime: "2025-03-09", readingTime: "3 min read", image: "/images/insight-analysis.jpg", imageAlt: "Lawyers reviewing an agreement beside a legal gavel", kind: "analysis" },
] as const;

export type Article = (typeof articles)[number];
