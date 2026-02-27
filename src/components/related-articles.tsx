import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

interface RelatedArticlesProps {
  articles: RelatedLink[];
  title?: string;
}

export function RelatedArticles({
  articles,
  title = "Related Speed Test Guides",
}: RelatedArticlesProps) {
  return (
    <section className="py-12 border-t border-border/40">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group p-4 rounded-2xl border border-border/50 bg-card hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 shrink-0 mt-0.5 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
