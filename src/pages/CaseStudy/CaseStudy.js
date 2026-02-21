import { useParams, Navigate, Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaIndustry } from 'react-icons/fa';
import AnimatedSection from '../../components/ui/AnimatedSection/AnimatedSection';
import Badge from '../../components/ui/Badge/Badge';
import PortfolioCard from '../../components/ui/PortfolioCard/PortfolioCard';
import CTASection from '../../components/sections/CTASection/CTASection';
import portfolio from '../../assets/data/portfolio';
import styles from './CaseStudy.module.css';

function CaseStudy() {
  const { slug } = useParams();
  const project = portfolio.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedProjects = portfolio.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero} style={{ '--c': project.color }}>
        <div className={styles.heroDecor} />
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.breadcrumb}>
              <Link to="/">Home</Link> / <Link to="/portfolio">Portfolio</Link> / {project.client}
            </span>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <Badge key={tag} color={project.color}>{tag}</Badge>
              ))}
            </div>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <div className={styles.meta}>
              <span><FaMapMarkerAlt /> {project.city}</span>
              <span><FaIndustry /> {project.industry}</span>
              <span><FaClock /> {project.duration}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.resultsGrid}>
            {project.results.map((result, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={styles.resultCard} style={{ '--c': project.color }}>
                  <span className={styles.resultValue}>{result.value}</span>
                  <span className={styles.resultMetric}>{result.metric}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <AnimatedSection>
              <div className={styles.storyBlock}>
                <h2>The Challenge</h2>
                <p>{project.challenge}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className={styles.storyBlock}>
                <h2>Our Strategy</h2>
                <p>{project.strategy}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className={styles.section}>
        <div className={styles.container}>
          <AnimatedSection>
            <h2 className={styles.relatedTitle}>More Case Studies</h2>
          </AnimatedSection>
          <div className={styles.relatedGrid}>
            {relatedProjects.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.1}>
                <PortfolioCard project={p} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default CaseStudy;
