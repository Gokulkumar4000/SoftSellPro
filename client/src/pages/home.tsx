import { useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StatisticsSection from '@/components/statistics-section';
import HowItWorks from '@/components/how-it-works';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import { ContactSection } from '@/components/contact-form';
import CtaSection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  useEffect(() => {
    // Reset scroll position to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatisticsSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
