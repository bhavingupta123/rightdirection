import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../ui/Button/Button';
import styles from './HeroSection.module.css';

const rotatingWords = ['Digital Success', 'Online Growth', 'More Revenue', 'Brand Power'];

const floatingShapes = [
  { type: 'circle', size: 60, top: '15%', left: '5%', duration: 8, delay: 0 },
  { type: 'ring', size: 80, top: '70%', left: '10%', duration: 10, delay: 1 },
  { type: 'triangle', size: 40, top: '20%', right: '15%', duration: 7, delay: 0.5 },
  { type: 'square', size: 30, top: '60%', right: '8%', duration: 9, delay: 2 },
  { type: 'dot', size: 12, top: '40%', left: '20%', duration: 6, delay: 1.5 },
  { type: 'ring', size: 50, top: '80%', right: '25%', duration: 11, delay: 0.8 },
  { type: 'circle', size: 20, top: '30%', right: '30%', duration: 7.5, delay: 3 },
  { type: 'dot', size: 8, top: '50%', left: '35%', duration: 5, delay: 2.5 },
  { type: 'cross', size: 24, top: '25%', left: '45%', duration: 8, delay: 1.2 },
  { type: 'square', size: 18, top: '75%', left: '40%', duration: 9.5, delay: 0.3 },
];

function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.bgDecor}>
        <motion.div
          className={styles.blob1}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.blob2}
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={styles.blob3}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className={styles.gridPattern} />

        {/* Floating Shapes */}
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`${styles.floatingShape} ${styles[`shape_${shape.type}`]}`}
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
              right: shape.right,
            }}
            animate={{
              y: [0, -20, 10, -15, 0],
              x: [0, 10, -10, 5, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>
              <motion.span
                className={styles.badgeDot}
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              India's #1 Result-Driven Digital Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Steering Your Brand to{' '}
            <span className={styles.highlightWrap}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className={styles.highlight}
                  initial={{ y: 40, opacity: 0, rotateX: -40 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: 40 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We help Indian businesses grow with data-driven SEO, social media, PPC, and content marketing strategies that deliver real, measurable results.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Button to="/contact" variant="secondary" size="lg" icon={FaArrowRight}>
              Get a Free Audit
            </Button>
            <Button to="/portfolio" variant="outlineWhite" size="lg">
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className={styles.stat}>
              <strong>500+</strong>
              <span>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>200+</strong>
              <span>Clients</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>8+</strong>
              <span>Years</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Orbiting ring */}
          <motion.div
            className={styles.orbitRing}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className={styles.orbitDot} />
          </motion.div>

          <div className={styles.visualCard}>
            {[
              { width: '90%', color: 'var(--accent)', label: 'SEO Traffic' },
              { width: '75%', color: 'var(--primary)', label: 'Social Reach' },
              { width: '85%', color: '#10B981', label: 'Conversions' },
              { width: '60%', color: '#9C27B0', label: 'Brand Reach' },
            ].map((bar, i) => (
              <div key={i} className={styles.barRow}>
                <span className={styles.barLabel}>{bar.label}</span>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    style={{ background: bar.color }}
                    initial={{ width: 0 }}
                    animate={{ width: bar.width }}
                    transition={{ duration: 1.5, delay: 0.8 + i * 0.2, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className={styles.floatingCard}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.span
              className={styles.floatingNumber}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              +340%
            </motion.span>
            <span className={styles.floatingLabel}>Organic Traffic</span>
          </motion.div>

          <motion.div
            className={styles.floatingCard2}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <motion.span
              className={styles.floatingNumber}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              5.2x
            </motion.span>
            <span className={styles.floatingLabel}>ROAS</span>
          </motion.div>

          <motion.div
            className={styles.floatingCard3}
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <span className={styles.floatingEmoji}>🚀</span>
            <span className={styles.floatingLabel}>Live Campaign</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className={styles.scrollMouse}>
          <motion.div
            className={styles.scrollDot}
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}

export default HeroSection;
