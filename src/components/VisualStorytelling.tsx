import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "./Icons";

export default function VisualStorytelling() {
  return (
    <section
      className="visual-band"
      id="visual"
      aria-labelledby="visual-heading"
    >
      <div className="container">
        <div className="visual-grid">
          <figure className="visual-frame reveal">
            <Image
              src="/images/visual-lagos.webp"
              alt="Monochrome architectural study of sunlight cutting across modernist West African concrete louvers and colonnades"
              width={960}
              height={720}
            />
          </figure>

          <div className="visual-copy reveal">
            <span className="eyebrow">05 / Beyond Code · Temoojii</span>
            <h2 className="section-title" id="visual-heading">
              Photography, Light &amp; <em>Cinematography</em>
            </h2>
            <p>
              Software feels sharper when the person building it studies real
              light, negative space, and human rhythm. Under{" "}
              <strong>Tempalette</strong> and <strong>@Temoojii</strong>, I
              shoot architectural geometry, portraits, and visual essays —
              bringing the discipline of a camera lens straight back into
              product design and motion.
            </p>

            <div className="visual-links">
              <a
                href="https://temoojii.wixsite.com/tempalette"
                target="_blank"
                rel="noopener noreferrer"
                id="visual-tempalette-link"
                className="btn btn-inverse-primary"
              >
                Explore Tempalette
                <ArrowUpRightIcon />
              </a>
              <a
                href="https://www.pinterest.com/Temoojii/"
                target="_blank"
                rel="noopener noreferrer"
                id="visual-pinterest-link"
                className="btn btn-inverse-secondary"
              >
                Pinterest (@Temoojii)
                <ArrowUpRightIcon />
              </a>
              <a
                href="https://instagram.com/abdullah.qaasim"
                target="_blank"
                rel="noopener noreferrer"
                id="visual-instagram-link"
                className="btn btn-inverse-secondary"
              >
                Instagram
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
