'use client';
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { contactInfo } from '../data/contact';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="md:col-span-2 flex flex-col items-center text-center">
              <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {contactInfo.firstname} {contactInfo.lastname}
              </div>
              <p className="text-gray-400 mb-6">
                Full Stack Developer passionate about creating innovative digital experiences.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: contactInfo.github, color: 'hover:text-gray-300' },
                  { icon: Linkedin, href: contactInfo.linkedin, color: 'hover:text-blue-400' },
                  { icon: Mail, href: contactInfo.email, color: 'hover:text-red-400' }
                ].map(({ icon: Icon, href, color }, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
                    className={`p-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 ${color} transition-all duration-300 hover:scale-110 cursor-pointer`}
                  >
                    <Icon className="w-5 h-5 pointer-events-none" />
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div>{contactInfo.location}</div>
                <div>{contactInfo.phone}</div>
                <div>{contactInfo.email}</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2026 Mat95rix7. {t('footer.rights')}</span>
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
              <span>{t('footer.by')} {contactInfo.firstname}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 