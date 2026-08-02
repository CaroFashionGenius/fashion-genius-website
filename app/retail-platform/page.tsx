import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Concierge } from "@/components/layout/Concierge";
import { RetailHero } from "@/components/retail/RetailHero";
import { RetailOutcomes } from "@/components/retail/RetailOutcomes";
import { OmnichannelJourney } from "@/components/retail/OmnichannelJourney";
import { CommerceIntelligence } from "@/components/retail/CommerceIntelligence";
import { EnterpriseArchitecture } from "@/components/retail/EnterpriseArchitecture";
import { RetailWorkflow } from "@/components/retail/RetailWorkflow";
import { RetailPilot } from "@/components/retail/RetailPilot";
import { RetailFAQ } from "@/components/retail/RetailFAQ";
import { RetailCTA } from "@/components/retail/RetailCTA";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Retail Platform — AI Commerce Intelligence for Fashion | Fashion Genius",
  description: "A tailored AI commerce platform for fashion brands and retailers connecting shopper intent, product intelligence, omnichannel activation, CRM workflows and measurable revenue outcomes.",
  alternates: { canonical: "/retail-platform/" },
  openGraph: {
    title: "Fashion Genius Retail Platform",
    description: "Turn shopper intent into measurable commerce action.",
    url: `${SITE.url}/retail-platform/`,
    images: [{ url: "/assets/experience-reference.png", width: 1600, height: 900 }],
  },
};

export default function RetailPlatformPage(){return <>
  <Navigation />
  <main id="main" className="retail-product-page">
    <RetailHero />
    <RetailOutcomes />
    <OmnichannelJourney />
    <CommerceIntelligence />
    <EnterpriseArchitecture />
    <RetailWorkflow />
    <RetailPilot />
    <RetailFAQ />
    <RetailCTA />
  </main>
  <Footer />
  <Concierge />
</>}
