import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const MarketSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface border-t border-b border-border">
      <RevealOnScroll className="max-w-[1040px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] tracking-[2.5px] uppercase text-accent mb-4">
            {t.market.eyebrow}
          </div>
          <h2 className="font-serif text-[28px] md:text-[38px] font-normal leading-[1.2] text-text whitespace-pre-line mb-6">
            {t.market.title}
          </h2>
          <p className="text-base text-text-secondary leading-[1.7] font-light max-w-[600px] mx-auto">
            {t.market.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
           {t.market.items.map((market: any, index: number) => (
             <div key={index} className="border border-border rounded-2xl p-8 bg-bg flex flex-col">
                <div className="text-4xl mb-4">{market.flag}</div>
                <div className="font-serif text-2xl mb-2 text-text">{market.title}</div>
                <p className="text-sm text-text-secondary leading-[1.65] mb-6 min-h-[48px] flex-1">
                  {market.description}
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 border-t border-border/50 pt-4 mt-auto">
                  {market.stats.map((stat: any, i: number) => (
                    <div key={i} className="flex flex-col">
                      <div className="font-mono text-lg font-medium text-text">{stat.value}</div>
                      <div className="text-[10px] text-text-tertiary uppercase tracking-wide leading-tight mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
             </div>
           ))}
        </div>

        <div className="text-center text-sm text-text-secondary font-light">
          {t.market.futureMarkets}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default MarketSection;