"use client";

import { useState } from "react";
import type { Article } from "@/data/insights";
import { Modal } from "@/components/ui/modal";
import { ConsultationTrigger } from "@/components/ui/contact-dialog";
import { ArticlePhoto } from "./article-photo";

export function ArticlePreview({ article, children }: { article: Article; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <><button type="button" aria-label={`Preview ${article.title}`} onClick={() => setOpen(true)} className="text-left text-base leading-5 hover:underline">{children}</button><Modal open={open} onClose={() => setOpen(false)} title={article.title} eyebrow="Article preview"><ArticlePhoto article={article} /><p className="mt-6 text-sm text-white/70">{article.category} · {article.date} · {article.readingTime}</p><ConsultationTrigger topic={article.title} onActivate={() => setOpen(false)} className="mt-8 border border-line px-5 py-4 hover:bg-white hover:text-page">Discuss this topic with our team</ConsultationTrigger></Modal></>;
}
