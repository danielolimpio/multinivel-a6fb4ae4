import { Head } from "vite-react-ssg";

interface FAQItem {
  question: string;
  answer: string;
}

interface QuizFAQSchemaProps {
  faq: FAQItem[];
  pageTitle: string;
  pageUrl: string;
}

export function QuizFAQSchema({ faq, pageTitle, pageUrl }: QuizFAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageTitle,
    "url": pageUrl,
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Head>
  );
}
