import { useCountUp } from '../../../hooks/useCountUp';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import styles from './StatCounter.module.css';

function StatCounter({ number, suffix = '', label }) {
  const { ref, inView } = useScrollReveal();
  const count = useCountUp(number, 2000, inView);

  return (
    <div ref={ref} className={styles.counter}>
      <span className={styles.number}>
        {count}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default StatCounter;
