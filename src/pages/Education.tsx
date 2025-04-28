
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.degree'),
      institution: 'Technische Hochschule Augsburg',
      period: '2022 - Present',
      description: 'International IT specialists for information systems work at the interface between different areas of knowledge and therefore require an understanding of the disciplines involved in the International Information Systems degree program: business, computer science and internationality.',
    },
    {
      degree: 'Exchange Semester',
      institution: 'University Abat Oliba CEU, Barcelona',
      period: '02.2024 - 07.2024',
      description: 'During my Erasmus exchange semester at the renowned Abat Oliba CEU University in Barcelona, I deepened my understanding of strategic business approaches and developed essential skills in Strategic Management, Strategic Marketing, and Innovation and Knowledge Management. These courses idealy complemented my main studies in International Business Informatics and a lowed me to effectively combine technological and business perspectives.',
    },
    {
      degree: 'Baccalaureate',
      institution: 'High School "Eudoxiu Hurmuzachi", Radauti',
      period: '2015 - 2019',
      description: 'Focus on linguistics and communication',
    }
  ];

  const courses = [
    {
      name: 'AZ-900',
      provider: 'Microsoft',
      year: '2022',
    }
  ];

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-center">
          {t('education.title')}
        </h1>

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Formal Education */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-6 border-b pb-2">Formal Education</h2>
            <div className="space-y-8">
              {education.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{item.degree}</CardTitle>
                        <CardDescription>{item.institution}</CardDescription>
                      </div>
                      <span className="text-sm text-gray-500">{item.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Courses */}
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-6 border-b pb-2">{t('education.courses')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>{course.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{course.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
