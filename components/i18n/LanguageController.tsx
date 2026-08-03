"use client";

import { useEffect } from "react";

export type Locale = "en" | "de";

const translations: Record<string, string> = {
  "Skip to content": "Zum Inhalt springen",
  "Platform": "Plattform",
  "Products": "Produkte",
  "Creator Pricing": "Creator-Preise",
  "Vision": "Vision",
  "Company": "Unternehmen",
  "Login": "Anmelden",
  "Launch Creator Studio ↗": "Creator Studio starten ↗",
  "SELF-SERVICE SAAS": "SELF-SERVICE SAAS",
  "Creator Studio": "Creator Studio",
  "Professional AI content production, plans and workflow.": "Professionelle AI-Content-Produktion, Pläne und Workflows.",
  "ENTERPRISE": "ENTERPRISE",
  "Retail Platform": "Retail Platform",
  "AI commerce, omnichannel journeys and retail intelligence.": "AI Commerce, Omnichannel Journeys und Retail Intelligence.",
  "AI COMMERCE PLATFORM FOR FASHION": "AI-COMMERCE-PLATTFORM FÜR FASHION",
  "Intelligence": "Intelligenz",
  "that elevates": "die Fashion",
  "fashion.": "neu definiert.",
  "One platform connecting professional creator production with enterprise retail intelligence — designed to create, connect and convert.": "Eine Plattform verbindet professionelle Creator-Produktion mit Enterprise Retail Intelligence – entwickelt, um zu kreieren, zu verbinden und zu konvertieren.",
  "Explore the platform": "Plattform entdecken",
  "SCROLL TO ENTER": "SCROLLEN ZUM START",
  "ONE BRAND": "EINE MARKE",
  "TWO PRODUCTS": "ZWEI PRODUKTE",
  "Creator Studio · Retail Platform": "Creator Studio · Retail Platform",
  "THE PLATFORM": "DIE PLATTFORM",
  "One brand. Two products.": "Eine Marke. Zwei Produkte.",
  "Professional AI creation": "Professionelle AI-Produktion",
  "Creator production": "Creator-Produktion",
  "Retail and catalogue integration": "Retail- und Katalogintegration",
  "Shopper journeys": "Shopper Journeys",
  "Signals & decisions": "Signale & Entscheidungen",
  "Commerce outcomes": "Commerce-Ergebnisse",
  "Explore Creator Studio": "Creator Studio entdecken",
  "Discuss a retail pilot ↗": "Retail-Pilot besprechen ↗",
  "INTRODUCING CREATOR STUDIO": "CREATOR STUDIO",
  "Create demand.": "Nachfrage schaffen.",
  "Professional creation.": "Professionelle Produktion.",
  "Creator Studio turns garments and ideas into commercial fashion content.": "Creator Studio verwandelt Kleidungsstücke und Ideen in kommerziellen Fashion Content.",
  "Open Creator Studio ↗": "Creator Studio öffnen ↗",
  "THE WORKFLOW": "DER WORKFLOW",
  "From garment to campaign": "Vom Kleidungsstück zur Kampagne",
  "Create": "Kreieren",
  "Organise.": "Organisieren.",
  "Operate": "Steuern",
  "Manage": "Verwalten",
  "Measure": "Messen",
  "THE INTELLIGENCE LAYER": "DER INTELLIGENCE LAYER",
  "Intelligence that moves the commercial needle.": "Intelligence, die wirtschaftliche Wirkung erzielt.",
  "Creator usage and performance visibility": "Transparenz über Creator-Nutzung und Performance",
  "Credits, subscriptions and billing": "Credits, Abonnements und Billing",
  "Customer, campaign and revenue intelligence": "Customer-, Kampagnen- und Revenue-Intelligence",
  "CRM & revenue workflows": "CRM- und Revenue-Workflows",
  "AI AGENTS · ANALYTICS · CRM": "AI AGENTS · ANALYTICS · CRM",
  "Connect commerce.": "Commerce verbinden.",
  "Connect discovery, personalisation and commerce intelligence across fashion retail journeys.": "Discovery, Personalisierung und Commerce Intelligence über die gesamte Fashion-Retail-Journey verbinden.",
  "Discuss an enterprise pilot ↗": "Enterprise-Pilot besprechen ↗",
  "CREATOR STUDIO PLANS": "CREATOR-STUDIO-PLÄNE",
  "Choose the capacity that fits your work.": "Wähle die Kapazität, die zu deiner Arbeit passt.",
  "Start with the workspace that fits your current production rhythm. Scale when your business grows.": "Starte mit dem Workspace, der zu deinem aktuellen Produktionsrhythmus passt. Skaliere mit deinem Business.",
  "FULL PLAN COMPARISON": "VOLLSTÄNDIGER PLANVERGLEICH",
  "See exactly what changes as you scale.": "Sieh genau, was sich beim Skalieren verändert.",
  "CAPACITY ADVISOR": "KAPAZITÄTSBERATER",
  "How many campaigns do you create per month?": "Wie viele Kampagnen produzierst du pro Monat?",
  "Adjust the workload estimate to see the most appropriate starting plan.": "Passe das Volumen an und finde den passenden Einstiegsplan.",
  "RECOMMENDED STARTING POINT": "EMPFOHLENER EINSTIEG",
  "A LETTER FROM THE FOUNDER": "EIN BRIEF DER GRÜNDERIN",
  "Why I started Fashion Genius.": "Warum ich Fashion Genius gegründet habe.",
  "Founder & CEO · Fashion Genius": "Founder & CEO · Fashion Genius",
  "We believe the future of fashion will be built by people working with intelligence.": "Wir glauben, dass die Zukunft der Fashion-Industrie von Menschen gestaltet wird, die mit Intelligence arbeiten.",
  "Building the intelligence layer for fashion creation and commerce.": "Wir bauen den Intelligence Layer für Fashion Creation und Commerce.",
  "Solutions": "Lösungen",
  "Creators": "Creators",
  "Brands": "Marken",
  "Retailers": "Retailer",
  "Enterprise": "Enterprise",
  "Founder Letter": "Founder Brief",
  "Contact": "Kontakt",
  "Careers": "Karriere",
  "Resources": "Ressourcen",
  "Documentation": "Dokumentation",
  "Release Notes": "Release Notes",
  "Media Kit": "Media Kit",
  "Brand Assets": "Brand Assets",
  "Legal": "Rechtliches",
  "Privacy": "Datenschutz",
  "Terms": "Nutzungsbedingungen",
  "Cookies": "Cookies",
  "Imprint": "Impressum",
  "© 2026 Fashion Genius. All rights reserved.": "© 2026 Fashion Genius. Alle Rechte vorbehalten.",
  "Switzerland · English": "Schweiz · Deutsch",
  "Digital Concierge": "Digital Concierge",
  "AI online · founder handoff available": "AI online · Übergabe an die Gründerin möglich",
  "Verified Fashion Genius knowledge": "Verifiziertes Fashion-Genius-Wissen",
  "COMMON QUESTIONS": "HÄUFIGE FRAGEN",
  "Clear answers. before you begin.": "Klare Antworten, bevor du startest.",
  "Start the conversation ↗": "Gespräch starten ↗",
  "Creator Studio plans": "Creator-Studio-Pläne",
  "AI CREDIT SYSTEM": "AI-CREDIT-SYSTEM",
  "Capacity that adapts to the way you create.": "Kapazität, die sich deiner Produktion anpasst.",
  "THE CREATOR WORKFLOW": "DER CREATOR-WORKFLOW",
  "From idea to commercial asset.": "Von der Idee zum kommerziellen Asset.",
  "WHY CREATOR STUDIO": "WARUM CREATOR STUDIO",
  "A workspace designed for real production.": "Ein Workspace für echte Produktion.",
  "THE PRODUCT": "DAS PRODUKT",
  "Everything you need in one continuous flow.": "Alles, was du brauchst – in einem durchgängigen Workflow.",
  "Launch App ↗": "App starten ↗",
  "FASHION GENIUS RETAIL PLATFORM": "FASHION GENIUS RETAIL PLATFORM",
  "Turn shopper intent into measurable commerce action.": "Shopper Intent in messbare Commerce-Aktionen verwandeln.",
  "Start focused. Prove value. Scale intelligently.": "Fokussiert starten. Wert belegen. Intelligent skalieren.",
  "BUSINESS OUTCOMES": "BUSINESS OUTCOMES",
  "Fashion Genius is designed around measurable retail outcomes — not isolated AI features.": "Fashion Genius ist auf messbare Retail-Ergebnisse ausgerichtet – nicht auf isolierte AI-Features.",
  "OMNICHANNEL JOURNEY": "OMNICHANNEL JOURNEY",
  "One shopper. One continuous journey.": "Ein Shopper. Eine durchgängige Journey.",
  "AI COMMERCE ENGINE": "AI COMMERCE ENGINE",
  "From signal to next best action.": "Vom Signal zur Next Best Action.",
  "ENTERPRISE ARCHITECTURE": "ENTERPRISE-ARCHITEKTUR",
  "Built around your stack. Not instead of it.": "Rund um deinen Stack gebaut. Nicht an seiner Stelle.",
  "ENTERPRISE ENGAGEMENT": "ENTERPRISE ENGAGEMENT",
  "Explore a pilot around your highest-value commerce journey.": "Entdecke einen Pilot rund um deine wertvollste Commerce Journey.",
  "Bring your priority retail challenge. We will frame the opportunity, the pilot and the path to measurable value.": "Bring deine wichtigste Retail-Herausforderung mit. Gemeinsam definieren wir Opportunity, Pilot und den Weg zu messbarem Mehrwert.",
  "Discuss a pilot ↗": "Pilot besprechen ↗"
};

