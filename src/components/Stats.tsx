import React from 'react';
import { Shield, Users, CheckCircle, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Shield, value: '100%', label: 'Safety Compliance', color: 'text-emerald-600' },
    { icon: Users, value: '500+', label: 'Trained Personnel', color: 'text-blue-600' },
    { icon: CheckCircle, value: '50+', label: 'Projects Completed', color: 'text-orange-500' },
    { icon: Award, value: '15+', label: 'Safety Awards', color: 'text-purple-600' }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}