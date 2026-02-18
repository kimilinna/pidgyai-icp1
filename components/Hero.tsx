import React from 'react';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  openCalendly: () => void;
}

const Hero: React.FC<HeroProps> = ({ openCalendly }) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 max-w-[1040px] mx-auto">
      {/* Flag scaling visual */}
      <div className="inline-flex items-center gap-5 mb-9 animate-[fadeUp_0.6s_ease_both] cursor-default">
        <span className="text-3xl filter drop-shadow-sm" title="Finland">🇫🇮</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <div className="flex gap-3 text-3xl filter drop-shadow-sm">
          <span title="United Kingdom">🇬🇧</span>
          <span title="Netherlands">🇳🇱</span>
          <span title="Germany">🇩🇪</span>
          <span title="Sweden">🇸🇪</span>
          <span title="Denmark">🇩🇰</span>
          <span title="Norway">🇳🇴</span>
          <span title="Belgium">🇧🇪</span>
        </div>
      </div>
      
      <h1 className="font-serif text-4xl md:text-[58px] font-normal leading-[1.12] tracking-tight max-w-[780px] mx-auto mb-5 animate-[fadeUp_0.6s_ease_0.1s_both]">
        {t.hero.titlePart1}<br />
        {t.hero.titlePart2} <em className="italic text-accent not-italic">{t.hero.titlePart3}</em>
      </h1>
      
      <p className="text-lg text-text-secondary max-w-[540px] mx-auto mb-9 font-light leading-relaxed animate-[fadeUp_0.6s_ease_0.2s_both]">
        {t.hero.subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeUp_0.6s_ease_0.3s_both]">
        <button onClick={openCalendly} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium bg-surface text-text border border-border hover:border-charcoal/30 hover:shadow-sm hover:-translate-y-px transition-all duration-200">
          {t.hero.secondaryCta}
        </button>
        <button onClick={openCalendly} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium bg-charcoal text-white hover:shadow-lg hover:-translate-y-px transition-all duration-200">
          {t.hero.cta}
        </button>
      </div>
      
      <p className="mt-4 text-[13px] text-text-tertiary animate-[fadeUp_0.6s_ease_0.35s_both]">
        {t.hero.disclaimer}
      </p>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;