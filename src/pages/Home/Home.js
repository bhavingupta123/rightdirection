import HeroSection from '../../components/sections/HeroSection/HeroSection';
import ClientsMarquee from '../../components/sections/ClientsMarquee/ClientsMarquee';
import ServicesOverview from '../../components/sections/ServicesOverview/ServicesOverview';
import StatsSection from '../../components/sections/StatsSection/StatsSection';
import WhyChooseUs from '../../components/sections/WhyChooseUs/WhyChooseUs';
import ProcessSection from '../../components/sections/ProcessSection/ProcessSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import CTASection from '../../components/sections/CTASection/CTASection';

function Home() {
  return (
    <>
      <HeroSection />
      <ClientsMarquee />
      <ServicesOverview />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export default Home;
