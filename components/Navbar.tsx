import React from 'react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  openCalendly: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openCalendly }) => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fi' ? 'en' : 'fi');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/85 backdrop-blur-[20px] border-b border-border">
      <div className="max-w-[1040px] mx-auto px-8 h-[60px] flex items-center justify-between relative">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 text-lg font-semibold text-text no-underline">
          <svg width="24" height="24" viewBox="0 0 56 56" fill="none" className="translate-y-[1.5px]">
            <circle cx="26" cy="26" r="18" fill="#2C2C2C"/>
            <ellipse cx="26" cy="34" rx="10" ry="7" fill="#6B6B6B" opacity="0.25"/>
            <path d="M10 26 Q4 32 8 38 Q12 42 16 38 Q12 34 12 28 Z" fill="#6B6B6B"/>
            <circle cx="32" cy="20" r="4.5" fill="#FAFAF9"/>
            <circle cx="33.2" cy="19.2" r="2" fill="#2C2C2C"/>
            <circle cx="34" cy="18" r="0.8" fill="#FAFAF9"/>
            <ellipse cx="44" cy="22" rx="5" ry="3.5" fill="#E8590C"/>
          </svg>
          <span>pidgy<span className="text-accent">ai</span></span>
        </a>

        {/* Center Navigation Links - Positioned absolutely to be exactly in the center */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#product" className="text-[14px] font-medium text-text-secondary hover:text-text transition-colors">{t.nav.product}</a>
          <a href="#pricing" className="text-[14px] font-medium text-text-secondary hover:text-text transition-colors">{t.nav.pricing}</a>
          <a href="#faq" className="text-[14px] font-medium text-text-secondary hover:text-text transition-colors">{t.nav.faq}</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-white text-[11px] font-bold tracking-wide text-text hover:border-accent hover:text-accent transition-all duration-200 uppercase shadow-sm"
            aria-label="Switch language"
            title="Switch language"
          >
            {language}
          </button>
          
          <button
            onClick={openCalendly}
            className="px-[18px] py-2 bg-charcoal text-white rounded-lg font-medium text-[13px] hover:-translate-y-px transition-transform duration-150 shadow-sm"
          >
            {t.nav.cta}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;