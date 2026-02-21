import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import PageTransition from '../PageTransition/PageTransition';
import BackToTop from '../BackToTop/BackToTop';

function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <main>
            <Outlet />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

export default Layout;
