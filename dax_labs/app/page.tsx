import Header from './components/Header';
import AboutDirectors from './components/AboutDirectors';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutDirectors />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
