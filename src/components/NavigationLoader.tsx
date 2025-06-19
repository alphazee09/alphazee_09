import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from './LoadingProvider';

const NavigationLoader = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // Start loading when route changes
    startLoading();

    // Fixed loading time for consistent UX
    const timer = setTimeout(() => {
      stopLoading();
    }, 1200); // Fixed 1.2 seconds for consistent experience

    return () => {
      clearTimeout(timer);
      stopLoading();
    };
  }, [location.pathname, startLoading, stopLoading]);

  return null;
};

export default NavigationLoader;

