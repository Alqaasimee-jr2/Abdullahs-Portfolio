"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSON, PROOF_STRIP } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<SVGSVGElement>(null);
  const monolithRef = useRef<HTMLElement>(null);
  const insetRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);

  // Silky rAF lerp mouse depth parallax + gentle scroll drift on the 2026 editorial stamp
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let rafId = 0;

    const animate = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;

      if (crossRef.current) {
        crossRef.current.style.transform = `translate3d(${curX * -12}px, ${curY * -12}px, 0)`;
      }
      if (monolithRef.current) {
        monolithRef.current.style.transform = `translate3d(${curX * 8}px, ${curY * 8}px, 0)`;
      }
      if (insetRef.current) {
        insetRef.current.style.transform = `translate3d(${curX * 15}px, ${curY * 11}px, 0)`;
      }

      if (Math.abs(targetX - curX) > 0.001 || Math.abs(targetY - curY) > 0.001) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const stage = stageRef.current;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = Math.max(-0.6, Math.min(0.6, nx));
      targetY = Math.max(-0.6, Math.min(0.6, ny));
      if (!rafId) rafId = window.requestAnimationFrame(animate);
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = window.requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (!yearRef.current) return;
      const drift = Math.min(80, window.scrollY * 0.14);
      yearRef.current.style.transform = `translate3d(0, ${drift}px, 0)`;
    };

    const stageEl = stageRef.current;
    stageEl?.addEventListener("pointermove", onPointerMove);
    stageEl?.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      stageEl?.removeEventListener("pointermove", onPointerMove);
      stageEl?.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="hero-gallery" id="top" aria-label="Introduction">
      {/* Oversized vertical botanical year stamp (Meeting.jfif) */}
      <span ref={yearRef} className="hero-year-stamp" aria-hidden="true">
        2026
      </span>

      {/* Right vertical animated scroll indicator (Julius Guevarra) */}
      <a href="#work" className="hero-rail-right" aria-label="Scroll to selected work">
        <span className="scroll-down-label">SCROLL DOWN</span>
        <span className="scroll-down-line" aria-hidden="true" />
      </a>

      <div className="container">
        <div className="hero-top-meta">
          <span>01 — {PERSON.fullName}</span>
          <span className="hero-availability">{PERSON.availability}</span>
        </div>

        <div className="hero-grid">
          <div>
            <h1 className="hero-headline">
              <span className="mask-line">
                <span className="mask-line-inner">Designing systems</span>
              </span>
              <span className="mask-line">
                <span className="mask-line-inner">that turn chaos</span>
              </span>
              <span className="mask-line">
                <span className="mask-line-inner">
                  <em>into proof.</em>
                </span>
              </span>
            </h1>

            <p className="hero-bio">{PERSON.heroBio}</p>

            <div className="hero-cta-row">
              <Link href="/work" id="hero-explore-work" className="btn btn-primary">
                Inspect Selected Proof
                <ArrowUpRightIcon />
              </Link>
              <Link
                href="/contact"
                id="hero-start-conversation"
                className="btn btn-secondary"
              >
                Start a Conversation
              </Link>
            </div>

            {/* Razor-clean architectural studio corner stamp (Point) */}
            <div className="hero-corner-stamp">
              <span>LAGOS BASED CREATIVE TECHNOLOGIST &amp; SYSTEMS STUDIO</span>
              <span>NIT7ER · {PERSON.coordinates}</span>
            </div>
          </div>

          {/* Sculptural Gallery Centerpiece with rAF Lerp Depth (Julius Guevarra + Meeting + Point) */}
          <div ref={stageRef} className="hero-stage">
            <svg
              ref={crossRef}
              className="hero-cross-emblem"
              viewBox="0 0 240 240"
              fill="none"
              aria-hidden="true"
            >
              <line x1="28" y1="28" x2="212" y2="212" stroke="currentColor" strokeWidth="26" />
              <line x1="212" y1="28" x2="28" y2="212" stroke="currentColor" strokeWidth="26" />
            </svg>

            {/* Botanical arch geometric accent (Meeting.jfif) */}
            <svg
              className="hero-arch-mark"
              viewBox="0 0 48 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 40V22C6 12.0589 14.0589 4 24 4C33.9411 4 42 12.0589 42 22V40H30V22C30 18.6863 27.3137 16 24 16C20.6863 16 18 18.6863 18 22V40H6Z"
                fill="currentColor"
              />
            </svg>

            <figure ref={monolithRef} className="hero-monolith-wrap">
              <Image
                src={PERSON.portraitImage}
                alt={PERSON.portraitAlt}
                className="hero-monolith-img"
                width={896}
                height={1200}
                priority
              />
              <figcaption className="hero-plate-caption">
                <span>{PERSON.portraitCaption}</span>
                <span>01 / 26</span>
              </figcaption>
            </figure>

            <div ref={insetRef} className="hero-inset-card" aria-hidden="true">
              <Image
                src="/images/hero-atelier.webp"
                alt=""
                width={320}
                height={240}
              />
            </div>
          </div>
        </div>

        {/* Immediate Verifiable Proof Strip */}
        <div className="proof-strip reveal" aria-label="Verified proof highlights">
          {PROOF_STRIP.map((item) => (
            <div key={item.label} className="proof-cell">
              <p className="proof-value">{item.value}</p>
              <p className="proof-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
