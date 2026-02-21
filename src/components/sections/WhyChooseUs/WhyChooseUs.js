import { motion } from 'framer-motion';
import { FaGlobeAsia, FaChartLine, FaFileAlt, FaUserTie, FaHandshake, FaTrophy } from 'react-icons/fa';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import AnimatedSection from '../../ui/AnimatedSection/AnimatedSection';
import styles from './WhyChooseUs.module.css';

const features = [
  { icon: FaGlobeAsia, title: 'India-First Approach', description: 'Deep understanding of Indian consumer behavior, regional markets, and cultural nuances.', color: '#1B4DFF' },
  { icon: FaChartLine, title: 'Data-Driven Strategies', description: 'Every decision backed by analytics and data, not guesswork. We measure everything.', color: '#FF6B35' },
  { icon: FaFileAlt, title: 'Transparent Reporting', description: 'Real-time dashboards and detailed monthly reports so you always know where your money goes.', color: '#10B981' },
  { icon: FaUserTie, title: 'Dedicated Account Manager', description: 'A single point of contact who knows your business inside out and is always available.', color: '#9C27B0' },
  { icon: FaHandshake, title: 'No Long-Term Contracts', description: 'Month-to-month flexibility. We earn your business every single month through results.', color: '#E91E63' },
  { icon: FaTrophy, title: 'Proven Results', description: '500+ successful projects, 200+ happy clients, and 50Cr+ revenue generated for our partners.', color: '#FF9800' },
];

function WhyChooseUs() {
  return (
    <section className={styles.section}>
      {/* Floating decorations */}
      <motion.div
        className={styles.decoRing}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={styles.decoCircle}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.decoDots}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeader
            subtitle="Why Choose Us"
            title="What Makes Us Different"
            description="We are not just another agency. Here is why 200+ Indian brands trust RightDirection."
          />
        </AnimatedSection>
        <div className={styles.grid}>
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={styles.card} style={{ '--card-color': feature.color }}>
                  <div className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</div>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDesc}>{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
