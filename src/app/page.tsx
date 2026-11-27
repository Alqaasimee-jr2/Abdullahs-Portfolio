import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import EngagementTracks from "@/components/EngagementTracks";
import WritingSection from "@/components/WritingSection";
import LiteraryWorks from "@/components/LiteraryWorks";
import VisualStorytelling from "@/components/VisualStorytelling";
import ReferralCard from "@/components/ReferralCard";
import { ArrowUpRightIcon } from "@/components/Icons";
import { PERSON } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      {/* 1. Gallery Hero + Sculptural Parallax Centerpiece + Verified Proof Strip */}
      <Hero />

      {/* 2. Floating Portrait Story Cards (4 Flagship Shareable Case Studies) */}
      <SelectedWork />

      {/* 3. Wide-Tracked Luxury Serif Manifesto + Golden-Hour Lagos Studio Frame */}
      <section className="manifesto-band" aria-label="Engineering philosophy and NIT7ER studio">
        <div className="container reveal">
          <p className="manifesto-serif">
            Built from scratch.
            <br />
            Not pieced together.
          </p>
          <p className="manifesto-sub">
            NIT7ER · Systems · Offline EdTech · Applied AI · Visual Craft
          </p>

          <figure className="studio-cinema-frame">
            <Image
              src={PERSON.studioImage}
              alt={PERSON.studioAlt}
              width={1280}
              height={714}
            />
            <figcaption className="studio-cinema-bar">
              <span>NIT7ER STUDIO · LAGOS, NIGERIA</span>
              <span>INFRASTRUCTURE · LABS · ACADEMY</span>
              <Link href="/about" className="studio-cinema-link">
                Inside the Practice ↗
              </Link>
            </figcaption>
          </figure>

          <a
            href="#ways-to-work"
            className="manifesto-cue"
            aria-label="Continue to ways we can work together"
          >
            ↓
          </a>
        </div>
      </section>

      {/* 4. Pure Proof & Outcomes Pathways (Contracts / Global Tech Roles / Referrals) */}
      <EngagementTracks />

      {/* 5. Authority Proof — Top 3 Engineering & Labs Field Notes */}
      <WritingSection limit={3} />

      {/* 5b. Writer & Poet — Featured poem + latest literary works (C.R.I on Medium) */}
      <LiteraryWorks limit={3} />

      {/* 6. Warmth x Competence — Photography & Cinematography Beyond Code */}
      <VisualStorytelling />

      {/* 7. Low-Friction Conversion + 1-Click Referral Engine */}
      <section className="section" aria-labelledby="home-cta-heading">
        <div className="container">
          <div className="home-cta-band reveal">
            <div>
              <span className="eyebrow">04 / Next Step · {PERSON.responseSla}</span>
              <h2
                className="section-title"
                id="home-cta-heading"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Building something serious — or know <em>someone who is?</em>
              </h2>
              <p
                style={{
                  color: "var(--ink-secondary)",
                  marginTop: "1rem",
                  maxWidth: "52ch",
                  fontSize: "0.98rem",
                }}
              >
                Choose your track on the contact page (systems contract,
                engineering role, or warm introduction), book a 30-minute
                NIT7ER strategy call, or copy a 2-line intro right here.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.85rem",
                  marginTop: "1.75rem",
                }}
              >
                <Link
                  href="/contact"
                  id="home-cta-contact"
                  className="btn btn-primary"
                >
                  Open Contact &amp; Channels
                  <ArrowUpRightIcon />
                </Link>
                <Link
                  href="/about"
                  id="home-cta-about"
                  className="btn btn-secondary"
                >
                  Read My Story &amp; Method
                </Link>
              </div>
            </div>

            <div>
              <ReferralCard compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
