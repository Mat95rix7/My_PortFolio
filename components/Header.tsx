'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const navItems = [
  { key: 'home'},
  { key: 'about'},
  { key: 'skills'},
  { key: 'projects'},
  { key: 'contact'},
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  // Génération déterministe des particules lumineuses
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      // Utilise un seed basé sur l'index pour que ce soit stable SSR/Client
      const left = seededRandom(i + 1) * 100;
      const top = seededRandom(i + 100) * 100;
      const width = 6 + seededRandom(i + 200) * 10;
      const height = 6 + seededRandom(i + 300) * 10;
      const animationDelay = seededRandom(i + 400) * 3;
      const opacity = 0.5 + seededRandom(i + 500) * 0.5;
      return { left, top, width, height, animationDelay, opacity };
    });
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900`}
      style={{ boxShadow: isScrolled ? '0 8px 32px 0 rgba(58, 97, 246, 0.25)' : undefined }}
    >
      {/* Fond gradient animé + scanline + particules */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Gradient mouvant plus sombre */}
        <div className="w-full h-full animate-gradient-move bg-[linear-gradient(120deg,_#18181b_0%,_#232336_40%,_#312e81_70%,_#701a75_100%)] opacity-50 blur-sm" />
        {/* Scanline/reflet */}
        <div className="absolute inset-0 w-full h-full pointer-events-none bg-scanline opacity-10 mix-blend-screen" />
        {/* Particules lumineuses */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-particle-glow`}
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.width}px`,
                height: `${p.height}px`,
                animationDelay: `${p.animationDelay}s`,
                opacity: p.opacity,
                filter: 'blur(1.5px) drop-shadow(0 0 8px #a78bfa)'
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo spectaculaire avec glow dynamique et spring pop */}
          <div className="relative group select-none animate-logo-spring">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-logo-glow" />
            {/* <div className="relative text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-rainbow bg-400pct animate-text-glow-pulse drop-shadow-[0_2px_32px_rgba(139,92,246,0.9)]">
              <span className="tracking-widest animate-logo-pop">NDJ</span>
            </div> */}
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-x-2 rounded-full bg-black/50 p-2 shadow-lg">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="relative flex items-center px-4 py-2 text-gray-200 hover:text-white font-semibold text-lg transition-all duration-300 group focus:outline-none animate-menu-explosion"
                  style={{ animationDelay: `${index * 0.13}s`, animationName: 'menuExplosion' }}
                >
                  <span className="relative z-10 flex items-center gap-1 animate-text-glow-subtle">
                    {t(`nav.${item.key}`)}
                  </span>
                  {/* Underline animé */}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full shadow-lg shadow-blue-400/30 animate-underline-pop" />
                  {/* Halo lumineux dynamique */}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-700 bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-pink-400/60 blur-2xl -z-10 animate-halo-fade" />
                  {/* Effet de lumière sur hover */}
                  <span className="absolute left-1/2 top-0 w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-90 blur-lg transition-all duration-700 -translate-x-1/2 animate-light-sweep" />
                </button>
              ))}
            </div>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="relative flex items-center space-x-2 px-4 py-3 rounded-xl bg-gray-800/80 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-gray-200 group overflow-hidden shadow-lg shadow-blue-400/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Globe className="relative z-10 w-5 h-5 group-hover:animate-spin-gentle" />
              <span className="relative z-10 text-sm font-bold animate-text-glow-subtle tracking-widest">{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-3 rounded-xl bg-gray-800/80 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-gray-200 group overflow-hidden shadow-lg shadow-blue-400/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? 
                <X className="relative z-10 w-6 h-6 group-hover:animate-spin-fast" /> : 
                <Menu className="relative z-10 w-6 h-6 group-hover:animate-bounce-gentle" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-blue-700/30 animate-fade-in-up bg-gray-900/95 rounded-xl shadow-2xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="relative flex items-center justify-center rounded-full bg-gray-800/80 p-4 mx-4 text-gray-200 hover:text-white font-semibold text-lg transition-all duration-300 group animate-menu-explosion hover:bg-gray-700/80 shadow-md"
                  style={{ animationDelay: `${index * 0.13}s`, animationName: 'menuExplosion' }}
                >
                  <span className="relative z-10 flex items-center gap-1 animate-text-glow-subtle">
                    {t(`nav.${item.key}`)}
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full shadow-lg shadow-blue-400/30 animate-underline-pop" />
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-80 transition-opacity duration-700 bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-pink-400/60 blur-2xl -z-10 animate-halo-fade" />
                  <span className="absolute left-1/2 top-0 w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-90 blur-lg transition-all duration-700 -translate-x-1/2 animate-light-sweep" />
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 