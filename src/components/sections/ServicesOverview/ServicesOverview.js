import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import ServiceCard from '../../ui/ServiceCard/ServiceCard';
import AnimatedSection from '../../ui/AnimatedSection/AnimatedSection';
import Button from '../../ui/Button/Button';
import services from '../../../assets/data/services';
import styles from './ServicesOverview.module.css';

function ServicesOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeader
            subtitle="What We Do"
            title="Services That Drive Results"
            description="We offer a full suite of digital marketing services to help your brand grow, engage, and convert."
          />
        </AnimatedSection>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className={styles.cta}>
            <Button to="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ServicesOverview;
