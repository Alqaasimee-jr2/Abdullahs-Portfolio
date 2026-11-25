"use client";

import React, { useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

export default function ShareCaseButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      id="share-case-study-btn"
      className="btn btn-secondary"
      onClick={handleCopy}
      title={`Copy direct link to ${title} case study`}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? "Case Study Link Copied" : "Copy Shareable Link"}
    </button>
  );
}
