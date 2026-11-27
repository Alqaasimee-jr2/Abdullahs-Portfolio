import type { Metadata } from "next";
import React, { Suspense } from "react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import { PERSON } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact & Referrals",
  description:
    "Start a systems build, discuss a senior product engineering role, book a 30-minute NIT7ER strategy call, or forward a 2-line referral intro for Abdullah Qaasim-Falade.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="author-presence-strip">
            <Image
              src={PERSON.avatarImage}
              alt={PERSON.avatarAlt}
              width={64}
              height={64}
              className="author-presence-avatar"
              priority
            />
            <div>
              <p className="author-presence-name">{PERSON.fullName}</p>
              <p className="author-presence-meta">{PERSON.responseSla}</p>
            </div>
          </div>

          <span className="eyebrow">Contact · Direct Founder Access</span>
          <h1 className="page-hero-title">
            Let&apos;s Build <em>Something Real</em>
          </h1>
          <p className="page-hero-lead">
            Pick the path that fits — a custom system or product build, a
            high-ownership engineering role, or a quick referral introduction.
            Zero sales pressure, direct founder-to-founder clarity.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="container" style={{ paddingBlock: "3rem", color: "var(--ink-muted)" }}>
            Loading contact router…
          </div>
        }
      >
        <ContactSection />
      </Suspense>
    </>
  );
}
