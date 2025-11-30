import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { FeaturedGallery } from "@/components/featured-gallery"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Home | Licensed Builder in Jackson & Washtenaw County Michigan",
    description:
        "MICraft Home Solutions LLC - Licensed builder serving Jackson County & Washtenaw County, Michigan. Finish carpentry, drywall, painting, framing, siding, windows, flooring, cabinetry. Free estimates. Fast, reliable service.",
    alternates: {
        canonical: "https://micrafthomesolutions.com",
    },
    openGraph: {
        title: "MICraft Home Solutions LLC | Licensed Builder Michigan",
        description:
            "Licensed builder serving Jackson & Washtenaw County with expert home improvement services. Free estimates.",
        url: "https://micrafthomesolutions.com",
    },
}

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <FeaturedGallery />
            <WhyChooseUs />
            <CallToAction />
            <Footer />
        </main>
    )
}
