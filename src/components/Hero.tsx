import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CURRENTLY_BUILDING,
  PERSON,
  PROOF_STRIP,
  SOCIAL_LINKS,
} from "@/data/portfolio";
import { ArrowUpRightIcon, PlatformIcon } from "./Icons";

export default function Hero() {
  const heroSocials = SOCIAL_LINKS.filter((s) =>
    ["github", "linkedin", "instagram-personal", "pinterest", "nit7er"].includes(
      s.id
    )
  );

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero-top-meta">
          <span>
            {PERSON.location} — Creative Technologist &amp; Systems Architect
          </span>
          <span className="hero-availability">{PERSON.availability}</span>
        </div>

        <div className="hero-grid">
          <div>
            <h1 className="hero-headline">
              {PERSON.heroHeadlinePrefix}{" "}
              <em>{PERSON.heroHeadlineEmphasis}</em>
            </h1>

            <p className="hero-bio">{PERSON.heroBio}</p>

            <div className="hero-cta-row">
              <Link href="/work" id="hero-explore-work" className="btn btn-primary">
                Inspect Selected Proof
                <ArrowUpRightIcon />
              </Link>
              <Link
                href="/contact"
                id="hero-start-conversation"
                className="btn btn-secondary"
              >
                Start a Conversation
              </Link>
            </div>

            <div className="hero-socials" aria-label="Primary profiles">
              {heroSocials.map((link) => (
                <a
                  key={link.id}
                  id={`hero-social-${link.id}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                >
                  <PlatformIcon platform={link.platform} size={15} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual-col">
            <figure className="hero-plate">
              <Image
                src={PERSON.portraitImage}
                alt={PERSON.portraitAlt}
                className="hero-plate-img"
                width={960}
                height={720}
                priority
              />
              <figcaption className="hero-plate-caption">
                <span>{PERSON.portraitCaption}</span>
                <span>{PERSON.coordinates}</span>
              </figcaption>
            </figure>

            <aside className="hero-ledger" aria-label="Active projects">
              <p className="hero-ledger-title">Currently Shipping</p>
              <ul className="hero-ledger-list">
                {CURRENTLY_BUILDING.map((item) => (
                  <li key={item.name} className="hero-ledger-item">
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.href}>{item.name}</Link>
                    )}
                    <span className="hero-ledger-note">{item.note}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        {/* Immediate Verifiable Proof Strip (Cognitive Authority Anchor) */}
        <div className="proof-strip" aria-label="Verified proof highlights">
          {PROOF_STRIP.map((item) => (
            <div key={item.label} className="proof-cell">
              <p className="proof-value">{item.value}</p>
              <p className="proof-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
