import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 이동 시 항상 최상단으로
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
