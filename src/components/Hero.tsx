import React from 'react';
import { ArrowRight, Download, ShieldCheck, HardHat, AlertTriangle } from 'lucide-react';

export default function Hero() {
  const highlights = [
    'NEBOSH & IOSH Certified Professional',
    'ISO 45001 Lead Auditor',
    '100% Compliance Success Rate'
  ];

  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-sm">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Toqeer Shafique - Certified Safety Professional
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Your Partner in{' '}
              <span className="text-emerald-600">Workplace Safety</span>
            </h1>
            <p className="text-lg text-gray-600">
              Dedicated safety consultant with expertise in creating safer workplaces through comprehensive HSE solutions, 
              expert consultation, and industry-leading safety practices.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <HardHat className="h-5 w-5 text-emerald-600 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Safety Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#certifications" 
                className="btn-secondary"
              >
                View Certifications
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <img
                src="/images/Safety professional hero.jpg"
                alt="Toqeer Shafique - Safety Professional"
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
                <div className="bg-emerald-100 rounded-full p-2">
                  <AlertTriangle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Safety First</p>
                  <p className="text-xs text-gray-600">100% Compliance Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}