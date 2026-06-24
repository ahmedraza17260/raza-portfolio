import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";
import "react-toggle/style.css";
import { ThemeWrapper } from "../../lib/ThemeWrapper";

import Script from "next/script";

// Next.js NATIVE HIGH-PERFORMANCE SEO MANAGEMENT
export const metadata = {
  title: "Ahmed Raza | Applied Chemist & Full-Stack Developer Portfolio",
  description:
    "Portfolio of Muhammad Ahmed Raza: MSc Applied Chemist & Full-Stack Developer. Expert in building scalable SaaS platforms, automated QC consoles, and high-performance Next.js web applications.",
  keywords: [
    "Muhammad Ahmed Raza",
    "Ahmed Raza Chemist",
    "Ahmed Raza Portfolio",
    "Applied Chemist Portfolio",
    "Chemist Portfolio",
    "Full-Stack Developer Karachi",
    "React Next.js Developer",
    "SaaS Platform Development",
    "Web Application Architecture",
    "Applied Chemistry Data Automation",
    "Next.js Portfolio",
    "Custom Web Dashboard Solutions",
    "Quality Control Software Developer",
  ],
  authors: [{ name: "Muhammad Ahmed Raza" }],
  creator: "Muhammad Ahmed Raza",
  publisher: "Muhammad Ahmed Raza",
  alternates: {
    canonical: "https://ahmedrazaportfolio.netlify.app/",
  },
  openGraph: {
    type: "website",
    url: "https://ahmedrazaportfolio.netlify.app/",
    title: "Ahmed Raza | Applied Chemist & Full-Stack Developer",
    description:
      "Bridging the gap between scientific precision and digital innovation. Specialist in full-stack web solutions and automated process dashboards.",
    siteName: "Ahmed Raza Portfolio",
    images: [
      {
        url: "https://ahmedrazaportfolio.netlify.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Raza Portfolio Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Ahmed Raza",
    jobTitle: "Full-Stack Developer & Applied Chemist",
    url: "https://ahmedrazaportfolio.netlify.app/",
    sameAs: [
      "https://www.linkedin.com/in/ahmedraza17260/",
      "https://github.com/ahmedraza17260",
    ],
    description:
      "Full-Stack Developer specializing in SaaS platforms, React/Next.js, and automated scientific data processing.",
    knowsAbout: [
      "Applied Chemistry",
      "Next.js",
      "Full-Stack Development",
      "Cloud Infrastructure",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="huLhKeVIUKVJa3fLMnpkfIJV_-57Ag-6AtE96KRbSko"
        />
        <meta name="msvalidate.01" content="B20E6545027DF38512DC4464CD643A97" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KDFWX9ZQT8"
          strategy="afterInteractive"
        />
        {/* <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9004285372762378"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
