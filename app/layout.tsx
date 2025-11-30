import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
  metadataBase: new URL("https://www.micrafthomesolutions.com"),
  title: "MICraft Home Solutions LLC | Michigan Home Improvement & Handyman Services",
  description:
      "Licensed builder serving Michigan with expert home improvement and handyman services. Fast, reliable, and affordable. Free estimates. Finish carpentry, drywall, painting, framing, siding, windows, flooring, and more.",
  generator: "v0.app",
  openGraph: {
    title: "MICraft Home Solutions LLC | Michigan Home Improvement & Handyman Services",
    description:
        "Licensed builder serving Michigan with expert home improvement and handyman services. Fast, reliable, and affordable. Free estimates.",
    images: [
      {
        url: "/images/1ffc50f0-841a-4d3f-ab06.jpeg",
        width: 1200,
        height: 630,
        alt: "MICraft Home Solutions - Custom entryway and carpentry work",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MICraft Home Solutions LLC | Michigan Home Improvement & Handyman Services",
    description:
        "Licensed builder serving Michigan with expert home improvement and handyman services. Fast, reliable, and affordable. Free estimates.",
    images: ["/images/1ffc50f0-841a-4d3f-ab06.jpeg"],
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
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} font-mono antialiased`}>
      {children}
      <Analytics />
      </body>
      </html>
  )
}
