import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FEATURED_POEM,
  LITERARY_PROFILE,
  LITERARY_WORKS,
  PUBLISHED_BOOK,
} from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function LiteraryWorks({
  limit,
  showSectionHeader = true,
}: {
  limit?: number;
  showSectionHeader?: boolean;
}) {
  const works = limit ? LITERARY_WORKS.slice(0, limit) : LITERARY_WORKS;

  return (
    <section className="section" id="literary" aria-labelledby="literary-heading">
      <div className="container">
        {showSectionHeader && (
          <div className="section-header reveal">
            <div>
              <span className="eyebrow">Poetry &amp; Fiction · as {LITERARY_PROFILE.penName}</span>
              <h2 className="section-title" id="literary-heading">
                Words Before <em>Code</em>
              </h2>
            </div>
            <p className="section-desc">
              Writer, poet and published author. Faith, myth, apocalypse and the
              strange interior weather of young Lagos — published on Medium under
              the pen name {LITERARY_PROFILE.penName}.
            </p>
          </div>
        )}

        {PUBLISHED_BOOK && (
          <article className="book-feature reveal" id="published-book">
            {PUBLISHED_BOOK.cover && (
              <div className="book-cover">
                <Image
                  src={PUBLISHED_BOOK.cover}
                  alt={`${PUBLISHED_BOOK.title} book cover`}
                  width={360}
                  height={540}
                />
              </div>
            )}
            <div>
              <p className="essay-cat">
                Published Book · {PUBLISHED_BOOK.year}
                {PUBLISHED_BOOK.publisher ? ` · ${PUBLISHED_BOOK.publisher}` : ""}
              </p>
              <h3 className="book-title">{PUBLISHED_BOOK.title}</h3>
              <p className="essay-excerpt">{PUBLISHED_BOOK.description}</p>
              <a
                href={PUBLISHED_BOOK.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: "1.4rem" }}
              >
                Get the Book
                <ArrowUpRightIcon />
              </a>
            </div>
          </article>
        )}

        <figure className="poem-feature reveal">
          <span className="poem-mark" aria-hidden="true">
            ×
          </span>
          <blockquote className="poem-lines">
            {FEATURED_POEM.lines.map((line, i) => (
              <span key={i} className="poem-line">
                {line}
              </span>
            ))}
          </blockquote>
          <figcaption className="poem-caption">
            <span>
              — {FEATURED_POEM.title}, {formatDate(FEATURED_POEM.date)}
            </span>
            <a
              href={FEATURED_POEM.url}
              target="_blank"
              rel="noopener noreferrer"
              className="essay-read"
            >
              Read the full poem
              <ArrowUpRightIcon size={14} />
            </a>
          </figcaption>
        </figure>

        <div className="literary-grid reveal">
          {works.map((work) => (
            <a
              key={work.id}
              id={`lit-${work.id}`}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="literary-card"
            >
              <div className="literary-meta">
                <span className="essay-cat">{work.form}</span>
                <span className="literary-date">{formatDate(work.date)}</span>
              </div>
              <h3 className="literary-title">{work.title}</h3>
              <p className="literary-excerpt">“{work.excerpt}”</p>
              <div className="literary-foot">
                <span className="literary-tags">{work.tags.join(" · ")}</span>
                <ArrowUpRightIcon size={14} />
              </div>
            </a>
          ))}
        </div>

        <div className="section-footer-link reveal">
          {limit && LITERARY_WORKS.length > limit ? (
            <Link href="/writing" className="btn btn-secondary">
              All Poetry &amp; Fiction
              <ArrowUpRightIcon />
            </Link>
          ) : (
            <a
              href={LITERARY_PROFILE.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Follow {LITERARY_PROFILE.penName} on Medium
              <ArrowUpRightIcon />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
