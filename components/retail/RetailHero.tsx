"use client";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

export function RetailHero() {
  return <section className="retail-hero">
    <div className="retail-hero-orbit" aria-hidden="true" />
    <div className="retail-hero-shell">
      <motion.div className="retail-hero-copy" initial={{opacity:0,y:34}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}}>
        <p className="eyebrow">FASHION GENIUS RETAIL PLATFORM</p>
        <h1>Turn shopper intent<br/>into <em>commerce action.</em></h1>
        <p className="lead">A tailored AI commerce platform for fashion brands and retailers — connecting product discovery, personalisation, creator content, CRM activation and measurable revenue intelligence.</p>
        <div className="retail-hero-actions">
          <a className="button button-light" href={`mailto:${SITE.founderEmail}?subject=Fashion%20Genius%20Retail%20Platform%20Pilot`}>Discuss an enterprise pilot ↗</a>
          <a className="underlined-link" href="#retail-outcomes">Explore the platform</a>
        </div>
        <div className="retail-hero-proof"><span>Enterprise architecture</span><span>Omnichannel journeys</span><span>AI revenue workflows</span></div>
      </motion.div>
      <motion.div className="retail-command" initial={{opacity:0,rotateY:-10,x:55}} animate={{opacity:1,rotateY:0,x:0}} transition={{duration:1.15,delay:.18,ease:[.22,1,.36,1]}}>
        <div className="retail-command-top"><span>FASHION GENIUS / RETAIL INTELLIGENCE</span><small>LIVE SIGNAL VIEW</small></div>
        <div className="retail-command-grid">
          <div className="retail-kpi retail-kpi-large"><small>REVENUE OPPORTUNITY</small><strong>€2.4M</strong><span>Estimated addressable uplift</span><i>+12.8%</i></div>
          <div className="retail-kpi"><small>SHOPPER INTENT</small><strong>8,462</strong><span>High-intent sessions</span></div>
          <div className="retail-kpi"><small>RETURN RISK</small><strong>−18%</strong><span>Potential reduction</span></div>
          <div className="retail-chart" aria-label="Commerce intelligence trend visual"><svg viewBox="0 0 600 220" role="img"><path d="M10 185 C75 175,95 128,155 145 S255 155,305 91 S405 128,455 62 S535 78,590 24" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M10 185 C75 175,95 128,155 145 S255 155,305 91 S405 128,455 62 S535 78,590 24 L590 215 L10 215Z" fill="url(#fade)" opacity=".25"/><defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs></svg><div><span>Discovery</span><span>Engagement</span><span>Conversion</span></div></div>
          <div className="retail-signal-list"><p><b>01</b><span>High intent detected</span><small>Activate personalised look</small></p><p><b>02</b><span>Fit uncertainty rising</span><small>Trigger guided assistance</small></p><p><b>03</b><span>Creator content converting</span><small>Scale winning format</small></p></div>
        </div>
      </motion.div>
    </div>
  </section>;
}
