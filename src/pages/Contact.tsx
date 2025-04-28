
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-transition">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-center">
          {t('contact.title')}
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                {t('contact.email')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:martugui812@yahoo.com" className="text-primary hover:underline">
                martugui812@yahoo.com
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                {t('contact.phone')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+4917623102820" className="text-primary hover:underline">
                +49 176 2310 2820
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github size={18} className="text-primary" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="https://github.com/mtug812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @mtug812
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin size={18} className="text-primary" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="https://linkedin.com/in/marian-alexandru-tugui-088887247" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Marian-Alexandru Tugui
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
