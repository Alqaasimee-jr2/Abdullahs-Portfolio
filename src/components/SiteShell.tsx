"use client";

import React, { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSON, SOCIAL_LINKS } from "@/data/portfolio";
import Navbar from "./Navbar";
import CommandPalette from "./CommandPalette";
import { PlatformIcon } from "./Icons";

function subscribeTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): "light" | "dark" {
  return "light";
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const railSocials = SOCIAL_LINKS.filter((s) =>
    ["github", "linkedin", "instagram-personal", "medium", "pinterest"].includes(s.id)
  );

  const handleToggleTheme = useCallback(() => {
    const next = getThemeSnapshot() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("aqf-theme", next);
    } catch {
      // ignore storage restrictions
    }
  }, []);

  // Global Cmd+K / Ctrl+K shortcut for Command Palette
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Ultra-smooth GPU-composited scroll progress bar
  useEffect(() => {
    let rafId = 0;
    const updateProgress = () => {
      rafId = 0;
      const bar = progressRef.current;
      if (!bar) return;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        scrollable > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollable))
          : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Staggered scroll-reveal IntersectionObserver
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const staggerIdx = Number(el.dataset.stagger ?? "0");
            if (staggerIdx > 0) {
              el.style.transitionDelay = `${staggerIdx * 85}ms`;
            }
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -28px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div
        ref={progressRef}
        className="scroll-progress-bar"
        aria-hidden="true"
      />

      {/* Quiet vertical gallery social rail */}
      <aside className="hero-rail-left" aria-label="Quick social links">
        {railSocials.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={`${link.label} (${link.handle})`}
          >
            <PlatformIcon platform={link.platform} size={15} />
          </a>
        ))}
      </aside>

      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <main id="main-content" key={pathname} className="page-transition">
        {children}
      </main>

      <footer className="footer" id="site-footer">
        <div className="container footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
            <Image
              src={PERSON.avatarImage}
              alt={PERSON.avatarAlt}
              width={40}
              height={40}
              className="footer-avatar"
            />
            <div>
              <p style={{ color: "var(--ink)", fontWeight: 500 }}>
                © {new Date().getFullYear()} {PERSON.fullName} · Founder of NIT7ER
              </p>
              <p className="footer-coords" style={{ marginTop: "0.2rem" }}>
                {PERSON.location}
                {" // "}
                {PERSON.coordinates}
                {" // "}
                {PERSON.responseSla}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.15rem",
            }}
          >
            <Link href="/work" className="text-link">
              Archive
            </Link>
            <Link href="/about" className="text-link">
              About
            </Link>
            <Link href="/writing" className="text-link">
              Writing
            </Link>
            <Link href="/contact?track=referral" className="text-link">
              Refer Abdullah
            </Link>
            <Link href="/contact" className="text-link font-mono">
              Contact ↗
            </Link>
          </div>
        </div>
      </footer>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onToggleTheme={handleToggleTheme}
      />
    </>
  );
}
