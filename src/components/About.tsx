import React from 'react';
import { Award, Briefcase, GraduationCap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Toqeer - HSE Professional"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500 to-blue-500 p-6 rounded-lg text-white">
              <div className="text-3xl font-bold">2+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-emerald-500" />
                <span className="font-semibold">Certified Professional</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Dedicated HSE Professional with a Vision for Safer Workplaces
            </h2>
            
            <p className="text-gray-600">
              As a certified Health, Safety & Environment (HSE) professional, I bring a fresh perspective 
              and unwavering commitment to workplace safety. With 2 years of hands-on experience, 
              I've successfully led multiple projects focusing on risk assessment, safety protocol 
              implementation, and employee training.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-emerald-50">
                <Briefcase className="h-8 w-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold">3+ Projects</h3>
                <p className="text-sm text-gray-600">Successfully Completed</p>
              </div>
              <div className="card bg-blue-50">
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">100%</h3>
                <p className="text-sm text-gray-600">Safety Compliance</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Key Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                  <span>NEBOSH IGC Certified Professional</span>
                </li>
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                  <span>ISO 45001 Lead Auditor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                  <span>IOSH Managing Safely</span>
                </li>
              </ul>
            </div>

            <a href="#contact" className="btn-primary">
              Let's Discuss Your Safety Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}