import React from 'react';
import { Shield } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-emerald-600 text-white flex flex-col items-center justify-center z-50">
      <div className="relative animate-float">
        <Shield className="w-16 h-16" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold font-poppins">H</span>
        </div>
      </div>
      <div className="mt-8 space-y-2 text-center">
        <div className="text-2xl font-bold font-poppins tracking-wider">
          <span className="animate-fade-in" style={{ animationDelay: '0ms' }}>H</span>
          <span className="animate-fade-in" style={{ animationDelay: '200ms' }}>S</span>
          <span className="animate-fade-in" style={{ animationDelay: '400ms' }}>E</span>
          <span className="animate-fade-in" style={{ animationDelay: '600ms' }}> </span>
          <span className="animate-fade-in" style={{ animationDelay: '800ms' }}>Solutions</span>
        </div>
        <p className="text-emerald-100 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          by Toqeer
        </p>
      </div>
      <div className="mt-8 w-32 h-1 bg-emerald-500/30 rounded-full overflow-hidden">
        <div className="h-full bg-white animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
}
