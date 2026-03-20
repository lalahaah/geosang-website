import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Building2,
  Recycle,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { translations } from '../translations';
// CTA·헤더 배경용 로고 import
import logoImg from '../assets/logo.svg';
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
   컴포넌트: Sticky Service Section (Rubicon style)
 ───────────────────────────────────────────── */
const StickyServices = ({ services }: { services: any[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const numSteps = services.length;
    const nextIndex = Math.min(Math.floor(latest * numSteps), numSteps - 1);
    if (nextIndex !== currentIndex) setCurrentIndex(nextIndex);
  });

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-20 h-[calc(100vh-80px)] w-full flex overflow-hidden">

        {/* 좌측: 텍스트 */}
        <div className="w-[42%] h-full bg-white flex flex-col px-12 xl:px-20 py-12 relative">
          {/* 카운터 + 프로그레스 */}
          <div className="flex items-center gap-4 mb-auto pb-8">
            <span className="text-[10px] tracking-[0.35em] text-slate-400 uppercase font-medium whitespace-nowrap">
              {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
            <div className="flex gap-1 flex-1">
              {services.map((_, i) => (
                <div
                  key={i}
                  className={`h-px flex-1 transition-all duration-700 ${i <= currentIndex ? 'bg-geosang-teal' : 'bg-slate-200'}`}
                />
              ))}
            </div>
          </div>

          {/* 콘텐츠 */}
          <div className="flex-1 relative">
            {services.map((service, index) => (
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
                    {service.icon}
                  </div>
                  <span className="text-geosang-teal text-[10px] font-medium tracking-[0.35em] uppercase">{service.step}</span>
                </div>
                <h2 className="text-4xl xl:text-5xl font-light text-geosang-deep leading-[1.15] mb-4">{service.title}</h2>
                <p className="text-sm text-geosang-teal font-light tracking-wide mb-5">{service.copy}</p>
                <div className="w-8 h-px bg-slate-200 mb-5" />
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 max-w-sm">{service.desc}</p>
                <ul className="space-y-3">
                  {service.details.map((d: string, j: number) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={13} className="text-geosang-teal mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-slate-500 font-light text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* 하단 서비스명 목록 */}
          <div className="mt-auto pt-8 border-t border-slate-100 space-y-1">
            {services.map((service, i) => (
              <div
                key={i}
                className={`text-xs tracking-wide transition-all duration-300 ${
                  i === currentIndex ? 'text-geosang-teal font-medium' : 'text-slate-300 font-light'
                }`}
              >
                {service.title}
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 이미지 */}
        <div className="w-[58%] h-full relative bg-slate-100 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img
                src={service.image}
                alt={service.imageAlt}
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
   인터페이스 및 메인 컴포넌트: Business (Services)
 ───────────────────────────────────────────── */
interface BusinessProps { lang: 'ko' | 'en' }

const Business: React.FC<BusinessProps> = ({ lang }) => {
  const t = (translations as any)[lang].business;

  const services = t.services.map((s: any, i: number) => ({
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-geosang-deep text-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
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
      <StickyServices services={services} />

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
      <section className="py-48 bg-geosang-deep relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
          <img src={logoImg} alt="" className="w-full h-full object-contain scale-[2]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-geosang-teal/10 to-transparent pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight"
          >
            {t.cta.h2}<br />
            <span className="text-geosang-teal italic">{t.cta.h2Teal}</span>
          </motion.h2>
          <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto">
            {t.cta.p}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => window.location.hash = 'get-started'} className="px-12 py-5 bg-geosang-teal hover:bg-[#008f84] text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3">
              {t.cta.btn1} <ArrowRight size={24} />
            </button>
            <button className="px-12 py-5 border border-white/30 text-white hover:bg-white/10 rounded-full font-bold text-xl transition-all">
              {t.cta.btn2}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
