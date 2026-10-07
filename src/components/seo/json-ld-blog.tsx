import { SITE_CONFIG } from "@/lib/constants";
import { CLINIC_ID } from "@/components/seo/json-ld";
import type { BlogPost, Locale } from "@/types";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLdBlogPosting({
  post,
  url,
  locale,
}: {
  post: BlogPost;
  url: string;
  locale: Locale;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        inLanguage: locale,
        keywords: post.keywords?.join(", "),
        image: `${SITE_CONFIG.baseUrl}${post.cover}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        reviewedBy: { "@id": CLINIC_ID },
        author: {
          "@type": "Organization",
          name: post.author,
          url: SITE_CONFIG.baseUrl,
          memberOf: { "@id": CLINIC_ID },
        },
        publisher: {
          "@type": "Organization",
          "@id": CLINIC_ID,
          name: SITE_CONFIG.name,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.logoUrl}`,
          },
        },
      }}
    />
  );
}
