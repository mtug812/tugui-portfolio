
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Story: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-center">
          {t('story.title')}
        </h1>
        {/* <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          {t('story.intro')}
        </p> */}

        <div className="max-w-3xl mx-auto space-y-16">
          {/* Journey Timeline */}
          {/* <div className="relative border-l-2 border-primary pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="font-heading font-semibold text-2xl mb-4">Philology Background</h3>
            <p className="text-gray-700 mb-4">{t('story.p1')}</p>
            <p className="text-gray-600">2015 - 2019</p>
          </div>

          <div className="relative border-l-2 border-primary pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="font-heading font-semibold text-2xl mb-4">Transition to Tech</h3>
            <p className="text-gray-700 mb-4">{t('story.p2')}</p>
            <p className="text-gray-600">2022 - 2024</p>
          </div>

          <div className="relative border-l-2 border-primary pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="font-heading font-semibold text-2xl mb-4">Cloud Computing & DevOps</h3>
            <p className="text-gray-700 mb-4">{t('story.p3')}</p>
            <p className="text-gray-600">2024 - Present</p>
          </div> */}
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="font-heading font-semibold text-2xl mb-4">Financial Advisor Assistant - DVAG</h3>
            <p className="text-gray-700 mb-4">{t('story.p6')}</p>
            <p className="text-gray-600">02.2022 - 09.2022</p>
          </div>
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="font-heading font-semibold text-2xl mb-4">QA Tester - Docmeisel</h3>
            <p className="text-gray-700 mb-4">{t('story.p5')}</p>
            <p className="text-gray-600">07.2023 - 02.2024</p>
          </div>
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="font-heading font-semibold text-2xl mb-4">Teaching Assistant - TechStarter</h3>
            <p className="text-gray-700 mb-4">{t('story.p4')}</p>
            <p className="text-gray-600">10.2024 - 04.2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
