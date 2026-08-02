import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
export function Hero() { return <section className="hero" id="top" aria-labelledby="hero-title">
  <div className="hero-light" aria-hidden="true"/><div className="hero-image" aria-hidden="true"/><div className="hero-overlay" aria-hidden="true"/>
  <div className="hero-copy"><p className="eyebrow">AI COMMERCE PLATFORM FOR FASHION</p><h1 id="hero-title">Intelligence<br/>that elevates<br/><em>fashion.</em></h1><p className="lead">One platform connecting professional creator production with enterprise retail intelligence — designed to create, connect and convert.</p><div className="hero-actions"><Button variant="light" href={SITE.creatorStudioUrl}>Launch Creator Studio ↗</Button><a className="underlined-link" href="#platform">Explore the platform</a></div></div>
  <a className="scroll-enter" href="#platform"><span className="scroll-circle">↓</span><span>SCROLL TO ENTER</span></a>
  <aside className="hero-note"><small>ONE BRAND</small><strong>TWO PRODUCTS</strong><span>Creator Studio · Retail Platform</span></aside>
</section> }
