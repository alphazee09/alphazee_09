import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const startLoading = () => {
    const newLoadingId = Date.now().toString();
    setLoadingId(newLoadingId);
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setLoadingId(null);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, startLoading, stopLoading }}>
      {children}
      {isLoading && <GlobalLoadingSpinner key={loadingId} />}
    </LoadingContext.Provider>
  );
};

const GlobalLoadingSpinner: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress to 0 when component mounts
    setProgress(0);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 2 + 0.5; // Increment by 0.5-2.5% each time
      
      if (currentProgress >= 95) {
        currentProgress = 95; // Cap at 95% until loading is complete
        clearInterval(interval);
      }
      
      setProgress(currentProgress);
    }, 100); // Faster updates for smoother animation

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        {/* Main spinner */}
        <div className="relative mb-8">
          {/* Outer ring */}
          <div className="w-24 h-24 border-4 border-slate-700 rounded-full animate-spin">
            <div className="w-full h-full border-4 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          
          {/* Inner ring */}
          <div className="absolute inset-2 w-16 h-16 border-2 border-slate-600 rounded-full animate-spin" style={{ animationDuration: '2s' }}>
            <div className="w-full h-full border-2 border-transparent border-b-cyan-300 border-l-purple-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>

          {/* Center dot */}
          <div className="absolute inset-1/2 w-2 h-2 -ml-1 -mt-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>

        {/* AlphaZee logo/text */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            AlphaZee09
          </h2>
          <p className="text-slate-400 text-sm animate-pulse">
            Loading your experience...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-slate-700 rounded-full h-1 mb-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-slate-500 text-xs">
            {Math.round(Math.min(progress, 100))}%
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-1 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingProvider;

