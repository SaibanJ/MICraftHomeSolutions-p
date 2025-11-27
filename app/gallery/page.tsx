import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const featuredProject = {
  title: "Accessible Ramp Construction",
  category: "Deck & Ramp Building",
  description:
    "A few months later a ramp was needed for our customer. Due to budget considerations, they chose traditional treated lumber instead of more expensive Westbury railing and Azek decking. Beautiful craftsmanship with quality materials.",
  beforeImage: "/images/5702c826-3788-4abe-b15f.jpeg",
  afterImage: "/images/e0342fe8-35b3-4a50-8171.jpeg",
}

const deckTransformation = {
  title: "Complete Deck Transformation",
  category: "Deck Renovation",
  description:
    "Old deck transformed into a stunning new outdoor living space. Complete teardown and rebuild with modern two-tone composite decking in charcoal and tan, creating a beautiful geometric pattern.",
  images: [
    {
      src: "/images/deck-before.jpeg",
      alt: "Old weathered deck before renovation",
      label: "Before",
    },
    {
      src: "/images/deck-framing.jpeg",
      alt: "Deck framing construction in progress",
      label: "In Progress",
    },
    {
      src: "/images/deck-stairs-progress.jpeg",
      alt: "Composite deck stairs being installed",
      label: "In Progress",
    },
    {
      src: "/images/deck-after.jpeg",
      alt: "Beautiful finished deck with two-tone composite decking",
      label: "After",
    },
  ],
}

