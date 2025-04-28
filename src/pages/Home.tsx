
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            {t('home.name')}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
            {t('home.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/story">{t('home.cta')}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
              {t('home.about')}
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              {t('home.about.text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brief highlights for each main section */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-semibold text-xl mb-3">{t('nav.story')}</h3>
                <p className="text-gray-600 mb-4">{t('story.intro')}</p>
                <Link to="/story" className="text-primary flex items-center hover:underline">
                  {t('home.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-semibold text-xl mb-3">{t('nav.skills')}</h3>
                <p className="text-gray-600 mb-4">{t('skills.tech')}</p>
                <Link to="/skills" className="text-primary flex items-center hover:underline">
                  {t('home.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-semibold text-xl mb-3">{t('nav.projects')}</h3>
                <p className="text-gray-600 mb-4">{t('projects.title')}</p>
                <Link to="/projects" className="text-primary flex items-center hover:underline">
                  {t('home.cta')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
