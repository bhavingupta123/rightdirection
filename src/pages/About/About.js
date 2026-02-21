import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaEye, FaRocket, FaShieldAlt, FaBullseye, FaUsers, FaArrowRight, FaQuoteLeft, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaHandshake } from 'react-icons/fa';
import AnimatedSection from '../../components/ui/AnimatedSection/AnimatedSection';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import TeamCard from '../../components/ui/TeamCard/TeamCard';
import StatsSection from '../../components/sections/StatsSection/StatsSection';
import CTASection from '../../components/sections/CTASection/CTASection';
import Button from '../../components/ui/Button/Button';
import team from '../../assets/data/team';
import styles from './About.module.css';

const values = [
  { icon: FaRocket, title: 'Innovation', desc: 'We stay ahead of digital trends to give our clients a competitive edge.', color: '#1B4DFF' },
  { icon: FaShieldAlt, title: 'Integrity', desc: 'Transparent communication and honest reporting — always.', color: '#FF6B35' },
  { icon: FaBullseye, title: 'Impact', desc: 'Every strategy we create is designed to deliver measurable results.', color: '#E91E63' },
  { icon: FaUsers, title: 'Inclusivity', desc: 'We believe in accessible digital marketing for businesses of all sizes.', color: '#9C27B0' },
];

const timeline = [
  { year: '2018', title: 'The Beginning', desc: 'Founded in Mumbai with 3 passionate marketers and a dream to transform Indian digital marketing.', icon: FaCalendarAlt },
  { year: '2019', title: 'First 50 Clients', desc: 'Crossed 50 active clients, opened our first office at WeWork BKC, Mumbai.', icon: FaHandshake },
  { year: '2021', title: 'Multi-City Expansion', desc: 'Expanded to Delhi & Bangalore, grew to a team of 20+ specialists.', icon: FaMapMarkerAlt },
  { year: '2023', title: '200+ Clients & Counting', desc: 'Reached 200+ clients, 50Cr+ revenue generated, expanded to Ahmedabad.', icon: FaTrophy },
];

const floatingShapes = [
  { size: 80, top: '10%', left: '5%', duration: 9, delay: 0 },
  { size: 60, top: '30%', right: '8%', duration: 7, delay: 1 },
  { size: 40, top: '60%', left: '3%', duration: 8, delay: 0.5 },
  { size: 50, top: '80%', right: '12%', duration: 10, delay: 2 },
  { size: 20, top: '20%', left: '40%', duration: 6, delay: 1.5 },
  { size: 30, top: '50%', right: '30%', duration: 7.5, delay: 3 },
];

