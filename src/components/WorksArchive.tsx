"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, ProjectCategory } from "@/data/portfolio";
import { ArrowUpRightIcon, SearchIcon } from "./Icons";

type FilterValue = "all" | ProjectCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All Works" },
  { value: "ai-labs", label: "AI & Labs" },
  { value: "engineering", label: "Engineering & OSS" },
  { value: "client-systems", label: "Client Systems" },
  { value: "visual-craft", label: "Visual & Craft" },
];

export default function WorksArchive() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesCat =
        activeFilter === "all" || project.category === activeFilter;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.stack.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, query]);

  return (
    <section className="section" id="archive" aria-label="Filterable works archive">
      <div className="container">
        <div className="archive-controls">
          <div
            className="filter-tabs"
            role="tablist"
            aria-label="Filter projects by discipline"
          >
            {FILTERS.map((filter) => {
              const count =
                filter.value === "all"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === filter.value).length;
              return (
                <button
                  key={filter.value}
                  type="button"
                  role="tab"
                  id={`filter-${filter.value}`}
                  aria-selected={activeFilter === filter.value}
                  className={`filter-tab${activeFilter === filter.value ? " active" : ""}`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="archive-search-wrap">
            <SearchIcon className="archive-search-icon" />
            <input
              type="search"
              id="archive-search-input"
              className="archive-search"
              placeholder="Filter by name, stack, domain..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search works archive"
            />
          </div>
        </div>

        <div className="archive-list">
          {filtered.length === 0 ? (
            <div className="archive-empty">
              No works matched “{query}”. Try clearing your search or switching
              category.
            </div>
          ) : (
            filtered.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                id={`archive-row-${project.id}`}
                className="archive-row archive-row-rich"
              >
                <span className="archive-num">{project.index}</span>
                <span className="archive-thumb-wrap">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt=""
                      width={128}
                      height={92}
                      className="archive-thumb"
                    />
                  )}
                </span>
                <span className="archive-title-group">
                  <span className="archive-title">{project.title}</span>
                  <span className="archive-sub">{project.subtitle}</span>
                </span>
                <span className="archive-summary-col">{project.summary}</span>
                <span className="archive-cat">{project.categoryLabel}</span>
                <span className="archive-cta">
                  Inspect
                  <ArrowUpRightIcon size={14} />
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
