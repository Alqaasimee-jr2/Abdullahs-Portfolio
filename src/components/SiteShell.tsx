"use client";

import React, { useCallback, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSON } from "@/data/portfolio";
import Navbar from "./Navbar";

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
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
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
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <main id="main-content">{children}</main>
      <footer className="footer" id="site-footer">
        <div className="container footer-inner">
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
    </>
  );
}
