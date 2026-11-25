import type { Metadata } from "next";
import React from "react";
import WritingSection from "@/components/WritingSection";
import { ESSAYS } from "@/data/portfolio";
import { ArrowUpRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Writing & Field Notes",
  description:
    "Engineering autopsies, classroom EdTech observations across Lagos, cognitive systems writing, and software economics essays by Abdullah Qaasim-Falade.",
};

export default function WritingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Writing · {ESSAYS.length} Field Notes</span>
          <h1 className="page-hero-title">
            Engineering Autopsies &amp; <em>Field Notes</em>
          </h1>
          <p className="page-hero-lead">
            Clear software requires clear thinking. These essays document the
            real trade-offs behind Lang Huey, Flow 7, Clasquera, Lagos
            logistics systems, and custom infrastructure vs. SaaS sprawl.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="https://nit7er.vercel.app/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Open Full NIT7ER Publication
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </section>

      <WritingSection showSectionHeader={false} />
    </>
  );
}
