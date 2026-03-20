import { type Lang, translations } from '../translations';
import PageHero from '../components/PageHero';
import {
  Database,
  Building2,
  Recycle,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import StickyScrollViewer from '../components/StickyScrollViewer';
import type { StickyScrollItem } from '../components/StickyScrollViewer';
import DarkCTASection from '../components/DarkCTASection';
// 히어로 배경 이미지 (산업 야경 - Unsplash)
const heroBg = 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2670&auto=format&fit=crop';

const serviceImages = [
  'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop',
];

const partnerLogos = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
];

const serviceIcons = [
  <Recycle size={32} strokeWidth={1.5} />,
  <Building2 size={32} strokeWidth={1.5} />,
  <ShieldCheck size={32} strokeWidth={1.5} />,
  <Cpu size={32} strokeWidth={1.5} />,
];

const valuePropIcons = [
  <Recycle className="text-geosang-teal" />,
  <Building2 className="text-geosang-teal" />,
  <Database className="text-geosang-teal" />,
];

/* ─────────────────────────────────────────────
   인터페이스 및 메인 컴포넌트: Business (Services)
 ───────────────────────────────────────────── */
interface BusinessProps { lang: Lang }

const Business: React.FC<BusinessProps> = ({ lang }) => {
  const t = (translations[lang] as any).business;

  const services: StickyScrollItem[] = t.services.map((s: any, i: number) => ({
    ...s,
    icon: serviceIcons[i],
    image: serviceImages[i],
    imageAlt: s.imageAlt,
  }));

  const valuePropItems = t.valueProp.items.map((item: any, i: number) => ({
    ...item,
    icon: valuePropIcons[i],
  }));

  const partners = t.partnership.partners.map((p: any, i: number) => ({
    ...p,
    logo: partnerLogos[i],
  }));

  const stats = t.stats;

  return (
    <div className="flex flex-col w-full bg-white font-display">
      {/* ════════ Hero ════════ */}
      <PageHero
        bgImage={heroBg}
        kicker={t.hero.kicker}
        h1={t.hero.h1}
        h1Teal={t.hero.h1Teal}
        subtitle={t.hero.sub}
      />

      {/* ════════ Value Proposition ════════ */}
      <section className="py-40 bg-white" id="main-services">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2 lg:sticky lg:top-40">
              <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.4em] mb-8">{t.valueProp.tag}</div>
              <h2 className="text-5xl md:text-6xl font-light text-geosang-deep leading-tight mb-10">
                {t.valueProp.h2}<br />
                <span className="text-geosang-teal tracking-tighter">{t.valueProp.h2Teal}</span>
              </h2>
              <p className="text-2xl text-slate-400 font-light leading-relaxed mb-10">
                {t.valueProp.p}
              </p>
              <div className="w-24 h-1.5 bg-geosang-teal rounded-full" />
            </div>
            <div className="lg:w-1/2 w-full pt-4">
              <div className="space-y-16">
                {valuePropItems.map((item: any, i: number) => (
                  <div key={i} className="group relative">
                    <div className="flex gap-8 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-geosang-teal/5 flex items-center justify-center shrink-0 group-hover:bg-geosang-teal/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-geosang-deep mb-4 group-hover:text-geosang-teal transition-colors tracking-tight">{item.title}</h3>
                        <p className="text-lg text-slate-500 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ Stats ════════ */}
      <section className="bg-slate-50 py-32">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-slate-200">
            {stats.map((s: any, i: number) => (
              <div key={i} className="flex flex-col items-center px-6">
                <div className="text-5xl md:text-7xl font-light text-geosang-deep mb-4 tracking-tighter">{s.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Sticky Services ════════ */}
      <StickyScrollViewer items={services} />

      {/* ════════ Partnership Success ════════ */}
      <section className="py-40 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.4em] mb-8">{t.partnership.tag}</div>
            <h2 className="text-4xl md:text-5xl font-light text-geosang-deep mb-8 leading-tight">
              {t.partnership.h2}<br /><span className=" text-geosang-teal">{t.partnership.h2Teal}</span>
            </h2>
            <p className="text-xl text-slate-500 font-light">{t.partnership.p}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {partners.map((partner: any, i: number) => (
              <div key={i} className="bg-slate-50 rounded-[2.5rem] p-12 hover:bg-geosang-teal/5 transition-all group border border-transparent hover:border-geosang-teal/10">
                <div className="h-20 mb-12 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100 shadow-sm">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-light text-geosang-deep mb-5 group-hover:text-geosang-teal transition-colors">{partner.name}</h3>
                <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed">{partner.desc}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <DarkCTASection
        h2={t.cta.h2}
        h2Teal={t.cta.h2Teal}
        paragraph={t.cta.p}
        primaryBtn={t.cta.btn1}
        secondaryBtn={t.cta.btn2}
      />
    </div>
  );
};

export default Business;
