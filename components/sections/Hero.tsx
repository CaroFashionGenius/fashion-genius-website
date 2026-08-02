"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.05, defaults: { ease: "power4.out" } });
      tl.from(".hero-light", { scaleX: 0, opacity: 0, duration: 0.9, transformOrigin: "center" })
        .from(".hero-image", { scale: 1.08, opacity: 0, duration: 1.25 }, "<0.05")
        .from(".hero-copy .eyebrow", { y: 20, opacity: 0, duration: 0.65 }, "<0.1")
        .from(".hero-title-line", { yPercent: 115, opacity: 0, duration: 0.9, stagger: 0.1 }, "<0.05")
        .from(".hero-copy .lead", { y: 28, opacity: 0, duration: 0.8 }, "<0.15")
        .from(".hero-actions > *", { y: 20, opacity: 0, duration: 0.65, stagger: 0.1 }, "<0.1")
        .from(".scroll-enter, .hero-note", { opacity: 0, y: 14, duration: 0.6, stagger: 0.08 }, "<0.1");

      gsap.to(".hero-image", { yPercent: 12, scale: 1.03, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.8 } });
      gsap.to(".hero-copy", { yPercent: -11, opacity: 0.25, ease: "none", scrollTrigger: { trigger: root.current, start: "35% top", end: "bottom top", scrub: 0.7 } });
      gsap.to(".hero-light", { xPercent: 42, opacity: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "65% top", scrub: 0.6 } });
    }, root);
    return () => ctx.revert();
  }, []);

  return <section ref={root} className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero-light" aria-hidden="true"/><div className="hero-image" aria-hidden="true"/><div className="hero-overlay" aria-hidden="true"/>
    <div className="hero-copy"><p className="eyebrow">AI COMMERCE PLATFORM FOR FASHION</p><h1 id="hero-title"><span className="hero-line-mask"><span className="hero-title-line">Intelligence</span></span><span className="hero-line-mask"><span className="hero-title-line">that elevates</span></span><span className="hero-line-mask"><em className="hero-title-line">fashion.</em></span></h1><p className="lead">One platform connecting professional creator production with enterprise retail intelligence — designed to create, connect and convert.</p><div className="hero-actions"><Button variant="light" href={SITE.creatorStudioUrl}>Launch Creator Studio ↗</Button><a className="underlined-link" href="#platform">Explore the platform</a></div></div>
    <a className="scroll-enter" href="#platform"><span className="scroll-circle">↓</span><span>SCROLL TO ENTER</span></a>
    <aside className="hero-note"><small>ONE BRAND</small><strong>TWO PRODUCTS</strong><span>Creator Studio · Retail Platform</span></aside>
  </section>;
}
