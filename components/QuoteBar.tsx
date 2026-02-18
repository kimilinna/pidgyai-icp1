import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const QuoteBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-charcoal text-white text-center py-16">
      <RevealOnScroll className="max-w-[1040px] mx-auto px-8">
        <div className="font-serif text-2xl md:text-2xl italic font-normal leading-relaxed max-w-[600px] mx-auto mb-4 text-white/90">
          {t.quote.text}
        </div>
        <div className="text-sm text-white/50 mb-16">
          {t.quote.author}
        </div>

        <div className="max-w-[800px] mx-auto border-t border-white/10 pt-12 mt-4">
          <p className="text-[11px] font-medium uppercase tracking-[2px] text-white/40 mb-10">
            {t.quote.trustedBy}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {/* McKinsey & Company */}
            <img
              src={`${import.meta.env.BASE_URL}images/mckinsey.png`}
              alt="McKinsey & Company"
              className="h-10 md:h-12 w-auto object-contain"
            />

            {/* RELEX */}
            <img
              src={`${import.meta.env.BASE_URL}images/relex.png`}
              alt="RELEX"
              className="h-6 md:h-7 w-auto object-contain"
            />

            {/* INSEAD */}
            <img
              src={`${import.meta.env.BASE_URL}images/Insead.png`}
              alt="INSEAD"
              className="h-7 md:h-8 w-auto object-contain"
            />

            {/* Aalto University */}
            <img
              src={`${import.meta.env.BASE_URL}images/aalto.png`}
              alt="Aalto University"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default QuoteBar;