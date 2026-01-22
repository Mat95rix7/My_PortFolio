'use client';
import React, { useMemo, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Zap, Star, Sparkles, Rocket, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import gsap from "gsap";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function round3(n: number) {
  return Math.round(n * 1000) / 1000;
}

// Composant FlyingName animé pour prénom + nom
const FlyingName = ({ first, last }: { first: string; last: string }) => {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const colors = ["#60a5fa", "#a78bfa", "#06b6d4"]; // bleu, violet, cyan
  useEffect(() => {
    [...first, ...last].forEach((char, i) => {
      const el = lettersRef.current[i];
      if (!el) return;
      // Explosion/Assemble : chaque lettre part d'une position aléatoire
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 1000,
          scale: 0.2,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.5,
          delay: i * 0.09,
          ease: "expo.out",
        }
      );
    });
  }, [first, last]);
  return (
    <h1 className="text-5xl md:text-7xl font-black mb-4 flex justify-center">
      {first.split("").map((char, i) => (
        <span
          key={i}
          ref={el => { lettersRef.current[i] = el; }}
          style={{ color: colors[i % colors.length] }}
          className="inline-block font-black"
        >
          {char}
        </span>
      ))}
      <span className="mx-2" />
      {last.split("").map((char, i) => (
        <span
          key={first.length + i}
          ref={el => { lettersRef.current[first.length + i] = el; }}
          style={{ color: colors[(first.length + i) % colors.length] }}
          className="inline-block font-black"
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const firstName = t('hero.firstname');
  const lastName = t('hero.lastname');

  // Génération déterministe des particules magiques avec arrondi
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const left = round3(seededRandom(i + 1) * 100);
      const top = round3(seededRandom(i + 100) * 100);
      const animationDelay = round3(seededRandom(i + 200) * 5);
      const animationDuration = round3(2 + seededRandom(i + 300) * 4);
      const opacity = round3(0.5 + seededRandom(i + 400) * 0.5);
      const type = i % 5;
      return { left, top, animationDelay, animationDuration, opacity, type };
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/MyCV_Naadji_Djamel.pdf';
    link.download = 'MyCV_Naadji_Djamel.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-900 py-10 sm:py-14">
      {/* Background spectaculaire (particules, cartes, formes, blobs, etc.) - UNIQUEMENT SUR DESKTOP */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none select-none">
        {/* Particules magiques avec différentes tailles - FIXES */}
        <div className="absolute inset-0">
          {particles.map((p, i) => {
            let className = '';
            if (p.type === 0) className = 'w-4 h-4 bg-linear-to-r from-blue-400 to-cyan-400 animate-float-magical';
            else if (p.type === 1) className = 'w-2 h-2 bg-linear-to-r from-purple-400 to-pink-400 animate-float-sparkle';
            else if (p.type === 2) className = 'w-3 h-3 bg-linear-to-r from-pink-400 to-red-400 animate-float-bounce';
            else if (p.type === 3) className = 'w-1 h-1 bg-yellow-400 animate-twinkle';
            else className = 'w-2 h-2 bg-linear-to-r from-cyan-400 to-blue-400 animate-float-wave';
            return (
              <div
                key={i}
                className={`absolute rounded-full ${className}`}
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  animationDelay: `${p.animationDelay}s`,
                  animationDuration: `${p.animationDuration}s`,
                  opacity: `${p.opacity}`,
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }}
              />
            );
          })}
        </div>

        {/* Cartes flottantes animées - FIXES */}
        <div className="absolute inset-0">
          {/* Carte de code */}
          <div className="absolute top-20 left-10 bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-4 rounded-xl shadow-2xl animate-float-card hover:scale-110 transition-transform duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="text-xs text-gray-300 font-mono">
              <div className="text-blue-400">const</div>
              <div className="text-purple-400">developer = &quot;passionate&quot;</div>
            </div>
          </div>

          {/* Carte de stats */}
          <div className="absolute top-32 right-16 bg-linear-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 p-4 rounded-xl shadow-2xl animate-float-card-reverse">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 animate-count-up">100%</div>
              <div className="text-xs text-gray-300">Motivation</div>
            </div>
          </div>

          {/* Carte de technologie */}
          <div className="absolute bottom-32 left-20 bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-3 rounded-xl shadow-2xl animate-float-card-slow">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">React</span>
            </div>
          </div>

          {/* Carte de créativité */}
          <div className="absolute bottom-20 right-32 bg-linear-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-pink-400/30 p-3 rounded-xl shadow-2xl animate-float-card-bounce">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-sm text-gray-300">Créatif</span>
            </div>
          </div>
        </div>

        {/* Formes géométriques spectaculaires - FIXES */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-1/4 w-32 h-32 border-2 border-blue-400/30 rotate-45 animate-spin-slow-glow"></div>
          <div className="absolute top-40 right-1/4 w-24 h-24 border-2 border-purple-400/30 animate-pulse-glow"></div>
          <div className="absolute bottom-40 left-1/3 w-20 h-20 border-2 border-pink-400/30 rotate-12 animate-bounce-glow"></div>
          <div className="absolute bottom-16 right-1/3 w-28 h-28 border-2 border-cyan-400/30 -rotate-12 animate-spin-reverse-glow"></div>
          
          {/* Hexagones */}
          <div className="absolute top-1/3 left-16 w-16 h-16 border-2 border-yellow-400/30 transform rotate-30 animate-float-hex"></div>
          <div className="absolute bottom-1/3 right-16 w-12 h-12 border-2 border-green-400/30 transform -rotate-30 animate-float-hex-reverse"></div>
        </div>

        {/* Icônes flottantes magiques - FIXES */}
        <div className="absolute inset-0">
          <Code className="absolute top-24 left-1/3 w-8 h-8 text-blue-400/60 animate-float-icon-glow" />
          <Zap className="absolute top-1/2 right-1/4 w-7 h-7 text-yellow-400/60 animate-float-icon-electric" />
          <Star className="absolute bottom-1/4 left-1/4 w-6 h-6 text-purple-400/60 animate-float-icon-twinkle" />
          <Rocket className="absolute top-1/4 right-1/3 w-8 h-8 text-red-400/60 animate-float-icon-rocket" />
          <Heart className="absolute bottom-1/3 left-2/3 w-6 h-6 text-pink-400/60 animate-float-icon-heart" />
          <Sparkles className="absolute top-2/3 right-1/5 w-7 h-7 text-cyan-400/60 animate-float-icon-sparkle" />
        </div>

        {/* Blobs animés spectaculaires - FIXES */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-spectacular"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-linear-to-r from-purple-500/25 to-pink-500/25 rounded-full mix-blend-multiply filter blur-xl animate-blob-spectacular animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-linear-to-r from-pink-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-spectacular animation-delay-4000"></div>
        <div className="absolute bottom-20 right-32 w-64 h-64 bg-linear-to-r from-cyan-500/15 to-blue-500/15 rounded-full mix-blend-multiply filter blur-xl animate-blob-spectacular animation-delay-6000"></div>

        {/* Grille animée - FIXE */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-pulse"></div>

        {/* Lignes d'énergie - FIXES */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-400/60 to-transparent animate-energy-flow"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-400/60 to-transparent animate-energy-flow-reverse"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-pink-400/40 to-transparent animate-energy-flow animation-delay-3000"></div>

          <div className="absolute left-1/4 top-0 w-0.5 h-full bg-linear-to-b from-transparent via-cyan-400/60 to-transparent animate-energy-flow-vertical"></div>
          <div className="absolute right-1/4 top-0 w-0.5 h-full bg-linear-to-b from-transparent via-yellow-400/60 to-transparent animate-energy-flow-vertical-reverse"></div>
        </div>

        {/* Cercles d'énergie - FIXES */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-blue-400/50 rounded-full animate-energy-pulse"></div>
          <div className="absolute top-2/3 right-1/5 w-4 h-4 bg-purple-400/50 rounded-full animate-energy-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-2/3 w-8 h-8 bg-pink-400/40 rounded-full animate-energy-pulse animation-delay-2000"></div>
          <div className="absolute top-1/5 left-3/4 w-5 h-5 bg-cyan-400/50 rounded-full animate-energy-pulse animation-delay-3000"></div>
        </div>

        {/* Système orbital complexe - POSITION FIXE AU CENTRE - INDÉPENDANT DE LA SOURIS */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-96 h-96">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-orbit-fast shadow-glow-blue"></div>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-linear-to-r from-purple-400 to-pink-400 rounded-full animate-orbit-medium animation-delay-1000 shadow-glow-purple"></div>
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-linear-to-r from-pink-400 to-red-400 rounded-full animate-orbit-slow animation-delay-2000 shadow-glow-pink"></div>
            <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-linear-to-r from-yellow-400 to-orange-400 rounded-full animate-orbit-reverse animation-delay-3000 shadow-glow-yellow"></div>
          </div>
        </div>

        {/* Rayons de lumière - FIXES */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-1 h-96 bg-linear-to-t from-transparent via-blue-400/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-light-ray"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-96 bg-linear-to-t from-transparent via-purple-400/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-light-ray animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-96 bg-linear-to-t from-transparent via-pink-400/20 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-90 animate-light-ray animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-6">
        {/* Greeting avec effet spectaculaire */}
        <div className="mb-4 opacity-100">
          <span className="text-xl text-gray-200 font-semibold">
            {t('hero.greeting')}
          </span>
        </div>

        {/* Nom avec effet flying letters en cascade, rotation et gradient */}
        <FlyingName first={firstName} last={lastName} />

        {/* Titre avec animation spectaculaire */}
        <h2 className="text-lg md:text-2xl mb-4 opacity-100 animation-delay-400 text-center">
          <span className="relative inline-block">
            <span className="relative text-gary-200 font-bold">
              {t('hero.title')}
            </span>
          </span>
        </h2>

        {/* Sous-titre aéré */}
        <p className="text-lg text-center text-gray-400 mb-6 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-600 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* Boutons d'action (plus grands et plus animés) */}
        <div className="flex flex-wrap gap-4 justify-center mb-6 animate-fade-in-up animation-delay-800">
          {/* Bouton de téléchargement de CV */}
            <button
              onClick={handleDownloadCV}
              className="px-10 py-4 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:scale-110 hover:shadow-blue-500/40 hover:shadow-2xl transition-all duration-300 animate-cta-glow cursor-pointer relative overflow-hidden group"
            >
              {/* <Download size={20} /> */}
              <span className="relative z-10">{t('hero.cv')}</span>
              <span className="absolute inset-0 bg-linear-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm animate-cta-glow-bg" />
            </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-10 py-4 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:scale-110 hover:shadow-blue-500/40 hover:shadow-2xl transition-all duration-300 animate-cta-glow cursor-pointer relative overflow-hidden group"
          >
            <span className="relative z-10">{t('hero.cta')}</span>
            <span className="absolute inset-0 bg-linear-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm animate-cta-glow-bg" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl hover:scale-110 hover:shadow-blue-500/40 hover:shadow-2xl transition-all duration-300 animate-cta-glow cursor-pointer relative overflow-hidden group"
          >
            <span className="relative z-10">{t('hero.contact')}</span>
            <span className="absolute inset-0 bg-linear-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm animate-cta-glow-bg" />
          </button>
        </div>

        {/* Liens sociaux (bulles magiques) */}
        <div className="flex items-center justify-center space-x-8 opacity-0 animate-fade-in-up animation-delay-1000">
          {[
            { icon: Github, href: 'https://github.com', color: 'hover:text-gray-300 hover:shadow-gray-500/50', glow: 'hover:shadow-glow-gray' },
            { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400 hover:shadow-blue-500/50', glow: 'hover:shadow-glow-blue' },
            { icon: Mail, href: 'mailto:contact@email.com', color: 'hover:text-red-400 hover:shadow-red-500/50', glow: 'hover:shadow-glow-red' }
          ].map(({ icon: Icon, href, color, glow }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-4 rounded-full bg-gray-800 border border-gray-700 text-gray-400 ${color} ${glow} transition-all duration-300 hover:scale-125 hover:shadow-2xl group overflow-hidden animate-social-float-mega`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full animate-pulse-glow-mega"></div>
              <Icon className="relative z-10 w-6 h-6 group-hover:animate-bounce-ultra" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;