const originalTexts = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Record<string, string>>();
const ATTRS = ["placeholder", "aria-label", "title"] as const;

function translateText(value: string, locale: Locale) {
  if (locale === "en") return value;
  const trimmed = value.trim();
  const translated = translations[trimmed];
  if (!translated) return value;
  return value.replace(trimmed, translated);
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  let current: Node | null;
  while ((current = walker.nextNode())) {
    const text = current as Text;
    if (!originalTexts.has(text)) originalTexts.set(text, text.nodeValue || "");
    const original = originalTexts.get(text) || "";
    const nextValue = translateText(original, locale);
    if (text.nodeValue !== nextValue) text.nodeValue = nextValue;
  }

  document.querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title]").forEach((element) => {
    if (!originalAttributes.has(element)) {
      const values: Record<string, string> = {};
      ATTRS.forEach((attr) => {
        const value = element.getAttribute(attr);
        if (value) values[attr] = value;
      });
      originalAttributes.set(element, values);
    }
    const values = originalAttributes.get(element) || {};
    Object.entries(values).forEach(([attr, value]) => {
      const nextValue = translateText(value, locale);
      if (element.getAttribute(attr) !== nextValue) element.setAttribute(attr, nextValue);
    });
  });

  window.dispatchEvent(new CustomEvent("fg:language-change", { detail: { locale } }));
}

export function setLocale(locale: Locale) {
  localStorage.setItem("fg-locale", locale);
  applyLocale(locale);
}

export function getLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("fg-locale");
  return stored === "de" ? "de" : "en";
}

export function LanguageController() {
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    const locale: Locale = requested === "de" || requested === "en" ? requested : getLocale();
    applyLocale(locale);

    const observer = new MutationObserver(() => applyLocale(getLocale()));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