const trimCarpentryProject = {
  title: "Custom Trim Carpentry",
  category: "Finish Carpentry",
  description:
    "Custom-built entertainment center with craftsman-style fireplace surround, built-in shelving, and cabinet storage. Expertly crafted from raw lumber to a beautiful painted finish, showcasing our finish carpentry expertise.",
  images: [
    {
      src: "/images/trim-carpentry-1.jpeg",
      alt: "Custom fireplace mantel surround with panel details",
      label: "Stage 1",
    },
    {
      src: "/images/trim-carpentry-2.jpeg",
      alt: "Built-in entertainment center with shelving units",
      label: "Stage 2",
    },
    {
      src: "/images/trim-carpentry-3.jpeg",
      alt: "Completed and painted built-in entertainment center",
      label: "Finished",
    },
  ],
}
//
// const projects = [
//   {
//     title: "Modern Kitchen Renovation",
//     category: "Appliance Installation",
//     image: "/modern-kitchen-with-newly-installed-appliances.jpg",
//   },
//   {
//     title: "Living Room Paint Job",
//     category: "Painting",
//     image: "/freshly-painted-living-room-with-neutral-colors.jpg",
//   },
//   {
//     title: "Drywall Repair & Texturing",
//     category: "Drywall Repair",
//     image: "/smooth-drywall-repair-work-before-and-after.jpg",
//   },
//   {
//     title: "Luxury Vinyl Flooring",
//     category: "Flooring",
//     image: "/luxury-vinyl-plank-flooring-installation-in-modern.jpg",
//   },
//   {
//     title: "Outdoor Deck Pressure Washing",
//     category: "Pressure Washing",
//     image: "/pressure-washed-wooden-deck-transformation.jpg",
//   },
//   {
//     title: "Professional TV Mounting",
//     category: "TV Mounting",
//     image: "/wall-mounted-flat-screen-tv-with-hidden-cables.jpg",
//   },
//   {
//     title: "Bathroom Fixture Installation",
//     category: "Plumbing",
//     image: "/modern-bathroom-with-new-faucet-and-fixtures-insta.jpg",
//   },
//   {
//     title: "Home Office Setup",
//     category: "Furniture Assembly",
//     image: "/assembled-home-office-furniture-and-desk-setup.jpg",
//   },
//   {
//     title: "Exterior House Painting",
//     category: "Painting",
//     image: "/freshly-painted-exterior-of-beautiful-michigan-hom.jpg",
//   },
//   {
//     title: "Hardwood Floor Refinishing",
//     category: "Flooring",
//     image: "/refinished-hardwood-floors-gleaming-in-sunlight.jpg",
//   },
//   {
//     title: "Gutter Cleaning Service",
//     category: "Gutter Cleaning",
//     image: "/clean-gutters-on-residential-home-after-maintenanc.jpg",
//   },
//   {
//     title: "Crown Molding Installation",
//     category: "General Projects",
//     image: "/elegant-crown-molding-installation-in-bedroom.jpg",
//   },
// ]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container mx-auto pt-24 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Work Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See the quality craftsmanship and attention to detail that goes into every project we complete for
              Michigan homeowners.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 md:p-8 bg-primary/5 border-b border-border">
                <Badge variant="default" className="mb-3">
                  Featured Project
                </Badge>
                <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                  {featuredProject.title}
                </h2>
                <p className="text-muted-foreground text-pretty">{featuredProject.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-background/90 text-foreground border border-border">Before</Badge>
                  </div>
                  <Image
                    src={featuredProject.beforeImage || "/placeholder.svg"}
                    alt="Before - Ramp construction beginning"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover aspect-video md:aspect-square"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-primary text-primary-foreground">After</Badge>
                  </div>
                  <Image
                    src={featuredProject.afterImage || "/placeholder.svg"}
                    alt="After - Completed accessible ramp with railings"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover aspect-video md:aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 md:p-8 bg-accent/5 border-b border-border">
                <Badge variant="default" className="mb-3">
                  Featured Project
                </Badge>
                <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                  {deckTransformation.title}
                </h2>
                <p className="text-muted-foreground text-pretty">{deckTransformation.description}</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                {deckTransformation.images.map((img, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge
                        className={
                          img.label === "After"
                            ? "bg-primary text-primary-foreground"
                            : "bg-background/90 text-foreground border border-border"
                        }
                      >
                        {img.label}
                      </Badge>
                    </div>
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="p-6 md:p-8 bg-accent/5 border-b border-border">
                <Badge variant="default" className="mb-3">
                  Featured Project
                </Badge>
                <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                  {trimCarpentryProject.title}
                </h2>
                <p className="text-muted-foreground text-pretty">{trimCarpentryProject.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-0">
                {trimCarpentryProject.images.map((img, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge
                        className={
                          img.label === "Finished"
                            ? "bg-primary text-primary-foreground"
                            : "bg-background/90 text-foreground border border-border"
                        }
                      >
                        {img.label}
                      </Badge>
                    </div>
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*/!* More Projects *!/*/}
          {/*<div className="mb-8">*/}
          {/*  <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground text-center">More Projects</h2>*/}
          {/*</div>*/}

          {/*/!* Masonry Grid Layout *!/*/}
          {/*<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">*/}
          {/*  {projects.map((project, index) => (*/}
          {/*    <div*/}
          {/*      key={index}*/}
          {/*      className="break-inside-avoid group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/50"*/}
          {/*    >*/}
          {/*      <div className="relative overflow-hidden">*/}
          {/*        <Image*/}
          {/*          src={project.image || "/placeholder.svg"}*/}
          {/*          alt={project.title}*/}
          {/*          width={800}*/}
          {/*          height={600}*/}
          {/*          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"*/}
          {/*        />*/}
          {/*        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />*/}
          {/*      </div>*/}

          {/*      <div className="p-4">*/}
          {/*        <Badge variant="secondary" className="mb-2 text-xs">*/}
          {/*          {project.category}*/}
          {/*        </Badge>*/}
          {/*        <h3 className="font-sans text-lg font-semibold text-foreground text-balance">{project.title}</h3>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}

          {/* Call to Action at Bottom */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="font-sans text-3xl font-bold text-foreground mb-4 text-balance">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Let us bring the same quality and craftsmanship to your home. Get your free estimate today.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
