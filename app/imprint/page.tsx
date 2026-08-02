import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";
export const metadata: Metadata={title:"Imprint — Fashion Genius",description:"Contact and publication information for Fashion Genius."};
export default function Imprint(){return <><Navigation/><main className="legal-page"><p className="section-kicker">LEGAL</p><h1>Imprint</h1><p><strong>Fashion Genius</strong><br/>Zug, Switzerland</p><p>Founder & CEO: Caroline Steiger<br/>Email: <a href={`mailto:${SITE.founderEmail}`}>{SITE.founderEmail}</a></p><p className="legal-note">Insert the final registered company name, full postal address, commercial register number and VAT details before production launch.</p></main><Footer/></>}
