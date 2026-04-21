import Header from './components/Header';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import ServicesOverview from './components/ServicesOverview';
import ServicesMethodology from './components/ServicesMethodology';
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
        <Hero />
        <Commitment />
        <ServicesOverview />
        <ServicesMethodology />
        <ServiceIndustries />
        <Certifications />
        <Partners />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
