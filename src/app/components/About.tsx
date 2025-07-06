'use client';
import React from 'react';
import { Code, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Award,
      number: '2+',
      label: t('about.experience')
    },
    {
      icon: Code,
      number: '10+',
      label: t('about.projects')
    },
    {
      icon: Users,
      number: '100%',
      label: t('about.motivation')
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-gray-300 leading-relaxed text-justify">
                  {t('about.description')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map(({ icon: Icon, number, label }, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-gray-700 rounded-full group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{number}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <Image
                  src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Developer workspace"
                  className="w-full h-96 object-cover"
                  width={800}
                  height={384}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-gray-800 border text-center border-gray-700 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-400">Motivé</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gray-800 text-center border border-gray-700 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-gray-400">Curieux</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 