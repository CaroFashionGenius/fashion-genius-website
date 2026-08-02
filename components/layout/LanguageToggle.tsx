"use client";
import { useEffect, useState } from "react";
import { getLocale, setLocale, type Locale } from "@/components/i18n/LanguageController";

export function LanguageToggle() {
  const [locale, updateLocale] = useState<Locale>("en");
  useEffect(() => updateLocale(getLocale()), []);
  const change = (next: Locale) => { updateLocale(next); setLocale(next); };
  return <div className="language-toggle" role="group" aria-label="Language selection">
    <button type="button" className={locale === "de" ? "active" : ""} aria-pressed={locale === "de"} onClick={() => change("de")}>DE</button>
    <span aria-hidden="true">/</span>
    <button type="button" className={locale === "en" ? "active" : ""} aria-pressed={locale === "en"} onClick={() => change("en")}>EN</button>
  </div>;
}
