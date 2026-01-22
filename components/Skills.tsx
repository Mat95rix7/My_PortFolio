'use client';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Code, Server, Settings, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = useMemo(() => [
    {
      icon: Code,
      title: t('skills.frontend'),
      skills: [
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'React / Vue', level: 90 },
        { name: 'Next.js', level: 60 },
        { name: 'React Native', level: 60 },
        
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: t('skills.backend'),
      skills: [
        { name: 'Node / Express', level: 90 },
        { name: 'Python / Django', level: 60 },
        { name: 'Php / symfony', level: 70 },
        { name: 'REST API', level: 70 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: t('skills.databases'),
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'Supabase', level: 70 },
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: t('skills.tools'),
      skills: [
        { name: 'Docker / DockerHub', level: 70 },
        { name: 'Git / GitHub', level: 80 },
        { name: 'Vercel Functions / API Routes', level: 80 },
        { name: 'Windows / macOS / Linux', level: 85 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ], [t]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [fillBars, setFillBars] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const isMobile = window.innerWidth < 768;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFillBars(true);
        } else {
          setFillBars(false);
        }
      },
      { threshold: isMobile ? 0.1 : 0.6 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen flex items-center py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('skills.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-linear-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-linear-to-r ${category.color} rounded-full transition-all duration-3000 ease-out group-hover:animate-pulse`}
                          style={{ width: fillBars ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 