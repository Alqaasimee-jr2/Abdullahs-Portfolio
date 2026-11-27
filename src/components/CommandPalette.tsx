"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ESSAYS, PERSON, PROJECTS, REFERRAL_TEMPLATES } from "@/data/portfolio";
import { ArrowUpRightIcon, CloseIcon, SearchIcon } from "./Icons";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
}

interface PaletteEntry {
  id: string;
  group: "Pages" | "Case Studies" | "Essays" | "Quick Actions";
  title: string;
  subtitle: string;
  action: () => void;
}

export default function CommandPalette({
  open,
  onClose,
  onToggleTheme,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const entries = useMemo<PaletteEntry[]>(() => {
    const pages: PaletteEntry[] = [
      { id: "pg-home", group: "Pages", title: "Overview", subtitle: "Home conversion & flagship showcase", action: () => { router.push("/"); onClose(); } },
      { id: "pg-work", group: "Pages", title: "Work Archive", subtitle: "All 18 searchable projects", action: () => { router.push("/work"); onClose(); } },
      { id: "pg-about", group: "Pages", title: "About & Ventures", subtitle: "Story, NIT7ER, NIT7ER Academy & photography", action: () => { router.push("/about"); onClose(); } },
      { id: "pg-writing", group: "Pages", title: "Writing & Field Notes", subtitle: "All 7 NIT7ER engineering essays", action: () => { router.push("/writing"); onClose(); } },
      { id: "pg-contact", group: "Pages", title: "Contact & Referrals", subtitle: "3-path router, WhatsApp & Strategy Call", action: () => { router.push("/contact"); onClose(); } },
    ];

    const quick: PaletteEntry[] = [
      {
        id: "act-email",
        group: "Quick Actions",
        title: "Copy Email Address",
        subtitle: PERSON.email,
        action: async () => {
          try { await navigator.clipboard.writeText(PERSON.email); } catch {}
          setToast("Email copied to clipboard");
          window.setTimeout(() => { setToast(""); onClose(); }, 900);
        },
      },
      {
        id: "act-refer",
        group: "Quick Actions",
        title: "Copy 2-Line Referral Intro",
        subtitle: "Ready to paste in WhatsApp, Slack, or LinkedIn",
        action: async () => {
          try { await navigator.clipboard.writeText(REFERRAL_TEMPLATES.founder.text); } catch {}
          setToast("Referral intro copied");
          window.setTimeout(() => { setToast(""); onClose(); }, 900);
        },
      },
      {
        id: "act-theme",
        group: "Quick Actions",
        title: "Toggle Light / Dark Gallery Theme",
        subtitle: "Switch between Gallery Alabaster & Obsidian",
        action: () => { onToggleTheme(); onClose(); },
      },
      {
        id: "act-book",
        group: "Quick Actions",
        title: "Book a 30-Min NIT7ER Strategy Call",
        subtitle: "Opens nit7er.vercel.app/book",
        action: () => { window.open(PERSON.bookingUrl, "_blank", "noopener,noreferrer"); onClose(); },
      },
    ];

    const cases: PaletteEntry[] = PROJECTS.map((p) => ({
      id: `case-${p.slug}`,
      group: "Case Studies",
      title: `${p.index} · ${p.title}`,
      subtitle: `${p.subtitle} — ${p.stack.slice(0, 3).join(", ")}`,
      action: () => { router.push(`/work/${p.slug}`); onClose(); },
    }));

    const essays: PaletteEntry[] = ESSAYS.map((e) => ({
      id: `essay-${e.id}`,
      group: "Essays",
      title: e.title,
      subtitle: `${e.category} · NIT7ER Blog`,
      action: () => { window.open(e.url, "_blank", "noopener,noreferrer"); onClose(); },
    }));

    return [...quick, ...pages, ...cases, ...essays];
  }, [onClose, onToggleTheme, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries.slice(0, 14);
    return entries
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.group.toLowerCase().includes(q)
      )
      .slice(0, 14);
  }, [entries, query]);

  if (!open) return null;

  return (
    <div
      className="cmd-backdrop"
      id="command-palette"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation and actions"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cmd-panel">
        <div className="cmd-input-row">
          <SearchIcon size={16} />
          <input
            type="search"
            autoFocus
            className="cmd-input"
            placeholder="Jump to a case study, essay, page, or quick action..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Quick jump search"
          />
          <button
            type="button"
            className="cmd-esc"
            onClick={onClose}
            aria-label="Close command palette"
          >
            <CloseIcon size={14} />
          </button>
        </div>

        {toast && (
          <div className="cmd-toast" role="status">
            {toast}
          </div>
        )}

        <div className="cmd-results">
          {filtered.length === 0 ? (
            <p className="cmd-empty">No matches for “{query}”.</p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                className="cmd-item"
                onClick={item.action}
              >
                <div>
                  <span className="cmd-item-group">{item.group}</span>
                  <span className="cmd-item-title">{item.title}</span>
                  <span className="cmd-item-sub">{item.subtitle}</span>
                </div>
                <ArrowUpRightIcon size={14} />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
