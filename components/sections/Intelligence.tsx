const cards=[
  ["AI Agents","Qualify, route and activate the next best action across creator and retail journeys."],
  ["Analytics","Understand usage, content performance, subscriptions and conversion signals."],
  ["CRM Intelligence","Connect lead, customer and partner context without exposing internal orchestration."],
  ["Business Intelligence","Turn platform data into decisions for creators, operators and enterprise teams."]
];
export function Intelligence() { return <section data-gsap-reveal className="section section-dark" id="intelligence"><div className="section-shell"><p className="section-kicker">THE INTELLIGENCE LAYER</p><div className="intro-grid"><h2 className="display">Data becomes<br/>the next action.</h2><p className="intro-copy muted">Fashion Genius combines product experience with operational intelligence — while the underlying agent, CRM and workflow architecture remains a protected system.</p></div><div className="intelligence-grid" data-gsap-stagger>{cards.map(([t,c],i)=><article key={t}><small>0{i+1}</small><h3>{t}</h3><p>{c}</p></article>)}</div></div></section> }
