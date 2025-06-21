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
    }, 2500); // Increased to 2.5 seconds for consistent experience

    return () => {
      clearTimeout(timer);
      stopLoading();
    };
  }, [location.pathname]); // Remove startLoading and stopLoading from dependencies

  return null;
};

export default NavigationLoader;

