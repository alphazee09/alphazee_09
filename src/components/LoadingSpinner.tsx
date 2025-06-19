
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'cyan' | 'purple';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', color = 'primary', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-blue-500 border-t-purple-500',
    white: 'border-white/30 border-t-white',
    cyan: 'border-cyan-500/30 border-t-cyan-400',
    purple: 'border-purple-500/30 border-t-purple-400'
  };

  return (
    <div className={`relative ${className}`}>
      {/* Outer rotating ring */}
      <div className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full animate-spin`}></div>
      
      {/* Inner pulsing dot */}
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'
        } bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse`}
      ></div>
      
      {/* Orbiting particles */}
      <div className={`absolute inset-0 ${sizeClasses[size]} animate-spin`} style={{ animationDuration: '2s' }}>
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
      </div>
      <div className={`absolute inset-0 ${sizeClasses[size]} animate-spin`} style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
