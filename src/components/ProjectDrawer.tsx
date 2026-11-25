"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/portfolio";
import { ArrowUpRightIcon, CloseIcon } from "./Icons";

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="drawer-backdrop"
      id="project-case-drawer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="drawer-panel">
        <div className="drawer-top">
          <span className="font-mono" style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}>
            CASE STUDY {project.index} · {project.categoryLabel.toUpperCase()}
          </span>
          <button
            type="button"
            id="drawer-close-btn"
            className="drawer-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            <CloseIcon size={14} />
            ESC
          </button>
        </div>

        {project.image && (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            className="drawer-img"
            width={960}
            height={540}
          />
        )}

        <div>
          <h3 className="drawer-title" id="drawer-project-title">
            {project.title}
          </h3>
          <p className="case-subtitle" style={{ marginTop: "0.45rem", marginBottom: 0 }}>
            {project.subtitle}
          </p>
        </div>

        <div className="drawer-meta-grid">
          <div>
            <p className="drawer-meta-label">Role</p>
            <p className="drawer-meta-val">{project.role}</p>
          </div>
          <div>
            <p className="drawer-meta-label">Status</p>
            <p className="drawer-meta-val">{project.status}</p>
          </div>
          <div>
            <p className="drawer-meta-label">Year</p>
            <p className="drawer-meta-val">{project.year}</p>
          </div>
        </div>

        <div className="drawer-block">
          <h4>Overview</h4>
          <p>{project.summary}</p>
        </div>

        <div className="drawer-block">
          <h4>The Bottleneck</h4>
          <p>{project.challenge}</p>
        </div>

        <div className="drawer-block">
          <h4>Systems Architecture</h4>
          <p>{project.architecture}</p>
        </div>

        <div className="drawer-block">
          <h4>Outcome &amp; Proof</h4>
          <p>{project.impact}</p>
        </div>

        <div className="drawer-block">
          <h4>Stack &amp; Craft</h4>
          <div className="tag-row" style={{ marginBottom: 0 }}>
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", paddingTop: "0.5rem" }}>
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
              Inspect Repository
              <ArrowUpRightIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
