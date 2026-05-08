import Header from './components/Header';
import AboutDirectors from './components/AboutDirectors';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import OurMethodology from './components/OurMethodology';
import SpheresOfSecurity from './components/SpheresOfSecurity';
import ServicesOverview from './components/ServicesOverview';
import ServicesFramework from './components/ServicesFramework';
// ServicesMethodology intentionally removed from homepage to avoid duplication
import ServiceIndustries from './components/ServiceIndustries';
import Certifications from './components/Certifications';
import Partners from './components/Partners';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutDirectors />
        <Hero />
        <SpheresOfSecurity />
        <OurMethodology />
        <Commitment />
        <ServicesFramework />
        <ServicesOverview />
        <ServiceIndustries />
        <Certifications />
        <Partners />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
