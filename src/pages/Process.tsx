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
// CTA·헤더 배경용 로고 import
import logoImg from '../assets/logo.svg';
// 히어로 배경 이미지
const processHeroBg = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2560&auto=format&fit=crop';

/* ─────────────────────────────────────────────
   데이터 정의
 ───────────────────────────────────────────── */
const stats = [
  { value: '40+', label: 'YEARS OF EXPERIENCE' },
  { value: '1,000+', label: 'COLLECTION NETWORK' },
  { value: '99.9%', label: 'DATA ACCURACY' },
  { value: '2026', label: 'DIGITAL LOOP LAUNCH' },
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
          <img src={processHeroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55 z-10" />
        </div>
        <div className="relative z-20 container-custom px-4 pt-20">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl mx-auto"
          >
            수거에서 납품까지,<br />
            <span className="text-geosang-teal">데이터로 완성하는 순환.</span>
          </motion.h1>
         
         
        </div>
      </section>

      {/* ════════ Value Proposition ════════ */}
      <section className="py-40 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2 lg:sticky lg:top-40">
              <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.4em] mb-8">Enhance Your Program</div>
              <h2 className="text-5xl md:text-6xl font-light text-geosang-deep leading-tight mb-10">
                단순 수거를 넘어,<br />
                <span className="text-geosang-teal tracking-tighter">비즈니스의 효율성을 극대화합니다.</span>
              </h2>
              <p className="text-2xl text-slate-400 font-light leading-relaxed mb-10">
                전통적인 자원 수집 방식을 디지털화하여 배출부터 최종 정산까지 모든 데이터를 가시화합니다. 거상자원의 전문성은 귀사의 탄소 중립 목표 달성과 비용 최적화를 동시에 실현합니다.
              </p>
              <div className="w-24 h-1.5 bg-geosang-teal rounded-full" />
            </div>
            <div className="lg:w-1/2 w-full pt-4">
              <div className="space-y-16">
                {[
                  { icon: <MapPin className="text-geosang-teal" />, title: '실시간 추적 관제', desc: '모든 수거 차량의 위치와 상태를 실시간으로 모니터링합니다.' },
                  { icon: <ShieldCheck className="text-geosang-teal" />, title: '공인 인증 규정 준수', desc: '국가 공인 계근 시스템으로 한치의 오차 없는 데이터를 보증합니다.' },
                  { icon: <BarChart3 className="text-geosang-teal" />, title: '자원 순환 보고', desc: '기업의 자원순환 성과를 직관적인 ESG 대시보드로 제공합니다.' },
                ].map((item, i) => (
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
              새로운 순환경제의 시작,<br />
              <span className="text-geosang-teal italic">거상자원이 함께합니다.</span>
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto">
              전국적인 네트워크와 디지털 시스템으로 비즈니스의 자원순환 가치를 높이세요.
            </p>
            <button onClick={() => window.location.hash = 'get-started'} className="px-12 py-5 bg-geosang-teal hover:bg-[#008f84] text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3 mx-auto">
              파트너십 문의하기 <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;
