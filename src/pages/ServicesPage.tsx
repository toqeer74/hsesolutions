import React from 'react';
import { Shield, HardHat, FileCheck, Siren, Beaker, Leaf, Building2, Flame, Heart } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Shield className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Safety Management Systems",
      description: "Comprehensive safety management systems development and implementation for organizations of all sizes. Our approach ensures a systematic and effective way to manage workplace safety and health.",
      features: [
        "Policy development and implementation",
        "Safety procedures and protocols",
        "Risk management strategies",
        "Performance monitoring and measurement",
        "Continuous improvement processes"
      ]
    },
    {
      icon: <HardHat className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Construction Safety",
      description: "Specialized safety solutions for construction sites, ensuring OSHA compliance and worker protection. We help create and maintain safe construction environments.",
      features: [
        "Site safety inspections",
        "Fall protection systems",
        "Equipment safety protocols",
        "Worker safety training",
        "Compliance documentation"
      ]
    },
    {
      icon: <FileCheck className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Safety Audits & Inspections",
      description: "Thorough safety audits and inspections to identify potential hazards and ensure regulatory compliance. Our detailed assessments help prevent workplace incidents.",
      features: [
        "Comprehensive workplace evaluations",
        "Hazard identification",
        "Compliance verification",
        "Corrective action planning",
        "Follow-up assessments"
      ]
    },
    {
      icon: <Siren className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Emergency Response Planning",
      description: "Development of comprehensive emergency response plans and procedures for various scenarios. We help organizations prepare for and manage emergency situations effectively.",
      features: [
        "Emergency procedure development",
        "Evacuation planning",
        "Crisis management protocols",
        "Emergency response training",
        "Plan testing and updates"
      ]
    },
    {
      icon: <Beaker className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Industrial Hygiene",
      description: "Assessment and control of workplace environmental factors affecting employee health and well-being. We help create healthier work environments.",
      features: [
        "Exposure monitoring",
        "Air quality testing",
        "Noise level assessment",
        "Ergonomic evaluations",
        "Control measure implementation"
      ]
    },
    {
      icon: <Leaf className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Environmental Compliance",
      description: "Guidance on environmental regulations and implementation of sustainable practices. We help organizations maintain environmental responsibility.",
      features: [
        "Environmental impact assessments",
        "Compliance monitoring",
        "Waste management programs",
        "Sustainability initiatives",
        "Environmental training"
      ]
    },
    {
      icon: <Building2 className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Facility Safety Assessment",
      description: "Comprehensive facility safety assessments and recommendations for improvements. We help identify and address potential safety concerns in your facility.",
      features: [
        "Building safety evaluations",
        "Equipment inspections",
        "Layout optimization",
        "Safety system reviews",
        "Improvement recommendations"
      ]
    },
    {
      icon: <Flame className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Fire Safety Management",
      description: "Fire safety programs, training, and emergency evacuation planning. We help protect your people and assets from fire-related incidents.",
      features: [
        "Fire risk assessments",
        "Emergency evacuation plans",
        "Fire prevention training",
        "Equipment inspections",
        "Compliance verification"
      ]
    },
    {
      icon: <Heart className="w-16 h-16 text-emerald-600 mb-6" />,
      title: "Health & Wellness Programs",
      description: "Development and implementation of workplace health and wellness initiatives. We help create healthier and more productive work environments.",
      features: [
        "Health program development",
        "Wellness initiatives",
        "Ergonomic assessments",
        "Mental health support",
        "Program evaluation"
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive safety consulting services tailored to your organization's needs.
            We ensure compliance, minimize risks, and create safer workplaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h2 className="text-2xl font-bold text-gray-800 ml-4">
                  {service.title}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Features:
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
