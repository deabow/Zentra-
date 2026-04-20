"use client";

import Script from 'next/script';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "زنترا",
    "alternateName": "Zentra",
    "description": "وكالة تسويق رقمي متكاملة تقدم حلولاً مبتكرة لأنواع مختلفة من المشاريع",
    "url": "https://zentra.agency",
    "logo": "https://zentra.agency/logo.png",
    "image": "https://zentra.agency/og-image.jpg",
    "telephone": "+201015916082",
    "email": "diabm4930@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "مول سايلو الدور الثالث",
      "addressLocality": "مدينة السادات",
      "addressRegion": "منوفية",
      "addressCountry": "EG"
    },
    "sameAs": [
      "https://facebook.com/zentra.agency",
      "https://instagram.com/zentra.agency",
      "https://linkedin.com/company/zentra-agency",
      "https://twitter.com/zentra_agency"
    ],
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "فريق زنترا"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Egypt"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات التسويق الرقمي",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "الهوية البصرية",
            "description": "نخلق هويات بصرية فريدة تتفاعل مع جمهورك"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "التسويق عبر وسائل التواصل",
            "description": "حملات استراتيجية لتعزيز حضوركم الرقمي"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "إنتاج الفيديو",
            "description": "محتوى مرئي عالي الجودة يحكي قصة علامتكم"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "إنتاج المحتوى",
            "description": "محتوى جذاب يحقق نتائج ويخلق روابط"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "زنترا",
    "alternateName": "Zentra Agency",
    "url": "https://zentra.agency",
    "description": "موقع زنترا الرسمي - وكالة التسويق الإبداعي",
    "inLanguage": "ar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zentra.agency/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://zentra.agency"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "الخدمات",
        "item": "https://zentra.agency/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "الأعمال",
        "item": "https://zentra.agency/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "تواصل معنا",
        "item": "https://zentra.agency/contact"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
};

export default StructuredData;

