import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaPhone } from 'react-icons/fa';
import Button from '../../ui/Button/Button';
import navLinks from '../../../assets/data/navLinks';
import services from '../../../assets/data/services';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navClasses = [
    styles.navbar,
    scrolled ? styles.scrolled : '',
    !isHome ? styles.scrolled : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClasses}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>RD</span>
          <span className={styles.logoText}>
            Right<span className={styles.logoAccent}>Direction</span>
          </span>
        </Link>

        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <div key={link.path} className={styles.navItem}>
              {link.hasDropdown ? (
                <div
                  className={styles.dropdownTrigger}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    {link.label} <FaChevronDown className={styles.chevron} />
                  </NavLink>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className={styles.dropdown}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={styles.dropdownGrid}>
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className={styles.dropdownItem}
                              >
                                <Icon className={styles.dropdownIcon} style={{ color: service.color }} />
                                <span>{service.shortName}</span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className={styles.dropdownFooter}>
                          <Link to="/services">View All Services →</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        <div className={styles.desktopCta}>
          <Button to="/contact" variant="primary" size="sm">
            Get Free Audit
          </Button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className={styles.mobileLinks}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        className={styles.mobileLink}
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {link.label}
                        <FaChevronDown className={`${styles.mobileChevron} ${servicesOpen ? styles.rotated : ''}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            className={styles.mobileSubmenu}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className={styles.mobileSubLink}
                                onClick={() => setMobileOpen(false)}
                              >
                                {service.shortName}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={styles.mobileLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <div className={styles.mobileBottom}>
              <a href="tel:+919876543210" className={styles.mobilePhone}>
                <FaPhone /> +91 98765 43210
              </a>
              <Button to="/contact" variant="primary" fullWidth onClick={() => setMobileOpen(false)}>
                Get a Free Audit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
