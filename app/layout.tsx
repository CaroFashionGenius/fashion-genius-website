import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import { LoadingScreen } from "@/components/motion/LoadingScreen";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { LanguageController } from "@/components/i18n/LanguageController";
import { CookieConsent } from "@/components/layout/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Fashion Genius — AI Commerce Platform for Fashion",
  description: "Fashion Genius connects professional creator production, retail intelligence and AI-powered commerce workflows in one fashion platform.",
  applicationName: "Fashion Genius",
  authors: [{ name: "Fashion Genius" }],
  creator: "Fashion Genius",
  publisher: "Fashion Genius",
  category: "Fashion Technology",
  keywords: ["AI commerce fashion", "AI fashion creator studio", "virtual try-on", "retail intelligence", "fashion content production", "AI commerce platform"],
  formatDetection: { email: false, address: false, telephone: false },
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url, founder: { "@type": "Person", name: "Caroline Steiger", jobTitle: "Founder & CEO" } },
      { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#organization` } },
      { "@type": "SoftwareApplication", name: "Fashion Genius Creator Studio", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: SITE.creatorStudioUrl, offers: [
        { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Creator", price: "19", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Pro", price: "49", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Studio", price: "99", priceCurrency: "EUR" }
      ] }
    ]
  };
  return (
    <html lang="en">
      <head><link rel="preload" href="/assets/hero-model.jpg" as="image" fetchPriority="high"/><meta name="theme-color" content="#060708"/></head>
      <body>
        <LanguageController />
        <LoadingScreen />
        <ScrollProgress />
        <MotionProvider />
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <CookieConsent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
