import { Reveal } from "@/components/motion/Reveal";
const outcomes = [
  ["01","Increase conversion","Guide shoppers from inspiration to confident purchase with context-aware product discovery and styling."],
  ["02","Reduce return friction","Use product, behaviour and fit signals to reduce uncertainty before checkout."],
  ["03","Activate creator commerce","Connect creator assets, product catalogues and attributed retail journeys."],
  ["04","Improve customer value","Turn interactions into CRM signals, next-best actions and repeat-commerce opportunities."],
];
export function RetailOutcomes(){return <section id="retail-outcomes" className="section section-paper"><div className="section-shell"><Reveal><p className="section-kicker">BUSINESS OUTCOMES</p><div className="intro-grid"><h2 className="display">Intelligence that moves<br/>the commercial needle.</h2><p className="intro-copy">Fashion Genius is designed around measurable retail outcomes — not isolated AI features.</p></div></Reveal><div className="retail-outcome-grid">{outcomes.map(([n,t,p],i)=><Reveal key={t} delay={i*.08}><article><span>{n}</span><h3>{t}</h3><p>{p}</p></article></Reveal>)}</div></div></section>}
