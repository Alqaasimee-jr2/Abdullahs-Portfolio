import React from "react";
import { DISCIPLINES, VENTURES } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

export default function VenturesAndCraft() {
  return (
    <section className="section" id="ventures" aria-labelledby="ventures-heading">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">03 / Ventures &amp; Capabilities</span>
            <h2 className="section-title" id="ventures-heading">
              Institutions &amp; <em>Disciplines</em>
            </h2>
          </div>
          <p className="section-desc">
            Beyond solo builds, my work anchors two Lagos-born institutions —
            NIT7ER Studio for custom business infrastructure and NIT7ER Academy
            for training production-ready builders.
          </p>
        </div>

        <div className="ventures-grid">
          {VENTURES.map((venture) => (
            <article key={venture.id} className="venture-card reveal">
              <div>
                <p className="venture-index">
                  {venture.index} · {venture.location}
                </p>
                <h3 className="venture-name">{venture.name}</h3>
                <p className="venture-tagline">
                  {venture.role} — {venture.tagline}
                </p>
                <p className="venture-desc">{venture.description}</p>

                <ul className="venture-list">
                  {venture.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`venture-link-${venture.id}`}
                  className="btn btn-primary"
                >
                  Visit {venture.name}
                  <ArrowUpRightIcon />
                </a>
                {venture.repoUrl && (
                  <a
                    href={venture.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Source
                    <ArrowUpRightIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="disciplines-grid">
          {DISCIPLINES.map((item, idx) => (
            <article key={item.index} className="discipline-card reveal" data-stagger={idx % 3}>
              <span className="discipline-num">{item.index}</span>
              <h3 className="discipline-title">{item.title}</h3>
              <p className="discipline-desc">{item.description}</p>
              <div className="tag-row" style={{ marginBottom: 0 }}>
                {item.tools.map((tool) => (
                  <span key={tool} className="tag">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
