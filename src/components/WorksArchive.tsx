"use client";

import React, { useMemo, useState } from "react";
import { PROJECTS, ProjectCategory, ProjectItem } from "@/data/portfolio";
import { ArrowUpRightIcon, SearchIcon } from "./Icons";

interface WorksArchiveProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterValue = "all" | ProjectCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All Works" },
  { value: "ai-labs", label: "AI & Labs" },
  { value: "engineering", label: "Engineering & OSS" },
  { value: "client-systems", label: "Client Systems" },
  { value: "visual-craft", label: "Visual & Craft" },
];

export default function WorksArchive({ onSelectProject }: WorksArchiveProps) {
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
    <section className="section" id="archive" aria-labelledby="archive-heading">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">02 / Complete Index</span>
            <h2 className="section-title" id="archive-heading">
              The Full <em>Archive</em> ({PROJECTS.length})
            </h2>
          </div>
          <p className="section-desc">
            Every public product, client system, AI prototype, developer tool,
            and creative experiment across GitHub and NIT7ER — searchable and
            inspectable in one ledger.
          </p>
        </div>

        <div className="archive-controls reveal">
          <div className="filter-tabs" role="tablist" aria-label="Filter projects by discipline">
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

        <div className="archive-list reveal">
          {filtered.length === 0 ? (
            <div className="archive-empty">
              No works matched “{query}”. Try clearing your search or switching category.
            </div>
          ) : (
            filtered.map((project) => (
              <button
                key={project.id}
                type="button"
                id={`archive-row-${project.id}`}
                className="archive-row"
                onClick={() => onSelectProject(project)}
              >
                <span className="archive-num">{project.index}</span>
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
              </button>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
