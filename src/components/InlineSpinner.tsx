import React from 'react';
import './InlineSpinner.css';

interface InlineSpinnerProps {
  size?: 'xs' | 'sm' | 'md';
  color?: 'primary' | 'white' | 'cyan' | 'purple';
  className?: string;
}

const InlineSpinner: React.FC<InlineSpinnerProps> = ({ 
  size = 'sm', 
  color = 'primary', 
  className = '' 
}) => {
  const sizeClasses = {
    xs: 'inline-spinner-xs',
    sm: 'inline-spinner-sm',
    md: 'inline-spinner-md'
  };

  const colorClasses = {
    primary: 'spinner-primary',
    white: 'spinner-white',
    cyan: 'spinner-cyan',
    purple: 'spinner-purple'
  };

  return (
    <div className={`inline-spinner ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <div className="spinner-ring">
        <div className="ring-segment"></div>
        <div className="ring-segment"></div>
        <div className="ring-segment"></div>
      </div>
      <div className="spinner-core"></div>
    </div>
  );
};

export default InlineSpinner;

