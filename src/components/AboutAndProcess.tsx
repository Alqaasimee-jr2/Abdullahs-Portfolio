import React from "react";
import { PERSON, PROCESS_STEPS } from "@/data/portfolio";

export default function AboutAndProcess() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">06 / Story &amp; Method</span>
            <h2 className="section-title" id="about-heading">
              Built from <em>Scratch</em>
            </h2>
          </div>
          <p className="section-desc">
            Self-driven, research-focused, and obsessed with tools that work
            under real-world conditions — not just slide decks.
          </p>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <p className="about-lead">{PERSON.aboutLead}</p>
            <div className="about-body">
              {PERSON.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="collab-box">
              <h3>Open To Collaborations On</h3>
              <ul>
                {PERSON.collaborations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="process-stack reveal">
            {PROCESS_STEPS.map((item) => (
              <article key={item.step} className="process-card">
                <p className="process-step">STEP_{item.step}</p>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
