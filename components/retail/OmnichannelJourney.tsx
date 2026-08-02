"use client";
import { motion } from "framer-motion";
const steps=[
  ["Discover","Search, social, creator content and conversational commerce"],
  ["Understand","Intent, product, fit and behavioural context"],
  ["Personalise","Looks, recommendations and next-best experiences"],
  ["Activate","Website, store, CRM, email and creator channels"],
  ["Learn","Revenue attribution, returns and continuous optimisation"],
];
export function OmnichannelJourney(){return <section className="section section-dark"><div className="section-shell"><p className="section-kicker">OMNICHANNEL JOURNEY</p><div className="intro-grid"><h2 className="display">One shopper.<br/>One continuous journey.</h2><p className="intro-copy muted">Connect inspiration, digital discovery, assisted selling and post-purchase learning across the channels shoppers actually use.</p></div><div className="omnichannel-map">{steps.map(([t,p],i)=><motion.article key={t} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.5}} transition={{delay:i*.1,duration:.55}}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{t}</h3><p>{p}</p></div>{i<steps.length-1&&<i aria-hidden="true">→</i>}</motion.article>)}</div></div></section>}
