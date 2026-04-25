import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesContent from './ServicesContent';
import CTASection from '../components/CTASection';

export const metadata = {
  title: 'Our Services | DAK Security',
  description: 'Comprehensive cybersecurity solutions including Application Security Assessment, Network Security Assessment, Compliance and Data Privacy, Red Teaming, IoT Security, SOC Services, and Digital Forensic Services.',
  openGraph: {
    title: 'Our Services | DAK Security',
    description: 'Comprehensive cybersecurity solutions for your digital infrastructure',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