function About() {
  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg}>
          <motion.div
            className={styles.heroBlob1}
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.95, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.heroBlob2}
            animate={{ x: [0, -30, 40, 0], y: [0, 20, -40, 0], scale: [1, 0.9, 1.1, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.heroBlob3}
            animate={{ x: [0, 20, -30, 0], y: [0, -20, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className={styles.gridPattern} />

          {floatingShapes.map((shape, i) => (
            <motion.div
              key={i}
              className={styles.heroShape}
              style={{
                width: shape.size,
                height: shape.size,
                top: shape.top,
                left: shape.left,
                right: shape.right,
              }}
              animate={{
                y: [0, -15, 10, -10, 0],
                x: [0, 8, -8, 4, 0],
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.15, 0.35, 0.15, 0.3, 0.15],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: shape.delay,
              }}
            />
          ))}
        </div>

        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.breadcrumb}>
              <Link to="/">Home</Link> / About Us
            </span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We're <span className={styles.heroAccent}>RightDirection</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A team of passionate digital marketers on a mission to help Indian businesses thrive in the digital world.
          </motion.p>

          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {[
              { number: '200+', label: 'Clients' },
              { number: '30+', label: 'Team Size' },
              { number: '4', label: 'Cities' },
              { number: '8+', label: 'Years' },
            ].map((stat, i) => (
              <div key={i} className={styles.heroStat}>
                <motion.strong
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.number}
                </motion.strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollHint}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={styles.scrollLine} />
        </motion.div>
      </section>

      {/* Our Story */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <AnimatedSection>
              <div>
                <SectionHeader subtitle="Our Story" title="Built in India, for India" align="left" />
                <p className={styles.storyText}>
                  Founded in 2018 in Mumbai, RightDirection was born from a simple observation — most Indian businesses were not getting the digital marketing results they deserved. Agencies were either too expensive, too generic, or simply did not understand the Indian market.
                </p>
                <p className={styles.storyText}>
                  We set out to change that. Starting with just 3 team members and a handful of clients, we built RightDirection on a foundation of transparency, data-driven strategies, and a deep understanding of the Indian consumer.
                </p>
                <p className={styles.storyText}>
                  Today, we are a team of 30+ specialists serving 200+ clients across the country — from startups in Bangalore to enterprises in Delhi.
                </p>
                <div className={styles.storyCta}>
                  <Button to="/services" variant="primary" icon={FaArrowRight}>
                    Explore Our Services
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className={styles.storyVisual}>
                {[
                  { number: '2018', label: 'Founded in Mumbai', color: '#1B4DFF' },
                  { number: '30+', label: 'Team Members', color: '#FF6B35' },
                  { number: '4', label: 'Cities in India', color: '#E91E63' },
                  { number: '200+', label: 'Happy Clients', color: '#9C27B0' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className={styles.storyCard}
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className={styles.storyCardAccent} style={{ background: card.color }} />
                    <span className={styles.storyYear} style={{ color: card.color }}>{card.number}</span>
                    <span className={styles.storyLabel}>{card.label}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className={`${styles.section} ${styles.timelineBg}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeader
              subtitle="Our Journey"
              title="From 3 People to a Full-Scale Agency"
              description="Every milestone is a testament to the trust our clients placed in us."
              light
            />
          </AnimatedSection>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}>
              <motion.div
                className={styles.timelineLineFill}
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>

            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={i} delay={i * 0.15} direction={isLeft ? 'left' : 'right'}>
                  <div className={`${styles.timelineItem} ${isLeft ? styles.timelineLeft : styles.timelineRight}`}>
                    <motion.div
                      className={styles.timelineDot}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15, type: 'spring', stiffness: 300 }}
                    >
                      <Icon />
                    </motion.div>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineYear}>{item.year}</span>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      <p className={styles.timelineDesc}>{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeader subtitle="Purpose" title="Why We Do What We Do" />
          </AnimatedSection>

          <div className={styles.mvGrid}>
            <AnimatedSection>
              <motion.div
                className={styles.mvCard}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles.mvCardGlow} style={{ background: 'rgba(27, 77, 255, 0.08)' }} />
                <div className={styles.mvIconWrap} style={{ background: 'linear-gradient(135deg, #1B4DFF, #4F7AFF)' }}>
                  <FaLightbulb />
                </div>
                <h3 className={styles.mvTitle}>Our Mission</h3>
                <p className={styles.mvText}>To empower Indian businesses with affordable, effective, and transparent digital marketing solutions that deliver real, measurable growth.</p>
                <FaQuoteLeft className={styles.mvQuote} />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <motion.div
                className={styles.mvCard}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={styles.mvCardGlow} style={{ background: 'rgba(255, 107, 53, 0.08)' }} />
                <div className={styles.mvIconWrap} style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8F6B)' }}>
                  <FaEye />
                </div>
                <h3 className={styles.mvTitle}>Our Vision</h3>
                <p className={styles.mvText}>To become India's most trusted digital marketing partner — known for our results, integrity, and commitment to client success.</p>
                <FaQuoteLeft className={styles.mvQuote} />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.section} ${styles.valuesBg}`}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeader subtitle="Our Values" title="What We Stand For" />
          </AnimatedSection>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    className={styles.valueCard}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className={styles.valueIconWrap}
                      style={{ background: `${value.color}15`, color: value.color }}
                      whileHover={{ rotate: 10, scale: 1.15 }}
                    >
                      <Icon />
                    </motion.div>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueDesc}>{value.desc}</p>
                    <div className={styles.valueBar} style={{ background: value.color }} />
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Team */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <SectionHeader
              subtitle="Our Team"
              title="Meet the Experts"
              description="A talented team of specialists dedicated to driving your brand's digital growth."
            />
          </AnimatedSection>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default About;
