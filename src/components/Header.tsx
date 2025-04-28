
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Languages, Menu, X } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'de' : 'en';
    setLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-foreground hover:text-primary transition-colors';
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/story', label: t('nav.story') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/education', label: t('nav.education') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="py-4 border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-lg md:text-xl">
            Marian-Alexandru Tugui
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${isActive(item.path)} text-sm`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Languages size={16} />
              {language === 'en' ? 'DE' : 'EN'}
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="flex items-center"
            >
              <Languages size={16} />
              <span className="ml-1">{language === 'en' ? 'DE' : 'EN'}</span>
            </Button>
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 space-y-4 md:hidden animate-fade-in">
            {navItems.map((item) => (
              <div key={item.path} className="block">
                <Link
                  to={item.path}
                  className={`${isActive(item.path)} block py-2`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
