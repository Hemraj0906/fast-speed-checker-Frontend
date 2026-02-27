import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-border/50 bg-card overflow-hidden"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold hover:bg-muted/50 transition-colors list-none">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
