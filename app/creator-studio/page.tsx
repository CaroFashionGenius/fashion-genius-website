import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Concierge } from "@/components/layout/Concierge";
import { CreatorHero } from "@/components/creator/CreatorHero";
import { CreatorBenefits } from "@/components/creator/CreatorBenefits";
import { CreatorWorkflowExperience } from "@/components/creator/CreatorWorkflowExperience";
import { CreatorProductGallery } from "@/components/creator/CreatorProductGallery";
import { CreditSystem } from "@/components/creator/CreditSystem";
import { Pricing } from "@/components/sections/Pricing";
import { PlanComparison } from "@/components/sections/PlanComparison";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { CreatorFAQ } from "@/components/creator/CreatorFAQ";
import { CreatorCTA } from "@/components/creator/CreatorCTA";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Creator Studio — Professional AI Fashion Content | Fashion Genius",
  description: "Create, organise and scale shoppable fashion content with virtual try-on, reusable model and garment libraries, collections, analytics and credit-based production plans.",
  alternates: { canonical: "/creator-studio/" },
  openGraph: {
    title: "Fashion Genius Creator Studio",
    description: "The professional AI workspace for affiliate, UGC and commerce creators.",
    url: `${SITE.url}/creator-studio/`,
    images: [{ url: "/assets/creator-pricing-ui.png", width: 1600, height: 900 }],
  },
};

export default function CreatorStudioPage() {
  return <>
    <Navigation />
    <main id="main" className="creator-product-page">
      <CreatorHero />
      <CreatorBenefits />
      <CreatorWorkflowExperience />
      <CreatorProductGallery />
      <CreditSystem />
      <Pricing />
      <PlanComparison />
      <ROICalculator />
      <CreatorFAQ />
      <CreatorCTA />
    </main>
    <Footer />
    <Concierge />
  </>;
}
