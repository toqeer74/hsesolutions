import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 600);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const variantStyles = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const baseStyles = `
    relative
    inline-flex
    items-center
    justify-center
    rounded-lg
    font-medium
    transition-all
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    disabled:opacity-50
    disabled:cursor-not-allowed
    overflow-hidden
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const ripple = isRippling ? (
    <span
      className="absolute animate-ripple rounded-full bg-white/30"
      style={{
        left: coords.x,
        top: coords.y,
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
      }}
    />
  ) : null;

  if (to) {
    return (
      <Link to={to} className={baseStyles} onClick={createRipple}>
        {children}
        {ripple}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={baseStyles} 
        onClick={createRipple}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {ripple}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      onClick={(e) => {
        createRipple(e);
        onClick?.();
      }}
      disabled={disabled}
    >
      {children}
      {ripple}
    </button>
  );
}
