"use client";

import React, { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { PERSON, ProjectItem } from "@/data/portfolio";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SelectedWork from "./SelectedWork";
import WorksArchive from "./WorksArchive";
import VenturesAndCraft from "./VenturesAndCraft";
import WritingSection from "./WritingSection";
import VisualStorytelling from "./VisualStorytelling";
import AboutAndProcess from "./AboutAndProcess";
import ContactSection from "./ContactSection";
import ProjectDrawer from "./ProjectDrawer";

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

export default function PortfolioClient() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      <main id="main-content">
        <Hero />
        <SelectedWork onSelectProject={setSelectedProject} />
        <WorksArchive onSelectProject={setSelectedProject} />
        <VenturesAndCraft />
        <WritingSection />
        <VisualStorytelling />
        <AboutAndProcess />
        <ContactSection />
      </main>

      <footer className="footer" id="site-footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {PERSON.fullName} · Founder of NIT7ER
          </span>
          <span className="footer-coords">
            {PERSON.location}
            {" // "}
            {PERSON.coordinates}
          </span>
          <a href="#top" id="back-to-top" className="text-link font-mono">
            Back to top ↑
          </a>
        </div>
      </footer>

      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
