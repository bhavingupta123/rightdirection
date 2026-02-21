import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/ui/AnimatedSection/AnimatedSection';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Button from '../../components/ui/Button/Button';
import CTASection from '../../components/sections/CTASection/CTASection';
import services from '../../assets/data/services';
import styles from './Services.module.css';

function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroDecor} />
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.breadcrumb}>
              <a href="/">Home</a> / Services
            </span>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroSubtitle}>
              Comprehensive digital marketing solutions designed to help Indian businesses grow, engage, and convert.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.id} delay={i * 0.08}>
                  <Link to={`/services/${service.slug}`} className={styles.serviceCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconWrap} style={{ '--c': service.color }}>
                        <Icon className={styles.icon} />
                      </div>
                      <h3 className={styles.cardTitle}>{service.name}</h3>
                    </div>
                    <p className={styles.cardDesc}>{service.description}</p>
                    <ul className={styles.features}>
                      {service.features.slice(0, 4).map((f, j) => (
                        <li key={j} className={styles.feature}>{f}</li>
                      ))}
                    </ul>
                    <span className={styles.cardLink} style={{ color: service.color }}>
                      Learn More <FaArrowRight />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.pricingHint}>
              <SectionHeader
                subtitle="Flexible Plans"
                title="Plans Starting from INR 15,000/month"
                description="We offer customized packages to fit businesses of all sizes. No hidden fees, no long-term contracts."
              />
              <div className={styles.pricingActions}>
                <Button to="/contact" variant="primary" size="lg" icon={FaArrowRight}>
                  Get a Custom Quote
                </Button>
                <Button href="tel:+919876543210" variant="outline" size="lg">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default Services;
