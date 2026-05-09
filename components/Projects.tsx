"use client"

import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import { projects } from "../data/projectsData";
import { useLayoutEffect, useRef, useState, useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { t, language } = useLanguage();
  const [cur, setCur] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const total = projects.length;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-title-animation",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: "#projects", start: "top 60%" } }
      );
      gsap.fromTo(
        ".carousel-wrapper",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: "#projects", start: "top 72%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  const animateTo = useCallback((newIdx: number, dir = 1) => {
    if (animating || newIdx === cur) return;
    setAnimating(true);
    const el = cardRef.current;
    if (!el) return;

    gsap.to(el, {
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.97,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        setCur(newIdx);
        gsap.fromTo(
          el,
          { x: dir > 0 ? 40 : -40, opacity: 0, scale: 0.97 },
          { x: 0, opacity: 1, scale: 1, duration: 0.35, ease: "power2.out",
            onComplete: () => setAnimating(false) }
        );
      },
    });
  }, [animating, cur]);

  const prev = () => animateTo((cur - 1 + total) % total, -1);
  const next = () => animateTo((cur + 1) % total, 1);

  const idxL = (cur - 1 + total) % total;
  const idxR = (cur + 1) % total;
  const project = projects[cur];

  return (
    <section id="projects" className="min-h-screen flex items-center py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="projects-title-animation text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("projects.title")}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Carousel */}
          <div className="carousel-wrapper flex flex-col items-center gap-6">

            {/* Compteur */}
            <p className="text-gray-600 text-xs tracking-[0.2em] uppercase tabular-nums font-medium">
              {String(cur + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>

            {/* Track */}
            <div className="flex items-center justify-center gap-3 w-full">

              {/* Aperçu gauche */}
              <div
                onClick={prev}
                className="hidden md:block shrink-0 cursor-pointer select-none"
                style={{ width: 160 }}
              >
                <div
                  className="relative overflow-hidden rounded-xl border border-gray-800 transition-all duration-500 hover:border-gray-600"
                  style={{
                    opacity: 0.3,
                    transform: "scale(0.9) rotateY(14deg) translateX(-8px)",
                    transformOrigin: "right center",
                    height: 300,
                  }}
                >
                  <Image
                    src={projects[idxL].img}
                    alt={projects[idxL].title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-950/60" />
                </div>
              </div>

              {/* ── Card centrale ── */}
              <div
                ref={cardRef}
                className="relative shrink-0 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-black/70"
                style={{
                  width: "clamp(350px, 52vw, 720px)",
                  willChange: "transform, opacity",
                }}
              >
                {/* Image — 60% */}
                <div
                  className="relative w-full"
                  style={{ height: "clamp(300px, 32vh, 380px)" }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 52vw"
                    priority
                    className="object-cover"
                  />
                  <div
                    className="absolute bottom-0 inset-x-0"
                    style={{
                      height: "40%",
                      background: "linear-gradient(to bottom, transparent, rgba(5,5,15,0.85))",
                    }}
                  />

                  {/* Badge numéro */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(8, 8, 8, 0.1)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {String(cur + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div
                  className="flex flex-col sm:flex-row gap-3 px-6 py-5 justify-between"
                  style={{ background: "#0a0a14" }}
                >
                  <div className="flex flex-col justify-center items-center gap-2">
                    {/* Titre */}
                    <h3 className="font-bold text-lg md:text-xl text-white leading-snug">
                      {project.title}
                    </h3>

                    {/* Description — pleine largeur */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {language === "fr" ? project.des.fr : project.des.en}
                    </p>
                  </div>

                  {/* Bouton + icônes — row sur desktop, colonne sur mobile */}
                  <div className="flex flex-row sm:flex-col sm:items-center justify-between gap-3 pt-1">

                    {/* Tech icons */}
                    <div className="flex gap-1.5 pt-1">
                      {project.iconLists.map((icon: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <img src={icon} alt="tech" className="w-3.5 h-3.5 object-contain" />
                        </span>
                      ))}
                    </div>

                    {/* Titre + lien */}
                    <div className="flex items-start justify-between gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 shrink-0 px-4 py-1.5 rounded-full text-white text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105 hover:brightness-110"
                        style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                      >
                        {t("projects.viewProject")}
                        <FaLocationArrow size={9} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ── fin card centrale ── */}

              {/* Aperçu droite */}
              <div
                onClick={next}
                className="hidden md:block shrink-0 cursor-pointer select-none"
                style={{ width: 160 }}
              >
                <div
                  className="relative overflow-hidden rounded-xl border border-gray-800 transition-all duration-500 hover:border-gray-600"
                  style={{
                    opacity: 0.3,
                    transform: "scale(0.9) rotateY(-14deg) translateX(8px)",
                    transformOrigin: "left center",
                    height: 300,
                  }}
                >
                  <Image
                    src={projects[idxR].img}
                    alt={projects[idxR].title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-950/60" />
                </div>
              </div>

            </div>

            {/* Navigation */}
            <div className="flex items-center gap-5 mt-2">
              <button
                onClick={prev}
                disabled={animating}
                className="w-10 h-10 rounded-full border border-gray-700 bg-gray-900 hover:bg-gray-800 hover:border-blue-500/60 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-25 disabled:cursor-not-allowed"
                aria-label="Précédent"
              >
                <FaChevronLeft size={13} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {projects.map((_: unknown, i: number) => (
                  <button
                    key={i}
                    onClick={() => animateTo(i, i > cur ? 1 : -1)}
                    className="rounded-full h-1.5 transition-all duration-300"
                    style={{
                      width: i === cur ? 28 : 6,
                      background:
                        i === cur
                          ? "linear-gradient(90deg, #60a5fa, #a78bfa)"
                          : "rgba(255,255,255,0.2)",
                    }}
                    aria-label={`Projet ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={animating}
                className="w-10 h-10 rounded-full border border-gray-700 bg-gray-900 hover:bg-gray-800 hover:border-purple-500/60 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-25 disabled:cursor-not-allowed"
                aria-label="Suivant"
              >
                <FaChevronRight size={13} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};