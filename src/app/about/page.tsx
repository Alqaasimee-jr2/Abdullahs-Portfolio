import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import AboutAndProcess from "@/components/AboutAndProcess";
import VenturesAndCraft from "@/components/VenturesAndCraft";
import VisualStorytelling from "@/components/VisualStorytelling";
import { TESTIMONIALS } from "@/data/portfolio";
import { ArrowUpRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About, Ventures & Craft",
  description:
    "Background, Lagos & Great Ife builder roots, NIT7ER Studio, NIT7ER Academy, engineering philosophy, and photography practice of Abdullah Qaasim-Falade.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About · Story, Ventures &amp; Craft</span>
          <h1 className="page-hero-title">
            Competence Built on <em>Real Constraints</em>
          </h1>
          <p className="page-hero-lead">
            Lagos creative technologist, Great Ife builder, founder of NIT7ER,
            and photographer under Tempalette. Everything I ship starts by
            respecting how people actually work in the real world.
          </p>
        </div>
      </section>

      <AboutAndProcess />
      <VenturesAndCraft />
      <VisualStorytelling />

      {TESTIMONIALS.length > 0 && (
        <section className="section" aria-labelledby="testimonials-heading">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="eyebrow">Endorsements</span>
                <h2 className="section-title" id="testimonials-heading">
                  Notes from <em>Collaborators</em>
                </h2>
              </div>
            </div>
            <div className="ventures-grid">
              {TESTIMONIALS.map((item) => (
                <blockquote key={item.author} className="venture-card">
                  <p className="venture-desc">“{item.quote}”</p>
                  <footer className="font-mono" style={{ fontSize: "0.78rem", color: "var(--ink-muted)" }}>
                    {item.author} — {item.role}, {item.company}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.25rem" }}>
          <div>
            <p className="eyebrow">Ready to collaborate?</p>
            <h2 className="font-serif" style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", fontWeight: 400, marginTop: "0.45rem" }}>
              Let&apos;s turn a real problem into shipped software.
            </h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Start a Conversation
            <ArrowUpRightIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
