import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css"
import {AIChatWidget} from "@/components/ai-chat-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://micrafthomesolutions.com"),
  title: {
    default: "MICraft Home Solutions LLC | Licensed Builder | Michigan Home Improvement & Handyman Services",
    template: "%s | MICraft Home Solutions LLC",
  },
  description:
      "Licensed builder serving Jackson County & Washtenaw County, Michigan. Expert home improvement, remodeling, finish carpentry, drywall, painting, framing, siding, windows, flooring, cabinetry, and handyman services. Free estimates. Fast, reliable, affordable.",
  keywords: [
    "Michigan home improvement",
    "Jackson County contractor",
    "Washtenaw County builder",
    "licensed builder Michigan",
    "finish carpentry Michigan",
    "drywall repair Jackson",
    "painting contractor Ann Arbor",
    "home remodeling Michigan",
    "kitchen remodeling",
    "flooring installation",
    "cabinetry installation",
    "siding contractor",
    "windows and doors",
    "handyman services Michigan",
    "deck builder Jackson County",
    "trim carpentry",
    "home repairs Michigan",
  ],
  authors: [{ name: "MICraft Home Solutions LLC" }],
  creator: "MICraft Home Solutions LLC",
  publisher: "MICraft Home Solutions LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.app",
  applicationName: "MICraft Home Solutions",
  referrer: "origin-when-cross-origin",
  category: "Home Improvement",
  classification: "Business",
  openGraph: {
    title: "MICraft Home Solutions LLC | Licensed Builder | Michigan Home Improvement",
    description:
        "Licensed builder serving Jackson & Washtenaw County with expert home improvement and handyman services. Free estimates. Fast, reliable, affordable.",
    url: "https://micrafthomesolutions.com",
    siteName: "MICraft Home Solutions LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/1ffc50f0-841a-4d3f-ab06.jpeg",
        width: 1200,
        height: 630,
        alt: "MICraft Home Solutions - Custom entryway and carpentry work in Michigan",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MICraft Home Solutions LLC | Michigan Home Improvement & Handyman",
    description:
        "Licensed builder serving Michigan with expert home improvement and handyman services. Free estimates.",
    images: ["/images/1ffc50f0-841a-4d3f-ab06.jpeg"],
  },
  other: {
    "fb:app_id": "", // Add your Facebook App ID if you have one
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    // Add these when you register with search engines
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
    // bing: 'bing-verification-code',
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://micrafthomesolutions.com",
                name: "MICraft Home Solutions LLC",
                image: "https://micrafthomesolutions.com/images/1ffc50f0-841a-4d3f-ab06.jpeg",
                description:
                    "Licensed builder providing professional home improvement, remodeling, and handyman services in Jackson County and Washtenaw County, Michigan.",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "MI",
                  addressCountry: "US",
                },
                areaServed: [
                  {
                    "@type": "City",
                    name: "Jackson",
                    containedInPlace: {
                      "@type": "State",
                      name: "Michigan",
                    },
                  },
                  {
                    "@type": "City",
                    name: "Ann Arbor",
                    containedInPlace: {
                      "@type": "State",
                      name: "Michigan",
                    },
                  },
                ],
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "42.2458",
                  longitude: "-84.4013",
                },
                url: "https://micrafthomesolutions.com",
                sameAs: ["https://www.facebook.com/profile.php?id=61584081754653"],
                priceRange: "$$",
                openingHours: "Mo-Sa 08:00-18:00",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "500",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Home Improvement Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Finish Carpentry",
                        description: "Custom trim work and finish carpentry services",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Drywall Installation & Repair",
                        description: "Professional drywall services",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Interior & Exterior Painting",
                        description: "Quality painting services",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Framing",
                        description: "Structural framing for home additions and renovations",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Flooring Installation",
                        description: "Hardwood, laminate, and tile flooring installation",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Cabinetry Installation",
                        description: "Kitchen and bathroom cabinet installation",
                      },
                    },
                  ],
                },
              }),
            }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-mono antialiased`}>
      {children}
      <ScrollToTop />
      <AIChatWidget />
      <Analytics />
      </body>
      </html>
  )
}
