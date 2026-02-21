import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa';
import services from '../../../assets/data/services';
import footerLinks from '../../../assets/data/footerLinks';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoIcon}>RD</span>
              <span className={styles.logoText}>
                Right<span className={styles.logoAccent}>Direction</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Steering your brand to digital success. We help Indian businesses grow with data-driven digital marketing strategies.
            </p>
            <div className={styles.social}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Services</h4>
            <ul className={styles.linksList}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className={styles.footerLink}>{service.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>RightDirection Digital<br />WeWork BKC, Bandra Kurla Complex<br />Mumbai 400051, India</span>
              </li>
              <li className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href="mailto:hello@rightdirection.in">hello@rightdirection.in</a>
              </li>
              <li className={styles.contactItem}>
                <FaWhatsapp className={styles.contactIcon} />
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} RightDirection Digital. All rights reserved.
          </p>
          <p className={styles.madeIn}>
            Made with <FaHeart className={styles.heart} /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
