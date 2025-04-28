
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'de';

// Define context value type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Create a hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Translation data for both languages
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.story': 'Professional Story',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Home page
    'home.greeting': 'Hello, I\'m',
    'home.name': 'Marian-Alexandru Tugui',
    'home.title': 'International Business Informatics Student',
    'home.subtitle': 'From Philology to Cloud Computing & DevOps',
    'home.cta': 'Learn More',
    'home.about': 'About Me',
    'home.about.text': 'I am an International Business Informatics student with a unique background in philology, now focusing on Cloud Computing and DevOps. My journey across different disciplines gives me a distinctive perspective in the tech world.',
    
    // Professional Story
    'story.title': 'My Professional Story',
    'story.intro': 'A journey from linguistics to technology',
    'story.p1': 'My career began in the world of philology, where I developed a deep understanding of language structures and communication.',
    'story.p2': 'This foundation in analytical thinking provided a unique perspective when I transitioned to the field of Information Technology.',
    'story.p3': 'Today, I specialize in Cloud Computing and DevOps, combining technical expertise with strong communication skills.',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.tech': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    
    // Education
    'education.title': 'Education & Development',
    'education.degree': 'International Business Informatics',
    'education.university': 'University',
    'education.period': 'Current',
    'education.courses': 'Additional Courses',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.view': 'View Project',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Feel free to reach out for opportunities or just to say hello',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.name': 'Name',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.story': 'Beruflicher Werdegang',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Ausbildung',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    
    // Home page
    'home.greeting': 'Hallo, ich bin',
    'home.name': 'Marian-Alexandru Tugui',
    'home.title': 'Student der International Business Informatics',
    'home.subtitle': 'Von der Philologie zu Cloud Computing & DevOps',
    'home.cta': 'Mehr erfahren',
    'home.about': 'Über mich',
    'home.about.text': 'Ich bin ein Student der International Business Informatics mit einem einzigartigen Hintergrund in der Philologie, der sich jetzt auf Cloud Computing und DevOps konzentriert. Meine Reise durch verschiedene Disziplinen gibt mir eine besondere Perspektive in der Tech-Welt.',
    
    // Professional Story
    'story.title': 'Mein beruflicher Werdegang',
    'story.intro': 'Ein Weg von der Linguistik zur Technologie',
    'story.p1': 'Meine Karriere begann in der Welt der Philologie, wo ich ein tiefes Verständnis für Sprachstrukturen und Kommunikation entwickelte.',
    'story.p2': 'Diese Grundlage im analytischen Denken bot eine einzigartige Perspektive, als ich in den Bereich der Informationstechnologie wechselte.',
    'story.p3': 'Heute spezialisiere ich mich auf Cloud Computing und DevOps und kombiniere technisches Fachwissen mit starken Kommunikationsfähigkeiten.',
    
    // Skills
    'skills.title': 'Meine Fähigkeiten',
    'skills.tech': 'Technische Fähigkeiten',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Sprachen',
    
    // Education
    'education.title': 'Ausbildung & Entwicklung',
    'education.degree': 'International Business Informatics',
    'education.university': 'Universität',
    'education.period': 'Aktuell',
    'education.courses': 'Zusätzliche Kurse',
    
    // Projects
    'projects.title': 'Meine Projekte',
    'projects.view': 'Projekt ansehen',
    
    // Contact
    'contact.title': 'Kontaktieren Sie mich',
    'contact.subtitle': 'Melden Sie sich gerne für Möglichkeiten oder einfach nur um Hallo zu sagen',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.name': 'Name',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
  }
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
