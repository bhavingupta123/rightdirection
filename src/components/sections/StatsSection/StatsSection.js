import { motion } from 'framer-motion';
import StatCounter from '../../ui/StatCounter/StatCounter';
import AnimatedSection from '../../ui/AnimatedSection/AnimatedSection';
import stats from '../../../assets/data/stats';
import styles from './StatsSection.module.css';

function StatsSection() {
  return (
    <section className={styles.section}>
      {/* Animated decoration */}
      <motion.div
        className={styles.decoLine1}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={styles.decoLine2}
        animate={{ x: ['200%', '-100%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 2 }}
      />
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.id} delay={i * 0.15}>
              <StatCounter number={stat.number} suffix={stat.suffix} label={stat.label} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
