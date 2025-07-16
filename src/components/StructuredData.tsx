export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Optimarch",
    "description": "AI automation services company specializing in intelligent workflow integration and business transformation",
    "url": "https://optimarch.ai",
    "logo": "https://optimarch.ai/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-240-479-8419",
      "contactType": "sales",
      "email": "amirvalizadeh161@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arlington",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/in/amir-valizadeh104",
      "https://huggingface.co/vitalune",
      "https://github.com/vitalune"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Process Automation",
            "description": "Transform repetitive tasks with AI-powered automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Workflows",
            "description": "Design bespoke AI solutions tailored to your business"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Predictive Analytics",
            "description": "Leverage machine learning for data-driven decisions"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Optimarch",
    "url": "https://optimarch.ai",
    "description": "AI automation services for business transformation",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://optimarch.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Optimarch AI Automation Services",
    "description": "Professional AI automation and business transformation services",
    "provider": {
      "@type": "Organization",
      "name": "Optimarch"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Process Automation",
            "category": "Business Automation"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}