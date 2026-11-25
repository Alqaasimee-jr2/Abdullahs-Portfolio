import React from "react";
import Link from "next/link";
import { ESSAYS } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

export default function WritingSection({
  limit,
  showSectionHeader = true,
}: {
  limit?: number;
  showSectionHeader?: boolean;
}) {
  const items = limit ? ESSAYS.slice(0, limit) : ESSAYS;

  return (
    <section className="section" id="writing" aria-labelledby="writing-heading">
      <div className="container">
        {showSectionHeader && (
          <div className="section-header reveal">
            <div>
              <span className="eyebrow">03 / Essays &amp; Field Notes</span>
              <h2 className="section-title" id="writing-heading">
                Thinking in <em>Public</em>
              </h2>
            </div>
            <p className="section-desc">
              Engineering autopsies, classroom observations across Lagos, and
              honest notes on offline-first software, cognitive tools, and why
              custom systems beat spreadsheet chaos.
            </p>
          </div>
        )}

        <div className="essays-list reveal">
          {items.map((essay) => (
            <a
              key={essay.id}
              id={essay.id}
              href={essay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="essay-row"
            >
              <span className="essay-num">{essay.number}</span>
              <div>
                <p className="essay-cat">{essay.category}</p>
                <h3 className="essay-title">{essay.title}</h3>
                <p className="essay-excerpt">{essay.excerpt}</p>
              </div>
              <span className="essay-read">
                Read on NIT7ER
                <ArrowUpRightIcon size={14} />
              </span>
            </a>
          ))}
        </div>

        {limit && ESSAYS.length > limit && (
          <div className="section-footer-link reveal">
            <Link
              href="/writing"
              id="view-all-essays-btn"
              className="btn btn-secondary"
            >
              Read All {ESSAYS.length} Field Notes
              <ArrowUpRightIcon />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
