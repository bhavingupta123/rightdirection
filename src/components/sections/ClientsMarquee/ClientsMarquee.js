import Marquee from 'react-fast-marquee';
import clients from '../../../assets/data/clients';
import styles from './ClientsMarquee.module.css';

function ClientsMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by <strong>200+</strong> brands across India</p>
      </div>
      <div className={styles.marqueeWrap}>
        <Marquee speed={40} gradient={true} gradientColor="#F1F5F9" gradientWidth={100}>
          {clients.map((client, i) => (
            <span key={i} className={styles.client}>{client}</span>
          ))}
        </Marquee>
        <Marquee speed={30} gradient={true} gradientColor="#F1F5F9" gradientWidth={100} direction="right" className={styles.row2}>
          {[...clients].reverse().map((client, i) => (
            <span key={i} className={styles.client}>{client}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default ClientsMarquee;
