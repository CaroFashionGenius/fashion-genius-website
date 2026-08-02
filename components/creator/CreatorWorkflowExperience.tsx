const steps = [
  ["01", "Upload", "Add a garment or select an existing asset."],
  ["02", "Compose", "Choose a reusable virtual model and creative direction."],
  ["03", "Generate", "Create high-quality virtual try-on and editorial results."],
  ["04", "Curate", "Review, save and organise work into campaign collections."],
  ["05", "Publish", "Export content for social, affiliate and commerce use."],
  ["06", "Learn", "Use activity and analytics to improve the next production cycle."],
];
export function CreatorWorkflowExperience(){return <section data-gsap-reveal className="section section-dark creator-workflow-section"><div className="section-shell"><p className="section-kicker">THE WORKFLOW</p><h2 className="display">From garment to campaign<br/>in one continuous flow.</h2><div className="creator-workflow" data-gsap-stagger>{steps.map(([n,t,c],i)=><article key={n}><div className="workflow-number">{n}</div><div><h3>{t}</h3><p>{c}</p></div>{i<steps.length-1&&<i aria-hidden="true">→</i>}</article>)}</div></div></section>}
