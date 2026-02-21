import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../components/ui/AnimatedSection/AnimatedSection';
import PortfolioCard from '../../components/ui/PortfolioCard/PortfolioCard';
import CTASection from '../../components/sections/CTASection/CTASection';
import portfolio from '../../assets/data/portfolio';
import styles from './Portfolio.module.css';

const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Content', 'Branding', 'Video'];

function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroDecor} />
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.breadcrumb}>
              <a href="/">Home</a> / Portfolio
            </span>
            <h1 className={styles.heroTitle}>Our Work</h1>
            <p className={styles.heroSubtitle}>
              Real results for real businesses. Explore how we have helped Indian brands achieve digital success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.activeFilter : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div className={styles.grid} layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <PortfolioCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default Portfolio;
