import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
export function CreatorCTA(){return <section data-gsap-reveal className="creator-final-cta"><div><p className="eyebrow">CREATOR STUDIO</p><h2>Build the next fashion campaign<br/><em>with intelligence.</em></h2><p>Start with the workspace that fits your current production rhythm. Scale when your business grows.</p><Button variant="light" href={SITE.creatorStudioUrl}>Launch Creator Studio ↗</Button></div></section>}
