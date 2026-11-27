"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, ProjectCategory } from "@/data/portfolio";
import { ArrowUpRightIcon, SearchIcon } from "./Icons";

type FilterValue = "all" | ProjectCategory;

interface CraftPortal {
  id: string;
  filter: FilterValue;
  index: string;
  label: string;
  caption: string;
  image: string;
  kind: "Works" | "Hobbies & Craft";
}

const PORTALS: CraftPortal[] = [
  {
    id: "portal-all",
    filter: "all",
    index: "00",
    label: "All Works & Hobbies",
    caption: "18 Shipped Systems, Products, Visual Studies & Publications",
    image: "/images/works/royal-grain.webp",
    kind: "Works",
  },
  {
    id: "portal-ai",
    filter: "ai-labs",
    index: "01",
    label: "AI & NIT7ER Labs",
    caption: "Lang Huey · Flow 7 · Clasquera · Schora AI",
    image: "/images/story-lang-huey.webp",
    kind: "Works",
  },
  {
    id: "portal-eng",
    filter: "engineering",
    index: "02",
    label: "Engineering & Open Source",
    caption: "Araxie · OAUMods · CI-Guardian CLI",
    image: "/images/works/oaumods.webp",
    kind: "Works",
  },
  {
    id: "portal-client",
    filter: "client-systems",
    index: "03",
    label: "Client Ateliers & Ops",
    caption: "Royal Grain · Barryham · Kinetic · Pure Essence · Zenith",
    image: "/images/works/royal-grain-craft.webp",
    kind: "Works",
  },
  {
    id: "portal-photo",
    filter: "visual-craft",
    index: "04",
    label: "Photography & Cinema",
    caption: "Tempalette · @Temoojii · G3NERALOLA · Visual Storytelling",
    image: "/images/works/g3neralola.webp",
    kind: "Hobbies & Craft",
  },
  {
    id: "portal-writing",
    filter: "visual-craft",
    index: "05",
    label: "Discipline & Essays",
    caption: "Guide to Self-Discipline & Spirituality · NIT7ER Field Notes",
    image: "/images/works/discipline-guide.webp",
    kind: "Hobbies & Craft",
  },
];

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All Works" },
  { value: "ai-labs", label: "AI & Labs" },
  { value: "engineering", label: "Engineering & OSS" },
  { value: "client-systems", label: "Client Systems" },
  { value: "visual-craft", label: "Visual & Hobbies" },
];

