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
    default: "Spearhead Security Service | Professional Security Solutions",
    template: "%s | Spearhead Security Service",
  },
  description:
    "Spearhead Security Service, established in 2014 and headquartered in Jaysingpur, Maharashtra, provides professional security services for companies, organisations and institutions.",
  keywords: [
    "Spearhead Security Service",
    "security services in Jaysingpur",
    "security services in Kolhapur",
    "industrial security services in Maharashtra",
    "security guard services",
    "bank security services",
    "armed escort services",
    "private investigation services",
    "security services in Pune",
    "security services in Sangli",
    "security services in Satara",
  ],
  openGraph: {
    type: "website",
    siteName: "Spearhead Security Service",
    title: "Spearhead Security Service | Professional Security Solutions",
    description:
      "Spearhead Security Service, established in 2014 and headquartered in Jaysingpur, Maharashtra, provides professional security services for companies, organisations and institutions.",
    images: ["/images/home/hero.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123F62",
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
