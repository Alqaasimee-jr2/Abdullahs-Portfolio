"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PERSON } from "@/data/portfolio";

const CHAPTERS = [
  { id: "about-hero", label: "Prologue" },
  { id: "about", label: "Story & Method" },
  { id: "ventures", label: "Ventures & Craft" },
  { id: "visual", label: "Photography" },
];

export default function AboutHero() {
  const [activeId, setActiveId] = useState("about-hero");

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((sec) => io.observe(sec));
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="about-ruliou-hero"
      id="about-hero"
      aria-labelledby="about-ruliou-heading"
    >
      {/* Right-edge vertical chapter pagination dots (Nick_Ruliou.gif) */}
      <nav
        className="about-ruliou-dots"
        aria-label="About page chapters"
      >
        {CHAPTERS.map((ch) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className={`about-ruliou-dot${activeId === ch.id ? " active" : ""}`}
            aria-label={ch.label}
            title={ch.label}
          />
        ))}
      </nav>

      {/* Airy, serene gallery sky with wide-tracked centered serif typography */}
      <div className="container about-ruliou-sky">
        <div className="author-presence-strip" style={{ marginBottom: "2.25rem" }}>
          <Image
            src={PERSON.avatarImage}
            alt={PERSON.avatarAlt}
            width={56}
            height={56}
            className="author-presence-avatar"
            priority
          />
          <div style={{ textAlign: "left" }}>
            <p className="author-presence-name">{PERSON.fullName}</p>
            <p className="author-presence-meta">
              {PERSON.location} · Founder of NIT7ER &amp; NIT7ER Academy
            </p>
          </div>
        </div>

        <h1 className="about-ruliou-title" id="about-ruliou-heading">
          <span className="mask-line">
            <span className="mask-line-inner">BUILT FROM SCRATCH</span>
          </span>
          <span className="mask-line">
            <span className="mask-line-inner">SYSTEMS FIT TO</span>
          </span>
          <span className="mask-line">
            <span className="mask-line-inner">ENDURE</span>
          </span>
        </h1>

        <p className="about-ruliou-subtitle">
          THE ABDULLAH QAASIM-FALADE PRACTICE · LAGOS &amp; GREAT IFE
        </p>
      </div>

      {/* Full-bleed horizon photograph emerging smoothly out of the white gallery canvas */}
      <div className="about-ruliou-horizon">
        <Image
          src={PERSON.studioImage}
          alt={PERSON.studioAlt}
          width={1440}
          height={804}
          priority
          className="about-ruliou-horizon-img"
        />

        {/* Floating frosted circular downward scroll cue (Nick_Ruliou.gif) */}
        <a
          href="#about"
          className="about-ruliou-scroll-cue"
          aria-label="Scroll down to story and method"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
