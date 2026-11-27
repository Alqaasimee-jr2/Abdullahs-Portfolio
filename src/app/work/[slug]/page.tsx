import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PROJECTS,
  getAdjacentProjects,
  getProjectBySlug,
} from "@/data/portfolio";
import { ArrowUpRightIcon } from "@/components/Icons";
import ShareCaseButton from "@/components/ShareCaseButton";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study · Abdullah Qaasim-Falade`,
      description: project.summary,
      url: `https://abdullah-qaasim-falade.vercel.app/work/${project.slug}`,
      type: "article",
      images: project.image
        ? [{ url: project.image, alt: project.imageAlt ?? project.title }]
        : undefined,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="page-hero">
      <div className="container">
        <div className="breadcrumb-row">
          <Link href="/work" className="text-link font-mono">
            ← Back to Full Archive ({PROJECTS.length})
          </Link>
          <span>
            CASE STUDY {project.index} · {project.categoryLabel.toUpperCase()} ·{" "}
            {project.year}
          </span>
        </div>

        <header style={{ marginBottom: "2.5rem" }}>
          <span className="eyebrow">{project.status}</span>
          <h1 className="page-hero-title" style={{ maxWidth: "22ch" }}>
            {project.title}
          </h1>
          <p
            style={{
              fontSize: "clamp(1.08rem, 1.5vw, 1.3rem)",
              color: "var(--accent)",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            {project.subtitle}
          </p>
          <p className="page-hero-lead">{project.summary}</p>
        </header>

        {project.image && (
          <figure className="case-detail-cover">
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              width={1280}
              height={720}
              priority
            />
          </figure>
        )}

        <div className="case-detail-grid">
          <div>
            <section className="case-detail-section">
              <h2>01 / Key Proof Points</h2>
              <ul className="track-outcomes" style={{ marginBottom: 0 }}>
                {project.highlights.map((item) => (
                  <li key={item} style={{ fontSize: "0.98rem", paddingBlock: "0.7rem" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="case-detail-section">
              <h2>02 / The Bottleneck</h2>
              <p>{project.challenge}</p>
            </section>

            <section className="case-detail-section">
              <h2>03 / Systems Architecture</h2>
              <p>{project.architecture}</p>
            </section>

            <section className="case-detail-section">
              <h2>04 / Outcome &amp; Proof</h2>
              <p>{project.impact}</p>
            </section>

            {project.gallery && project.gallery.length > 0 && (
              <section className="case-detail-section">
                <h2>05 / Real Product &amp; Visual Gallery</h2>
                <div className="case-gallery-grid">
                  {project.gallery.map((shot) => (
                    <figure key={shot.src} className="case-gallery-item">
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        width={960}
                        height={640}
                      />
                      <figcaption>{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="case-sidebar-card" aria-label="Case study metadata and actions">
            <div>
              <p className="drawer-meta-label">Role</p>
              <p className="drawer-meta-val">{project.role}</p>
            </div>

            <div>
              <p className="drawer-meta-label">Category &amp; Status</p>
              <p className="drawer-meta-val">
                {project.categoryLabel} · {project.status}
              </p>
            </div>

            <div>
              <p className="drawer-meta-label">Stack &amp; Craft</p>
              <div className="tag-row" style={{ marginTop: "0.45rem", marginBottom: 0 }}>
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
                paddingTop: "0.5rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Live Project
                  <ArrowUpRightIcon />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Inspect Source on GitHub
                  <ArrowUpRightIcon />
                </a>
              )}
              <ShareCaseButton title={project.title} />
            </div>

            <div
              style={{
                paddingTop: "0.9rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--ink-secondary)",
                  marginBottom: "0.75rem",
                }}
              >
                Building something in this space or referring someone who needs
                this level of execution?
              </p>
              <Link href="/contact?track=contract" className="text-link font-mono">
                Start a conversation ↗
              </Link>
            </div>
          </aside>
        </div>

        <nav className="case-nav-band" aria-label="Adjacent case studies">
          <Link href={`/work/${prev.slug}`} className="case-nav-link">
            <span className="font-mono" style={{ fontSize: "0.72rem", color: "var(--ink-muted)" }}>
              ← PREVIOUS ({prev.index})
            </span>
            <span className="font-serif" style={{ fontSize: "1.45rem" }}>
              {prev.title}
            </span>
          </Link>

          <Link href={`/work/${next.slug}`} className="case-nav-link next">
            <span className="font-mono" style={{ fontSize: "0.72rem", color: "var(--ink-muted)" }}>
              NEXT ({next.index}) →
            </span>
            <span className="font-serif" style={{ fontSize: "1.45rem" }}>
              {next.title}
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
