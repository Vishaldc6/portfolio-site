'use client';

import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export const Contact = () => { 

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/vishaldc6',
      color: 'hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/vishal-chaudhary-02454a211',
      color: 'hover:bg-blue-600'
    },
    // {
    //   name: 'Twitter',
    //   icon: <Twitter className="w-5 h-5" />,
    //   url: 'https://twitter.com/yourusername',
    //   color: 'hover:bg-blue-400'
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
              Let&apos;s create something amazing together!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  I&apos;m always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">vishalchaudharee8@gmail.com</p>
                    <a href="mailto:vishalchaudharee8@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm">
                      Send a message →
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 63513 34142</p>
                    <a href="tel:+916351334142" className="text-green-600 hover:text-green-700 text-sm">
                      Give me a call →
                    </a>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Surat, India</p>
                    <p className="text-purple-600 text-sm">Available for Remote/On-Site Work</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-white ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className='text-center flex flex-col justify-center align-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl'>
            <div className="text-white p-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Whether you need a complete mobile application, want to improve your existing project, 
                or just need some technical consultation, I&apos;m here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:vishalchaudharee8@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  View My Work
                </a>
            </div>
          </div>
        </AnimatedSection>
          
        </div>

      </div>
    </section>
  );
};
                