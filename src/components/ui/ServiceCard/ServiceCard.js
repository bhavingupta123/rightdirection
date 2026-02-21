import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ServiceCard.module.css';

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link to={`/services/${service.slug}`} className={styles.card}>
      <div className={styles.iconWrap} style={{ '--service-color': service.color }}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.name}>{service.shortName || service.name}</h3>
      <p className={styles.description}>{service.description}</p>
      <span className={styles.link}>
        Learn More <FaArrowRight className={styles.arrow} />
      </span>
    </Link>
  );
}

export default ServiceCard;
