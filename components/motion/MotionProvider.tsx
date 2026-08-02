"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function MotionProvider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const header = document.querySelector<HTMLElement>(".site-header");
      if (header) {
        ScrollTrigger.create({
          start: 80,
          onUpdate: self => header.classList.toggle("is-condensed", self.scroll() > 80),
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((element) => {
        gsap.fromTo(element,
          { y: 54, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power4.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]").forEach((container) => {
        const items = Array.from(container.children);
        gsap.fromTo(items,
          { y: 38, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.09, ease: "power3.out", scrollTrigger: { trigger: container, start: "top 82%", once: true } }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax || 0.08);
        gsap.to(element, {
          yPercent: speed * -100,
          ease: "none",
          scrollTrigger: { trigger: element.parentElement ?? element, start: "top bottom", end: "bottom top", scrub: 0.8 }
        });
      });

      const studio = document.querySelector<HTMLElement>(".studio-frame");
      if (studio) {
        gsap.fromTo(studio,
          { rotateX: 9, rotateY: -7, scale: 0.92, opacity: 0, transformPerspective: 1400 },
          { rotateX: 0, rotateY: 0, scale: 1, opacity: 1, duration: 1.45, ease: "expo.out", scrollTrigger: { trigger: studio, start: "top 84%", once: true } }
        );
      }

      gsap.utils.toArray<HTMLElement>(".platform-flow i, .workflow-line i").forEach((arrow, index) => {
        gsap.fromTo(arrow, { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, delay: index * 0.05, scrollTrigger: { trigger: arrow, start: "top 90%", once: true } });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
