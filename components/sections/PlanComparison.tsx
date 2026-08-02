import { plans } from "@/lib/site";
export function PlanComparison() {
  const rows = [
    ["credits", "Credits"], ["watermark", "Watermark"], ["collections", "Collections"], ["uploads", "Uploads"],
    ["processing", "Processing"], ["history", "Session history"], ["export", "Export quality"], ["analytics", "Analytics"],
    ["support", "Support"], ["earlyAccess", "Early access"], ["integrations", "Integrations"], ["commercialRights", "Commercial rights"], ["seats", "Team seats"]
  ] as const;
  return <section data-gsap-reveal className="section section-light"><div className="section-shell"><p className="section-kicker">FULL PLAN COMPARISON</p><div className="intro-grid"><h2 className="display">See exactly what<br/>changes as you scale.</h2><p className="intro-copy">The plan architecture follows the current Creator Studio monetisation baseline and the product implementation already in place.</p></div><div className="table-wrap"><table><thead><tr><th>Feature</th>{plans.map(p=><th key={p.name}>{p.name}<small>{p.price}{p.price.startsWith("€")?" / month":""}</small></th>)}</tr></thead><tbody>{rows.map(([key,label])=><tr key={key}><th>{label}</th>{plans.map(p=><td key={p.name}>{p[key]}</td>)}</tr>)}</tbody></table></div></div></section>;
}
