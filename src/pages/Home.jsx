import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import TabsSection from '../components/TabsSection'
import AffiliateGear from '../components/AffiliateGear'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TabsSection />
        <Contact />
        <AffiliateGear />
      </main>
      <Footer />
    </>
  )
}
