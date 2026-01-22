import { contactInfo } from './contact';
export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      firstname: contactInfo.firstname,
      lastname: contactInfo.lastname,
      title: 'Concepteur Développeur d\'Applications - Full Stack',
      subtitle: 'Passionné par le code et prêt à créer des expériences web exceptionnelles',
      cv: 'Télécharger mon CV',
      cta: 'Voir mes projets',
      contact: 'Me contacter'
    },
    about: {
      title: 'À propos de moi',
      subtitle: 'Développeur motivé et passionné',
      description: 'Développeur passionné par les technologies web modernes, je me distingue par ma motivation, ma curiosité et ma volonté constante d\'apprendre. Prêt à m\'investir pleinement dans des projets ambitieux et à apporter une réelle valeur ajoutée à votre équipe.',
      experience: 'Ans d\'apprentissage',
      projects: 'Projets réalisés',
      motivation: 'Motivé'
    },
    skills: {
      title: 'Mes compétences',
      subtitle: 'Technologies que j\'apprends et maîtrise',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Outils & DevOps',
      databases: 'Bases de données'
    },
    projects: {
      title: 'Mes projets',
      subtitle: 'Projets et réalisations',
      viewProject: 'Voir le projet',
      viewCode: 'Voir le code',
      project1: {
        title: 'E-commerce Platform',
        description: 'Plateforme e-commerce moderne avec React, Node.js et Stripe'
      },
      project2: {
        title: 'Task Management App',
        description: 'Application de gestion de tâches avec React Native et Firebase'
      },
      project3: {
        title: 'Portfolio Website',
        description: 'Site portfolio responsive avec animations et multilingue'
      }
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Discutons de votre prochain projet',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      info: {
        title: 'Informations de contact',
        description: 'N\'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration.',
        location: contactInfo.location,
        phone: contactInfo.phone,
        email: contactInfo.email
      },
      validation: {
        nameMin: 'Le nom doit contenir au moins 2 caractères',
        emailInvalid: 'L\'email est invalide',
        subjectMin: 'Le sujet doit contenir au moins 3 caractères',
        messageMin: 'Le message doit contenir au moins 10 caractères'
      },
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi du message.',
      errorTry: 'Une erreur est survenue. Veuillez réessayer.'
    },
    footer: {
      rights: 'Tous droits réservés.',
      made: 'Fait avec',
      by: 'par'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      firstname: contactInfo.firstname,
      lastname: contactInfo.lastname,
      title: 'Application Developer Designer',
      subtitle: 'Passionate about code and ready to create exceptional web experiences',
      cv: 'Download my CV',
      cta: 'View my projects',
      contact: 'Contact me'
    },
    about: {
      title: 'About me',
      subtitle: 'motivated and passionate developer',
      description: 'Passionate web developer with a strong interest in modern technologies. I stand out for my motivation, curiosity, and continuous desire to learn. Ready to fully invest in ambitious projects and bring real value to your team.',
      experience: 'Years of learning',
      projects: 'Projects completed',
      motivation: 'Motivated'
    },
    skills: {
      title: 'My skills',
      subtitle: 'Technologies I\'m learning and mastering',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & DevOps',
      databases: 'Databases'
    },
    projects: {
      title: 'My projects',
      subtitle: 'Learning projects and achievements',
      viewProject: 'View project',
      viewCode: 'View code',
      project1: {
        title: 'E-commerce Platform',
        description: 'Modern e-commerce platform with React, Node.js and Stripe'
      },
      project2: {
        title: 'Task Management App',
        description: 'Task management application with React Native and Firebase'
      },
      project3: {
        title: 'Portfolio Website',
        description: 'Responsive portfolio website with animations and multilingual support'
      }
    },
    contact: {
      title: 'Contact me',
      subtitle: 'Let\'s discuss your next project',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      info: {
        title: 'Contact information',
        description: 'Feel free to contact me to discuss your projects or for any collaboration.',
        location: contactInfo.location,
        phone: contactInfo.phone,
        email: contactInfo.email
      },
      validation: {
        nameMin: 'Name must contain at least 2 characters',
        emailInvalid: 'Email is invalid',
        subjectMin: 'Subject must contain at least 3 characters',
        messageMin: 'Message must contain at least 10 characters'
      },
      success: 'Message sent successfully!',
      error: 'Error sending message.',
      errorTry: 'An error occurred. Please try again.'
    },
    footer: {
      rights: 'All rights reserved.',
      made: 'Made with',
      by: 'by'
    }
  }
};