import { type Lang, translations } from '../translations';
import { type FC, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Cpu,
  LineChart,
  BarChart3,
  Globe,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Cloud,
  Wifi,
  BrainCircuit,
  Link2,
} from 'lucide-react';
import logoImg from '../assets/logo.svg';

/* ─────────────────────────────────────────────
   Props
 ───────────────────────────────────────────── */
interface PlatformProps {
  lang: Lang;
}

/* ─────────────────────────────────────────────
   메인 컴포넌트
 ───────────────────────────────────────────── */
const Platform: FC<PlatformProps> = ({ lang }) => {
  const t = (translations[lang] as any).platform;

  const featureIcons = [
    <Smartphone className="w-5 h-5" />,
    <LineChart className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <BarChart3 className="w-5 h-5" />,
    <Globe className="w-5 h-5" />,
  ];
  const platformFeatures = t.features.map((f: any, i: number) => ({
    ...f,
    id: ['iot', 'market-price', 'ai', 'esg', 'marketplace'][i],
    icon: featureIcons[i],
    image: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611974714658-b8d468805f7a?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop',
    ][i],
  }));

  const techIcons = [
    <Wifi className="w-7 h-7" />,
    <BrainCircuit className="w-7 h-7" />,
    <Cloud className="w-7 h-7" />,
    <Link2 className="w-7 h-7" />,
    <Database className="w-7 h-7" />,
    <Smartphone className="w-7 h-7" />,
  ];
  const techStack = t.techStack.map((tech: any, i: number) => ({
    ...tech,
    icon: techIcons[i],
  }));

  const roadmap = t.roadmap;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const step = Math.min(Math.floor(latest * 5), 4);
    if (step !== activeStep) setActiveStep(step);
  });

  return (
    <div className="bg-white font-display">

      {/* ════════ Hero ════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-geosang-deep">
        {/* 배경 */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-geosang-deep/50 via-geosang-deep/30 to-geosang-deep/70" />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,181,0.15),transparent_50%)]" />
        </div>

        <div className="container-custom relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-geosang-teal/30 bg-geosang-teal/10 text-geosang-teal text-xs font-medium tracking-[0.25em] uppercase mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-geosang-teal animate-pulse" />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-8 max-w-4xl mx-auto">
              {t.hero.h1}<br />
              <span className="text-geosang-teal italic">{t.hero.h1Teal}</span><br />
              {t.hero.h1Last}
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-14 max-w-2xl mx-auto">
              {t.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => window.location.hash = 'get-started'}
                className="px-10 py-4 bg-geosang-teal text-white rounded-full font-medium hover:bg-white hover:text-geosang-teal transition-all shadow-lg shadow-geosang-teal/20 flex items-center gap-3 group"
              >
                {t.hero.btn1} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-white/5 text-white border border-white/15 rounded-full font-medium hover:bg-white/10 transition-all">
                {t.hero.btn2}
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</div>
          <div className="w-px h-10 bg-gradient-to-b from-geosang-teal to-transparent" />
        </motion.div>
      </section>

      {/* ════════ Why DX: 문제 → 해법 ════════ */}
      <section className="relative py-40 overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-geosang-deep/92" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mb-20">
            <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-6">{t.whyDx.tag}</div>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.15] mb-8">
              {t.whyDx.h2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 현재 문제 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10"
            >
              <div className="text-[10px] tracking-[0.3em] text-red-400 uppercase font-medium mb-8">{t.whyDx.problems[0].title}</div>
              <ul className="space-y-5">
                {t.whyDx.problems.map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-2 shrink-0" />
                    <span className="text-white/50 font-light text-sm leading-relaxed">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 디지털 해법 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-geosang-teal/10 border border-geosang-teal/20 rounded-3xl p-10"
            >
              <div className="text-[10px] tracking-[0.3em] text-geosang-teal uppercase font-medium mb-8">{t.whyDx.solutions[0].title}</div>
              <ul className="space-y-5">
                {t.whyDx.solutions.map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={14} className="text-geosang-teal mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-white/70 font-light text-sm leading-relaxed">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ Value Prop 3 Cards ════════ */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-xl">
              <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-5">{t.valueProp.tag}</div>
              <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight">
                {t.valueProp.h2}
              </h2>
            </div>
            <p className="text-slate-500 font-light text-base max-w-sm leading-relaxed">
              {t.valueProp.p}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.valueProp.cards.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-xl hover:border-geosang-teal/10 transition-all group"
              >
                <div className="w-14 h-14 bg-geosang-teal/8 rounded-2xl flex items-center justify-center text-geosang-teal mb-8 group-hover:bg-geosang-teal group-hover:text-white transition-all">
                  {i === 0 && <Database className="w-8 h-8" />}
                  {i === 1 && <Zap className="w-8 h-8" />}
                  {i === 2 && <ShieldCheck className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-medium text-geosang-deep mb-3">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm mb-8">{item.desc}</p>
                <div className="border-t border-slate-100 pt-6 flex items-end gap-2">
                  <span className="text-3xl font-light text-geosang-teal">{item.stat}</span>
                  <span className="text-xs text-slate-400 tracking-wide mb-1">{item.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Sticky 5 Features (Rubicon 스타일) ════════ */}
      <div ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-20 h-[calc(100vh-80px)] w-full flex overflow-hidden">

          {/* 좌측: 텍스트 (다크) */}
          <div className="w-[42%] h-full bg-geosang-deep flex flex-col px-12 xl:px-20 py-12">
            {/* 카운터 + 프로그레스 */}
            <div className="flex items-center gap-4 pb-8">
              <span className="text-[10px] tracking-[0.35em] text-white/30 uppercase font-medium whitespace-nowrap">
                {String(activeStep + 1).padStart(2, '0')} / {String(platformFeatures.length).padStart(2, '0')}
              </span>
              <div className="flex gap-1 flex-1">
                {platformFeatures.map((_: any, i: number) => (
                  <div
                    key={i}
                    className={`h-px flex-1 transition-all duration-700 ${i <= activeStep ? 'bg-geosang-teal' : 'bg-white/10'}`}
                  />
                ))}
              </div>
            </div>

            {/* 콘텐츠 */}
            <div className="flex-1 relative">
              {platformFeatures.map((feature: any, index: number) => (
                <motion.div
                  key={feature.id + index}
                  animate={{
                    opacity: activeStep === index ? 1 : 0,
                    y: activeStep === index ? 0 : 20,
                    pointerEvents: activeStep === index ? 'auto' : 'none',
                  }}
                  transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-geosang-teal">
                      {feature.icon}
                    </div>
                    <span className="text-geosang-teal text-[10px] font-medium tracking-[0.35em] uppercase">
                      Step 0{index + 1}
                    </span>
                  </div>
                  <h2 className="text-4xl xl:text-5xl font-light text-white leading-[1.15] mb-4">{feature.title}</h2>
                  <p className="text-sm text-geosang-teal font-light tracking-wide mb-5">{feature.subtitle}</p>
                  <div className="w-8 h-px bg-white/10 mb-5" />
                  <p className="text-sm text-white/50 font-light leading-relaxed mb-8 max-w-sm">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((f: string, j: number) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={13} className="text-geosang-teal mt-0.5 shrink-0" strokeWidth={2} />
                        <span className="text-white/60 font-light text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* 하단 피처 목록 */}
            <div className="pt-8 border-t border-white/10 space-y-1">
              {platformFeatures.map((feature: any, i: number) => (
                <div
                  key={i}
                  className={`text-xs tracking-wide transition-all duration-300 ${
                    i === activeStep ? 'text-geosang-teal font-medium' : 'text-white/20 font-light'
                  }`}
                >
                  {feature.title}
                </div>
              ))}
            </div>
          </div>

          {/* 우측: 이미지 */}
          <div className="w-[58%] h-full relative bg-slate-900 overflow-hidden">
            {platformFeatures.map((feature: any, index: number) => (
              <motion.div
                key={feature.id + index}
                animate={{ opacity: activeStep === index ? 1 : 0 }}
                transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════ Technology Stack ════════ */}
      <section className="py-40 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-5">Technology Stack</div>
            <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight mb-6">
              {lang === 'ko' ? '미래 산업을 구성하는' : 'The 6 Core Technologies'}<br />
              {lang === 'ko' ? '6가지 핵심 기술' : 'Shaping the Future Industry'}
            </h2>
            <p className="text-slate-400 font-light text-base leading-relaxed">
              {lang === 'ko'
                ? '거상자원은 재활용 산업의 고질적 문제를 해결하기 위해 최첨단 기술 스택을 현장에 직접 적용합니다.'
                : 'Geosang Resources directly applies cutting-edge technology stacks in the field to solve chronic problems in the recycling industry.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-8 rounded-2xl border border-slate-100 hover:border-geosang-teal/20 hover:bg-geosang-teal/3 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-geosang-teal/8 flex items-center justify-center text-geosang-teal shrink-0 group-hover:bg-geosang-teal group-hover:text-white transition-all">
                    {tech.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-geosang-teal tracking-[0.3em] uppercase font-medium mb-1">{tech.name}</div>
                    <h3 className="text-lg font-medium text-geosang-deep mb-2">{tech.label}</h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Roadmap ════════ */}
      <section className="py-40 bg-geosang-deep relative overflow-hidden">
        {/* 배경 로고 워터마크 */}
        <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
          <img src={logoImg} alt="" className="w-full h-full object-contain scale-150" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,194,181,0.08),transparent_60%)]" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* 좌측 */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-6">Development Roadmap</div>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.2] mb-8">
                {lang === 'ko' ? (
                  <>단계적으로<br />완성되는<br /><span className="text-geosang-teal">디지털 루프</span></>
                ) : (
                  <>The Digital Loop<br />Completed<br /><span className="text-geosang-teal">Step by Step</span></>
                )}
              </h2>
              <p className="text-white/40 font-light text-sm leading-relaxed mb-10">
                {lang === 'ko'
                  ? '현장 디지털화부터 글로벌 마켓플레이스까지, 거상자원의 IT 전환 로드맵은 이미 시작됐습니다.'
                  : "From field digitalization to a global marketplace, Geosang's IT transformation roadmap has already begun."}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-geosang-teal/30 bg-geosang-teal/10">
                <span className="w-1.5 h-1.5 rounded-full bg-geosang-teal animate-pulse" />
                <span className="text-geosang-teal text-[10px] tracking-widest uppercase font-medium">Phase 1 Active</span>
              </div>
            </div>

            {/* 우측 타임라인 */}
            <div className="lg:w-2/3 w-full space-y-6">
              {roadmap.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl border p-8 transition-all ${
                    i === 0
                      ? 'bg-geosang-teal/10 border-geosang-teal/30'
                      : 'bg-white/3 border-white/8 hover:bg-white/5'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-geosang-teal animate-pulse shadow-[0_0_8px_rgba(0,194,181,0.8)]' : 'bg-white/20'}`} />
                        <span className={`text-[10px] tracking-[0.3em] uppercase font-medium ${i === 0 ? 'text-geosang-teal' : 'text-white/30'}`}>
                          {item.phase}
                        </span>
                        {i === 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-geosang-teal/20 text-geosang-teal text-[9px] tracking-widest uppercase font-medium">
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-light text-white">{item.title}</h3>
                    </div>
                    <span className="text-xs text-white/30 font-light whitespace-nowrap">{item.period}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {item.items.map((task: string, j: number) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${i === 0 ? 'bg-geosang-teal' : 'bg-white/20'}`} />
                        <span className="text-xs text-white/40 font-light leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ Stats ════════ */}
      <section className="py-28 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-slate-200">
            {t.stats.map((stat: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center py-12 px-6"
              >
                <div className="text-4xl md:text-6xl font-light text-geosang-deep mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] text-geosang-teal tracking-[0.3em] uppercase mb-1">{stat.sub}</div>
                <div className="text-xs text-slate-400 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Integration Partners ════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container-custom">
          <p className="text-[10px] font-medium text-slate-300 uppercase tracking-[0.4em] text-center mb-14">
            Integrated with Ecosystem Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-8">
            {[
              { name: 'ALLBARO', desc: lang === 'ko' ? '공공 폐기물 관리 시스템' : 'Public Waste Management' },
              { name: 'AWS CLOUD', desc: lang === 'ko' ? '클라우드 인프라' : 'Cloud Infrastructure' },
              { name: 'IoT HUB', desc: lang === 'ko' ? '스마트 센서 네트워크' : 'Smart Sensor Network' },
              { name: 'ECO-LAB', desc: lang === 'ko' ? '환경 데이터 분석' : 'Environmental Data Analytics' },
              { name: 'LME DATA', desc: lang === 'ko' ? '글로벌 시세 연동' : 'Global Market Pricing' },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="text-xl font-light text-slate-300 group-hover:text-geosang-teal transition-colors tracking-widest mb-1">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-300 group-hover:text-slate-400 transition-colors">{partner.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-geosang-deep p-14 md:p-24 text-center">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,181,0.15),transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-8">{t.cta.tag}</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                {t.cta.h2}<br />
                <span className="text-geosang-teal italic">{t.cta.h2Teal}</span>
              </h2>
              <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto leading-relaxed">
                {t.cta.p}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <button
                  onClick={() => window.location.hash = 'get-started'}
                  className="px-12 py-5 bg-geosang-teal hover:bg-geosang-teal-dark text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3"
                >
                  {t.cta.btn1} <ArrowRight size={24} />
                </button>
                <button className="px-12 py-5 bg-white/5 text-white border border-white/20 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                  {t.cta.btn2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Platform;
