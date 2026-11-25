"use client";

import React, { useEffect, useState } from "react";
import { PERSON } from "@/data/portfolio";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: "nav-work", label: "Work", href: "#work" },
  { id: "nav-archive", label: "Archive", href: "#archive" },
  { id: "nav-ventures", label: "Ventures", href: "#ventures" },
  { id: "nav-writing", label: "Writing", href: "#writing" },
  { id: "nav-about", label: "About", href: "#about" },
  { id: "nav-contact", label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [lagosTime, setLagosTime] = useState<string>("WAT · GMT+1");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: PERSON.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setLagosTime(`LAGOS · ${formatted} WAT`);
      } catch {
        setLagosTime("LAGOS · GMT+1");
      }
    };

    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="navbar" id="site-header">
      <div className="container navbar-inner">
        <a href="#top" className="brand-mark" id="brand-home-link" aria-label="Abdullah Qaasim-Falade home">
          <span className="monogram-box">{PERSON.monogram}</span>
          <span className="brand-text">
            <span className="brand-name">{PERSON.shortName}</span>
            <span className="brand-clock" suppressHydrationWarning>
              {lagosTime}
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.href} id={item.id} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            id="theme-toggle-btn"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            title={theme === "light" ? "Switch to Obsidian dark mode" : "Switch to Limestone light mode"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            type="button"
            id="mobile-menu-toggle"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-nav-drawer" className={`mobile-nav-drawer${menuOpen ? " open" : ""}`}>
        <ul className="mobile-nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={`mobile-${item.id}`}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
                <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}>
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
