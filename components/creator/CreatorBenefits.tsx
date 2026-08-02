const benefits = [
  ["01", "Create without a photoshoot", "Produce fashion imagery without physical samples, studio bookings or traditional editing cycles."],
  ["02", "Build reusable libraries", "Keep virtual models, garments, results and collections organised inside one professional workspace."],
  ["03", "Move from output to commerce", "Create assets designed for UGC, affiliate content, campaigns and shoppable fashion storytelling."],
  ["04", "Operate with control", "Track credits, subscriptions, usage, activity and analytics as your production volume grows."],
];
export function CreatorBenefits(){return <section data-gsap-reveal className="section section-paper"><div className="section-shell"><p className="section-kicker">WHY CREATOR STUDIO</p><div className="intro-grid"><h2 className="display">Professional creation.<br/>Less production friction.</h2><p className="intro-copy">Creator Studio brings the essential fashion-content workflow into one connected environment — built for repeatable output, not one-off image experiments.</p></div><div className="creator-benefit-grid" data-gsap-stagger>{benefits.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>}
