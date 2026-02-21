import { motion } from 'framer-motion';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './AnimatedSection.module.css';

function AnimatedSection({ children, delay = 0, direction = 'up', className = '' }) {
  const { ref, inView } = useScrollReveal();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.section} ${className}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
