
import { contactInfo } from './contact';

export const translations = {
  nav: {
    home:     { fr: 'Accueil',    en: 'Home' },
    about:    { fr: 'À propos',   en: 'About' },
    skills:   { fr: 'Compétences', en: 'Skills' },
    projects: { fr: 'Projets',    en: 'Projects' },
    contact:  { fr: 'Contact',    en: 'Contact' }
  },
  hero: {
    greeting:  { fr: 'Bonjour, je suis',                                                          en: 'Hello, I am' },
    firstname: { fr: contactInfo.firstname,                                                        en: contactInfo.firstname },
    lastname:  { fr: contactInfo.lastname,                                                         en: contactInfo.lastname },
    title:     { fr: 'Concepteur Développeur d\'Applications - Full Stack',                        en: 'Application Developer Designer' },
    subtitle:  { fr: 'Passionné par le code et prêt à créer des expériences web exceptionnelles', en: 'Passionate about code and ready to create exceptional web experiences' },
    cv:        { fr: 'Télécharger mon CV',                                                         en: 'Download my CV' },
    cta:       { fr: 'Voir mes projets',                                                           en: 'View my projects' },
    contact:   { fr: 'Me contacter',                                                               en: 'Contact me' }
  },
  about: {
    title:       { fr: 'À propos de moi',                                                                                                                                                                                                                        en: 'About me' },
    subtitle:    { fr: 'Développeur motivé et passionné',                                                                                                                                                                                                        en: 'Motivated and passionate developer' },
    description: { fr: 'Développeur passionné par les technologies web modernes, je me distingue par ma motivation, ma curiosité et ma volonté constante d\'apprendre. Prêt à m\'investir pleinement dans des projets ambitieux et à apporter une réelle valeur ajoutée à votre équipe.', en: 'Passionate web developer with a strong interest in modern technologies. I stand out for my motivation, curiosity, and continuous desire to learn. Ready to fully invest in ambitious projects and bring real value to your team.' },
    experience:  { fr: 'Ans d\'apprentissage', en: 'Years of learning' },
    projects:    { fr: 'Projets réalisés',      en: 'Projects completed' },
    motivation:  { fr: 'Motivé',                en: 'Motivated' }
  },
  skills: {
    title:     { fr: 'Mes compétences',                    en: 'My skills' },
    subtitle:  { fr: 'Technologies que j\'apprends et maîtrise', en: 'Technologies I\'m learning and mastering' },
    frontend:  { fr: 'Frontend',        en: 'Frontend' },
    backend:   { fr: 'Backend',         en: 'Backend' },
    tools:     { fr: 'Outils & DevOps', en: 'Tools & DevOps' },
    databases: { fr: 'Bases de données', en: 'Databases' }
  },
  projects: {
    title:       { fr: 'Mes projets',          en: 'My projects' },
    subtitle:    { fr: 'Projets et réalisations', en: 'Learning projects and achievements' },
    viewProject: { fr: 'Voir plus',       en: 'View more' }
  },
  contact: {
    title:    { fr: 'Contactez-moi',                   en: 'Contact me' },
    subtitle: { fr: 'Discutons de votre prochain projet', en: 'Let\'s discuss your next project' },
    name:     { fr: 'Nom',     en: 'Name' },
    email:    { fr: 'Email',   en: 'Email' },
    subject:  { fr: 'Sujet',   en: 'Subject' },
    message:  { fr: 'Message', en: 'Message' },
    send:     { fr: 'Envoyer', en: 'Send' },
    sending:  { fr: 'Envoi en cours...', en: 'Sending...' },
    info: {
      title:       { fr: 'Informations de contact', en: 'Contact information' },
      description: { fr: 'N\'hésitez pas à me contacter pour discuter de vos projets ou pour toute collaboration.', en: 'Feel free to contact me to discuss your projects or for any collaboration.' },
      location:    { fr: contactInfo.location, en: contactInfo.location },
      phone:       { fr: contactInfo.phone,    en: contactInfo.phone },
      email:       { fr: contactInfo.email,    en: contactInfo.email }
    },
    validation: {
      nameMin:      { fr: 'Le nom doit contenir au moins 2 caractères',    en: 'Name must contain at least 2 characters' },
      emailInvalid: { fr: 'L\'email est invalide',                          en: 'Email is invalid' },
      subjectMin:   { fr: 'Le sujet doit contenir au moins 3 caractères',  en: 'Subject must contain at least 3 characters' },
      messageMin:   { fr: 'Le message doit contenir au moins 10 caractères', en: 'Message must contain at least 10 characters' }
    },
    success:  { fr: 'Message envoyé avec succès !',              en: 'Message sent successfully!' },
    error:    { fr: 'Erreur lors de l\'envoi du message.',       en: 'Error sending message.' },
    errorTry: { fr: 'Une erreur est survenue. Veuillez réessayer.', en: 'An error occurred. Please try again.' }
  },
  footer: {
    contact:  { fr: 'Information de Contact',                                                          en: 'Contact Information' },
    subtitle: { fr: 'Développeur Full Stack passionné par la création d\'expériences digitales innovantes.', en: 'Full Stack Developer passionate about creating innovative digital experiences.' },
    rights:   { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
    made:     { fr: 'Fait avec',             en: 'Made with' },
    by:       { fr: 'par',                   en: 'by' }
  }
};