import React, { useState, useEffect } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const steps = ['prospecting', 'outreach', 'meetings', 'growth'];

const ReportPreview: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500); // Switch every 4.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24" id="product">
      <RevealOnScroll className="max-w-[1040px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] tracking-[2.5px] uppercase text-accent mb-4">
            {t.report.eyebrow}
          </div>
          <h2 className="font-serif text-[28px] md:text-[38px] font-normal tracking-tight mb-4 leading-[1.2]">
            {t.report.title}
          </h2>
          <p className="text-base text-text-secondary leading-[1.7] font-light max-w-[600px] mx-auto mt-2">
            {t.report.description}
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative mx-auto max-w-[800px]">
          {/* Main Display Area */}
          <div className="aspect-[16/9] bg-bg border border-border rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden relative">
            
            {/* Window Header */}
            <div className="h-8 bg-surface border-b border-border flex items-center px-4 gap-2 absolute top-0 left-0 right-0 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            </div>

            {/* Content Area */}
            <div className="absolute inset-0 pt-8 bg-surface">
              
              {/* STEP 1: PROSPECTING (Scrolling List) */}
              {activeStep === 0 && <ProspectingView />}

              {/* STEP 2: OUTREACH (Email Typing) */}
              {activeStep === 1 && <OutreachView />}

              {/* STEP 3: MEETINGS (Calendar) */}
              {activeStep === 2 && <MeetingsView />}

              {/* STEP 4: GROWTH (Revenue Chart) */}
              {activeStep === 3 && <GrowthView />}

            </div>
          </div>

          {/* Navigation/Progress Tabs */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {steps.map((stepKey, index) => (
              <button
                key={stepKey}
                onClick={() => setActiveStep(index)}
                className={`text-left group focus:outline-none transition-all duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className={`h-0.5 w-full mb-3 rounded-full transition-all duration-500 ${activeStep === index ? 'bg-accent' : 'bg-border'}`}>
                  {activeStep === index && (
                    <div className="h-full bg-accent animate-[progress_4.5s_linear_forward]" style={{ width: '100%' }}></div>
                  )}
                </div>
                <div className="text-[13px] font-medium text-text">
                  0{index + 1} {t.report.steps[stepKey]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <style>{`
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
};

// --- Sub-Components for Views ---

const ProspectingView = () => {
  // Dummy data for the list
  const rows = Array(12).fill(null).map((_, i) => ({ id: i, name: `Company ${i + 1}` }));
  
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col">
      {/* Table Header */}
      <div className="flex border-b border-border py-2 px-6 text-[10px] uppercase text-text-tertiary font-mono bg-bg/50">
        <div className="w-1/3">Company</div>
        <div className="w-1/3">Industry</div>
        <div className="w-1/3">Prospect</div>
      </div>
      
      {/* Scrolling List */}
      <div className="flex-1 relative overflow-hidden">
        <div className="animate-[scrollUp_8s_linear_infinite] absolute top-0 w-full">
          {rows.map((_, i) => {
            const isMatch = i === 2 || i === 6 || i === 9; // Hardcoded matches
            return (
              <div 
                key={i} 
                className={`flex items-center px-6 py-3 border-b border-border/40 text-sm transition-colors duration-500 ${isMatch ? 'bg-green-light/60' : 'bg-surface'}`}
              >
                <div className="w-1/3 font-medium text-text truncate pr-2">
                  {['TechFlow Ltd', 'Acme Systems', 'Novus Logic', 'BlueSky AI', 'DataStream', 'Cloud Nine', 'Vertex GbH', 'North Star', 'Quantify', 'Apex', 'Zenith', 'Echo'][i]}
                </div>
                <div className="w-1/3 text-text-secondary text-xs">
                   {['SaaS', 'Manufacturing', 'Fintech', 'SaaS', 'Analytics', 'Hosting', 'SaaS', 'Logistics', 'Retail', 'SaaS', 'Health', 'SaaS'][i]}
                </div>
                <div className="w-1/3 flex items-center gap-2">
                   {isMatch ? (
                     <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green text-white animate-[fadeIn_0.5s_ease-out_0.5s_both]">
                       YES
                     </span>
                   ) : (
                     <span className="text-[10px] text-text-tertiary">No</span>
                   )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
};

const OutreachView = () => {
  return (
    <div className="p-8 h-full flex items-center justify-center bg-bg/30">
      <div className="w-full max-w-md bg-surface border border-border rounded-lg shadow-sm p-6">
        <div className="flex gap-2 mb-4 border-b border-border pb-3">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">AI</div>
          <div className="text-xs">
            <div className="text-text font-medium">Drafting to: James Miller (CEO)</div>
            <div className="text-text-tertiary">Subject: Question about scaling analytics</div>
          </div>
        </div>
        <div className="space-y-2 text-[13px] text-text-secondary font-mono leading-relaxed">
           <p className="animate-[typewriter_1s_steps(40)_both] overflow-hidden whitespace-nowrap">Hi James,</p>
           <p className="animate-[typewriter_2s_steps(60)_0.8s_both] opacity-0 overflow-hidden whitespace-nowrap">Noticed Novus Logic just opened a UK office.</p>
           <p className="animate-[typewriter_2s_steps(60)_2.5s_both] opacity-0 overflow-hidden whitespace-nowrap">Typically that brings data compliance headaches.</p>
           <p className="animate-[typewriter_1s_steps(30)_4.5s_both] opacity-0 overflow-hidden whitespace-nowrap text-accent">Let's chat? - Matti</p>
        </div>
      </div>
      <style>{`
        @keyframes typewriter {
          from { width: 0; opacity: 1; }
          to { width: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const MeetingsView = () => {
  // Configuration for meetings: day index (0-4), vertical slot (0-5), company data
  const meetings = [
    { day: 0, slot: 1, company: "TechFlow", flag: "🇬🇧" },
    { day: 1, slot: 0, company: "Novus", flag: "🇩🇪" },
    { day: 1, slot: 3, company: "NordicBank", flag: "🇸🇪" },
    { day: 2, slot: 2, company: "DataCo", flag: "🇳🇱" },
    { day: 3, slot: 1, company: "Cloud9", flag: "🇬🇧" },
    { day: 3, slot: 4, company: "VikingLog", flag: "🇳🇴" },
    { day: 4, slot: 2, company: "FinCorp", flag: "🇩🇪" },
  ];

  return (
    <div className="h-full p-6 flex flex-col">
      <div className="flex justify-between items-end mb-4 px-2">
        <div className="text-sm font-semibold text-text">February 2026</div>
        <div className="flex gap-1 text-[10px] text-text-tertiary">
          <span className="w-12 text-center">MON</span>
          <span className="w-12 text-center">TUE</span>
          <span className="w-12 text-center">WED</span>
          <span className="w-12 text-center">THU</span>
          <span className="w-12 text-center">FRI</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-5 gap-2 border-t border-border pt-4">
        {[...Array(5)].map((_, colIndex) => (
          <div key={colIndex} className="relative h-full border-r border-dashed border-border/50 last:border-0">
             {meetings
                .filter(m => m.day === colIndex)
                .map((m, i) => {
                  const top = 5 + (m.slot * 18); // Spacing logic
                  const delay = colIndex * 0.1 + i * 0.1;
                  
                  return (
                    <div 
                        key={i}
                        className="absolute w-[95%] left-0 bg-blue/10 border border-blue text-blue-800 rounded-[3px] p-1.5 flex flex-col justify-center shadow-sm animate-[popIn_0.4s_backwards]"
                        style={{ top: `${top}%`, height: '15%', animationDelay: `${delay}s` }}
                    >
                      <div className="text-[10px] font-bold leading-none mb-0.5">{m.company}</div>
                      <div className="text-[8px] opacity-80 flex items-center gap-1">
                        <span>{m.flag}</span> Intro call
                      </div>
                    </div>
                  );
             })}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

const GrowthView = () => {
  // Simple exponential growth data for vertical bars
  const data = [
    { label: 'Jan', value: '€2k', height: '5%' },
    { label: 'Feb', value: '€12k', height: '15%' },
    { label: 'Mar', value: '€45k', height: '35%' },
    { label: 'Apr', value: '€84k', height: '60%' },
    { label: 'May', value: '€184k', height: '100%' },
  ];

  return (
    <div className="h-full p-8 flex flex-col">
      <div className="mb-2">
        <div className="text-sm text-text-secondary mb-1">Total Pipeline Value</div>
        <div className="text-4xl font-serif text-text animate-[fadeIn_0.5s_ease-out]">
           €184,000
        </div>
      </div>
      
      <div className="flex-1 flex items-end justify-between gap-3 pb-2">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-end w-full h-full">
            {/* Value Label */}
            <div className="mb-2 text-[10px] font-bold text-text-secondary opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]">
               {item.value}
            </div>
            {/* Bar */}
            <div 
               className="w-full bg-accent rounded-t-sm opacity-90 hover:opacity-100 transition-opacity"
               style={{ 
                 height: '0%', 
                 animation: `growBar-${i} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 0.1}s forwards` 
               }}
            ></div>
            {/* X-axis Label */}
            <div className="mt-2 text-[10px] text-text-tertiary font-mono">{item.label}</div>
            
            <style>{`
              @keyframes growBar-${i} {
                to { height: ${item.height}; }
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportPreview;