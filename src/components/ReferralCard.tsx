"use client";

import React, { useState } from "react";
import { REFERRAL_TEMPLATES } from "@/data/portfolio";
import { CheckIcon, CopyIcon } from "./Icons";

export default function ReferralCard({ compact = false }: { compact?: boolean }) {
  const [variant, setVariant] = useState<"founder" | "techTeam">("founder");
  const [copied, setCopied] = useState(false);

  const active = REFERRAL_TEMPLATES[variant];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="referral-card" id="referral-forward-card">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <div>
          <p className="eyebrow">Forward / Refer Abdullah</p>
          {!compact && (
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--ink-secondary)",
                marginTop: "0.45rem",
              }}
            >
              Know a founder or engineering leader who needs someone sharp? Copy a
              2-line intro ready for WhatsApp, Slack, LinkedIn, or Email.
            </p>
          )}
        </div>
      </div>

      <div
        className="filter-tabs"
        style={{ marginTop: "0.95rem" }}
        role="tablist"
        aria-label="Choose referral intro audience"
      >
        <button
          type="button"
          role="tab"
          aria-selected={variant === "founder"}
          id="referral-tab-founder"
          className={`filter-tab${variant === "founder" ? " active" : ""}`}
          onClick={() => setVariant("founder")}
        >
          For a Founder / Client
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={variant === "techTeam"}
          id="referral-tab-tech"
          className={`filter-tab${variant === "techTeam" ? " active" : ""}`}
          onClick={() => setVariant("techTeam")}
        >
          For an AI / Tech Team
        </button>
      </div>

      <p className="referral-preview">{active.text}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
        <button
          type="button"
          id="copy-referral-btn"
          className="btn btn-primary"
          onClick={handleCopy}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Intro Copied — Ready to Paste" : "Copy 2-Line Intro"}
        </button>
        <span className="font-mono" style={{ fontSize: "0.74rem", color: "var(--ink-muted)" }}>
          Works in WhatsApp, Slack, LinkedIn DM &amp; Email
        </span>
      </div>
    </div>
  );
}
