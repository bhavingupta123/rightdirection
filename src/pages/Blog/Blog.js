import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import AnimatedSection from '../../components/ui/AnimatedSection/AnimatedSection';
import BlogCard from '../../components/ui/BlogCard/BlogCard';
import Button from '../../components/ui/Button/Button';
import blog from '../../assets/data/blog';
import styles from './Blog.module.css';

const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Content', 'Industry Trends', 'Video'];

function Blog() {
  const [active, setActive] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = active === 'All' ? blog : blog.filter((p) => p.category === active);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroDecor} />
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.breadcrumb}>
              <a href="/">Home</a> / Blog
            </span>
            <h1 className={styles.heroTitle}>Insights & Resources</h1>
            <p className={styles.heroSubtitle}>
              Digital marketing tips, trends, and strategies to help your business grow in India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.activeFilter : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <BlogCard post={post} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.noResults}>No posts found in this category yet. Check back soon!</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.newsletterContent}>
              <FaEnvelope className={styles.newsletterIcon} />
              <h2>Get Digital Marketing Tips</h2>
              <p>Join 10,000+ Indian marketers who receive our weekly insights delivered to their inbox.</p>
              {subscribed ? (
                <p className={styles.subscribeSuccess}>Thank you for subscribing! Check your inbox.</p>
              ) : (
                <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.subscribeInput}
                    required
                  />
                  <Button type="submit" variant="primary">Subscribe</Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default Blog;
