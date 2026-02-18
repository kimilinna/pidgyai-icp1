import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import QuoteBar from './components/QuoteBar';
import ReportPreview from './components/ReportPreview';
import MarketSection from './components/MarketSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useLanguage } from './LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <div className="font-sans text-text antialiased selection:bg-accent selection:text-white">
      <Navbar openCalendly={openCalendly} />
      <main>
        <Hero openCalendly={openCalendly} />
        <QuoteBar />
        <ProblemSection />
        <ReportPreview />
        <MarketSection />
        <Pricing openCalendly={openCalendly} />
        <FAQ />
        <section className="py-24 text-center px-8 flex flex-col items-center justify-center">
          <div className="mb-8 transform scale-125 md:scale-150">
             <div className="flex items-center gap-2.5 text-lg font-semibold text-text select-none">
                <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
                  <circle cx="26" cy="26" r="18" fill="#2C2C2C"/>
                  <ellipse cx="26" cy="34" rx="10" ry="7" fill="#6B6B6B" opacity="0.25"/>
                  <path d="M10 26 Q4 32 8 38 Q12 42 16 38 Q12 34 12 28 Z" fill="#6B6B6B"/>
                  <circle cx="32" cy="20" r="4.5" fill="#FAFAF9"/>
                  <circle cx="33.2" cy="19.2" r="2" fill="#2C2C2C"/>
                  <circle cx="34" cy="18" r="0.8" fill="#FAFAF9"/>
                  <ellipse cx="44" cy="22" rx="5" ry="3.5" fill="#E8590C"/>
                </svg>
             </div>
          </div>
          <button onClick={openCalendly} className="px-[18px] py-2 bg-charcoal text-white rounded-lg font-medium text-[13px] hover:-translate-y-px transition-transform duration-150 shadow-sm">
            {t.bottomCta.cta}
          </button>
        </section>
      </main>
      <Footer />
      <PopupModal
        url="https://calendly.com/kimi-linnainmaa/pidgy-ai-intro"
        open={isCalendlyOpen}
        onModalClose={closeCalendly}
        rootElement={document.getElementById('root')!}
      />
    </div>
  );
};

export default App;