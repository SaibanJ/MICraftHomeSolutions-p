import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
    {
        title: "Accessible Ramp Construction",
        category: "Deck & Ramp Building",
        description:
            "A few months later a ramp was needed for our customer. Due to budget considerations, they chose traditional treated lumber instead of more expensive Westbury railing and Azek decking.",
        beforeImage: "/images/5702c826-3788-4abe-b15f.jpeg",
        afterImage: "/images/e0342fe8-35b3-4a50-8171.jpeg",
        bgColor: "bg-primary/5",
    },
    {
        title: "Complete Deck Transformation",
        category: "Deck Renovation",
        description:
            "Old deck transformed into a stunning new outdoor living space with modern two-tone composite decking in charcoal and tan.",
        beforeImage: "/images/deck-before.jpeg",
        afterImage: "/images/deck-after.jpeg",
        bgColor: "bg-accent/5",
    },
    {
        title: "Custom Trim Carpentry",
        category: "Finish Carpentry",
        description:
            "Custom-built entertainment center with craftsman-style fireplace surround and built-in shelving, expertly crafted and painted.",
        beforeImage: "/images/trim-carpentry-1.jpeg",
        afterImage: "/images/trim-carpentry-3.jpeg",
        bgColor: "bg-primary/5",
    },
]

export function FeaturedGallery() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        Our Featured Work
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Quality craftsmanship and attention to detail in every project we complete
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`group ${project.bgColor} rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500`}
                        >
                            {/* Image Grid */}
                            <div className="grid grid-cols-2 gap-1 p-1">
                                <div className="relative aspect-square overflow-hidden rounded-xl">
                                    <Image
                                        src={project.beforeImage || "/placeholder.svg"}
                                        alt={`${project.title} - Before`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                      Before
                    </span>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-xl">
                                    <Image
                                        src={project.afterImage || "/placeholder.svg"}
                                        alt={`${project.title} - After`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-2 left-2">
                    <span className="text-white text-xs font-semibold px-2 py-1 bg-primary backdrop-blur-sm rounded-full">
                      After
                    </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground mb-3">
                                    {project.category}
                                </div>
                                <h3 className="font-sans text-xl font-bold text-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        View Gallery
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
