"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; distance?: number };

export function Parallax({ children, className = "", distance = 44 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [distance, -distance]);
  return <motion.div ref={ref} className={className} style={{ y }}>{children}</motion.div>;
}
