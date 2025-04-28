
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Progress } from '@/components/ui/progress';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: 'Cloud Computing (AWS, Azure)', level: 85 },
    { name: 'DevOps', level: 80 },
    { name: 'Docker', level: 90 },
    { name: 'Kubernetes', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 65 },
    { name: 'CI/CD Pipelines', level: 80 },
  ];

  const softSkills = [
    { name: 'Communication', level: 95 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Adaptability', level: 85 },
    { name: 'Project Management', level: 75 },
  ];

  const languages = [
    { name: 'English', level: 95 },
    { name: 'German', level: 90 },
    { name: 'Romanian', level: 100 },
    { name: 'Spanish', level: 60 },
  ];

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-center">
          {t('skills.title')}
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-6">{t('skills.tech')}</h2>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Soft Skills */}
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-6">{t('skills.soft')}</h2>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-6">{t('skills.languages')}</h2>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{language.name}</span>
                      <span>{language.level}%</span>
                    </div>
                    <Progress value={language.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
