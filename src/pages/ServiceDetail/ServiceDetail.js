import { useParams, Navigate, Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '../../components/ui/AnimatedSection/AnimatedSection';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Button from '../../components/ui/Button/Button';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard';
import CTASection from '../../components/sections/CTASection/CTASection';
import services from '../../assets/data/services';
import styles from './ServiceDetail.module.css';

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero} style={{ '--c': service.color }}>
        <div className={styles.heroDecor} />
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.breadcrumb}>
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.shortName}
            </span>
            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>
                <Icon />
              </div>
              <h1 className={styles.heroTitle}>{service.name}</h1>
              <p className={styles.heroSubtitle}>{service.longDescription}</p>
              <Button to="/contact" variant="secondary" size="lg" icon={FaArrowRight}>
                Get Started with {service.shortName}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeader
              subtitle="What's Included"
              title={`Our ${service.shortName} Services`}
              description={`Everything you need to succeed with ${service.shortName.toLowerCase()}.`}
            />
          </AnimatedSection>
          <div className={styles.featuresGrid}>
            {service.features.map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={styles.featureCard}>
                  <FaCheck className={styles.checkIcon} style={{ color: service.color }} />
                  <span>{feature}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeader
              subtitle="Our Process"
              title={`How We Deliver ${service.shortName} Results`}
            />
          </AnimatedSection>
          <div className={styles.processGrid}>
            {service.process.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={styles.processCard}>
                  <span className={styles.processNum} style={{ background: service.color }}>{i + 1}</span>
                  <h3 className={styles.processTitle}>{step.step}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeader
              subtitle="Explore More"
              title="Other Services You Might Need"
            />
          </AnimatedSection>
          <div className={styles.relatedGrid}>
            {relatedServices.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.1}>
                <ServiceCard service={s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default ServiceDetail;
