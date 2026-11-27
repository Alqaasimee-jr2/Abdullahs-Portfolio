"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSON, PROJECTS } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

// Showcase 10 visually richest projects in the horizontal carousel
const CAROUSEL_SLUGS = [
  "lang-huey",
  "flow-7",
  "araxie",
  "oaumods",
  "royal-grain",
  "barryham-intl",
  "nit7er-academy",
  "pure-essence-school",
  "zenith-suites-lekki",
  "self-discipline-guide",
];

export default function SelectedWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const draggedDistanceRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const carouselItems = CAROUSEL_SLUGS.map((slug) =>
    PROJECTS.find((p) => p.slug === slug)
  ).filter((p): p is (typeof PROJECTS)[number] => Boolean(p));

  const syncScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 12);
    setCanNext(el.scrollLeft < maxScroll - 12);

    const firstCard = el.querySelector<HTMLElement>(".carousel-card");
    if (firstCard) {
      const step = firstCard.offsetWidth + 24;
      const idx = Math.min(
        carouselItems.length - 1,
        Math.max(0, Math.round(el.scrollLeft / step))
      );
      setActiveIndex(idx);
    }
  }, [carouselItems.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncScrollState();
    el.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState, { passive: true });
    return () => {
      el.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
    };
  }, [syncScrollState]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".carousel-card");
    const step = firstCard ? firstCard.offsetWidth + 24 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToCard = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".carousel-card");
    const step = firstCard ? firstCard.offsetWidth + 24 : 340;
    el.scrollTo({ left: index * step, behavior: "smooth" });
  };

  // Pointer drag-to-scroll for buttery desktop horizontal glide
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = trackRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    draggedDistanceRef.current = 0;
    startXRef.current = e.clientX;
    scrollStartRef.current = el.scrollLeft;
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - startXRef.current;
    draggedDistanceRef.current = Math.abs(dx);
    el.scrollLeft = scrollStartRef.current - dx * 1.15;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section
      className="section carousel-section"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="container">
        <div className="carousel-top-bar reveal">
          <div>
            <span className="eyebrow">01 / Selected Proof · Interactive Showcase</span>
            <h2 className="section-title" id="work-heading">
              Flagship <em>Systems</em> &amp; Works
            </h2>
          </div>

          <div className="carousel-controls-wrap">
            <span className="carousel-counter font-mono" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(carouselItems.length).padStart(2, "0")}
            </span>
            <div className="carousel-arrow-group">
              <button
                type="button"
                id="carousel-prev-btn"
                className="carousel-arrow-btn"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                type="button"
                id="carousel-next-btn"
                className="carousel-arrow-btn"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Floating Portrait Card Carousel (777996904392674189.gif) */}
      <div className="carousel-viewport">
        <div
          ref={trackRef}
          className={`carousel-track${isDragging ? " is-dragging" : ""}`}
          role="region"
          aria-label="Featured works carousel"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") scrollByCard(1);
            if (e.key === "ArrowLeft") scrollByCard(-1);
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {carouselItems.map((project, idx) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              id={`carousel-card-${project.id}`}
              className="story-card carousel-card reveal"
              data-stagger={Math.min(idx, 4)}
              draggable={false}
              onClick={(e) => {
                if (draggedDistanceRef.current > 8) e.preventDefault();
              }}
            >
              <div className="story-card-head">
                <p className="story-card-kicker">{project.categoryLabel}</p>
                <h3 className="story-card-title">{project.title}</h3>
                <p className="story-card-sub">{project.subtitle}</p>
              </div>

              {project.image && (
                <div className="story-card-media">
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    width={900}
                    height={1080}
                    draggable={false}
                  />
                  <span className="story-avatar-seal" aria-hidden="true">
                    <Image
                      src={PERSON.avatarImage}
                      alt=""
                      width={40}
                      height={40}
                      draggable={false}
                    />
                  </span>
                </div>
              )}

              <div className="story-card-foot">
                <span>
                  {project.index} · {project.stack[0]}
                </span>
                <ArrowUpRightIcon size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="carousel-bottom-bar reveal">
          <div className="carousel-dots" role="tablist" aria-label="Jump to project slide">
            {carouselItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`View ${item.title}`}
                className={`carousel-dot${idx === activeIndex ? " active" : ""}`}
                onClick={() => scrollToCard(idx)}
              />
            ))}
          </div>

          <Link href="/work" id="view-all-works-btn" className="btn btn-secondary">
            Explore All {PROJECTS.length} Works in Archive
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
