import { type Lang, translations } from '../translations';
import PageHero from '../components/PageHero';
import {
  Truck,
  Layers,
  Handshake,
  ShieldCheck,
  BarChart3,
  MapPin,
} from 'lucide-react';
import DarkCTASection from '../components/DarkCTASection';
import StickyScrollViewer from '../components/StickyScrollViewer';
import type { StickyScrollItem } from '../components/StickyScrollViewer';
// 히어로 배경 이미지
const processHeroBg = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2560&auto=format&fit=crop';

const stepImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
];

const stepIcons = [
  <Truck size={32} strokeWidth={1.5} />,
  <Layers size={32} strokeWidth={1.5} />,
  <Handshake size={32} strokeWidth={1.5} />,
];

const valuePropIcons = [
  <MapPin className="text-geosang-teal" />,
  <ShieldCheck className="text-geosang-teal" />,
  <BarChart3 className="text-geosang-teal" />,
];

/* ─────────────────────────────────────────────
   인터페이스 및 메인 컴포넌트: Process
 ───────────────────────────────────────────── */
interface ProcessProps { lang: Lang }

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = (translations[lang] as any).process;

  const steps: StickyScrollItem[] = t.steps.map((s: any, i: number) => ({
    ...s,
    icon: stepIcons[i],
    image: stepImages[i],
    imageAlt: s.imageAlt,
  }));

  const valuePropItems = t.valueProp.items.map((item: any, i: number) => ({
    ...item,
    icon: valuePropIcons[i],
  }));

  const stats = t.stats;

  return (
    <div className="flex flex-col w-full bg-white font-display">
      {/* ════════ Hero ════════ */}
      <PageHero
        bgImage={processHeroBg}
        kicker={t.hero.kicker}
        h1={t.hero.h1}
        h1Teal={t.hero.h1Teal}
        subtitle={t.hero.sub}
      />

      {/* ════════ Value Proposition ════════ */}
      <section className="py-40 bg-white">
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
      <section className="bg-slate-50 py-24">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-slate-200">
            {stats.map((s: any, i: number) => (
              <div key={i} className="flex flex-col items-center px-6">
                <div className="text-4xl md:text-6xl font-light text-geosang-deep mb-4 tracking-tighter">{s.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Sticky Steps ════════ */}
      <StickyScrollViewer items={steps} totalHeightVh={300} />

      {/* ════════ CTA ════════ */}
      <DarkCTASection
        h2={t.cta.h2}
        h2Teal={t.cta.h2Teal}
        paragraph={t.cta.p}
        primaryBtn={t.cta.btn}
      />
    </div>
  );
};

export default Process;
