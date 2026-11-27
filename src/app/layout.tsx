import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { PERSON, SOCIAL_LINKS } from "@/data/portfolio";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullah-qaasim-falade.vercel.app"),
  title: {
    default: `${PERSON.fullName} — Creative Technologist, Systems Architect & Founder of NIT7ER`,
    template: `%s · ${PERSON.fullName}`,
  },
  description:
    "Personal portfolio of Abdullah Qaasim-Falade — Nigerian creative technologist, systems architect, founder of NIT7ER & NIT7ER Academy, AI product builder (Lang Huey, Flow 7, Clasquera, Araxie, OAUMods, CI-Guardian), writer, and photographer.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Abdullah Qaasim-Falade",
    "Abdullah Qaasim",
    "NIT7ER",
    "NIT7ER Academy",
    "Creative Technologist Lagos",
    "Systems Architect Nigeria",
    "Flow 7",
    "Lang Huey",
    "Clasquera",
    "OAUMods",
    "Araxie",
    "CI-Guardian",
    "Tempalette",
  ],
  authors: [{ name: PERSON.fullName, url: "https://abdullah-qaasim-falade.vercel.app" }],
  openGraph: {
    title: `${PERSON.fullName} — Creative Technologist & Founder of NIT7ER`,
    description:
      "Designing custom operational infrastructure, offline-first African EdTech, AI products, and tactile digital ateliers from Lagos, Nigeria.",
    url: "https://abdullah-qaasim-falade.vercel.app",
    type: "website",
    locale: "en_NG",
    siteName: PERSON.fullName,
    images: [
      {
        url: "/images/works/lang-huey-terms.webp",
        width: 1280,
        height: 800,
        alt: "Abdullah Qaasim-Falade — Creative Technologist & Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSON.fullName} — Creative Technologist & Founder of NIT7ER`,
    description:
      "Systems architecture, NIT7ER Labs, open-source engineering, essays, and photography.",
    images: ["/images/works/lang-huey-terms.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1110" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.fullName,
  alternateName: [PERSON.shortName, PERSON.visualAlias, "Alqaasimee-jr2"],
  url: "https://abdullah-qaasim-falade.vercel.app",
  jobTitle: PERSON.title,
  description: PERSON.oneLineHook,
  email: `mailto:${PERSON.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  worksFor: {
    "@type": "Organization",
    name: "NIT7ER",
    url: "https://nit7er.vercel.app",
  },
  sameAs: SOCIAL_LINKS.filter((s) => s.url.startsWith("http")).map((s) => s.url),
};

const themeInitScript = `
  (function() {
    try {
      var saved = localStorage.getItem('aqf-theme');
      if (saved === 'dark' || saved === 'light') {
        document.documentElement.setAttribute('data-theme', saved);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
