import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

interface PricingProps {
  openCalendly: () => void;
}

const Pricing: React.FC<PricingProps> = ({ openCalendly }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24" id="pricing">
      <RevealOnScroll className="max-w-[1040px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] tracking-[2.5px] uppercase text-accent mb-4">
            {t.pricing.eyebrow}
          </div>
          <h2 className="font-serif text-[28px] md:text-[38px] font-normal leading-[1.2] mb-4 text-text whitespace-pre-line">
            {t.pricing.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Competitor / Old Way */}
          <div className="bg-bg border border-border rounded-[20px] p-10 flex flex-col justify-between opacity-80 grayscale-[0.5]">
            <div>
              <h3 className="text-xl font-medium text-text mb-6">{t.pricing.competitor.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-serif text-[52px] tracking-tighter text-text">{t.pricing.competitor.price}</span>
                <span className="font-serif text-[32px] text-text">€</span>
                <span className="text-[15px] text-text-secondary ml-1">{t.pricing.competitor.period}</span>
              </div>
            </div>
            <div className="mt-8 text-sm text-text-secondary leading-relaxed border-t border-border pt-6">
              {t.pricing.competitor.description}
            </div>
          </div>

          {/* Pidgyai */}
          <div className="bg-surface border-2 border-accent rounded-[20px] p-10 relative shadow-xl shadow-accent/5 flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
              {t.pricing.pidgy.beta}
            </div>
            
            <div>
               <h3 className="text-xl font-bold text-accent mb-6">{t.pricing.pidgy.title}</h3>
               
               {t.pricing.pidgy.originalPrice && (
                 <div className="text-lg text-text-tertiary line-through decoration-text-tertiary/60 decoration-2 mb-[-6px] ml-1 font-medium">
                   {t.pricing.pidgy.originalPrice} €
                 </div>
               )}

               <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-[52px] tracking-tighter text-text">{t.pricing.pidgy.price}</span>
                <span className="font-serif text-[32px] text-text">€</span>
                <span className="text-[15px] text-text-secondary ml-1">{t.pricing.pidgy.period}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="text-sm text-text-secondary mb-8 leading-relaxed">
                {t.pricing.pidgy.subtext}
              </div>

              <button onClick={openCalendly} className="flex justify-center items-center w-full px-7 py-4 rounded-xl font-bold bg-accent text-white hover:bg-accent-hover hover:-translate-y-px transition-all duration-200 text-sm shadow-md shadow-accent/20">
                {t.pricing.pidgy.cta}
              </button>
              <div className="mt-4 text-[13px] text-center text-text-secondary/80 font-medium">
                {t.pricing.pidgy.guarantee}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Pricing;