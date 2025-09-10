"use client";

import Script from "next/script";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Educatec Canaã",
    image: "https://seudominio.com/logo.png",
    "@id": "https://seudominio.com",
    url: "https://seudominio.com",
    telephone: "+55-31-98505-1313",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Canaã dos Carajás, 94, Bairro Vale Dourado",
      addressLocality: "Canaã dos Carajás",
      addressRegion: "PA",
      postalCode: "68537-000",
      addressCountry: "BR",
    },
    sameAs: ["https://www.instagram.com/educatec.canaa"],
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
