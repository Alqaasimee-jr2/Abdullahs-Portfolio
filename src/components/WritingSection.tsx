import React from "react";
import { ESSAYS } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./Icons";

export default function WritingSection() {
  return (
    <section className="section" id="writing" aria-labelledby="writing-heading">
      <div className="container">
        <div className="section-header reveal">
          <div>
            <span className="eyebrow">04 / Essays &amp; Field Notes</span>
            <h2 className="section-title" id="writing-heading">
              Thinking in <em>Public</em>
            </h2>
          </div>
          <p className="section-desc">
            Engineering autopsies, classroom observations across Lagos, and
            honest essays on offline-first software, cognitive tools, and why
            custom systems beat spreadsheet chaos.
          </p>
        </div>

        <div className="essays-list reveal">
          {ESSAYS.map((essay) => (
            <a
              key={essay.id}
              id={essay.id}
              href={essay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="essay-row"
            >
              <span className="essay-num">{essay.number}</span>
              <div>
                <p className="essay-cat">{essay.category}</p>
                <h3 className="essay-title">{essay.title}</h3>
                <p className="essay-excerpt">{essay.excerpt}</p>
              </div>
              <span className="essay-read">
                Read on NIT7ER
                <ArrowUpRightIcon size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
