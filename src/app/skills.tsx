'use client';

import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Code, Database, Globe, Smartphone, Cloud, Zap, CreditCard, Shield, Bell, MapPin, GitBranch, Rocket, Apple, Play, ChevronUp, Flame } from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const Skills: React.FC = () => {

  const skillCategories: SkillCategory[] = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', icon: <Code className="w-8 h-8" /> },
        { name: 'Expo', icon: <ChevronUp className="w-8 h-8" /> },
        { name: 'JavaScript & TypeScript', icon: <Code className="w-8 h-8" /> },
        { name: 'Redux', icon: <Database className="w-8 h-8" /> },
      ]
    },
    {
      title: 'Backend & Cloud',
      skills: [
        { name: 'Firebase', icon: <Flame className="w-8 h-8" /> },
        { name: 'Cloud Functions', icon: <Cloud className="w-8 h-8" /> },
        { name: 'REST APIs', icon: <Database className="w-8 h-8" /> },
        { name: 'Axios', icon: <Code className="w-8 h-8" /> },
        { name: 'WebSocket', icon: <Database className="w-8 h-8" /> },
      ]
    },
    {
      title: 'Payment & Integration',
      skills: [
        { name: 'Stripe', icon: <CreditCard className="w-8 h-8" /> },
        { name: 'Square Payment', icon: <CreditCard className="w-8 h-8" /> },
        { name: 'Razorpay', icon: <CreditCard className="w-8 h-8" /> },
        { name: 'Social Auth', icon: <Shield className="w-8 h-8" /> },
        { name: 'Push Notifications', icon: <Bell className="w-8 h-8" /> },
        { name: 'Google Maps', icon: <MapPin className="w-8 h-8" /> },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: <GitBranch className="w-8 h-8" /> },
        { name: 'App Deployment', icon: <Rocket className="w-8 h-8" /> },
        { name: 'Expo EAS', icon: <Smartphone className="w-8 h-8" /> },
        { name: 'VS Code', icon: <Code className="w-8 h-8" /> },
        { name: 'App Store Connect', icon: <Apple className="w-8 h-8" /> },
        { name: 'Google Play Console', icon: <Play className="w-8 h-8" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </p>
          </div>
        </AnimatedSection>


        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title}>
                <div
                  className={`bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-500 ease-in-out transform hover:-translate-y-1
                `}
                  style={{
                    animationDelay: `${categoryIndex * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <h3 className="text-xl font-semibold text-center mb-6 text-black">
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 hover:bg-gradient-to-br from-indigo-500 to-purple-600 hover:text-white transition-all duration-300 text-gray-900"
                      // className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:scale-105 hover:border-gray-300 transition-all duration-300 shadow-sm"
                      >
                        <div className="mb-2">
                          {skill.icon}
                        </div>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Additional Skills Overview */}
        <AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable, scalable, and well-documented code</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">Optimizing applications for speed and efficiency</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User Experience</h3>
              <p className="text-gray-600">Creating intuitive and engaging user interfaces</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section >
  );
};