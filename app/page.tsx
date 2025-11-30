import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { FeaturedGallery } from '@/components/featured-gallery'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
        <FeaturedGallery />
      <CallToAction />
      <Footer />
    </main>
  )
}
