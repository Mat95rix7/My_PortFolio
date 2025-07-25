"use client"

import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "NextMovie",
      des: "Application pour suivre l\'actualité cinema.",
      img: "/NextMovie.png",
      iconLists: ["/re.svg","/tail.svg", "/vercel.svg"],
      link: "https://my-cineapp.vercel.app/",
    },
    {
      id: 2,
      title: "Redouanemania",
      des: "Jeux de revision pour enfants.",
      img: "/RedouaneMania.png",
      iconLists: ["/re.svg","/ts.svg", "/git.svg"],
      link: "https://redouane18.vercel.app",
    },
    {
      id: 3,
      title: "Portfolio",
      des: "Mon portfolio personel.",
      img: "/Portfolio.png",
      iconLists: ["/re.svg","/next.js.svg", "/gsap.svg"],
      link: "https://mat95rix7.vercel.app/",
    }
  ];
  
  useEffect(() => {
    gsap.fromTo(
      ".projects-title-animation",
      { translateY: "50%", opacity: 0 },
      {
        translateY: "0%",
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 60%",
          end: "bottom 70%",
          scrub: false,
        },
      }
    );
    gsap.fromTo(
      ".projects-animation",
      { scale:0.5, opacity: 0 },
      {
        scale:1,
        opacity: 1,
        delay:0,
        ease: "power1.out",
        stagger: {
          each: 0.2,
          from: "start",
        },
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
<section id="project" className="min-h-screen flex items-center py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto px-4 mt-10 place-items-center">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <Tilt
            key={id}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={250}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="group bg-card text-card-foreground border border-border rounded-2xl shadow-lg hover:shadow-4xl transition-all duration-500 overflow-hidden hover:-translate-y-6 hover:scale-105 sm:h-[32rem] h-[26rem] lg:min-h-[24rem] flex flex-col items-center justify-center max-w-md w-full mx-auto projects-animation ring-0 hover:ring-4 hover:ring-primary/40"
          >
            <Image
              src={img}
              alt={title}
              width={800}
              height={400}
              className="rounded-xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 rotate-6 scale-85"
            />
            <h1 className="font-bold text-2xl md:text-3xl line-clamp-1 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-foreground text-center mb-3 px-4">{des}</p>
            <div className="flex flex-row gap-3 mb-4">
              {iconLists.map((icon, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center justify-center bg-secondary/80 border border-border rounded-full p-1.5 shadow-sm"
                >
                  <Image src={icon} alt="icon" width={20} height={20} className="object-contain" />
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto mb-4 flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase tracking-wide shadow-xl hover:scale-110 hover:shadow-blue-500/40 hover:shadow-2xl transition-all duration-300 animate-cta-glow relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir le projet
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <FaLocationArrow />
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm animate-cta-glow-bg" />
            </a>
          </Tilt>
        ))}
      </div>
    </div>
    </div>
</section>
  );
};

export default Projects;

