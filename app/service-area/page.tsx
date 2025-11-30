import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Service Area | Jackson & Washtenaw County Michigan",
    description:
        "MICraft Home Solutions serves Jackson County (Jackson, Grass Lake, Michigan Center) and Washtenaw County (Ann Arbor, Ypsilanti, Chelsea, Saline). Licensed builder providing home improvement services throughout Southeast Michigan.",
    keywords: [
        "Jackson County contractor",
        "Washtenaw County builder",
        "Ann Arbor home improvement",
        "Ypsilanti contractor",
        "Chelsea builder",
        "Jackson Michigan handyman",
        "Saline home remodeling",
        "Dexter contractor",
    ],
    alternates: {
        canonical: "https://micrafthomesolutions.com/service-area",
    },
    openGraph: {
        title: "Service Area | MICraft Home Solutions Michigan",
        description: "Serving Jackson & Washtenaw County with professional home improvement services.",
        url: "https://micrafthomesolutions.com/service-area",
    },
}

export default function ServiceAreaPage() {
    const jacksonCities = [
        "Jackson",
        "Grass Lake",
        "Michigan Center",
        "Spring Arbor",
        "Hanover",
        "Brooklyn",
        "Parma",
        "Concord",
    ]

    const washtenawCities = [
        "Ann Arbor",
        "Ypsilanti",
        "Chelsea",
        "Saline",
        "Dexter",
        "Milan",
        "Manchester",
        "Whitmore Lake",
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                                <MapPin className="h-8 w-8 text-primary" />
                            </div>
                            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                                Proudly Serving Southeast Michigan
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                                Quality home improvement and handyman services throughout Jackson County and Washtenaw County
                            </p>
                        </div>
                    </div>
                </section>

                {/* Service Area Map Visual */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {/* Jackson County Card */}
                                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <h2 className="font-sans text-2xl font-bold text-foreground">Jackson County</h2>
                                    </div>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Providing comprehensive home improvement services throughout Jackson County and surrounding
                                        communities.
                                    </p>
                                    <div className="space-y-2">
                                        <p className="font-semibold text-foreground mb-3">Cities We Serve:</p>
                                        {jacksonCities.map((city) => (
                                            <div key={city} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                                <span className="text-muted-foreground">{city}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Washtenaw County Card */}
                                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <h2 className="font-sans text-2xl font-bold text-foreground">Washtenaw County</h2>
                                    </div>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Delivering expert craftsmanship and reliable service to homes throughout Washtenaw County.
                                    </p>
                                    <div className="space-y-2">
                                        <p className="font-semibold text-foreground mb-3">Cities We Serve:</p>
                                        {washtenawCities.map((city) => (
                                            <div key={city} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                                <span className="text-muted-foreground">{city}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Map Visualization */}
                            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-lg p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-4">
                                        Our Service Coverage
                                    </h3>
                                    <p className="text-muted-foreground text-pretty leading-relaxed">
                                        We're centrally located to serve both Jackson and Washtenaw counties efficiently
                                    </p>
                                </div>

                                <div className="relative max-w-2xl mx-auto">
                                    {/* Simple visual map representation */}
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-primary/20 border-2 border-primary rounded-lg p-6 text-center hover:bg-primary/30 transition-colors">
                                            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                                            <p className="font-bold text-foreground text-lg">Jackson County</p>
                                            <p className="text-sm text-muted-foreground mt-2">Western Service Area</p>
                                        </div>
                                        <div className="bg-primary/20 border-2 border-primary rounded-lg p-6 text-center hover:bg-primary/30 transition-colors">
                                            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                                            <p className="font-bold text-foreground text-lg">Washtenaw County</p>
                                            <p className="text-sm text-muted-foreground mt-2">Eastern Service Area</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Coverage Information */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Outside Our Standard Service Area?
                            </h3>
                            <p className="text-muted-foreground text-lg mb-8 text-balance leading-relaxed">
                                While we primarily serve Jackson and Washtenaw counties, we may be able to accommodate projects in
                                nearby areas. Contact us to discuss your project location and we'll do our best to help!
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    <a href="/#contact">Request Free Estimate</a>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <a href="tel:+1234567890" className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        Call Us Today
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
