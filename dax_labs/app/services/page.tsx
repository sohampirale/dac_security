import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesHero from '../components/ServicesHero';
import ServicesDetail from '../components/ServicesDetail';
import ServicesMethodology from '../components/ServicesMethodology';
import ServiceIndustries from '../components/ServiceIndustries';
import ServicesCTA from '../components/ServicesCTA';

export const metadata = {
  title: 'Our Services | DAC Security',
  description: 'Comprehensive cybersecurity solutions including Application Security Assessment, Network Security Assessment, Compliance and Data Privacy, Red Teaming, IoT Security, SOC Services, and Digital Forensic Services.',
  openGraph: {
    title: 'Our Services | DAC Security',
    description: 'Comprehensive cybersecurity solutions for your digital infrastructure',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesDetail />
        <ServicesMethodology />
        <ServiceIndustries />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
