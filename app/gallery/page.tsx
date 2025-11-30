import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const projects = [
    {
        title: "Marble Countertop & Sink Installation",
        category: "Countertops",
        image: "/images/sink.jpg",
        description: "Beautiful marble countertop installation with undermount sink under skylight windows",
        bgColor: "bg-primary/5",
    },
    {
        title: "Complete Kitchen Remodel",
        category: "Kitchen Renovation",
        image: "/images/kitchenremodel.jpg",
        description: "Full kitchen transformation with new cabinetry, island, and flooring",
        bgColor: "bg-accent/5",
    },
    {
        title: "Hardwood Flooring Installation",
        category: "Flooring",
        image: "/images/flooring.jpg",
        description: "Premium hardwood flooring in lakefront home with custom paint colors",
        bgColor: "bg-primary/5",
    },
    {
        title: "Two-Tone Cabinet Installation",
        category: "Cabinetry",
        image: "/images/cabinets.jpg",
        description: "Modern kitchen with white upper cabinets and wood-tone lower cabinets",
        bgColor: "bg-accent/5",
    },
]

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                            Our Work Gallery
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            See the quality craftsmanship and attention to detail that goes into every project we complete for
                            Michigan homeowners.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`group ${project.bgColor} rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500`}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary text-primary-foreground shadow-lg">
                      {project.category}
                    </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-sans text-2xl font-bold text-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

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
