import { Reveal } from "@/components/motion/Reveal";
const layers=[
  ["SHOPPER INTELLIGENCE","Understand intent, context, affinity and uncertainty across journeys."],
  ["PRODUCT INTELLIGENCE","Enrich catalogue data with style, fit, occasion and compatibility context."],
  ["CONTENT INTELLIGENCE","Identify which creator, campaign and product narratives drive action."],
  ["REVENUE INTELLIGENCE","Translate behaviour into prioritised commercial recommendations."],
];
export function CommerceIntelligence(){return <section className="section section-light"><div className="section-shell"><Reveal><p className="section-kicker">AI COMMERCE ENGINE</p><div className="intro-grid"><h2 className="display">From signal<br/>to next best action.</h2><p className="intro-copy">The intelligence layer unifies fragmented signals, recommends the next commercial action and measures the outcome.</p></div></Reveal><div className="commerce-loop"><div className="commerce-core"><small>FASHION GENIUS</small><strong>INTELLIGENCE</strong><span>Observe · Recommend · Activate · Learn</span></div>{layers.map(([t,p],i)=><Reveal key={t} delay={i*.08}><article className={`commerce-node node-${i+1}`}><small>{String(i+1).padStart(2,"0")}</small><h3>{t}</h3><p>{p}</p></article></Reveal>)}</div></div></section>}
