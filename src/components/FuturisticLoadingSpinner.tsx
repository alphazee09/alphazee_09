import React, { useEffect, useState } from 'react';
import './FuturisticLoadingSpinner.css';

interface FuturisticLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  text?: string;
  fullScreen?: boolean;
}

const FuturisticLoadingSpinner: React.FC<FuturisticLoadingSpinnerProps> = ({ 
  size = 'lg', 
  showText = true, 
  text = 'Loading...', 
  fullScreen = true 
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 3 + 1;
        return Math.min(prev + increment, 95);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'futuristic-spinner-sm',
    md: 'futuristic-spinner-md', 
    lg: 'futuristic-spinner-lg',
    xl: 'futuristic-spinner-xl'
  };

  const spinnerContent = (
    <div className={`futuristic-spinner-wrapper ${sizeClasses[size]}`}>
      {/* Animated background particles */}
      <div className="particle-field">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main spinner container */}
      <div className="spinner-main">
        {/* Outer rotating rings */}
        <div className="spinner-ring ring-outer">
          <div className="ring-segment segment-1"></div>
          <div className="ring-segment segment-2"></div>
          <div className="ring-segment segment-3"></div>
          <div className="ring-segment segment-4"></div>
        </div>

        {/* Middle rotating ring */}
        <div className="spinner-ring ring-middle">
          <div className="ring-glow"></div>
        </div>

        {/* Inner pulsing core */}
        <div className="spinner-core">
          <div className="core-inner"></div>
          <div className="core-pulse"></div>
        </div>

        {/* Orbiting elements */}
        <div className="orbit-container">
          <div className="orbit-element orbit-1"></div>
          <div className="orbit-element orbit-2"></div>
          <div className="orbit-element orbit-3"></div>
        </div>
      </div>

      {/* Progress indicator */}
      {showText && (
        <div className="spinner-info">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="spinner-text">
            <span className="loading-text">{text}</span>
            <span className="progress-percent">{Math.round(progress)}%</span>
          </div>
          <div className="loading-dots">
            <span className="dot dot-1">.</span>
            <span className="dot dot-2">.</span>
            <span className="dot dot-3">.</span>
          </div>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="futuristic-spinner-overlay">
        <div className="background-glow">
          <div className="glow-orb glow-1"></div>
          <div className="glow-orb glow-2"></div>
          <div className="glow-orb glow-3"></div>
        </div>
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
};

export default FuturisticLoadingSpinner;


