/**
 * Schema Markup (JSON-LD) utilities for SEO
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "terencelink",
  "url": "https://terencelink.com",
  "logo": "https://terencelink.com/logo-terencelink.svg",
  "description": "Independent third-party service assistance platform offering guidance and informational support for internet, broadband, Wi-Fi and cable TV services.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": "+1-888-765-9560",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30 N Gould St",
    "addressLocality": "Sheridan",
    "addressRegion": "WY",
    "postalCode": "82801",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.facebook.com/terencelink",
    "https://www.twitter.com/terencelink",
    "https://www.linkedin.com/company/terencelink"
  ],
  "foundingDate": "2025",
  "slogan": "Independent guidance for internet, cable and streaming decisions"
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://terencelink.com${item.url}`
  }))
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "terencelink",
  "image": "https://terencelink.com/logo-terencelink.svg",
  "description": "Independent third-party service assistance for internet, broadband, Wi-Fi and cable TV.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "30 N Gould St",
    "addressLocality": "Sheridan",
    "addressRegion": "WY",
    "postalCode": "82801",
    "addressCountry": "US"
  },
  "telephone": "+1-888-765-9560",
  "url": "https://terencelink.com",
  "priceRange": "$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "23:00",
    "timezone": "America/Chicago"
  }
};
