import type { Metadata } from "next";
import Image from "next/image";
import styles from "./creator-studio.module.css";

export const metadata: Metadata = {
  title: "Creator Studio | Fashion Genius",
  description:
    "AI-powered fashion content creation for creators. Build looks, generate virtual try-ons, organise results and start for free.",
};

const studioUrl = "https://creatorstudio.fashion-genius.com";

const features = [
  {
    title: "AI Fashion Content",
    copy: "Create editorial fashion visuals and campaign concepts in minutes.",
  },
  {
    title: "Virtual Try-On",
    copy: "Combine a model and garment, preview the pairing and generate a new look.",
  },
  {
    title: "Results Library",
    copy: "Keep every generation, edit and export accessible in one place.",
  },
  {
    title: "Collections",
    copy: "Group looks into campaigns, themes and reusable creative portfolios.",
  },
  {
    title: "Creator Workspace",
    copy: "Manage models, garments, results and projects from one workspace.",
  },
  {
    title: "Free to Start",
    copy: "Create a free account and experience Creator Studio hands-on.",
  },
];

export default function CreatorStudioPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <a href="/" className={styles.brand} aria-label="Fashion Genius home">
          <span className={styles.brandMark}>F</span>
          <span>FASHION<br />GENIUS</span>
        </a>
        <div className={styles.navActions}>
          <a href={studioUrl} className={styles.signIn}>Sign in</a>
          <a href={studioUrl} className={styles.primaryButton}>Start for free</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.kicker}>CREATOR STUDIO</div>
          <h1>
            Create.
            <span>We&apos;ll handle the rest.</span>
          </h1>
          <p>
            The AI workspace for fashion creators to build looks, generate
            virtual try-ons and keep every creative asset organised — in one place.
          </p>

          <div className={styles.heroActions}>
            <a href={studioUrl} className={styles.primaryButton}>Start for free</a>
            <a href="#product" className={styles.textLink}>See Creator Studio in action ↓</a>
          </div>

          <div className={styles.heroProof}>
            <div><strong>AI-powered</strong><span>fashion content</span></div>
            <div><strong>Virtual Try-On</strong><span>in a few steps</span></div>
            <div><strong>One workspace</strong><span>for every asset</span></div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.browserBar}>
            <span /><span /><span />
            <div>creatorstudio.fashion-genius.com</div>
          </div>
         <Image
  src="/login.png"
  alt="Fashion Genius Creator Studio sign-in screen"
  width={1600}
  height={945}
  priority
/>
        </div>
      </section>

      <section className={styles.productIntro} id="product">
        <div className={styles.sectionKicker}>HOW IT WORKS</div>
        <h2>From an idea to reusable fashion content.</h2>
        <p>
          Creator Studio is designed around the way creators actually work:
          choose your assets, generate a look, keep the result and reuse it.
        </p>
      </section>

      <section className={styles.storyGrid}>
        <article className={styles.storyCard}>
          <div className={styles.stepNumber}>01</div>
          <div>
            <h3>Bring your assets.</h3>
            <p>
              Upload your own model and garment or select them from your library.
              Your creative building blocks stay available for future projects.
            </p>
          </div>
        </article>

        <article className={`${styles.storyCard} ${styles.storyCardVisual}`}>
          <div className={styles.stepNumber}>02</div>
          <div className={styles.storyCopy}>
            <h3>Build your look.</h3>
            <p>
              Pair a model with a garment, review the setup and move directly
              into the generation flow.
            </p>
          </div>
          <div className={styles.productFrame}>
            <Image
  src="/try-on.png"
  alt="Fashion Genius Try-On Studio"
  width={888}
  height={504}
/>
          </div>
        </article>

        <article className={`${styles.storyCard} ${styles.resultCard}`}>
          <div className={styles.stepNumber}>03</div>
          <div>
            <h3>Generate. Save. Reuse.</h3>
            <p>
              Turn a pairing into new content, keep your results and continue
              building variations instead of starting from scratch every time.
            </p>
          </div>
          <div className={styles.resultVisual}>
            <Image
  src="/collections.png"
  alt="Saved collections inside Fashion Genius Creator Studio"
  width={888}
  height={557}
/>
          </div>
        </article>
      </section>

      <section className={styles.featureSection}>
        <div className={styles.featureHeader}>
          <div className={styles.sectionKicker}>WHAT YOU GET TODAY</div>
          <h2>Everything you need to start creating.</h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <article className={styles.feature} key={feature.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.nowSection}>
        <div>
          <div className={styles.sectionKicker}>WHY NOW</div>
          <h2>Try the product. Decide for yourself.</h2>
        </div>
        <div className={styles.nowCopy}>
          <p>
            Creator Studio is available to experience now. Registration is free,
            there is nothing to install, and you can start exploring the workflow
            directly in your browser.
          </p>
          <ul>
            <li>Free account available</li>
            <li>No installation</li>
            <li>Start creating immediately</li>
            <li>Early access to new creator capabilities</li>
          </ul>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.founderInner}>
          <div className={styles.portraitWrap}>
            <Image
  src="/caroline.png"
  alt="Caroline Steiger, Founder & CEO"
  width={420}
  height={420}
  className={styles.portrait}
/>
          </div>
          <div>
            <div className={styles.sectionKicker}>A NOTE FROM THE FOUNDER</div>
            <h2>Built to give creators more time to create.</h2>
            <p>
              We&apos;re building Creator Studio to make fashion creation faster,
              simpler and more organised — while keeping creativity at the centre.
            </p>
            <div className={styles.founderName}>Caroline Steiger</div>
            <div className={styles.founderRole}>Founder &amp; CEO, Fashion Genius</div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCopy}>
          <div className={styles.sectionKicker}>READY TO CREATE?</div>
          <h2>Start creating today.</h2>
          <p>
            Create your free account and experience Creator Studio hands-on.
          </p>
          <a href={studioUrl} className={styles.primaryButton}>Start for free</a>
        </div>

        <div className={styles.qrBlock}>
          <div className={styles.qrFrame}>
            <Image
  src="/qr-code.jpg"
  alt="QR code to Fashion Genius Creator Studio"
  width={320}
  height={320}
/>
          </div>
          <a href={studioUrl}>creatorstudio.fashion-genius.com</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 Fashion Genius</span>
        <span>Creator Studio</span>
      </footer>
    </main>
  );
}
