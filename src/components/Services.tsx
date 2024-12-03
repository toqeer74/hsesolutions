import React from 'react';
import { Shield, HardHat, FileCheck, Siren, Beaker, Leaf, Building2, Flame, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Safety Management Systems",
      description: "Comprehensive safety management systems development and implementation for organizations of all sizes."
    },
    {
      icon: <HardHat className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Construction Safety",
      description: "Specialized safety solutions for construction sites, ensuring OSHA compliance and worker protection."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Safety Audits & Inspections",
      description: "Thorough safety audits and inspections to identify potential hazards and ensure regulatory compliance."
    },
    {
      icon: <Siren className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Emergency Response Planning",
      description: "Development of comprehensive emergency response plans and procedures for various scenarios."
    },
    {
      icon: <Beaker className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Industrial Hygiene",
      description: "Assessment and control of workplace environmental factors affecting employee health and well-being."
    },
    {
      icon: <Leaf className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Environmental Compliance",
      description: "Guidance on environmental regulations and implementation of sustainable practices."
    },
    {
      icon: <Building2 className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Facility Safety Assessment",
      description: "Comprehensive facility safety assessments and recommendations for improvements."
    },
    {
      icon: <Flame className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Fire Safety Management",
      description: "Fire safety programs, training, and emergency evacuation planning."
    },
    {
      icon: <Heart className="w-12 h-12 text-emerald-600 mb-4" />,
      title: "Health & Wellness Programs",
      description: "Development and implementation of workplace health and wellness initiatives."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive safety consulting services tailored to your organization's needs.
          We ensure compliance, minimize risks, and create safer workplaces.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}