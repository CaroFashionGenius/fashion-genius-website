import { SITE } from "@/lib/site";
const phases=[
 ["ALIGN","Define the business case, priority journey and measurable success criteria."],
 ["CONNECT","Prepare the required catalogue, experience and workflow interfaces."],
 ["VALIDATE","Launch a focused use case and measure customer and commercial outcomes."],
 ["SCALE","Expand successful workflows across categories, channels and markets."],
];
export function RetailPilot(){return <section className="section section-light" id="retail-pilot"><div className="section-shell"><p className="section-kicker">ENTERPRISE ENGAGEMENT</p><div className="intro-grid"><h2 className="display">Start focused.<br/>Prove value. Scale intelligently.</h2><p className="intro-copy">The Retail Platform is introduced through a structured enterprise pilot rather than a one-size-fits-all subscription.</p></div><div className="pilot-grid">{phases.map(([t,p],i)=><article key={t}><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{p}</p></article>)}</div><div className="pilot-cta"><div><small>RETAIL PLATFORM</small><h3>Explore a pilot around your highest-value commerce journey.</h3></div><a className="button button-dark" href={`mailto:${SITE.founderEmail}?subject=Fashion%20Genius%20Retail%20Platform%20Pilot`}>Discuss a pilot ↗</a></div></div></section>}
