import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsHero from '../components/ProductsHero';
import ProductsCatalog from '../components/ProductsCatalog';
import Partners from '../components/Partners';
import ForensicHardware from '../components/ForensicHardware';
import ForensicSoftware from '../components/ForensicSoftware';
import ProductSelectionGuide from '../components/ProductSelectionGuide';
import ImplementationServices from '../components/ImplementationServices';
import ProductFeaturesBenefits from '../components/ProductFeaturesBenefits';
import ProductTrustIndicators from '../components/ProductTrustIndicators';
import ProductsCTA from '../components/ProductsCTA';

export const metadata = {
  title: 'Products | DAK Security',
  description: 'Comprehensive security products and solutions for your digital protection. Enterprise-grade IT security products, forensic tools, and partner solutions with certified implementation and 24/7 support.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ProductsHero />
        
        {/* Product Catalog - 16 IT Security Products */}
        <ProductsCatalog />
        
        {/* Partners Section - 12 Partner Companies */}
        <Partners />
        
        {/* Forensic Hardware - 3 Products */}
        <ForensicHardware />
        
        {/* Forensic Software - 15 Categories */}
        <ForensicSoftware />
        
        {/* NEW: Product Selection Guide - Help users choose */}
        <ProductSelectionGuide />
        
        {/* NEW: Features & Benefits - Why choose DAK Security */}
        <ProductFeaturesBenefits />
        
        {/* NEW: Implementation Services - Deployment, Support, Training */}
        <ImplementationServices />
        
        {/* NEW: Trust Indicators - Certifications, Stats, Social Proof */}
        <ProductTrustIndicators />
        
        {/* UPDATED: CTA with Inline Forms */}
        <ProductsCTA />
      </main>
      <Footer />
    </>
  );
}
