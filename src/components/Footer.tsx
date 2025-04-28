
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading font-bold text-lg">Marian-Alexandru Tugui</h3>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {currentYear} Marian-Alexandru Tugui. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
