import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
      <section className="relative w-full overflow-hidden flex items-center" style={{ height: "calc(100vh - 64px)" }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
              src="/images/1ffc50f0-841a-4d3f-ab06.jpeg"
              alt="Custom entryway craftsmanship by MICraft Home Solutions"
              className="h-full w-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white w-fit mb-6">
              <CheckCircle2 className="h-4 w-4" />
              <span>Licensed Builder Serving Michigan & Surrounding Areas</span>
            </div>
            <h1 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance mb-6">
              {"Your Home Improvement & Handyman Experts"}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              {
                "From major home renovations to everyday handyman needs, our licensed builder brings professional craftsmanship to projects of all sizes. We treat every home like our own."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                <a href="#contact">Get Free Estimate</a>
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                <a href="#services">View Services</a>
              </Button>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-white">500+</span>
                <span className="text-sm text-white/80">Happy Customers</span>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-white">Fast</span>
                <span className="text-sm text-white/80">Response Times</span>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-bold text-white">100%</span>
                <span className="text-sm text-white/80">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
