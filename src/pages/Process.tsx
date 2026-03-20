import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Truck,
  Layers,
  Handshake,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  MapPin,
} from 'lucide-react';
import { translations } from '../translations';
// CTA·헤더 배경용 로고 import
import logoImg from '../assets/logo.svg';
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
   컴포넌트: Sticky Step (Rubicon 스타일)
 ───────────────────────────────────────────── */
const StickySteps = ({ steps }: { steps: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(Math.floor(latest * steps.length), steps.length - 1);
    if (nextIndex !== currentIndex) setCurrentIndex(nextIndex);
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-20 h-[calc(100vh-80px)] w-full flex overflow-hidden">

        {/* 좌측: 텍스트 */}
        <div className="w-[42%] h-full bg-white flex flex-col px-12 xl:px-20 py-12 relative">
          {/* 카운터 + 프로그레스 */}
          <div className="flex items-center gap-4 mb-auto pb-8">
            <span className="text-[10px] tracking-[0.35em] text-slate-400 uppercase font-medium whitespace-nowrap">
              {String(currentIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>
            <div className="flex gap-1 flex-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-px flex-1 transition-all duration-700 ${i <= currentIndex ? 'bg-geosang-teal' : 'bg-slate-200'}`}
                />
              ))}
            </div>
          </div>

          {/* 콘텐츠 */}
          <div className="flex-1 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  y: currentIndex === index ? 0 : 20,
                  pointerEvents: currentIndex === index ? 'auto' : 'none',
                }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-geosang-teal/10 flex items-center justify-center text-geosang-teal">
                    {step.icon}
                  </div>
                  <span className="text-geosang-teal text-[10px] font-medium tracking-[0.35em] uppercase">{step.step}</span>
                </div>
                <h2 className="text-4xl xl:text-5xl font-light text-geosang-deep leading-[1.15] mb-4">{step.title}</h2>
                <p className="text-sm text-geosang-teal font-light tracking-wide mb-5">{step.copy}</p>
                <div className="w-8 h-px bg-slate-200 mb-5" />
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 max-w-sm">{step.desc}</p>
                <ul className="space-y-3">
                  {step.details.map((d: string, j: number) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={13} className="text-geosang-teal mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-slate-500 font-light text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* 하단 스텝 목록 */}
          <div className="mt-auto pt-8 border-t border-slate-100 space-y-1">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`text-xs tracking-wide transition-all duration-300 ${
                  i === currentIndex ? 'text-geosang-teal font-medium' : 'text-slate-300 font-light'
                }`}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 이미지 */}
        <div className="w-[58%] h-full relative bg-slate-100 overflow-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img
                src={step.image}
                alt={step.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   인터페이스 및 메인 컴포넌트: Process
 ───────────────────────────────────────────── */
interface ProcessProps { lang: 'ko' | 'en' }

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = (translations as any)[lang].process;

  const steps = t.steps.map((s: any, i: number) => ({
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-geosang-deep text-center">
        <div className="absolute inset-0 z-0">
          <img src={processHeroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55 z-10" />
        </div>
        <div className="relative z-20 container-custom py-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-8"
          >
            {t.hero.kicker}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl mx-auto"
          >
            {t.hero.h1}<br />
            <span className="text-geosang-teal">{t.hero.h1Teal}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {t.hero.sub}
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

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
      <StickySteps steps={steps} />

      {/* ════════ CTA ════════ */}
      <section className="section-padding bg-[#093944] relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img src={logoImg} alt="" className="w-[600px] opacity-[0.04] object-contain select-none" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
              {t.cta.h2}<br />
              <span className="text-geosang-teal italic">{t.cta.h2Teal}</span>
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto">
              {t.cta.p}
            </p>
            <button onClick={() => window.location.hash = 'get-started'} className="px-12 py-5 bg-geosang-teal hover:bg-[#008f84] text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3 mx-auto">
              {t.cta.btn} <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;
