import Image from "next/image";
import type { Article } from "@/data/insights";

export function ArticlePhoto({ article }: { article: Article }) {
  const geometry = article.kind === "featured"
    ? "left-0 top-[-0.0061%] h-[100.0122%] w-[101.8641%]"
    : article.kind === "procedure"
      ? "left-[-0.0331%] top-0 h-[116.758%] w-[100.0663%]"
      : "left-[-24.9589%] top-[-16.1623%] h-[132.5%] w-[138.7534%]";
  return <div className={`relative overflow-hidden ${article.kind === "featured" ? "aspect-[751/510]" : article.kind === "procedure" ? "aspect-[637/364]" : "aspect-[636/360] -scale-x-100"}`}><div className={`absolute ${geometry}`}><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 767px) 100vw, 58vw" /></div></div>;
}
