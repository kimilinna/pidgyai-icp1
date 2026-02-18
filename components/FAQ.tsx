import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bg border-t border-border" id="faq">
      <RevealOnScroll className="max-w-[800px] mx-auto px-8">
        <div className="text-center mb-12">
          <div className="font-mono text-[10px] tracking-[2.5px] uppercase text-accent">
            {t.faqSection.eyebrow}
          </div>
        </div>

        <div className="space-y-4">
          {t.faqSection.items.map((item: any, index: number) => (
            <div
              key={index}
              className="border border-border rounded-xl bg-surface overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className="font-medium text-lg text-text pr-8 group-hover:text-accent transition-colors duration-200">{item.question}</span>
                <span className={`transform transition-transform duration-300 text-accent ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed font-light text-[15px]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default FAQ;