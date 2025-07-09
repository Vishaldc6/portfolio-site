'use client';

import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Calendar, MapPin, Award, MonitorSmartphone } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export const Experience = () => {
    const experiences: Experience[] = [
    {
      title: "React Native Developer",
      company: "Omniminds Consulting",
      location: "Remote",
      period: "Jul 2024 - Aug 2024",
      description: [
        "Developed mobile applications using React Native and modern JavaScript frameworks",
        "Collaborated with cross-functional teams to deliver high-quality mobile solutions",
        "Implemented best practices in mobile app development and code optimization"
      ],
      technologies: ["React Native", "JavaScript", "TypeScript", "Redux-toolkit", "REST API", "Razorpay"],
      achievements: [
        "Successfully delivered mobile applications within tight deadlines",
        "Maintained clean and scalable code architecture",
        "Contributed to remote team collaboration and development processes",
        "Created comprehensive Salon Management system with three interconnected apps"
      ]
    },
    {
      title: "React Native Developer",
      company: "Tagline Infotech LLP",
      location: "Surat, India",
      period: "Nov 2022 - Jun 2024",
      description: [
        "Developed and maintained multiple React Native applications for various industries",
        "Integrated third-party payment systems including Stripe, Square, and Razorpay",
        "Implemented complex features like real-time notifications, maps integration, and social authentication",
        "Built cross-platform mobile applications using Expo and React Native CLI"
      ],
      technologies: ["React Native", "Expo", "Redux", "Firebase", "TypeScript", "JavaScript", "Payment Gateways"],
      achievements: [
        "Successfully delivered Employee Schedule Management App with Stripe integration",
        "Built Job Management App with Square payment integration",
        "Developed Dental App with QR code integration and multiple app clones using Expo EAS"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey building impactful solutions and growing as a developer
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <AnimatedSection key={index}>
              <div className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute md:left-1/2 w-10 h-10 bg-white border-4 border-blue-500 rounded-full transform md:-translate-x-5 z-10 flex items-center justify-center">
                    <MonitorSmartphone className="w-5 h-5 text-blue-500" />
                  </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="font-medium text-blue-600">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="font-semibold text-gray-900">Key Achievements</span>
                        </div>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary Stats */}
        <AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">1.5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};