"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 120 : 1450);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="loading-screen"
          role="status"
          aria-label="Loading Fashion Genius"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.1 : 0.65, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            className="loading-mark"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.1 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            FG
          </motion.div>
          <div className="loading-wordmark">FASHION GENIUS</div>
          <div className="loading-line"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduceMotion ? 0.1 : 1.05, delay: 0.18, ease: [0.65, 0, 0.35, 1] }} /></div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
