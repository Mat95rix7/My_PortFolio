'use client';
import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, ShoppingCart, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  // Un seul objet projet NextMovie utilisé trois fois
  const nextMovieProject = {
    title: "NextMovie",
    description: "Application de gestion de films moderne avec Next.js.",
    url: "https://my-cineapp.vercel.app/",
  };

  const projects = [
    nextMovieProject, 
    nextMovieProject, 
    nextMovieProject,
    nextMovieProject
  ];

  function ProjectImage({ url, title }: { url: string; title: string }) {
    const [error, setError] = useState(false);
    return (
      <img
        src={
          error
            ? '/default-project-image.png'
            : `https://image.thum.io/get/width/800/crop/800/${url}`
        }
        alt={`Aperçu de ${title}`}
        className="w-full h-48 object-cover rounded mb-4"
        onError={() => setError(true)}
      />
    );
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-gray-900">
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <ProjectImage url={project.url} title={project.title} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-2">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Voir le site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 