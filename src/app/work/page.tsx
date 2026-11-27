import type { Metadata } from "next";
import React from "react";
import WorksArchive from "@/components/WorksArchive";

export const metadata: Metadata = {
  title: "Works & Hobbies",
  description:
    "All 18 shipped products, NIT7ER Labs builds, open-source developer tools, client systems, photography (Tempalette), and publications by Abdullah Qaasim-Falade.",
};

export default function WorkPage() {
  return <WorksArchive />;
}