export default function WorksArchive() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [activePortalId, setActivePortalId] = useState<string>("portal-photo");
  const [userLocked, setUserLocked] = useState(false);
  const [query, setQuery] = useState("");

  const stageRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  const activePortal =
    PORTALS.find((p) => p.id === activePortalId) ?? PORTALS[0];

  // Gentle auto-cycle inside the masked X window until visitor interacts
  useEffect(() => {
    if (userLocked) return;
    const timer = window.setInterval(() => {
      setActivePortalId((curr) => {
        const idx = PORTALS.findIndex((p) => p.id === curr);
        return PORTALS[(idx + 1) % PORTALS.length].id;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [userLocked]);

  // Subtle internal artwork parallax inside the monumental X mask
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (artRef.current) {
        artRef.current.style.transform = `scale(1.1) translate3d(${cx * 18}px, ${cy * 18}px, 0)`;
      }
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
        raf = window.requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      tx = Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5));
      ty = Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5));
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    const stage = stageRef.current;
    stage?.addEventListener("pointermove", onMove);
    stage?.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      stage?.removeEventListener("pointermove", onMove);
      stage?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const handleSelectPortal = (portal: CraftPortal, applyFilter: boolean) => {
    setUserLocked(true);
    setActivePortalId(portal.id);
    if (applyFilter) {
      setActiveFilter(portal.filter);
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesCat =
        activeFilter === "all" || project.category === activeFilter;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.stack.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, query]);

  return (
    <>
      {/* POINT-Inspired Kinetic Masked X Stage for Works & Hobbies (29977153757246413.gif) */}
      <section className="point-hero" ref={stageRef} aria-labelledby="work-point-heading">
        <div className="container point-hero-inner">
          <div className="point-top-row">
            <h1 className="point-wordmark" id="work-point-heading">
              WORKS &amp; HOBBIES
            </h1>
            <span className="point-counter font-mono">
              {activePortal.index} / {activePortal.kind.toUpperCase()} —{" "}
              {activePortal.label.toUpperCase()}
            </span>
          </div>

          {/* Monumental Masked X Revealing Vivid Works & Photography */}
          <div className="point-stage">
            <div className="point-x-mask" aria-hidden="true">
              <div ref={artRef} className="point-x-art">
                {PORTALS.map((portal) => (
                  <Image
                    key={portal.id}
                    src={portal.image}
                    alt={portal.label}
                    width={960}
                    height={960}
                    priority={portal.id === "portal-photo"}
                    className={`point-x-photo${portal.id === activePortal.id ? " active" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* Interactive Worlds & Hobbies Switcher */}
            <div className="point-portal-strip" role="tablist" aria-label="Preview works and hobbies inside the X window">
              {PORTALS.map((portal) => (
                <button
                  key={portal.id}
                  type="button"
                  role="tab"
                  aria-selected={portal.id === activePortal.id}
                  className={`point-portal-pill${portal.id === activePortal.id ? " active" : ""}`}
                  onMouseEnter={() => handleSelectPortal(portal, false)}
                  onClick={() => handleSelectPortal(portal, true)}
                >
                  <span className="font-mono" style={{ opacity: 0.6 }}>
                    {portal.index}
                  </span>
                  <span>{portal.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Razor-Clean Bottom-Left Studio Stamp (Point) + Active Caption */}
          <div className="point-bottom-row">
            <p className="point-corner-note">
              LAGOS BASED CREATIVE TECHNOLOGIST
              <br />
              WORKS, LABS &amp; VISUAL HOBBIES
            </p>
            <p className="point-active-caption">
              {activePortal.caption}
            </p>
            <a href="#archive" className="text-link font-mono" style={{ fontSize: "0.72rem" }}>
              Browse All {PROJECTS.length} Entries ↓
            </a>
          </div>
        </div>
      </section>

      {/* Complete Searchable & Filterable Archive */}
      <section className="section" id="archive" aria-label="Filterable works archive">
        <div className="container">
          <div className="archive-controls">
            <div
              className="filter-tabs"
              role="tablist"
              aria-label="Filter projects by discipline"
            >
              {FILTERS.map((filter) => {
                const count =
                  filter.value === "all"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === filter.value).length;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    role="tab"
                    id={`filter-${filter.value}`}
                    aria-selected={activeFilter === filter.value}
                    className={`filter-tab${activeFilter === filter.value ? " active" : ""}`}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label} ({count})
                  </button>
                );
              })}
            </div>

            <div className="archive-search-wrap">
              <SearchIcon className="archive-search-icon" />
              <input
                type="search"
                id="archive-search-input"
                className="archive-search"
                placeholder="Filter by name, stack, domain..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search works archive"
              />
            </div>
          </div>

          <div className="archive-list">
            {filtered.length === 0 ? (
              <div className="archive-empty">
                No works matched “{query}”. Try clearing your search or switching
                category.
              </div>
            ) : (
              filtered.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  id={`archive-row-${project.id}`}
                  className="archive-row archive-row-rich"
                  onMouseEnter={() => {
                    const match = PORTALS.find((p) => p.filter === project.category);
                    if (match) {
                      setUserLocked(true);
                      setActivePortalId(match.id);
                    }
                  }}
                >
                  <span className="archive-num">{project.index}</span>
                  <span className="archive-thumb-wrap">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt=""
                        width={128}
                        height={92}
                        className="archive-thumb"
                      />
                    )}
                  </span>
                  <span className="archive-title-group">
                    <span className="archive-title">{project.title}</span>
                    <span className="archive-sub">{project.subtitle}</span>
                  </span>
                  <span className="archive-summary-col">{project.summary}</span>
                  <span className="archive-cat">{project.categoryLabel}</span>
                  <span className="archive-cta">
                    Inspect
                    <ArrowUpRightIcon size={14} />
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
