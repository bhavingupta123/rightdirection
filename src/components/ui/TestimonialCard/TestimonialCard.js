import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './TestimonialCard.module.css';

function TestimonialCard({ testimonial }) {
  const initials = testimonial.name.split(' ').map(n => n[0]).join('');

  return (
    <div className={styles.card}>
      <FaQuoteLeft className={styles.quoteIcon} />
      <p className={styles.quote}>{testimonial.quote}</p>
      <div className={styles.stars}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <FaStar key={i} className={styles.star} />
        ))}
      </div>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {initials}
        </div>
        <div className={styles.info}>
          <strong className={styles.name}>{testimonial.name}</strong>
          <span className={styles.role}>{testimonial.role}, {testimonial.company}</span>
          <span className={styles.city}>
            <FaMapMarkerAlt /> {testimonial.city}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
