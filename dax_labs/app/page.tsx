import Header from './components/Header';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import ServicesOverview from './components/ServicesOverview';
import Certifications from './components/Certifications';
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
        <Certifications />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
