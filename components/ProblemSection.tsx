import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <RevealOnScroll className="py-20 bg-surface border-t border-b border-border">
      <div className="max-w-[1040px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="font-mono text-[10px] tracking-[2.5px] uppercase text-accent mb-4">
              {t.problem.eyebrow}
            </div>
            <h2 className="font-serif text-[28px] md:text-[38px] font-normal leading-[1.2] tracking-tight mb-4 text-text">
              {t.problem.title}
            </h2>
            <p className="text-base text-text-secondary leading-[1.7] font-light mt-4">
              {t.problem.description}
            </p>
          </div>

          {/* Right Column - List */}
          <div>
            <ul className="list-none space-y-2.5">
              {t.problem.items.map((item: any, index: number) => (
                <li key={index} className="p-4 md:p-5 bg-bg rounded-xl border border-border">
                  <div className="text-[15px]">
                    <span className="block font-semibold mb-1 text-text">{item.title}</span>
                    <p className="text-[13px] text-text-secondary leading-[1.5]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ProblemSection;