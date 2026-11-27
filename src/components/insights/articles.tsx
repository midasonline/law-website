import { articles } from "@/data/insights";
import { ArticlePhoto } from "./article-photo";
import { ArticlePreview } from "./article-preview";

export function Articles() {
  const featured = articles[0];
  return (
    <section aria-label="Legal articles" className="inner-container pb-24">
      <article className="grid gap-10 lg:grid-cols-[minmax(0,1.43fr)_minmax(0,1fr)] lg:gap-12">
        <ArticlePhoto article={featured} />
        <div className="lg:pt-8"><p className="inner-eyebrow">{featured.category}</p><h2 className="mt-7 text-[36px] leading-tight font-medium md:text-[length:calc(44*var(--unit))] md:leading-[calc(55*var(--unit))]">{featured.title}</h2><p className="mt-7 text-sm leading-[calc(19*var(--unit))]"><time dateTime={featured.dateTime}>{featured.date}</time> &nbsp; · &nbsp; {featured.readingTime}</p><div className="mt-7"><ArticlePreview article={featured}>Read Article ↗</ArticlePreview></div></div>
      </article>
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-10">
        {articles.slice(1).map((article) => <article key={article.id}><ArticlePhoto article={article} /><p className="mt-7 text-[length:calc(12*var(--unit))] leading-[calc(15*var(--unit))] uppercase">{article.category}</p><h2 className="mt-7 text-card leading-[calc(40*var(--unit))] font-medium">{article.title}</h2><p className="mt-7 text-sm leading-[calc(19*var(--unit))]"><time dateTime={article.dateTime}>{article.date}</time> &nbsp; · &nbsp; {article.readingTime}</p><div className="mt-7"><ArticlePreview article={article}>Read More ↗</ArticlePreview></div></article>)}
      </div>
    </section>
  );
}
