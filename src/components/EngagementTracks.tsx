import React from "react";
import Link from "next/link";
import { ENGAGEMENT_TRACKS } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

export default function EngagementTracks() {
  return (
    <section
      className="section"
      id="ways-to-work"
      aria-labelledby="ways-to-work-heading"
    >
      <div className="container">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">02 / Ways We Can Work Together</span>
            <h2 className="section-title" id="ways-to-work-heading">
              Clarity Before <em>Code</em>
            </h2>
          </div>
          <p className="section-desc">
            Whether you are scaling a business past spreadsheets, recruiting a
            high-ownership product engineer, or introducing a peer — every
            conversation starts with honest technical diagnosis.
          </p>
        </div>

        <div className="tracks-grid">
          {ENGAGEMENT_TRACKS.map((track, idx) => (
            <article key={track.index} className="track-card reveal" data-stagger={idx}>
              <div>
                <p className="track-audience">
                  {track.index} · {track.audience}
                </p>
                <h3 className="track-title">{track.title}</h3>
                <p className="track-desc">{track.description}</p>
                <ul className="track-outcomes">
                  {track.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={`/contact?track=${track.contactTrack}`}
                  id={`track-cta-${track.contactTrack}`}
                  className="btn btn-secondary"
                >
                  {track.ctaLabel}
                  <ArrowUpRightIcon size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
