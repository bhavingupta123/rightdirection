import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import TestimonialCard from '../../ui/TestimonialCard/TestimonialCard';
import AnimatedSection from '../../ui/AnimatedSection/AnimatedSection';
import testimonials from '../../../assets/data/testimonials';
import styles from './TestimonialsSection.module.css';

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <SectionHeader
            subtitle="Client Love"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our partners across India have to say."
          />
        </AnimatedSection>

        <div className={styles.carousel}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className={styles.cardWrap}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={styles.cardMotion}
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
