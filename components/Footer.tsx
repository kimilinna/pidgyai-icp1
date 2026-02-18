import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 border-t border-border text-center bg-bg">
      <div className="max-w-[1040px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-text-tertiary">
        <div>{t.footer.copyright}</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-text transition-colors">{t.footer.privacy}</a>
          <a href={`mailto:${t.footer.contact}`} className="hover:text-text transition-colors">{t.footer.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;