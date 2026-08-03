"use client";

import { motion, useReducedMotion } from "framer-motion";

type CreditPoint = {
  title: string;
  description: string;
};

const creditPoints: CreditPoint[] = [
  {
    title: "Flexible production capacity",
    description:
      "Credits provide a flexible usage layer for AI-powered image generation across Creator Studio.",
  },
  {
    title: "Designed around AI costs",
    description:
      "Credit consumption can vary depending on the AI model and generation type used for each workflow.",
  },
  {
    title: "Monthly plan allocation",
    description:
      "Credits included in a subscription refresh at the beginning of every billing cycle.",
  },
  {
    title: "Purchased credits remain available",
    description:
      "Additional credits purchased separately are managed independently and do not expire.",
  },
  {
    title: "Built for future expansion",
    description:
      "The credit architecture supports future image and video workflows without rebuilding the subscription model.",
  },
  {
    title: "Transparent usage control",
    description:
      "Creators can monitor their available balance, usage history and remaining production capacity.",
  },
];

const orbitItems = [
  {
    label: "IMAGE",
    className: "orbit-a",
  },
  {
    label: "TRY-ON",
    className: "orbit-b",
  },
  {
    label: "FUTURE VIDEO",
    className: "orbit-c",
  },
] as const;

export function CreditSystem() {
  const reduceMotion = useReducedMotion();

  const revealTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      };

  return (
    <section
      id="creator-pricing"
      className="section section-paper credit-system"
      data-gsap-reveal
      aria-labelledby="credit-system-title"
    >
      <div className="section-shell">
        <div className="credit-system-grid">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={revealTransition}
          >
            <p className="section-kicker">AI CREDIT SYSTEM</p>

            <h2 id="credit-system-title" className="display">
              Capacity that adapts
              <br />
              to the way you create.
            </h2>

            <p className="intro-copy">
              Credits are the flexible usage layer behind Creator Studio. The
              product remains focused on professional outcomes, while the credit
              model keeps production capacity transparent, scalable and aligned
              with the infrastructure costs of different AI workflows.
            </p>
          </motion.div>

          <motion.div
            className="credit-orbit"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              ...revealTransition,
              delay: reduceMotion ? 0 : 0.15,
            }}
          >
            <motion.div
              className="credit-core"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.035, 1],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
            >
              <span>AI</span>
              <br />
              <strong>CREDITS</strong>
            </motion.div>

            {orbitItems.map((item, index) => (
              <motion.span
                key={item.label}
                className={item.className}
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={reduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.35 + index * 0.12,
                }}
              >
                {item.label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="credit-points" data-gsap-stagger>
          {creditPoints.map((point, index) => (
            <motion.article
              key={point.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="credit-disclaimer"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.2,
          }}
        >
          <p>
            Credit consumption depends on the AI model and generation type.
            Current Creator Studio functionality includes image generation,
            model and garment workflows, collections, results, billing and usage
            tracking.
          </p>

          <p>
            Video generation, API access and additional AI-model options are not
            included in the current product scope.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
