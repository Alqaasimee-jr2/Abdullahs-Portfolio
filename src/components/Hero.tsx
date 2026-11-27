"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSON, PROOF_STRIP } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<SVGSVGElement>(null);
  const portraitRef = useRef<HTMLElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);

  // Silky rAF lerp mouse depth parallax between the bold architectural X and portrait
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
      curX += (targetX - curX) * 0.075;
      curY += (targetY - curY) * 0.075;

      if (crossRef.current) {
        crossRef.current.style.transform = `translate3d(${curX * -16}px, ${curY * -16}px, 0)`;
      }
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(${curX * 10}px, ${curY * 10}px, 0)`;
      }
      if (identityRef.current) {
        identityRef.current.style.transform = `translate3d(${curX * 5}px, ${curY * 4}px, 0)`;
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
      targetX = Math.max(-0.55, Math.min(0.55, nx));
      targetY = Math.max(-0.55, Math.min(0.55, ny));
      if (!rafId) rafId = window.requestAnimationFrame(animate);
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = window.requestAnimationFrame(animate);
    };

    const stageEl = stageRef.current;
    stageEl?.addEventListener("pointermove", onPointerMove);
    stageEl?.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      stageEl?.removeEventListener("pointermove", onPointerMove);
      stageEl?.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section
      className="hero-poster"
      id="top"
      aria-label="Introduction"
      ref={stageRef}
    >
      {/* Whisper-faint vertical gallery guide lines (Julius Guevarra) */}
      <div className="hero-column-guides" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Top-right discipline stamp */}
      <div className="container hero-poster-top">
        <span className="hero-poster-meta">LAGOS, NIGERIA · FOUNDER OF NIT7ER</span>
        <span className="hero-poster-meta">SYSTEMS / AI / VISUAL CRAFT</span>
      </div>

      {/* Centered Sculptural X + Portrait + Left-Anchored Tracked Identity (Julius Guevarra) */}
      <div className="container hero-poster-center">
        <div className="hero-poster-stage">
          {/* Monumental crisp dark architectural X */}
          <svg
            ref={crossRef}
            className="hero-poster-x"
            viewBox="0 0 320 320"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M36 32L284 288M284 32L36 288"
              stroke="currentColor"
              strokeWidth="44"
              strokeLinecap="square"
            />
          </svg>

          {/* Abdullah's Actual Monochrome Photo framed as a floating sculptural gallery capsule */}
          <figure ref={portraitRef} className="hero-poster-portrait">
            <Image
              src={PERSON.portraitImage}
              alt={PERSON.portraitAlt}
              width={576}
              height={768}
              priority
              className="hero-poster-photo"
            />
          </figure>

          {/* Left-anchored tracked typography (Julius Guevarra signature placement) */}
          <div ref={identityRef} className="hero-poster-identity">
            <h1 className="hero-poster-name">
              <span className="mask-line">
                <span className="mask-line-inner">ABDULLAH QAASIM</span>
              </span>
            </h1>
            <p className="hero-poster-role">
              CREATIVE TECHNOLOGIST &amp; SYSTEMS ARCHITECT
            </p>
            <p className="hero-poster-tagline">
              Designing custom operational infrastructure, offline-first African
              EdTech, and AI products from scratch.
            </p>
            <div className="hero-poster-actions">
              <Link href="/work" id="hero-explore-work" className="btn btn-primary">
                Inspect Proof
                <ArrowUpRightIcon size={14} />
              </Link>
              <Link
                href="/contact"
                id="hero-start-conversation"
                className="btn btn-secondary"
              >
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: 2026 Portfolio stamp left + animated SCROLL DOWN rail right */}
      <div className="container hero-poster-bottom">
        <span className="hero-poster-year">
          <strong>2026</strong> &nbsp; PORTFOLIO WEBSITE
        </span>

        <a
          href="#work"
          className="hero-poster-scroll"
          aria-label="Scroll down to project carousel"
        >
          <span className="scroll-down-label">SCROLL DOWN</span>
          <span className="scroll-down-line" aria-hidden="true" />
        </a>
      </div>

      {/* Immediate Verifiable Proof Strip anchored cleanly below the poster fold */}
      <div className="container">
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
