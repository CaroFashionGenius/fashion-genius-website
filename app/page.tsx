import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Concierge } from "@/components/layout/Concierge";
import { Hero } from "@/components/sections/Hero";
import { PlatformStory } from "@/components/sections/PlatformStory";
import { CreatorStudio } from "@/components/sections/CreatorStudio";
import { Workflow } from "@/components/sections/Workflow";
import { Intelligence } from "@/components/sections/Intelligence";
import { RetailPlatform } from "@/components/sections/RetailPlatform";
import { Pricing } from "@/components/sections/Pricing";
import { PlanComparison } from "@/components/sections/PlanComparison";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Founder } from "@/components/sections/Founder";

export default function HomePage(){return <><Navigation/><main id="main"><Hero/><PlatformStory/><CreatorStudio/><Workflow/><Intelligence/><RetailPlatform/><Pricing/><PlanComparison/><ROICalculator/><Founder/><section className="vision-strip" id="vision"><p>We believe the future of fashion will be built by people working with intelligence.</p><strong>FASHION GENIUS</strong></section></main><Footer/><Concierge/></>}
