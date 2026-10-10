import Header from './components/Header'
import Hero from './components/Hero'
import HospitalSection from './components/HospitalSection'
import DoctorSection from './components/DoctorSection'
import AnalysisSection from './components/AnalysisSection'
import InfoSection from './components/InfoSection'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

export default function App() {
  return (
    <div className="font-sans text-ink">
      <Header />
      <main className="pt-[88px]">
        <Hero />
        <HospitalSection />
        <DoctorSection />
        <AnalysisSection />
        <InfoSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  )
}
