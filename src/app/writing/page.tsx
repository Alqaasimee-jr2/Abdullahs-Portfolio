import type { Metadata } from "next";
import React from "react";
import WritingSection from "@/components/WritingSection";
import LiteraryWorks from "@/components/LiteraryWorks";
import { ESSAYS, LITERARY_PROFILE, LITERARY_WORKS, PUBLISHED_BOOK } from "@/data/portfolio";
import { ArrowUpRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Writing — Poetry, Fiction & Field Notes",
  description:
    "Poetry, mythic fiction and short stories by Abdullah Qaasim-Falade (pen name C.R.I) on Medium, alongside engineering autopsies and EdTech field notes from Lagos.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const bookJsonLd = PUBLISHED_BOOK && {
    "@context": "https://schema.org",
    "@type": "Book",
    name: PUBLISHED_BOOK.title,
    datePublished: PUBLISHED_BOOK.year,
    numberOfPages: 114,
    url: PUBLISHED_BOOK.url,
    image: `https://abdullah-qaasim-falade.vercel.app${PUBLISHED_BOOK.cover}`,
    author: {
      "@type": "Person",
      name: "Abdullah Qaasim-Falade",
      alternateName: LITERARY_PROFILE.penName,
      url: "https://abdullah-qaasim-falade.vercel.app",
    },
  };

  return (
    <>
      {bookJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
        />
      )}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            Writer · Poet · Published Author — {LITERARY_WORKS.length} Literary
            Works · {ESSAYS.length} Field Notes
          </span>
          <h1 className="page-hero-title">
            Poems, Stories &amp; <em>Field Notes</em>
          </h1>
          <p className="page-hero-lead">
            Before the code, there were words. I write poetry and fiction under
            the pen name <strong>{LITERARY_PROFILE.penName}</strong> — faith,
            myth, apocalypse and inner weather — and engineering essays on the
            real trade-offs behind the systems I build.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={LITERARY_PROFILE.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read {LITERARY_PROFILE.penName} on Medium
              <ArrowUpRightIcon />
            </a>
            <a
              href="https://nit7er.vercel.app/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              NIT7ER Engineering Publication
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </section>

      <LiteraryWorks showSectionHeader={false} />

      <section className="section" aria-labelledby="field-notes-heading" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-header reveal">
            <div>
              <span className="eyebrow">Engineering · Field Notes</span>
              <h2 className="section-title" id="field-notes-heading">
                Thinking in <em>Public</em>
              </h2>
            </div>
            <p className="section-desc">
              Engineering autopsies, classroom observations across Lagos, and
              honest notes on offline-first software and cognitive tools.
            </p>
          </div>
        </div>
      </section>
      <WritingSection showSectionHeader={false} />
    </>
  );
}
