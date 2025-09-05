import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import BookingForm from '@/components/BookingForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <BookingForm />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}