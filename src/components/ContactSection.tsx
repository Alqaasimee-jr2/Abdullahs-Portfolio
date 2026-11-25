"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PERSON, SOCIAL_LINKS } from "@/data/portfolio";
import { ArrowUpRightIcon, CheckIcon, CopyIcon, PlatformIcon } from "./Icons";
import ReferralCard from "./ReferralCard";

type TrackKey = "contract" | "role" | "referral";

const TRACK_CONFIG: Record<
  TrackKey,
  {
    title: string;
    sub: string;
    defaultTopic: string;
    topics: string[];
    placeholder: string;
    helper: string;
  }
> = {
  contract: {
    title: "Contract / Build",
    sub: "Systems, AI & web",
    defaultTopic: "Custom Operational System (NIT7ER)",
    topics: [
      "Custom Operational System (NIT7ER)",
      "AI Product / Offline-First App",
      "Brand Digital Atelier / Website",
      "Automation / WhatsApp Workflow",
    ],
    placeholder:
      "What bottleneck or product are you trying to ship, who uses it, and what timeline are you targeting?",
    helper:
      "Prefer a live conversation? You can also book a 30-minute NIT7ER Strategy Session directly below.",
  },
  role: {
    title: "Role / Advisory",
    sub: "Founding & senior eng",
    defaultTopic: "Founding / Senior Product Engineer Role",
    topics: [
      "Founding / Senior Product Engineer Role",
      "Creative Technologist / Systems Architect Role",
      "Technical Advisory / Fractional Systems Lead",
      "Open-Source / AI Hackathon Collaboration",
    ],
    placeholder:
      "Tell me about your team, the technical problem you're tackling, and what ownership looks like.",
    helper:
      "Open to remote global product teams, AI startups, and high-ownership technical partnerships.",
  },
  referral: {
    title: "Refer / Connect",
    sub: "Warm intros & peers",
    defaultTopic: "Warm Introduction / Client Referral",
    topics: [
      "Warm Introduction / Client Referral",
      "NIT7ER Academy / Speaking / Media",
      "Photography / Visual Direction",
      "General Hello",
    ],
    placeholder:
      "Who are you introducing or what's on your mind? Even two sentences is plenty — I reply to every warm intro within 24 hours.",
    helper:
      "Just want to forward my details instead? Use the 1-click Forward / Refer card on the right.",
  },
};

function parseTrack(raw: string | null): TrackKey {
  if (raw === "role" || raw === "referral" || raw === "contract") return raw;
  return "contract";
}

export default function ContactSection() {
  const searchParams = useSearchParams();
  const initialTrack = parseTrack(searchParams.get("track"));

  const [track, setTrack] = useState<TrackKey>(initialTrack);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TRACK_CONFIG[initialTrack].defaultTopic);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const currentConfig = TRACK_CONFIG[track];

  const handleSelectTrack = (next: TrackKey) => {
    setTrack(next);
    setTopic(TRACK_CONFIG[next].defaultTopic);
    setStatusMsg("");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSON.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setStatusMsg(`Direct email: ${PERSON.email}`);
    }
  };

  const buildBrief = () => {
    const sender = name.trim() || "A prospective collaborator";
    const reply = email.trim() ? ` (${email.trim()})` : "";
    const bodyText =
      message.trim() || "I would love to connect and discuss working together.";
    return {
      subject: `[${currentConfig.title}] ${topic} — ${sender}`,
      body: `Hi Abdullah,\n\nMy name is ${sender}${reply}.\nTrack: ${currentConfig.title}\nFocus: ${topic}\n\n${bodyText}\n`,
    };
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { subject, body } = buildBrief();
    window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatusMsg("Opening your email client with the pre-filled brief.");
  };

  const handleWhatsAppSend = () => {
    const { body } = buildBrief();
    window.open(
      `${PERSON.whatsappUrl}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatusMsg("Opening WhatsApp with your message pre-filled.");
  };

  return (
    <section className="section" id="contact" aria-label="Contact options and inquiry router">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form-card">
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Choose Your Path · {PERSON.responseSla}
            </p>

            <div
              className="router-tabs"
              role="tablist"
              aria-label="Select conversation intent"
            >
              {(["contract", "role", "referral"] as TrackKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  id={`contact-track-${key}`}
                  aria-selected={track === key}
                  className={`router-tab${track === key ? " active" : ""}`}
                  onClick={() => handleSelectTrack(key)}
                >
                  <span className="router-tab-title">
                    {TRACK_CONFIG[key].title}
                  </span>
                  <span className="router-tab-sub">{TRACK_CONFIG[key].sub}</span>
                </button>
              ))}
            </div>

            <form
              onSubmit={handleEmailSubmit}
              className="form-grid"
              id="contact-inquiry-form"
            >
              <div className="field-row">
                <div className="field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Ada Lovelace"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-topic">Specific Focus</label>
                <select
                  id="contact-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {currentConfig.topics.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="contact-message">Brief</label>
                <textarea
                  id="contact-message"
                  placeholder={currentConfig.placeholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <p className="form-note" style={{ marginTop: 0 }}>
                {currentConfig.helper}
              </p>

              <div className="form-actions">
                <button
                  type="submit"
                  id="contact-submit-email"
                  className="btn btn-primary"
                >
                  Send via Email
                  <ArrowUpRightIcon />
                </button>
                <button
                  type="button"
                  id="contact-submit-whatsapp"
                  className="btn btn-secondary"
                  onClick={handleWhatsAppSend}
                >
                  Message on WhatsApp
                  <ArrowUpRightIcon />
                </button>
                <a
                  href={PERSON.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-book-call"
                  className="btn btn-secondary"
                >
                  Book Strategy Call
                  <ArrowUpRightIcon />
                </a>
              </div>

              {statusMsg && (
                <p className="form-note" role="status" aria-live="polite">
                  {statusMsg}
                </p>
              )}
            </form>
          </div>

          <div>
            <ReferralCard />

            <div className="direct-copy-bar">
              <div>
                <p className="direct-email-label">Direct Inbox</p>
                <p className="direct-email-val">{PERSON.email}</p>
              </div>
              <button
                type="button"
                id="copy-email-btn"
                className="btn btn-secondary"
                onClick={handleCopyEmail}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied ? "Copied" : "Copy Email"}
              </button>
            </div>

            <div
              className="social-directory"
              aria-label="All online profiles and channels"
            >
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  id={`directory-${item.id}`}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="social-dir-row"
                >
                  <span className="social-dir-left">
                    <PlatformIcon platform={item.platform} size={16} />
                    <span className="social-dir-name">{item.label}</span>
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span className="social-dir-handle">{item.handle}</span>
                    <ArrowUpRightIcon size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
