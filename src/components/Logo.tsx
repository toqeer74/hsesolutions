import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, HardHat } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-2 ${className}`}
      ref={logoRef}
    >
      <div className="relative">
        <Shield className="w-8 h-8 text-emerald-600" />
        <HardHat className="w-4 h-4 text-emerald-700 absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4" />
      </div>
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
            HSE Solutions
          </span>
          <span className="text-sm text-emerald-600 dark:text-emerald-400">
            by Toqeer
          </span>
        </div>
      )}
    </Link>
  );
}