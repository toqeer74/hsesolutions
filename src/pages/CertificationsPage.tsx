import React from 'react';
import { Award, Download, CheckCircle2 } from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    {
      title: 'NEBOSH IGC',
      description: 'International General Certificate in Occupational Health and Safety',
      issuer: 'National Examination Board in Occupational Safety and Health',
      date: '2023',
      image: '/images/certifications/nebosh.jpg',
      features: [
        'Internationally recognized qualification',
        'Comprehensive health and safety knowledge',
        'Risk management expertise',
        'Industry best practices'
      ]
    },
    {
      title: 'IOSH',
      description: 'Managing Safely Certification',
      issuer: 'Institution of Occupational Safety and Health',
      date: '2023',
      image: '/images/certifications/iosh.jpg',
      features: [
        'Professional safety management',
        'Risk assessment techniques',
        'Accident investigation methods',
        'Environmental protection'
      ]
    },
    {
      title: 'OSHA',
      description: 'Occupational Safety and Health Administration Certification',
      issuer: 'U.S. Department of Labor',
      date: '2023',
      image: '/images/certifications/osha.jpg',
      features: [
        'Workplace safety standards',
        'Hazard recognition',
        'Safety program implementation',
        'Compliance requirements'
      ]
    },
    {
      title: 'ISO 45001',
      description: 'Lead Auditor Certification',
      issuer: 'International Organization for Standardization',
      date: '2023',
      image: '/images/certifications/iso.jpg',
      features: [
        'Management system auditing',
        'OH&S performance evaluation',
        'Risk-based thinking',
        'Continuous improvement'
      ]
    },
    {
      title: 'Industrial Hygiene',
      description: 'Professional Certification in Industrial Hygiene',
      issuer: 'American Board of Industrial Hygiene',
      date: '2023',
      image: '/images/certifications/ih.jpg',
      features: [
        'Exposure assessment',
        'Control strategies',
        'Health hazard evaluation',
        'Workplace monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-16 w-16 text-emerald-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Professional Certifications</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto text-center">
            Internationally recognized certifications demonstrating expertise in occupational health and safety.
          </p>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-600 bg-opacity-90 flex items-center justify-center">
                  <Award className="h-20 w-20 text-white opacity-75" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{cert.title}</h3>
                  <span className="text-emerald-600 text-sm font-medium">{cert.date}</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{cert.description}</p>
                <p className="text-sm text-gray-500 mb-4">{cert.issuer}</p>
                <div className="space-y-2">
                  {cert.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full flex items-center justify-center bg-emerald-50 text-emerald-600 py-2 rounded-lg hover:bg-emerald-100 transition-colors font-medium">
                  <Download className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with a Certified Professional?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise and certifications can benefit your organization's safety program.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
}
