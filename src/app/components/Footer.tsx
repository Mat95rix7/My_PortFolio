'use client';
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Djamel NAADJI
              </div>
              <p className="text-gray-400 mb-6">
                Full Stack Developer passionate about creating innovative digital experiences.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com', color: 'hover:text-gray-300' },
                  { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
                  { icon: Mail, href: 'mailto:n.djamel95@gmail.com', color: 'hover:text-red-400' }
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 ${color} transition-all duration-300 hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 capitalize"
                  >
                    {t(`nav.${item}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div>Jouy Le Moutier, France</div>
                <div>+33 6 14 51 56 85</div>
                <div>n.djamel95@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Djamel NAADJI. {t('footer.rights')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 mt-4 md:mt-0">
              <span>{t('footer.made')}</span>
              <Image
                src="/heart.png"
                alt="Heart"
                width={16}
                height={16}
                className="w-4 h-4 text-red-400"
              />
              <span>{t('footer.by')} Djamel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 