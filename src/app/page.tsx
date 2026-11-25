import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import EngagementTracks from "@/components/EngagementTracks";
import WritingSection from "@/components/WritingSection";
import VisualStorytelling from "@/components/VisualStorytelling";
import ReferralCard from "@/components/ReferralCard";
import { ArrowUpRightIcon } from "@/components/Icons";
import { PERSON } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      {/* 1. Instant Identity, Positioning & Verifiable Proof Strip */}
      <Hero />

      {/* 2. Flagship Case Studies (4 Deep Proofs -> Shareable /work/[slug] Pages) */}
      <SelectedWork />

      {/* 3. Pure Proof & Outcomes Pathways (Contracts / Global Tech Roles / Referrals) */}
      <EngagementTracks />

      {/* 4. Authority Proof — Top 3 Engineering & Labs Field Notes */}
      <WritingSection limit={3} />

      {/* 5. Warmth x Competence — Photography & Cinematography Beyond Code */}
      <VisualStorytelling />

      {/* 6. Low-Friction Conversion + 1-Click Referral Engine */}
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
