'use client';

import React from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  highlights: string[];
  coursework?: string[];
  activities?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  icon: React.ReactNode;
  color: string;
  link?: string;
}

export const Education = () => {
const education: Education[] = [
    {
      degree: "Master of Computer Applications - MCA, Computer Science",
      institution: "Veer Narmad South Gujarat University",
      location: "Surat, Gujarat",
      period: "09/2024 - 05/2026",
      description: "Currently pursuing advanced studies in computer applications with focus on software development and emerging technologies.",
      highlights: [
        "Currently enrolled in comprehensive MCA program",
        "Focus on advanced programming concepts and software engineering",
        "Emphasis on modern development frameworks and methodologies"
      ],
      coursework: [
        "Advanced Programming",
        "Software Engineering",
        "Database Management Systems",
        "Web Technologies",
        "iOS Mobile Application Development",
        "Data Structures & Algorithms"
      ],
      activities: [
        "Active participant in university tech events",
        "Member of Computer Science study groups"
      ]
    },
    {
      degree: "Bachelor of Computer Applications - BCA, Computer Science",
      institution: "Shri Shambhubhai V. Patel College of Computer Science & Business Management",
      location: "Surat, Gujarat",
      period: "01/2020 - 06/2023",
      description: "Comprehensive foundation in computer applications, programming, and software development with strong focus on practical implementation.",
      highlights: [
        "Completed comprehensive BCA program",
        "Strong foundation in programming",
        "Practical experience with multiple programming languages"
      ],
      coursework: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Database Systems",
        "Android Mobile Application Development"
      ],
      activities: [
        "Participated in coding competitions",
        "Active member of college tech community",
        "Contributed to various academic projects"
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      name: "Best Team Player Award",
      issuer: "Tagline Infotech LLP",
      date: "2023",
      icon: <Award className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      link: "https://www.linkedin.com/posts/tagline-infotech3_teamworkmakesthedreamwork-bestteamplayer-activity-7154057398909820931-S2uA?utm_source=share&utm_medium=member_android&rcm=ACoAADWm05wB4vCFfVJmYxvr1HRKlhnprMi6vnM"
    },
    {
      name: "Software Engineer Intern Certificate",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "a5b00a546c44",
      icon: <Star className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      link: "https://www.hackerrank.com/certificates/a5b00a546c44"
    },
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   credentialId: "AWS-SA-2023-12345",
    //   icon: <Award className="w-5 h-5" />,
    //   color: "from-orange-500 to-red-500"
    // },
    // {
    //   name: "Google Cloud Professional Developer",
    //   issuer: "Google Cloud",
    //   date: "2023",
    //   credentialId: "GCP-PD-2023-67890",
    //   icon: <Star className="w-5 h-5" />,
    //   color: "from-blue-500 to-cyan-500"
    // },
    // {
    //   name: "Meta React Developer Certificate",
    //   issuer: "Meta (Facebook)",
    //   date: "2022",
    //   credentialId: "META-RD-2022-11111",
    //   icon: <BookOpen className="w-5 h-5" />,
    //   color: "from-blue-600 to-purple-600"
    // },
    // {
    //   name: "MongoDB Certified Developer",
    //   issuer: "MongoDB University",
    //   date: "2022",
    //   credentialId: "MONGO-CD-2022-22222",
    //   icon: <GraduationCap className="w-5 h-5" />,
    //   color: "from-green-500 to-emerald-500"
    // }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey and continuous learning through professional certifications
            </p>
          </div>
        </AnimatedSection>

        {/* Education Timeline */}
        <div className="mb-20">
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Academic Background</h3>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

            {education.map((edu, index) => (
              <AnimatedSection key={index}>
                <div className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute md:left-1/2 w-10 h-10 bg-white border-4 border-blue-500 rounded-full transform md:-translate-x-5 z-10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                      {/* Header */}
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="font-medium text-blue-600">{edu.institution}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                          {edu.gpa && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4">{edu.description}</p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Coursework */}
                      {edu.coursework && (
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-500" />
                            Relevant Coursework
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Activities */}
                      {/* {edu.activities && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-500" />
                            Activities & Leadership
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.activities.map((activity, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
                              >
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Professional Certifications</h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center text-white`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                      <p className="text-blue-600 font-medium text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </span>
                        {cert.credentialId && (
                          <span>ID: {cert.credentialId}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <a className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                        href={cert.link || ''}>
                          ✓ Verified
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        {/* <AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Degrees Earned</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
              <div className="text-gray-600">Professional Certifications</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">3.8</div>
              <div className="text-gray-600">Average GPA</div>
            </div>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
};