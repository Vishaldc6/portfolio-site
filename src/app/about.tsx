'use client';

import { AnimatedSection } from '@/components/AnimatedSection';
import React from 'react';


export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m a passionate React Native Developer with experience in building 
                cross-platform mobile applications that deliver exceptional user experiences. 
                Currently pursuing my Master&apos;s in Computer Applications while working on 
                innovative mobile solutions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in React Native development with expertise in JavaScript, 
                TypeScript, and modern mobile app architecture. From employee management 
                systems to dental apps and salon booking platforms, I&apos;ve built diverse 
                applications that solve real-world problems.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                My experience includes integrating payment systems like Stripe and Square, 
                implementing Firebase services, managing state with Redux, and creating 
                seamless user experiences with modern UI/UX principles. I&apos;m passionate 
                about clean code and scalable solutions.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                  <p className="text-blue-600 font-medium">1.5 Years</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
                  <p className="text-blue-600 font-medium">5+ Mobile Apps</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👋</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Hello!</h3>
                    <p className="text-gray-600">Nice to meet you</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};