import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import InsuranceSection from '@/components/InsuranceSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Consultation from '@/components/Consultation'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <Stats />

        <InsuranceSection />

        <WhyChooseUs />

        <Consultation />

        <Testimonials />

      </main>

      <Footer />
    </>
  )
}