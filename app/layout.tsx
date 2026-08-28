import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0807",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.djjefferyisaac.com"),
  title: {
    default: "DJ Jeffery Isaac | Wedding DJ & musician, Warren & Youngstown",
    template: "%s | DJ Jeffery Isaac",
  },
  description:
    "Professional, fun-spirited, stress-free weddings. Ceremony piano and reception DJ for Warren, Youngstown, and Trumbull, Mahoning, Portage, and Columbiana counties.",
  icons: { icon: "/dj-jeffery-isaac/favicon.svg" },
  openGraph: {
    title: "DJ Jeffery Isaac — wedding DJ and musician",
    description: site.tagline,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.tagline,
  telephone: "+1-330-240-0915",
  email: site.email,
  url: "https://www.djjefferyisaac.com",
  areaServed: [
    "Warren, Ohio",
    "Youngstown, Ohio",
    "Trumbull County",
    "Mahoning County",
    "Portage County",
    "Columbiana County",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warren",
    addressRegion: "OH",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <div className="leak" aria-hidden="true" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
