
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
    'nav.story': 'Professional Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Home page
    'home.greeting': 'Hello, I\'m',
    'home.name': 'Marian-Alexandru Tugui',
    'home.title': 'International Business Informatics Student',
    'home.subtitle': ' Cloud Computing, DevOps and Web Development',
    'home.cta': 'Learn More',
    'home.about': 'About Me',
    'home.about.text': 'I am an International Business Informatics student with a  background in social sciences,  focusing on Cloud Computing and DevOps. My journey across different disciplines gives me a distinctive perspective in the tech world.',
    
    // Professional Story
    'story.title': 'My Professional Experience',
    'story.intro': 'My experience',
    'story.p1': 'My journey began in the world of philology, where I developed a deep understanding of language structures and communication.',
    'story.p2': 'This foundation in analytical thinking provided a unique perspective when I transitioned to the field of Information Technology.',
    'story.p3': 'Today, I specialize in Cloud Computing, DevOps and Web Development, combining technical expertise with strong communication skills.',
    'story.p4': ' Colaborated closely with experienced trainers to deliver practical cloud and DevOps trainings. Supervised group projects, moderated discussions, and analyzed sample solutions. Created and updated training materials, such as exercises and project assignments using AWS, Docker, and Linux. Provided tutoring for small groups, including the preparation and documentation of learning content. Managed regular feedback on homework (timely, detailed, solution-oriented) and offered targeted support for participants. Contributed to an automation project by designing and implementing various Python exercises to sustainably boost participants learning progress.',
    'story.p5': 'API Testing: Planned, executed, and analyzed API tests to ensure functionality, performance, and security of APIs. Programming Languages: Proficient in JavaScript. Automation: Developed and implemented automated tests for RESTful APIs using tools like Postman. Bug Analysis: Identified and documented bugs and their root causes through in-depth examination of test data and logs.',
    'story.p6': 'Client Support: Assisted in advising and supporting clients in a l matters of financial planning, retirement provisions, and asset building. Communication Skils: Demonstrated strong interpersonal skils and the ability to communicate effectively with clients and coleagues. Financial Analysis: Researched and analyzed various financial products and services to support wealth advisors.',
    // Skills
    'skills.title': 'My Skills',
    'skills.tech': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    
    // Education
    'education.title': 'Education & Development',
    'education.degree': 'International Information Systems B.Sc',
    'education.university': 'University',
    'education.period': 'Current',
    'education.courses': 'Additional Courses',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.view': 'View Project',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Feel free to reach out for questions and opportunities ',
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
    'home.title': 'Student der Internationale Wirtschaftsinformatik',
    'home.subtitle': 'Cloud Computing, DevOps und Web Development',
    'home.cta': 'Mehr erfahren',
    'home.about': 'Über mich',
    'home.about.text': 'Ich bin ein Student der Internationale Wirtschaftsinformatik mit einem  Hintergrund in der Sozialwissenschaften, der sich jetzt auf Cloud Computing, DevOps und Web Development konzentriert. Meine Reise durch verschiedene Disziplinen gibt mir eine besondere Perspektive in der Tech-Welt.',
    
    // Professional Story
    'story.title': 'Mein beruflicher Werdegang',
    'story.intro': 'Meine Erfahrung',
    'story.p1': 'Meine Karriere begann in der Welt der Philologie, wo ich ein tiefes Verständnis für Sprachstrukturen und Kommunikation entwickelte.',
    'story.p2': 'Diese Grundlage im analytischen Denken bot eine einzigartige Perspektive, als ich in den Bereich der Informationstechnologie wechselte.',
    'story.p3': 'Heute spezialisiere ich mich auf Cloud Computing und DevOps und kombiniere technisches Fachwissen mit starken Kommunikationsfähigkeiten.',
    'story.p4': 'Enge Zusammenarbeit mit erfahrenen Trainern bei der Durchführung praxisnaher Cloud- und DevOps-Schulungen. Betreuung von Gruppenprojekten, Moderation von Diskussionen und Analyse von Musterlösungen. Erstellung und Aktualisierung von Schulungsunterlagen wie Übungen und Projektaufgaben unter Verwendung von AWS, Docker und Linux. Nachhilfe für Kleingruppen, einschließlich Vorbereitung und Dokumentation von Lerninhalten. Regelmäßiges Feedback zu Hausaufgaben (zeitnah, detailliert, lösungsorientiert) und gezielte Unterstützung der Teilnehmer. Beitrag zu einem Automatisierungsprojekt durch Konzeption und Implementierung verschiedener Python-Übungen zur nachhaltigen Förderung des Lernfortschritts der Teilnehmer.' ,
    'story.p5': 'API-Tests: Planung, Durchführung und Analyse von API-Tests zur Sicherstellung von Funktionalität, Leistung und Sicherheit von APIs. Programmiersprachen: Gute Kenntnisse in JavaScript. Automatisierung: Entwicklung und Implementierung automatisierter Tests für RESTful-APIs mit Tools wie Postman. Fehleranalyse: Identifizierung und Dokumentation von Fehlern und deren Ursachen durch eingehende Prüfung von Testdaten und Protokollen.' ,
    'story.p6': 'Kundenbetreuung: Unterstützung bei der Beratung und Betreuung von Kunden in allen Fragen der Finanzplanung, Altersvorsorge und Vermögensbildung. Kommunikationsfähigkeiten: Nachweis starker zwischenmenschlicher Fähigkeiten und der Fähigkeit, effektiv mit Kunden und Kollegen zu kommunizieren. Finanzanalyse: Recherche und Analyse verschiedener Finanzprodukte und -dienstleistungen zur Unterstützung von Vermögensberatern.',

    
    // Skills
    'skills.title': 'Meine Fähigkeiten',
    'skills.tech': 'Technische Fähigkeiten',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Sprachen',
    
    // Education
    'education.title': 'Ausbildung & Entwicklung',
    'education.degree': 'Internationale Wirtschaftsinformatik B.Sc',
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
