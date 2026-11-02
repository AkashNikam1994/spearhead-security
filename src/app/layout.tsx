import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/conversion/WhatsAppButton";
import { organizationSchema, breadcrumbSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Spearhead Security | Professional Security Solutions in India",
    template: "%s | Spearhead Security",
  },
  description:
    "Spearhead Security delivers professional security solutions — manned guarding, corporate, industrial, residential and event security — built on trained personnel, disciplined operations and active supervision.",
  keywords: [
    "professional security services",
    "corporate security services",
    "industrial security services",
    "security guard services",
    "manned guarding",
    "residential security",
    "event security",
  ],
  openGraph: {
    type: "website",
    siteName: "Spearhead Security",
    title: "Spearhead Security | Professional Security Solutions",
    description:
      "Professional Protection. Disciplined Execution. Trusted Partnerships. Security that protects more than property.",
    images: ["/images/home/hero.png"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D2035",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

export { breadcrumbSchema };
