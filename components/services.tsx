import { Card, CardContent } from "@/components/ui/card"
import {
  Hammer,
  PaintBucket,
  Home,
  Square,
  Layers,
  DoorOpen,
  Wind,
  Grid3x3,
  Droplet,
  Zap,
  Wrench,
  Box,
} from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Finish Carpentry",
    description: "Precision trim work, crown molding, baseboards, and custom woodwork",
  },
  {
    icon: Square,
    title: "Drywall",
    description: "Installation, repair, finishing, and texturing for flawless walls",
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Interior and exterior painting with professional prep and finish",
  },
  {
    icon: Home,
    title: "Framing",
    description: "Structural framing for additions, renovations, and new construction",
  },
  {
    icon: Layers,
    title: "Siding",
    description: "Installation and repair of all siding types for lasting protection",
  },
  {
    icon: DoorOpen,
    title: "Windows & Doors",
    description: "Expert installation and replacement for improved efficiency",
  },
  {
    icon: Wind,
    title: "Fascia & Soffit",
    description: "Quality installation and repair to protect your roofline",
  },
  {
    icon: Grid3x3,
    title: "Flooring",
    description: "Installation of hardwood, laminate, tile, and luxury vinyl",
  },
  {
    icon: Box,
    title: "Backsplashes",
    description: "Beautiful tile and stone backsplash design and installation",
  },
  {
    icon: Box,
    title: "Cabinetry Install",
    description: "Professional kitchen and bathroom cabinet installation",
  },
  {
    icon: Droplet,
    title: "Minor Plumbing",
    description: "Faucet installation, fixture replacement, and small repairs",
  },
  {
    icon: Zap,
    title: "Minor Electric",
    description: "Outlet installation, fixture replacement, and minor electrical work",
  },
  {
    icon: Wrench,
    title: "Appliance Installation",
    description: "Professional installation of all home appliances",
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {"Complete Home Services"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {
              "From major renovations to small repairs, our licensed builder handles projects of every size with the same professional attention to detail"
            }
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 bg-card hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
