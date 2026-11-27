import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSON, PROJECTS } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

export default function SelectedWork() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">01 / Selected Proof</span>
            <h2 className="section-title" id="work-heading">
              Flagship <em>Systems</em> &amp; Products
            </h2>
          </div>
          <p className="section-desc">
            Four representative builds across offline African EdTech, cognitive
            regulation, agentic student commerce, and open-source campus
            infrastructure. Click any story card to inspect its shareable case
            study.
          </p>
        </div>

        {/* Floating Portrait Story Cards with Generated Avatar Badges */}
        <div className="story-cards-grid">
          {featured.map((project, idx) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              id={`open-case-${project.id}`}
              className="story-card reveal"
              data-stagger={idx}
            >
              <div className="story-card-head">
                <p className="story-card-kicker">
                  {project.index} · {project.categoryLabel}
                </p>
                <h3 className="story-card-title">{project.title}</h3>
                <p className="story-card-sub">{project.subtitle}</p>
              </div>

              {project.image && (
                <div className="story-card-media">
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    width={900}
                    height={1080}
                  />
                  {/* Generated Avatar Creator Seal (777996904392674189.gif) */}
                  <span className="story-avatar-seal" aria-hidden="true">
                    <Image
                      src={PERSON.avatarImage}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </span>
                </div>
              )}

              <div className="story-card-foot">
                <span>{project.stack[0]} · {project.year}</span>
                <ArrowUpRightIcon size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="section-footer-link reveal">
          <Link href="/work" id="view-all-works-btn" className="btn btn-secondary">
            Explore All {PROJECTS.length} Works in the Archive
            <ArrowUpRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
