import type { Metadata } from "next";
import React from "react";
import WorksArchive from "@/components/WorksArchive";
import { PROJECTS } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Work & Archive",
  description:
    "All 18 shipped products, NIT7ER Labs builds, open-source developer tools, client operational systems, and visual craft projects by Abdullah Qaasim-Falade.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Work Archive · {PROJECTS.length} Projects</span>
          <h1 className="page-hero-title">
            Shipped <em>Systems</em>, Products &amp; Experiments
          </h1>
          <p className="page-hero-lead">
            Every public product, NIT7ER client system, AI prototype, developer
            CLI, and creative build in one searchable index. Click any entry to
            open its dedicated, shareable case study.
          </p>
        </div>
      </section>

      <WorksArchive />
    </>
  );
}
