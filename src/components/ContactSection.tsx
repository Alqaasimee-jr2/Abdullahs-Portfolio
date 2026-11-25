"use client";

import React, { useState } from "react";
import { PERSON, SOCIAL_LINKS } from "@/data/portfolio";
import { ArrowUpRightIcon, CheckIcon, CopyIcon, PlatformIcon } from "./Icons";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Custom Operational System (NIT7ER)");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

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
      message.trim() || "I would love to discuss working together.";
    return {
      subject: `[Portfolio Inquiry] ${topic} — ${sender}`,
      body: `Hi Abdullah,\n\nMy name is ${sender}${reply}.\nInquiry type: ${topic}\n\n${bodyText}\n`,
    };
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { subject, body } = buildBrief();
    const mailto = `mailto:${PERSON.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatusMsg("Opening your email client with the pre-filled brief.");
  };

  const handleWhatsAppSend = () => {
    const { body } = buildBrief();
    const waLink = `${PERSON.whatsappUrl}?text=${encodeURIComponent(body)}`;
    window.open(waLink, "_blank", "noopener,noreferrer");
    setStatusMsg("Opening WhatsApp with your message pre-filled.");
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">07 / Contact &amp; Channels</span>
            <h2 className="section-title" id="contact-heading">
              Let&apos;s Build <em>Something Real</em>
            </h2>
          </div>
          <p className="section-desc">
            Building a custom operational system, launching an AI product,
            exploring a design partnership, or just want to connect — reach me
            directly by email, WhatsApp, or any channel below.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-card reveal">
            <form onSubmit={handleEmailSubmit} className="form-grid" id="contact-inquiry-form">
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
                <label htmlFor="contact-topic">Project / Inquiry Type</label>
                <select
                  id="contact-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option>Custom Operational System (NIT7ER)</option>
                  <option>AI Product / Offline App Architecture</option>
                  <option>Brand Digital Atelier / Website</option>
                  <option>Open-Source / Hackathon Collaboration</option>
                  <option>Photography / Visual Direction</option>
                  <option>Speaking / NIT7ER Academy</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="contact-message">Brief</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me what you're building, the bottleneck you want solved, and your timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" id="contact-submit-email" className="btn btn-primary">
                  Send via Email
                  <ArrowUpRightIcon />
                </button>
                <button
                  type="button"
                  id="contact-submit-whatsapp"
                  className="btn btn-secondary"
                  onClick={handleWhatsAppSend}
                >
                  Send via WhatsApp
                  <ArrowUpRightIcon />
                </button>
              </div>

              {statusMsg && (
                <p className="form-note" role="status" aria-live="polite">
                  {statusMsg}
                </p>
              )}
            </form>
          </div>

          <div className="reveal">
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

            <div className="social-directory" aria-label="All online profiles and channels">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  id={`directory-${item.id}`}
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="social-dir-row"
                >
                  <span className="social-dir-left">
                    <PlatformIcon platform={item.platform} size={16} />
                    <span className="social-dir-name">{item.label}</span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
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
