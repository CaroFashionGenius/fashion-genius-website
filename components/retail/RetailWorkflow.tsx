const workflow=[
 ["Signal capture","Collect product, shopper, content and commercial signals."],
 ["Intent qualification","Identify meaningful opportunities and confidence levels."],
 ["AI recommendation","Select the most relevant experience, content or action."],
 ["CRM activation","Route qualified intent to marketing, sales or service workflows."],
 ["Revenue measurement","Measure commercial impact and improve the next decision."],
];
export function RetailWorkflow(){return <section className="section section-paper"><div className="section-shell"><p className="section-kicker">AI AGENTS · ANALYTICS · CRM</p><div className="intro-grid"><h2 className="display">Intelligence becomes valuable<br/>when it drives action.</h2><p className="intro-copy">AI agents, business intelligence and CRM orchestration work as one operating loop — from detection to execution and learning.</p></div><div className="retail-workflow">{workflow.map(([t,p],i)=><article key={t}><b>{String(i+1).padStart(2,"0")}</b><h3>{t}</h3><p>{p}</p><i>↘</i></article>)}</div></div></section>}
