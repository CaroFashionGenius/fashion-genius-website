import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";
export const metadata: Metadata={title:"Terms — Fashion Genius",description:"Website terms for Fashion Genius."};
export default function Terms(){return <><Navigation/><main className="legal-page"><p className="section-kicker">LEGAL</p><h1>Website Terms</h1><p>The information on this website describes the Fashion Genius platform, Creator Studio and the Retail Platform. Product availability, usage rights and commercial conditions are governed by the applicable product agreement or enterprise contract.</p><p>Website content may not be copied, represented as a partnership or used to imply endorsement without written permission.</p><p>For contractual questions, contact <a href={`mailto:${SITE.founderEmail}`}>{SITE.founderEmail}</a>.</p><p className="legal-note">Final product terms, credit rules and commercial usage provisions must be reviewed by qualified legal counsel before production launch.</p></main><Footer/></>}
