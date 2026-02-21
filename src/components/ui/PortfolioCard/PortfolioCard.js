import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Badge from '../Badge/Badge';
import styles from './PortfolioCard.module.css';

function PortfolioCard({ project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className={styles.card}>
      <div className={styles.imageArea} style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}88)` }}>
        <Badge className={styles.badge}>{project.category}</Badge>
        <div className={styles.pattern}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={styles.dot} />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.results}>
          {project.results.slice(0, 3).map((r, i) => (
            <div key={i} className={styles.result}>
              <strong className={styles.resultValue}>{r.value}</strong>
              <span className={styles.resultMetric}>{r.metric}</span>
            </div>
          ))}
        </div>
        <span className={styles.link}>
          View Case Study <FaArrowRight />
        </span>
      </div>
    </Link>
  );
}

export default PortfolioCard;
