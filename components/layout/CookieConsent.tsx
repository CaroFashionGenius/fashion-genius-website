"use client";
import { useEffect, useState } from "react";
import { getLocale } from "@/components/i18n/LanguageController";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [locale, setLocale] = useState<"en" | "de">("en");
  useEffect(() => {
    setLocale(getLocale());
    setVisible(!localStorage.getItem("fg-cookie-consent"));
    const listener = (event: Event) => setLocale((event as CustomEvent).detail.locale);
    window.addEventListener("fg:language-change", listener);
    return () => window.removeEventListener("fg:language-change", listener);
  }, []);
  if (!visible) return null;
  const de = locale === "de";
  const decide = (value: "essential" | "all") => {
    localStorage.setItem("fg-cookie-consent", value);
    window.dispatchEvent(new CustomEvent("fg:consent", { detail: { value } }));
    setVisible(false);
  };
  return <aside className="cookie-consent" aria-label={de ? "Cookie-Einstellungen" : "Cookie settings"}>
    <div><strong>{de ? "Ihre Privatsphäre." : "Your privacy."}</strong><p>{de ? "Wir verwenden notwendige Cookies für die Funktion der Website. Optionale Analytics werden erst nach Ihrer Zustimmung aktiviert." : "We use essential cookies to operate the website. Optional analytics activate only after your consent."}</p><a href="/privacy/">{de ? "Datenschutz" : "Privacy"}</a></div>
    <div className="cookie-actions"><button onClick={() => decide("essential")}>{de ? "Nur notwendige" : "Essential only"}</button><button className="cookie-accept" onClick={() => decide("all")}>{de ? "Alle akzeptieren" : "Accept all"}</button></div>
  </aside>;
}
