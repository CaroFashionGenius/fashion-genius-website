const architecture=[
  ["Existing Commerce Stack","PIM · DAM · CMS · commerce platform · inventory · loyalty"],
  ["Fashion Genius Intelligence","Product context · shopper intent · creator signals · recommendations"],
  ["Activation Layer","Web · app · CRM · email · store associate · social commerce"],
  ["Measurement Layer","Conversion · AOV · returns · engagement · CLV · attributed revenue"],
];
export function EnterpriseArchitecture(){return <section className="section section-dark"><div className="section-shell"><p className="section-kicker">ENTERPRISE ARCHITECTURE</p><div className="intro-grid"><h2 className="display">Built around your stack.<br/>Not instead of it.</h2><p className="intro-copy muted">Fashion Genius acts as an orchestration and intelligence layer, allowing retailers to start with a focused pilot and expand without replacing core systems.</p></div><div className="enterprise-stack">{architecture.map(([t,p],i)=><article key={t}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{t}</h3><p>{p}</p></div></article>)}</div><div className="architecture-principles"><span>API-ready direction</span><span>Modular deployment</span><span>Role-based experiences</span><span>GDPR-conscious design</span><span>Enterprise governance</span></div></div></section>}
