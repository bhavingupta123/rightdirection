import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20your%20digital%20marketing%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className={styles.tooltip}>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
