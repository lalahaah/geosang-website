import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Truck,
  Layers,
  Handshake,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
// CTA·헤더 배경용 로고 import
import logoImg from '../assets/logo.svg';
// 히어로 배경 이미지 (랜딩페이지와 동일)
import heroBg from '../assets/herosection-bg.avif';

/* ─────────────────────────────────────────────
   데이터 정의
 ───────────────────────────────────────────── */
const stats = [
  { value: '40+', label: 'YEARS OF EXPERIENCE' },
  { value: '1,000+', label: 'COLLECTION NETWORK' },
  { value: '99.9%', label: 'DATA ACCURACY' },
  { value: '2026', label: 'DIGITAL LOOP LAUNCH' },
];

const partners = [
  { name: '한솔제지', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop', desc: '국내 최대 제지사와의 장기 파트너십' },
  { name: '무림P&P', logo: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=2670&auto=format&fit=crop', desc: '고순도 펄프 원료의 안정적 공급' },
  { name: '깨끗한나라', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop', desc: '자원순환 효율 극대화 프로젝트' },
];

const steps = [
  {
    step: 'Step 01',
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: '전략적 자원 수집',
    copy: '현장의 발로 뛰는 신속한 수집',
    desc: '전국적인 수거 파트너 네트워크와 자사 차량으로 배출처별 최적의 수거 주기를 운영합니다. 모든 수거 과정은 디지털 데이터로 기록됩니다.',
    details: [
      '전국적인 수거 파트너 네트워크 운영',
      '자사 및 협력사 차량을 활용한 유연한 배차 시스템',
      '배출처별 맞춤형 수거 주기 관리',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '자원 수거 현장',
  },
  {
    step: 'Step 02',
    icon: <Layers size={32} strokeWidth={1.5} />,
    title: '정밀 선별 및 가공',
    copy: '1g의 오차도 허용하지 않는 정직한 품질',
    desc: '숙련된 전문가와 자동화 시스템이 결합된 선별 공정으로 고순도 재생 원료를 생산합니다. 국가 공인 계근 시스템으로 신뢰를 약속합니다.',
    details: [
      '숙련된 전문가·시스템을 통한 고순도 재생 제지 원료 선별',
      '제지 공정에 즉시 투입 가능한 최적의 원료 상태 유지',
      '엄격한 품질 검수 및 계근 데이터 기록',
    ],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '정밀 선별 공정',
  },
  {
    step: 'Step 03',
    icon: <Handshake size={32} strokeWidth={1.5} />,
    title: '안정적 원료 납품',
    copy: '제지 산업의 든든한 상생 파트너',
    desc: '국내 주요 제지사와 장기적인 파트너십을 유지하며, 대규모 적시설비를 통해 수급 불안정을 원천 차단하고 안정적인 원료를 공급합니다.',
    details: [
      '국내 주요 제지사와의 장기적이고 안정적인 파트너십',
      '고객사별 요구 규격에 맞춘 커스텀 압축 규격 제공',
      '대규모 적치 공간 확보를 통한 수급 안정화',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '원료 납품 현장',
  },
];

const roadmap = [
  { phase: 'Phase 1', title: '디지털 계근 및 정산 시스템 도입', date: '2025년 상반기', done: true },
  { phase: 'Phase 2', title: '수거 차량 최적 경로 AI 알고리즘 적용', date: '2025년 하반기', done: false },
  { phase: 'Phase 3', title: '통합 데이터 플랫폼 \"Geosang Loop\" 런칭', date: '2026년', done: false },
];

/* ─────────────────────────────────────────────
   컴포넌트: Sticky Step (Rubicon 스타일)
 ───────────────────────────────────────────── */
const StickySteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(Math.floor(latest * 3), 2);
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
                  {step.details.map((d, j) => (
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

const Process = () => {
  return (
    <div className="flex flex-col w-full bg-white font-display">
      {/* ════════ Hero ════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-geosang-deep text-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 container-custom px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-8"
          >
            GEOSANG CONNECT™
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl mx-auto"
          >
            Digitalizing the<br />
            <span className="text-geosang-teal">Circular Economy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-16"
          >
            거상자원은 40년의 정직함을 데이터에 담아,<br />
            기업의 폐기물 관리를 자산의 가치로 전환합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="bg-geosang-teal text-white hover:bg-white hover:text-geosang-teal px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl">
              솔루션 시작하기
            </button>
            <button className="flex items-center gap-3 text-white hover:text-geosang-teal transition-colors group">
              <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 group-hover:border-geosang-teal transition-all">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
              </div>
              <span className="font-bold border-b border-white/30 group-hover:border-geosang-teal">WATCH VIDEO</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════ Value Proposition ════════ */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.3em] mb-6">Enhance Your Program</div>
              <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight mb-8">
                단순 수거를 넘어,<br />
                <span className="font-bold">비즈니스의 수순함을 극대화합니다.</span>
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                전통적인 자원 수집 방식을 디지털화하여 배출부터 최종 정산까지 모든 데이터를 가시화합니다. 
                거상자원의 전문성은 귀사의 탄소 중립 목표 달성과 비용 최적화를 동시에 실현합니다.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="space-y-10">
                {[
                  { title: 'Real-time Tracking', desc: '모든 수거 차량의 위치와 상태를 실시간으로 모니터링합니다.' },
                  { title: 'Certified Compliance', desc: '국가 공인 계근 시스템으로 한치의 오차 없는 데이터를 보증합니다.' },
                  { title: 'Circular Reporting', desc: '기업의 자원순환 성과를 직관적인 ESG 대시보드로 제공합니다.' },
                ].map((item, i) => (
                  <div key={i} className="group cursor-default border-b border-slate-100 pb-8 flex justify-between items-start">
                    <div className="max-w-md">
                      <h3 className="text-xl font-bold text-geosang-deep mb-3 group-hover:text-geosang-teal transition-colors">{item.title}</h3>
                      <p className="text-slate-500 font-light">{item.desc}</p>
                    </div>
                    <ArrowRight size={24} className="text-slate-300 group-hover:text-geosang-teal group-hover:translate-x-2 transition-all" />
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
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center px-6">
                <div className="text-4xl md:text-6xl font-light text-geosang-deep mb-4 tracking-tighter">{s.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Sticky Steps ════════ */}
      <StickySteps />

      {/* ════════ Partnership Success ════════ */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.3em] mb-6">Social Proof</div>
            <h2 className="text-4xl font-light text-geosang-deep mb-6">
              국내 주요 기업이 신뢰하는<br /><span className="font-bold text-geosang-teal">거상자원의 파트너십</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-10 hover:bg-geosang-teal/5 transition-all group">
                <div className="h-16 mb-10 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-light text-geosang-deep mb-4">{partner.name}</h3>
                <p className="text-slate-500 font-light mb-8">{partner.desc}</p>
                <div className="inline-flex items-center gap-2 text-geosang-teal font-bold text-sm tracking-wider uppercase border-b border-geosang-teal pb-1">
                  Case Study <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Digital Loop ════════ */}
      <section className="relative py-40 bg-geosang-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={logoImg} alt="" className="w-full h-full object-contain scale-150" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-40">
              <div className="w-16 h-16 rounded-3xl bg-geosang-teal flex items-center justify-center text-white mb-10 shadow-xl">
                <BarChart3 size={36} strokeWidth={1} />
              </div>
              <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.3em] mb-6">Step 04 / Future</div>
              <h2 className="text-5xl font-light text-white leading-[1.1] mb-8">
                Digital<br />
                <span className="font-bold">Loop</span>
              </h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8">
                데이터가 흐르고 환경이 살아나는 시대를 위해,<br />
                인공지능 통합 거버넌스 시스템을 구축합니다.
              </p>
              <div className="inline-block px-5 py-2 rounded-full border border-geosang-teal/50 bg-geosang-teal/20 text-[11px] font-bold text-geosang-teal tracking-widest uppercase">Coming Soon 2026</div>
            </div>

            <div className="lg:w-2/3 w-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-white/10 mb-20 shadow-2xl">
                <p className="text-2xl md:text-3xl font-light text-white leading-relaxed italic mb-12 opacity-80">
                  "우리는 자원순환의 가시성을 확보하여 비즈니스의 투명성을 높입니다."
                </p>
                <div className="space-y-6">
                  {roadmap.map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.08)' }} className={`p-8 rounded-2xl border flex items-center justify-between gap-6 transition-all ${item.done ? 'bg-geosang-teal/20 border-geosang-teal/40' : 'bg-white/5 border-white/10'}`}>
                      <div className="flex items-center gap-6">
                        <div className={`w-3 h-3 rounded-full ${item.done ? 'bg-geosang-teal animate-pulse shadow-[0_0_10px_rgba(0,194,181,1)]' : 'bg-white/20'}`} />
                        <div>
                          <div className="text-[10px] font-bold text-geosang-teal uppercase tracking-widest mb-1">{item.phase}</div>
                          <div className="text-lg font-medium text-white">{item.title}</div>
                        </div>
                      </div>
                      <div className="text-right hidden sm:block">
                        <div className="text-xs font-bold text-white/40 mb-1">{item.date}</div>
                        {item.done && <div className="text-[10px] text-geosang-teal font-black">ACTIVE</div>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-40 bg-white relative overflow-hidden text-center">
        <div className="container-custom relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-geosang-deep mb-12 leading-tight">새로운 순환경제의 시작,<br /><span className="text-geosang-teal">거상자원이 함께합니다.</span></h2>
          <p className="text-slate-500 text-xl font-light mb-16 max-w-2xl mx-auto">전국적인 네트워크와 디지털 시스템으로 비즈니스의 자원순환 가치를 높이세요.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => window.location.hash = 'get-started'} className="bg-geosang-teal text-white hover:bg-geosang-deep px-16 py-7 rounded-full font-medium text-xl transition-all shadow-2xl flex items-center gap-4">
              파트너십 문의하기 <ArrowRight />
            </button>
            <button className="text-geosang-deep font-medium text-xl border-b-2 border-geosang-deep pb-1 hover:text-geosang-teal hover:border-geosang-teal transition-all">
              플랫폼 데모 보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
