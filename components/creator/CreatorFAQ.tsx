"use client";
import { useState } from "react";
const questions = [
  ["Who is Creator Studio built for?", "Affiliate, UGC and commerce creators, professional creators, small teams and organisations producing fashion content at scale."],
  ["How do credits work?", "Plan credits refresh with each billing cycle. Credit consumption can vary by AI model and generation type. Purchased credits are handled separately."],
  ["Can I use exported assets commercially?", "Commercial rights are included in the Creator, Pro and Studio plans, subject to the platform terms and consent requirements."],
  ["Is there a generic free trial?", "The current baseline does not include a generic free trial. The first approved Founding Creators receive time-limited access with included credits."],
  ["Does Creator Studio include video generation?", "Not yet. The current product scope focuses on image generation. The credit architecture is designed to support future image and video monetisation."],
  ["Can teams use Creator Studio?", "Yes. Pro includes three team seats, Studio includes ten and Enterprise supports custom team capacity."],
];
export function CreatorFAQ(){const [open,setOpen]=useState(0);return <section data-gsap-reveal className="section section-dark"><div className="section-shell creator-faq-grid"><div><p className="section-kicker">COMMON QUESTIONS</p><h2 className="display">Everything you need<br/>before you begin.</h2></div><div className="creator-faq">{questions.map(([q,a],i)=><article className={open===i?"open":""} key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{q}</span><b>{open===i?"−":"+"}</b></button>{open===i&&<p>{a}</p>}</article>)}</div></div></section>}
