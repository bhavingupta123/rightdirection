import { FaHome } from 'react-icons/fa';
import Button from '../../components/ui/Button/Button';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          The page you are looking for does not exist or has been moved.
          Let's get you back on track.
        </p>
        <div className={styles.actions}>
          <Button to="/" variant="primary" size="lg" icon={FaHome}>
            Go Back Home
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
