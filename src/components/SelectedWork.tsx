import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolio";
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
            infrastructure. Each opens as a shareable case study.
          </p>
        </div>

        <div className="featured-grid">
          {featured.map((project) => (
            <article key={project.id} className="case-card reveal">
              {project.image && (
                <Link
                  href={`/work/${project.slug}`}
                  className="case-media"
                  aria-label={`Read ${project.title} case study`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    width={960}
                    height={600}
                  />
                  <span className="case-index-tag">
                    {project.index} · {project.categoryLabel}
                  </span>
                </Link>
              )}

              <div className="case-body">
                <div className="case-meta">
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="case-title">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p className="case-subtitle">{project.subtitle}</p>
                <p className="case-summary">{project.summary}</p>

                <div className="tag-row">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="case-actions">
                  <Link
                    href={`/work/${project.slug}`}
                    id={`open-case-${project.id}`}
                    className="case-read-btn"
                  >
                    Read Case Study
                    <ArrowUpRightIcon size={15} />
                  </Link>

                  <div className="case-ext-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        Live
                        <ArrowUpRightIcon size={14} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        GitHub
                        <ArrowUpRightIcon size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
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
