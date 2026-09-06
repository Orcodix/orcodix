import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();
  const lenis = useLenis();

  // Ensure manual scroll restoration so the browser doesn't push old scroll positions
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Handle anchor navigation if hash exists (e.g., #contact)
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { immediate: false });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }

    // 1. Immediately reset Lenis internal scroll position & velocity
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    // 2. Immediately reset native window & document scroll positions
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 3. Fallback tick to catch any post-hydration/layout shifts on route changes
    const timer = setTimeout(() => {
      if (!hash) {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname, search, hash, lenis]);

  return null;
};

export default ScrollToTop;
