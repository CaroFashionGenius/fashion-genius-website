"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  return <header className="site-header">
    <a className="brand" href="/" aria-label="Fashion Genius home"><span className="brand-mark">FG</span><span>FASHION GENIUS</span></a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      <a href="/#platform">Platform</a>
      <div className="nav-item">
        <button type="button" aria-expanded={productsOpen} onClick={() => setProductsOpen(v => !v)}>Products <span>⌄</span></button>
        {productsOpen && <div className="mega-menu">
          <a href="/creator-studio/"><small>SELF-SERVICE SAAS</small><strong>Creator Studio</strong><span>Professional AI content production, plans and workflow.</span></a>
          <a href="/retail-platform/"><small>ENTERPRISE</small><strong>Retail Platform</strong><span>AI commerce, omnichannel journeys and retail intelligence.</span></a>
        </div>}
      </div>
      <a href="/#intelligence">Intelligence</a><a href="/creator-studio/#pricing">Creator Pricing</a><a href="/#vision">Vision</a><a href="/#founder">Company</a>
    </nav>
    <div className="header-actions"><a className="text-link desktop-only" href={SITE.creatorStudioUrl}>Login</a><Button href={SITE.creatorStudioUrl}>Launch Creator Studio ↗</Button><button className="mobile-toggle" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}>☰</button></div>
    {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><a href="/#platform">Platform</a><a href="/creator-studio/">Creator Studio</a><a href="/retail-platform/">Retail Platform</a><a href="/#intelligence">Intelligence</a><a href="/creator-studio/#pricing">Creator Pricing</a><a href="/#founder">Company</a></nav>}
  </header>;
}
