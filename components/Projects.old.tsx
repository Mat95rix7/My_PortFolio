"use client"

import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { projects } from "../data/projectsData";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { t, language } = useLanguage();



useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".projects-title-animation",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      ".projects-animation",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          // scrub: true,
        },
      }
    );
  });

  return () => ctx.revert();
}, []);

  return (
<section id="projects" className="min-h-screen flex items-center py-32 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="projects-title-animation text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 mt-14 place-items-center">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <Tilt
            key={id}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={250}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="group bg-card text-card-foreground border border-border rounded-2xl shadow-lg hover:shadow-4xl transition-all duration-500 overflow-hidden hover:-translate-y-6 hover:scale-105  flex flex-col items-center justify-center max-w-md w-full mx-auto projects-animation ring-0 hover:ring-4 hover:ring-primary/40"
          >
            <Image
              src={img}
              alt={title}
              width={800}
              height={400}
              className="rounded-xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 rotate-6 scale-85"
            />
            <h1 className="font-bold text-2xl md:text-3xl line-clamp-1 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-foreground text-center mb-3 px-4">{language === 'fr' ? des.fr : des.en}</p>
            <div className="flex flex-row gap-3 mb-4">
              {iconLists.map((icon, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center justify-center bg-secondary/80 border border-border rounded-full p-1.5 shadow-sm"
                >
                  {/* <Image src={icon} alt="icon" width={20} height={20} className="w-5 h-auto object-contain" /> */}
                  <img src={icon} alt="icon" className="w-5 h-auto object-contain" />
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto mb-4 flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold uppercase tracking-wide shadow-xl hover:scale-110 hover:shadow-blue-500/40 hover:shadow-2xl transition-all duration-300 animate-cta-glow relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir le projet
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <FaLocationArrow />
                </span>
              </span>
              <span className="absolute inset-0 bg-linear-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm animate-cta-glow-bg" />
            </a>
          </Tilt>
        ))}
      </div>
    </div>
    </div>
</section>
  );
};