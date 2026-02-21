import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaBuilding } from 'react-icons/fa';
import AnimatedSection from '../../components/ui/AnimatedSection/AnimatedSection';
import ContactForm from '../../components/ui/ContactForm/ContactForm';
import styles from './Contact.module.css';

const offices = [
  { city: 'Mumbai', type: 'Headquarters' },
  { city: 'Delhi', type: 'Branch Office' },
  { city: 'Bangalore', type: 'Branch Office' },
  { city: 'Ahmedabad', type: 'Branch Office' },
];

function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroDecor} />
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.breadcrumb}>
              <a href="/">Home</a> / Contact
            </span>
            <h1 className={styles.heroTitle}>Get In Touch</h1>
            <p className={styles.heroSubtitle}>
              Ready to grow your business? Let's talk about your digital marketing goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <AnimatedSection>
              <div className={styles.formSection}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>Fill out the form below and our team will get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className={styles.infoSection}>
                <div className={styles.infoCard}>
                  <FaMapMarkerAlt className={styles.infoIcon} />
                  <div>
                    <h4>Visit Us</h4>
                    <p>RightDirection Digital<br />WeWork BKC, Bandra Kurla Complex<br />Mumbai 400051, Maharashtra, India</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <FaPhone className={styles.infoIcon} />
                  <div>
                    <h4>Call Us</h4>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <FaEnvelope className={styles.infoIcon} />
                  <div>
                    <h4>Email Us</h4>
                    <a href="mailto:hello@rightdirection.in">hello@rightdirection.in</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <FaWhatsapp className={styles.infoIcon} style={{ color: '#25D366' }} />
                  <div>
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <div>
                    <h4>Office Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM IST<br />Sunday: Closed</p>
                  </div>
                </div>

                <div className={styles.officesSection}>
                  <h3 className={styles.officesTitle}><FaBuilding /> Our Offices</h3>
                  <div className={styles.officesGrid}>
                    {offices.map((office) => (
                      <div key={office.city} className={styles.officeChip}>
                        <strong>{office.city}</strong>
                        <span>{office.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <FaMapMarkerAlt className={styles.mapIcon} />
          <p>WeWork BKC, Bandra Kurla Complex, Mumbai</p>
          <a
            href="https://maps.google.com/?q=WeWork+BKC+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            View on Google Maps
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
