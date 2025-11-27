"use client"

import { Button } from "@/components/ui/button"
import { Hammer, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isTransparent = isHomePage && !isScrolled

  return (
      <header
          className={`${isTransparent ? "absolute" : "fixed"} top-0 z-50 w-full transition-all duration-300 ${
              isTransparent
                  ? "bg-transparent"
                  : "bg-background/95 backdrop-blur border-b border-border/40 supports-[backdrop-filter]:bg-background/60"
          }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Hammer className={`h-6 w-6 transition-colors ${isTransparent ? "text-white" : "text-primary"}`} />
            <span
                className={`font-sans text-xl font-bold transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
            >
            MICraft Home Solutions
          </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
                href="/#services"
                className={`text-sm font-medium transition-colors ${
                    isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Services
            </a>
            <Link
                href="/gallery"
                className={`text-sm font-medium transition-colors ${
                    isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Gallery
            </Link>
            <Link
                href="/testimonials"
                className={`text-sm font-medium transition-colors ${
                    isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Testimonials
            </Link>
            <Link
                href="/service-area"
                className={`text-sm font-medium transition-colors ${
                    isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Service Area
            </Link>
            <a
                href="/#why-us"
                className={`text-sm font-medium transition-colors ${
                    isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Why Us
            </a>
            <a
                href="/#contact"
                className={`text-sm font-medium transition-colors ${
                    isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button
                asChild
                size="sm"
                className={`hidden md:flex transition-all ${
                    isTransparent
                        ? "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
            >
              <a href="/#contact">Get Free Estimate</a>
            </Button>

            <button
                className={`md:hidden transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/40 bg-background">
              <nav className="container mx-auto flex flex-col px-4 py-4 gap-4">
                <a
                    href="/#services"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <Link
                    href="/gallery"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                    href="/testimonials"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                    href="/service-area"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Service Area
                </Link>
                <a
                    href="/#why-us"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Why Us
                </a>
                <a
                    href="/#contact"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Free Estimate
                  </a>
                </Button>
              </nav>
            </div>
        )}
      </header>
  )
}
