"use client";
import { useState } from "react";
const questions=[
 ["Is the Retail Platform available as a self-service subscription?","No. Retail engagements are tailored to the retailer's systems, priority journeys and commercial objectives, beginning with an alignment and pilot phase."],
 ["Does Fashion Genius replace our commerce platform or CRM?","No. Fashion Genius is designed as an intelligence and orchestration layer around the systems retailers already rely on."],
 ["Which use case should a retailer start with?","The first use case should combine visible shopper friction with measurable commercial value, such as guided discovery, styling, creator-commerce activation or return-risk reduction."],
 ["How is success measured?","Success criteria are defined before the pilot and can include conversion, engagement, average order value, return indicators, workflow efficiency and attributed revenue."],
 ["Can the platform support multiple markets or brands?","The architecture is intended to scale modularly across categories, brands, markets and channels after the initial use case is validated."],
];
export function RetailFAQ(){const [open,setOpen]=useState(0);return <section className="section section-dark"><div className="section-shell retail-faq-grid"><div><p className="section-kicker">ENTERPRISE QUESTIONS</p><h2 className="display">Clear answers.<br/>Before the first workshop.</h2></div><div className="retail-faq">{questions.map(([q,a],i)=><article key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><b>{open===i?"−":"+"}</b></button>{open===i&&<p>{a}</p>}</article>)}</div></div></section>}
