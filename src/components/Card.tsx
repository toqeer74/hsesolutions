import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tiltOptions?: {
    max?: number;
    speed?: number;
    glare?: boolean;
    'max-glare'?: number;
  };
}

export default function Card({
  children,
  className = '',
  onClick,
  tiltOptions = {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
  },
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: tiltOptions.max,
        speed: tiltOptions.speed,
        glare: tiltOptions.glare,
        'max-glare': tiltOptions['max-glare'],
      });
    }

    return () => {
      if (cardRef.current) {
        // @ts-ignore
        cardRef.current.vanillaTilt?.destroy();
      }
    };
  }, [tiltOptions]);

  const baseStyles = `
    bg-white
    rounded-xl
    shadow-lg
    overflow-hidden
    transition-all
    duration-300
    hover:shadow-xl
    ${className}
  `;

  return (
    <div
      ref={cardRef}
      className={baseStyles}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
}
