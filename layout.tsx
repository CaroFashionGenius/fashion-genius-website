import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Fashion Genius — AI Commerce Platform for Fashion",
  description: "Fashion Genius connects professional creator production, retail intelligence and AI-powered commerce workflows in one fashion platform.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fashion Genius — AI Commerce Platform for Fashion",
    description: "One enterprise brand. Creator Studio for professional content production and a Retail Platform for AI commerce.",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/assets/hero-model.jpg", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Fashion Genius — AI Commerce Platform for Fashion", images: ["/assets/hero-model.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url, founder: { "@type": "Person", name: "Caroline Steiger", jobTitle: "Founder & CEO" } },
      { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#organization` } },
      { "@type": "SoftwareApplication", name: "Fashion Genius Creator Studio", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: SITE.creatorStudioUrl }
    ]
  };
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
