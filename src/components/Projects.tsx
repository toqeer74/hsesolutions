import React from 'react';
import { Calendar, Building2, Users } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Industrial Safety Transformation',
      company: 'Manufacturing Plant',
      duration: '6 months',
      description: 'Led comprehensive safety audit and implemented new safety protocols, resulting in 40% reduction in incident rates.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
    },
    {
      title: 'Construction Site Safety Program',
      company: 'Construction Project',
      duration: '8 months',
      description: 'Developed and implemented site-specific safety plans, conducted regular inspections, and trained 200+ workers.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80'
    },
    {
      title: 'Emergency Response Planning',
      company: 'Chemical Facility',
      duration: '4 months',
      description: 'Created comprehensive emergency response procedures and conducted successful evacuation drills.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing successful implementations of safety measures and improvements across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-1 text-emerald-600" />
                    {project.company}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-emerald-600" />
                    {project.duration}
                  </div>
                </div>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}