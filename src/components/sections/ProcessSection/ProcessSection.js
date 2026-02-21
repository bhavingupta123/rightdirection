import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import AnimatedSection from '../../ui/AnimatedSection/AnimatedSection';
import styles from './ProcessSection.module.css';

const steps = [
  { number: '01', title: 'Discover', description: 'We audit your current digital presence, analyze competitors, and understand your goals.', icon: '🔍' },
  { number: '02', title: 'Strategize', description: 'We create a custom, data-backed strategy tailored to your industry and target audience.', icon: '📋' },
  { number: '03', title: 'Execute', description: 'Our team implements the strategy with precision, launching campaigns across channels.', icon: '🚀' },
  { number: '04', title: 'Optimize', description: 'We continuously monitor, test, and optimize to maximize ROI and scale results.', icon: '📈' },
];

function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeader
            subtitle="Our Process"
            title="How We Work"
            description="A proven 4-step process that consistently delivers outstanding results for our clients."
          />
        </AnimatedSection>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.2}>
              <div className={styles.step}>
                <div className={styles.stepTop}>
                  <motion.div
                    className={styles.stepNumber}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className={styles.stepIcon}>{step.icon}</span>
                    <span className={styles.stepNum}>{step.number}</span>
                    <motion.div
                      className={styles.stepPulse}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className={styles.stepLine}>
                      <motion.div
                        className={styles.stepLineFill}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.3 }}
                      />
                    </div>
                  )}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
