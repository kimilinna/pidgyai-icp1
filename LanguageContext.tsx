import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const translations = {
  en: {
    nav: {
      product: 'Product',
      company: 'Company',
      pricing: 'Pricing',
      faq: 'FAQ',
      cta: 'Tailored scaling plan →'
    },
    hero: {
      titlePart1: 'Your product works in Finland.',
      titlePart2: 'Now it\'s time',
      titlePart3: 'to grow.',
      subtitle: 'Pidgy is your local team of SDRs who know every company and practice in your target market.',
      cta: 'Scale abroad — risk-free →',
      secondaryCta: 'Calculate your potential sales volume',
      disclaimer: "Money back if it doesn't work. No questions asked."
    },
    problem: {
      eyebrow: 'The problem',
      title: 'The Finnish market is small, but expanding abroad is challenging.',
      description: 'Finland\'s B2B market is small. You\'ve found product-market fit, you have revenue, your product works. But expanding to the UK, Germany, or Netherlands feels like starting from scratch — different buyers, no network, no local knowledge.',
      items: [
        { title: 'No idea who to target', text: 'You know your ICP in Finland, but who are the UK equivalents? Which companies? Which people?' },
        { title: "Too much effort to hire a local team", text: 'A UK sales rep costs £60K+ before they book a single meeting. That\'s a big bet when you\'re still validating the market.' },
        { title: 'Cold email feels impossible', text: 'You tried Apollo, bought a list, sent some emails. Open rates were 8%, replies were zero. Because the emails were generic.' },
        { title: 'No time to do it properly', text: 'You\'re running the company. You can\'t spend 20 hours a week researching UK companies and writing personalized emails.' }
      ]
    },
    quote: {
      text: '"Pidgey made expanding to the UK easy. We secured our first customers in under a month."',
      author: '— Finnish SaaS Entrepreneur',
      trustedBy: 'Pidgy is built on learnings from top companies and organizations, such as:'
    },
    report: {
      eyebrow: 'Product',
      title: 'A local SDR team that knows every company in the target market.',
      description: 'Pidgy scans every company in the target market, finds the best prospects, and starts outreach based on local practices. You only need to handle meetings with prospects ready to buy.',
      automated: 'Automated',
      steps: {
        prospecting: 'Prospecting',
        outreach: 'Outreach',
        meetings: 'Meetings',
        growth: 'Growth'
      }
    },
    market: {
      eyebrow: 'Target markets',
      title: 'Multiply your market.\nPidgy knows European companies.',
      description: 'Pidgy\'s AI is powered by a proprietary database of over 5M European companies (and constantly expanding).',
      futureMarkets: 'Markets are constantly being added. Next up: France and Belgium.',
      items: [
        {
          flag: '🇬🇧',
          title: 'United Kingdom',
          description: 'The largest SaaS market in Europe. English-speaking, familiar buying culture.',
          stats: [
             { value: '2.5M', label: 'Companies' },
             { value: '£3T', label: 'GDP' },
             { value: 'Very High', label: 'Digital Maturity' },
             { value: '10x', label: 'Size vs Finland' }
          ]
        },
        {
          flag: '🇩🇪',
          title: 'Germany',
          description: 'Europe\'s economic engine. Conservative buyers who value precision and native language.',
          stats: [
             { value: '3M+', label: 'Companies' },
             { value: '€4T', label: 'GDP' },
             { value: 'High', label: 'Digital Maturity' },
             { value: '15x', label: 'Size vs Finland' }
          ]
        },
        {
          flag: '🇳🇱',
          title: 'Netherlands',
          description: 'Europe\'s most English-proficient non-native market. Pragmatic buyers.',
          stats: [
             { value: '800K+', label: 'Companies' },
             { value: '€1T', label: 'GDP' },
             { value: 'Very High', label: 'Digital Maturity' },
             { value: '3x', label: 'Size vs Finland' }
          ]
        },
        {
          flag: '🇸🇪 🇳🇴 🇩🇰',
          title: 'Nordics',
          description: 'Sweden, Norway, Denmark. High digital maturity, culturally similar.',
          stats: [
             { value: '1.5M', label: 'Companies' },
             { value: '€1.5T', label: 'GDP' },
             { value: 'Very High', label: 'Digital Maturity' },
             { value: '4x', label: 'Size vs Finland' }
          ]
        }
      ]
    },
    pricing: {
      eyebrow: 'Pricing',
      title: '10x cheaper than a local sales rep.\nResults in 10x less time.',
      competitor: {
        title: 'Hiring a local SDR',
        price: '5 000',
        period: '/month',
        description: 'Recruiting, onboarding, and overhead. Results in 4-6 months.'
      },
      pidgy: {
        title: 'Pidgyai',
        beta: '12 spots remaining for Beta',
        price: '499',
        originalPrice: '699',
        period: '/month',
        subtext: 'Cancel anytime. No setup fees. No contracts.',
        cta: 'Grow your business - risk free →',
        guarantee: 'Money back guarantee if it doesn\'t work!'
      }
    },
    faqSection: {
      eyebrow: 'FAQ',
      items: [
        {
          question: 'Does Pidgy really automate sales abroad?',
          answer: 'Yes, Pidgy automates prospecting and booking high-quality demo meetings in completely new or familiar markets.'
        },
        {
          question: 'Does Pidgy spam potential customers in my company\'s name?',
          answer: 'Of course not! Pidgy only approaches carefully selected potential customers and does not contact companies that do not want it. Using Pidgy is safe for your company.'
        },
        {
          question: 'Why should I try Pidgy?',
          answer: 'Pidgy makes growing your business easy. The application is in beta release, where our team works closely with our partners, so spots are limited.'
        }
      ]
    },
    footer: {
      copyright: '© 2026 Pidgy. Built in Helsinki for Finnish companies going global.',
      privacy: 'Privacy',
      contact: 'hello@pidgy.ai'
    },
    bottomCta: {
      cta: 'Calculate your potential sales volume →'
    }
  },
  fi: {
    nav: {
      product: 'Tuote',
      company: 'Yritys',
      pricing: 'Hinnoittelu',
      faq: 'UKK',
      cta: 'Kasvata liiketoimintaasi →'
    },
    hero: {
      titlePart1: 'Tuotteesi toimii Suomessa.',
      titlePart2: 'Nyt on aika',
      titlePart3: 'kasvaa ulkomaille.',
      subtitle: 'Pidgy on paikallinen SDR-myyjätiimisi, joka tuntee kaikki kohdemarkkinan yritykset ja käytännöt.',
      cta: 'Skaalaa ulkomaille - ilman riskiä →',
      secondaryCta: 'Laske potentiaalinen myyntivolyymisi',
      disclaimer: 'Rahat takaisin, jos tuote ei toimi. Ei kysymyksiä.'
    },
    problem: {
      eyebrow: 'Ongelma',
      title: 'Suomen markkina on pieni, mutta ulkomaille laajentuminen on haastavaa.',
      description: 'Suomen B2B-markkina on pieni. Olet löytänyt product-market fitin, liikevaihtoa tulee ja tuote toimii. Mutta laajentuminen Isoon-Britanniaan, Saksaan tai Alankomaihin tuntuu alusta aloittamiselta — eri ostajat, ei verkostoja, ei paikallista tuntemusta.',
      items: [
        { title: 'Ei tietoa ketä tavoitella', text: 'Tiedät ICP:si Suomessa, mutta keitä he ovat UK:ssa? Mitä yrityksiä? Keitä ihmisiä?' },
        { title: "Liian työlästä palkata paikallinen myyjätiimi", text: 'Brittimyyjä maksaa £60K+ ennen ensimmäistäkään tapaamista. Se on iso riski markkinan testausvaiheessa.' },
        { title: 'Kylmäsähköpostit eivät toimi', text: 'Kokeilit Apolloa, ostit listan, lähetit sähköposteja. Avausprosentti 8%, vastauksia nolla. Koska viestit olivat geneerisiä.' },
        { title: 'Ei aikaa tehdä kunnolla', text: 'Pyörität yritystä. Et ehdi käyttää 20 tuntia viikossa taustatyöhön ja viestien räätälöintiin.' }
      ]
    },
    quote: {
      text: '"Pidgey teki laajentumisesta Britteihin helppoa. Saimme varmistettua ensimmäiset asiakkaat alle kuukaudessa."',
      author: '— Suomalainen SaaS-yrittäjä',
      trustedBy: 'Pidgy perustuu opeille parhaista yrityksistä ja orgnisaatioista, kuten:'
    },
    report: {
      eyebrow: 'Tuote',
      title: 'Paikallinen SDR-myyjätiimi, joka tuntee kohdemarkkinan kaikki yritykset',
      description: 'Pidgy käy läpi kohdemarkkinan kaikki yritykset, löytää niistä parhaimmat asiakasprospektit ja aloittaa kontaktoinnin kohdemarkkinan käytäntöihin perustuen. Sinun ei tarvitse kuin hoitaa tapaamiset prospektien kanssa, jotka ovat valmiita ostamaan.',
      automated: 'Automatisoitu',
      steps: {
        prospecting: 'Prospektointi',
        outreach: 'Yhteydenotto',
        meetings: 'Tapaamiset',
        growth: 'Kasvu'
      }
    },
    market: {
      eyebrow: 'Kohdemarkkinat',
      title: 'Moninkertaista markkinasi.\nPidgy tuntee Euroopan yritykset.',
      description: 'Pidgyn tekoälyn taustalla on yrityksen oma tietokanta, jossa on yli 5M eurooppalaista yritystä (ja sitä laajennetaan jatkuvasti).',
      futureMarkets: 'Markkinoita lisätään jatkuvasti. Seuraavina Ranska ja Belgia.',
      items: [
        {
          flag: '🇬🇧',
          title: 'Iso-Britannia',
          description: 'Euroopan suurin SaaS-markkina. Englanninkielinen, tuttu ostokulttuuri.',
          stats: [
             { value: '2.5M', label: 'Yritystä' },
             { value: '£3T', label: 'BKT' },
             { value: 'Erittäin korkea', label: 'Digikypsyys' },
             { value: '10x', label: 'Markkinan koko vs. Suomi' }
          ]
        },
        {
          flag: '🇩🇪',
          title: 'Saksa',
          description: 'Euroopan talousmoottori. Konservatiivinen ostokulttuuri, vaatii paikallista tuntemusta.',
          stats: [
             { value: '3M+', label: 'Yritystä' },
             { value: '€4T', label: 'BKT' },
             { value: 'Korkea', label: 'Digikypsyys' },
             { value: '15x', label: 'Markkinan koko vs. Suomi' }
          ]
        },
        {
          flag: '🇳🇱',
          title: 'Alankomaat',
          description: 'Euroopan sujuvin englanninkielinen markkina. Pragmaattiset ostajat.',
          stats: [
             { value: '800K+', label: 'Yritystä' },
             { value: '€1T', label: 'BKT' },
             { value: 'Erittäin korkea', label: 'Digikypsyys' },
             { value: '3x', label: 'Markkinan koko vs. Suomi' }
          ]
        },
        {
          flag: '🇸🇪 🇳🇴 🇩🇰',
          title: 'Pohjoismaat',
          description: 'Ruotsi, Norja, Tanska. Korkea digitaalinen kypsyys, kulttuurisesti lähellä.',
          stats: [
             { value: '1.5M', label: 'Yritystä' },
             { value: '€1.5T', label: 'BKT' },
             { value: 'Erittäin korkea', label: 'Digikypsyys' },
             { value: '4x', label: 'Markkinan koko vs. Suomi' }
          ]
        }
      ]
    },
    pricing: {
      eyebrow: 'Hinnoittelu',
      title: '10 kertaa halvempi kuin ulkomainen myyjä.\nTuloksia 10 kertaa nopeammin.',
      competitor: {
        title: 'Paikallinen SDR myyjä',
        price: 'alk. 5 000',
        period: '/kk',
        description: 'Rekrytointi, perehdytys ja sivukulut. Tuloksia 4-6 kk kuluttua.'
      },
      pidgy: {
        title: 'Pidgyai',
        beta: 'Paikkoja jäljelle 12 beta-yritykselle',
        price: '499',
        originalPrice: '699',
        period: '/kk (ei sisällä alv.)',
        subtext: 'Peruuta milloin vain. Ei aloitusmaksuja. Ei määräaikaa.',
        cta: 'Kasvata liiketoimintaasi - ilman riskiä →',
        guarantee: 'Lupaamme sinulle rahat takaisin, jos tuote ei toimi!'
      },
    },
    faqSection: {
      eyebrow: 'UKK',
      items: [
        {
          question: 'Automatisoiko Pidgy todella myynnin ulkomailla?',
          answer: 'Kyllä, Pidgy automatisoi prospektoimisen ja laadukkaiden demo-tapaamisten sopimisen täysin uusilla tai tutuilla markkinoilla.'
        },
        {
          question: 'Spämmääkö Pidgy potentiaalisia asiakkaita yritykseni nimissä?',
          answer: 'Ei tietenkään! Pidgy lähestyy vain tarkasti valittuja potentiaalisia asiakkaita eikä ota yhteyttä yrityksiin, jotka eivät sitä halua. Pidgyn käyttäminen on turvallista yrityksellesi.'
        },
        {
          question: 'Miksi minun pitäisi kokeilla Pidgyä?',
          answer: 'Pidgy tekee liiketoiminnan kasvattamisesta helppoa. Sovellus on betajulkaisuvaiheessa, jossa tiimimme työskentelee tiiviisti kumppaneidemme kanssa, joten paikkoja on rajoitetusti.'
        }
      ]
    },
    footer: {
      copyright: '© 2026 Pidgy. Rakennettu Helsingissä kansainvälistyville yrityksille.',
      privacy: 'Tietosuoja',
      contact: 'hello@pidgy.ai'
    },
    bottomCta: {
      cta: 'Laske potentiaalinen myyntivolyymisi →'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};