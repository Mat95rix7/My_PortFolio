'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Settings, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.frontend'),
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React / Vue', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 60 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 50 },
        { name: 'Php', level: 70 }
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
        { name: 'PostgreSQL', level: 70 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: t('skills.tools'),
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'Git', level: 80 },
        { name: 'Github', level: 90 },
        { name: 'Linux', level: 85 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Animation d'apparition en cascade
  const [visibleCards, setVisibleCards] = useState(
    Array(skillCategories.length).fill(false)
  );

  useEffect(() => {
    skillCategories.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards(prev => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }, 200 + i * 200);
    });
  }, []);

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                className={`bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300
                  ${visibleCards[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                `}
                style={{ transition: 'opacity 1.2s cubic-bezier(.68,-0.55,.27,1.55), transform 1.2s cubic-bezier(.68,-0.55,.27,1.55)' }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
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
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: visibleCards[index] ? `${skill.level}%` : '0%' }}
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