"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSON } from "@/data/portfolio";
import {
  ArrowUpRightIcon,
  CloseIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "./Icons";

interface NavbarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

const NAV_ITEMS = [
  { id: "nav-home", label: "Overview", href: "/" },
  { id: "nav-work", label: "Work", href: "/work" },
  { id: "nav-about", label: "About", href: "/about" },
  { id: "nav-writing", label: "Writing", href: "/writing" },
  { id: "nav-contact", label: "Contact", href: "/contact" },
];

export default function Navbar({
  theme,
  onToggleTheme,
  onOpenPalette,
}: NavbarProps) {
  const pathname = usePathname();
  const [ambientStamp, setAmbientStamp] = useState<string>("LAGOS · WAT");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const dayStr = new Intl.DateTimeFormat("en-GB", {
          timeZone: PERSON.timezone,
          weekday: "short",
          day: "2-digit",
          month: "short",
        }).format(now);
        const timeStr = new Intl.DateTimeFormat("en-GB", {
          timeZone: PERSON.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now);
        setAmbientStamp(`${dayStr} · LAGOS ${timeStr} WAT`);
      } catch {
        setAmbientStamp("LAGOS · GMT+1");
      }
    };

    updateClock();
    const timer = window.setInterval(updateClock, 15000);
    return () => window.clearInterval(timer);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="navbar" id="site-header">
      <div className="container navbar-inner">
        <Link
          href="/"
          className="brand-mark"
          id="brand-home-link"
          aria-label="Abdullah Qaasim-Falade home"
        >
          <span className="avatar-ring">
            <Image
              src={PERSON.avatarImage}
              alt={PERSON.avatarAlt}
              width={44}
              height={44}
              className="avatar-img"
              priority
            />
            <span className="avatar-status-dot" aria-hidden="true" />
          </span>
          <span className="brand-text">
            <span className="brand-name">{PERSON.shortName}</span>
            <span className="brand-clock" suppressHydrationWarning>
              {ambientStamp}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  id={item.id}
                  className={`nav-link${isActive(item.href) ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            id="open-command-palette-btn"
            className="cmd-trigger-btn"
            onClick={onOpenPalette}
            aria-label="Open quick jump search"
            title="Quick jump (⌘K / Ctrl+K)"
          >
            <SearchIcon size={14} />
            <span className="cmd-kbd">⌘K</span>
          </button>

          <Link
            href="/contact"
            id="nav-cta-contact"
            className="btn btn-primary"
            style={{
              padding: "0.52rem 1rem",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
            }}
          >
            Work With Me
            <ArrowUpRightIcon size={14} />
          </Link>

          <button
            type="button"
            id="theme-toggle-btn"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark theme" : "Switch to light theme"
            }
            title={
              theme === "light"
                ? "Switch to Obsidian dark mode"
                : "Switch to Gallery light mode"
            }
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

      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer${menuOpen ? " open" : ""}`}
      >
        <ul className="mobile-nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={`mobile-${item.id}`}>
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{item.label}</span>
                <span
                  className="font-mono"
                  style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}
                >
                  {isActive(item.href) ? "●" : "↗"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
