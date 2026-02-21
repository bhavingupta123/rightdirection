import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import styles from './BlogCard.module.css';

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageArea} style={{ background: `linear-gradient(135deg, ${post.color}, ${post.color}66)` }}>
        <div className={styles.imageContent}>
          <span className={styles.category}>{post.category}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{post.date}</span>
          <span className={styles.dot}></span>
          <span><FaClock style={{ marginRight: '4px', fontSize: '0.7rem' }} />{post.readTime}</span>
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <span className={styles.link}>
          Read More <FaArrowRight />
        </span>
      </div>
    </Link>
  );
}

export default BlogCard;
