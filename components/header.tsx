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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const isTransparent = isHomePage && !isScrolled

  return (
      <>
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
        </header>

        {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" />

              {/* Slide-out menu */}
              <nav
                  className="absolute right-0 top-0 h-full w-[280px] bg-slate-900 shadow-2xl animate-in slide-in-from-right duration-300"
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Menu items */}
                <div className="flex flex-col px-6 py-8 gap-1">
                  <a
                      href="/#services"
                      className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <Link
                      href="/gallery"
                      className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                      href="/testimonials"
                      className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                      href="/service-area"
                      className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    Service Area
                  </Link>
                  <a
                      href="/#why-us"
                      className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    Why Us
                  </a>
                  <a
                      href="/#contact"
                      className="text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>

                  {/* CTA button */}
                  <div className="mt-4 px-4">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                      <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                        Get Free Estimate
                      </a>
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
        )}
      </>
