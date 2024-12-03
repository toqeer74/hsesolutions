import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'NEBOSH IGC',
      description: 'International General Certificate in Occupational Health and Safety',
      pdfLink: '/certifications/nebosh.pdf'
    },
    {
      title: 'IOSH',
      description: 'Institution of Occupational Safety and Health Certification',
      pdfLink: '/certifications/iosh.pdf'
    },
    {
      title: 'OSHA',
      description: 'Occupational Safety and Health Administration Certification',
      pdfLink: '/certifications/osha.pdf'
    },
    {
      title: 'ISO 45001',
      description: 'Occupational Health and Safety Management Systems Certification',
      pdfLink: '/certifications/iso45001.pdf'
    },
    {
      title: 'Industrial Hygiene',
      description: 'Certified Industrial Hygiene Professional',
      pdfLink: '/certifications/industrial-hygiene.pdf'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Internationally recognized certifications demonstrating expertise in occupational health and safety management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-emerald-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <Award className="h-10 w-10 text-emerald-600" />
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600">
                {cert.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}