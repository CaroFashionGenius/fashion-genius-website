"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function CreatorHero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: .35, defaults: { ease: "power4.out" } });
      tl.from(".creator-hero-copy > *", { y: 42, opacity: 0, duration: .95, stagger: .1 })
        .from(".creator-device", { y: 90, rotateX: 10, scale: .9, opacity: 0, duration: 1.35, transformPerspective: 1600 }, "<.05")
        .from(".creator-hero-proof span", { y: 18, opacity: 0, duration: .65, stagger: .08 }, "<.2");
      gsap.to(".creator-device", { yPercent: 8, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: .8 } });
    }, root);
    return () => ctx.revert();
  }, []);

  return <section ref={root} className="creator-hero" id="creator-top">
    <div className="creator-hero-glow" aria-hidden="true" />
    <div className="creator-hero-shell">
      <div className="creator-hero-copy">
        <p className="eyebrow">FASHION GENIUS · CREATOR STUDIO</p>
        <h1>Create fashion content<br/><em>at commerce speed.</em></h1>
        <p className="lead">A professional AI workspace for affiliate, UGC and commerce creators — from garment and model selection to campaign-ready results, collections and performance insight.</p>
        <div className="hero-actions">
          <Button variant="light" href={SITE.creatorStudioUrl}>Launch Creator Studio ↗</Button>
          <a className="underlined-link" href="#pricing">View plans</a>
        </div>
        <div className="creator-hero-proof" aria-label="Creator Studio highlights">
          <span>Virtual Try-On</span><span>Commercial Usage</span><span>HD–Premium Export</span><span>Analytics</span>
        </div>
      </div>
      <div className="creator-device-wrap">
        <div className="creator-device" aria-label="Creator Studio interface preview">
          <div className="browser-bar"><i/><i/><i/><span>creatorstudio.fashion-genius.com</span></div>
          <div className="creator-device-screen">
            <div className="device-sidebar"><strong>FG</strong><span>Results</span><span>Collections</span><span>Models</span><span>Garments</span><span className="active">Try-On Studio</span></div>
            <div className="device-content"><div className="device-heading"><div><small>CREATOR STUDIO</small><strong>Try-On Studio</strong></div><button>Generate</button></div><div className="device-canvas"><div className="device-look device-look-a"/><div className="device-look device-look-b"/><div className="device-look device-look-c"/></div><div className="device-status"><span>Model selected</span><span>Garment ready</span><b>10 credits</b></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
