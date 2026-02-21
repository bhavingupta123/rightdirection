import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import Button from '../../ui/Button/Button';
import AnimatedSection from '../../ui/AnimatedSection/AnimatedSection';
import styles from './CTASection.module.css';

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 3 + Math.random() * 6,
  duration: 5 + Math.random() * 10,
  delay: Math.random() * 5,
}));

function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgDecor}>
        <motion.div
          className={styles.circle1}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.circle2}
          animate={{ scale: [1, 0.9, 1.1, 1], rotate: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.circle3}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={styles.particle}
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{
              y: [0, -30, 10, -20, 0],
              opacity: [0, 0.6, 0.3, 0.7, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      <div className={styles.container}>
        <AnimatedSection>
          <motion.h2
            className={styles.title}
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Grow Your Business?
          </motion.h2>
          <p className={styles.subtitle}>
            Let's build a digital strategy that delivers real results. Get a free consultation with our experts today.
          </p>
          <div className={styles.actions}>
            <Button to="/contact" variant="white" size="lg" icon={FaArrowRight}>
              Get Started Today
            </Button>
            <Button href="tel:+919876543210" variant="outlineWhite" size="lg" icon={FaPhone}>
              +91 98765 43210
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default CTASection;
