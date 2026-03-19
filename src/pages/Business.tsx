import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Truck,
  Layers,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Globe,
  Settings2,
  Database,
  Building2,
  Recycle,
  ShieldCheck,
  Cpu
} from 'lucide-react';
// CTA·헤더 배경용 로고 import
import logoImg from '../assets/logo.svg';
// 히어로 배경 이미지
import heroBg from '../assets/herosection-bg.avif';

/* ─────────────────────────────────────────────
   데이터 정의
 ───────────────────────────────────────────── */
const stats = [
  { value: '40+', label: 'YEARS OF JOURNEY' },
  { value: '50+', label: 'LOGISTICS VEHICLES' },
  { value: '12', label: 'REGIONAL CENTERS' },
  { value: '1,000+', label: 'PARTNER NETWORK' },
];

const partners = [
  { name: '한솔제지', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop', desc: '국내 최대 제지사와의 장기 파트너십' },
  { name: '무림P&P', logo: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=2670&auto=format&fit=crop', desc: '고순도 펄프 원료의 안정적 공급' },
  { name: '깨끗한나라', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop', desc: '자원순환 효율 극대화 프로젝트' },
];

const services = [
  {
    step: 'Service 01',
    icon: <Recycle size={32} strokeWidth={1.5} />,
    title: '재생 제지 원료 납품',
    copy: '고순도 재생 원료로의 재탄생',
    desc: '수거된 폐지 및 파지를 정밀하게 선별하고 가공하여 제지 공정에 즉시 투입 가능한 고순도 재생 원료를 생산합니다.',
    details: [
      '국내 주요 제지사 납품 규격 충족',
      '최첨단 자동화 선별 및 압축 시스템',
      '전 과정 품질 관리 및 안정적 수급 보장',
    ],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '재생 제지 원료 선별 공정',
  },
  {
    step: 'Service 02',
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: '생활폐기물 자원 순환',
    copy: '가정 및 상업 시설의 자원 회수 극대화',
    desc: '가정과 상업 시설에서 발생하는 재활용 자원을 체계적으로 관리하여 자원 회수율을 높이고 지속 가능한 도시 환경을 만듭니다.',
    details: [
      '지자체 연계 스마트 수거 시스템 플랫폼',
      '배출원별 맞춤형 재활용 가이드 및 인센티브',
      '수거 효율 최적화 및 탄소 배출 저감',
    ],
    image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '생활폐기물 수거 인프라',
  },
  {
    step: 'Service 03',
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: '산업폐기물 전문 처리',
    copy: '안전하고 투명한 기업용 자원 관리 솔루션',
    desc: '산업 현장에서 발생하는 대량의 폐기물을 법적 규제에 맞춰 안전하게 처리하며, 전 과정을 고객사에게 투명하게 공개합니다.',
    details: [
      '엄격한 환경 법규 준수 및 배출 관리',
      '올바로(Allbaro) 시스템 연계 투명한 이력 관리',
      'ESG 평가 대응을 위한 자원 순환 분석 데이터 제공',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '산업폐기물 처리 시스템',
  },
  {
    step: 'Service 04',
    icon: <Cpu size={32} strokeWidth={1.5} />,
    title: '디지털 자원순환 플랫폼',
    copy: '전통 산업과 IT 기술의 융합',
    desc: '40년 현장 실무 노하우에 IoT, AI 등 IT 기술을 접목하여 자원 순환 산업 전반의 효율성을 혁신적으로 높이는 플랫폼 비즈니스를 선도합니다.',
    details: [
      '실시간 물류 관제 및 경로 최적화 AI',
      '순환 자원 통합 거래 및 매칭 시스템',
      '디지털 데이터 기반의 투명한 순환경제 구현',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a061a4?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '자원순환 IT 플랫폼 대시보드',
  },
];

/* ─────────────────────────────────────────────
   컴포넌트: Sticky Service Section
 ───────────────────────────────────────────── */
const StickyServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // 4개 단계가 있으므로 인덱스 계산을 4로 조정
    const numSteps = services.length;
    const nextIndex = Math.min(Math.floor(latest * numSteps), numSteps - 1);
    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-white">
      <div className="sticky top-20 h-[calc(100vh-80px)] w-full flex flex-col lg:flex-row overflow-hidden border-t border-slate-50">
        
        {/* 좌측: 서비스 상세 */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center px-8 lg:px-24 bg-white z-20 relative">
          <div className="relative w-full h-[450px]">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  y: currentIndex === index ? 0 : 40,
                  pointerEvents: currentIndex === index ? 'auto' : 'none',
                  zIndex: currentIndex === index ? 10 : 0
                }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="w-16 h-16 rounded-3xl bg-geosang-teal/10 border border-geosang-teal/20 flex items-center justify-center text-geosang-teal mb-10 group-hover:bg-geosang-teal group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <div className="text-geosang-teal text-xs font-black uppercase tracking-[0.4em] mb-6">{service.step}</div>
                <h2 className="text-5xl md:text-7xl font-light text-geosang-deep leading-[1.1] mb-6">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? 'font-bold' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h2>
                <p className="text-xl text-geosang-teal font-bold mb-8">{service.copy}</p>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-md">{service.desc}</p>
                <ul className="space-y-5">
                  {service.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-geosang-teal/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-geosang-teal transition-colors">
                        <CheckCircle2 size={14} className="text-geosang-teal group-hover/item:text-white transition-colors" strokeWidth={2.5} />
                      </div>
                      <span className="text-slate-600 font-medium tracking-tight whitespace-nowrap">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 우측: 이미지 */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative bg-slate-100 overflow-hidden lg:rounded-l-[4rem]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 1.1,
              }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}
          
          {/* 인디케이터 */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {services.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-700 ${
                  currentIndex === index ? 'w-20 bg-geosang-teal shadow-[0_0_15px_rgba(0,162,142,0.5)]' : 'w-6 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   메인 컴포넌트: Business (Services)
 ───────────────────────────────────────────── */
const Business = () => {
  return (
    <div className="flex flex-col w-full bg-white font-display pt-20">
      {/* ════════ Hero ════════ */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-geosang-deep text-center">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-geosang-deep/90 z-10" />
        </div>
        <div className="relative z-20 container-custom px-4 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.5em] mb-10"
          >
            Sustainable Resource Cycle Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-5xl md:text-[7.5rem] font-light text-white leading-tight mb-14 tracking-tight"
          >
            지속 가능한 미래를 위한<br />
            <span className="font-bold">포괄적인 <span className="text-geosang-teal">자원 순환</span> 솔루션</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-xl md:text-[1.75rem] text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-20"
          >
            거상자원은 40년 현장 실무의 정직함과 최첨단 디지털 기술을 결합하여<br />
            자원 순환의 새로운 글로벌 표준을 제시합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button 
              onClick={() => {
                const gallery = document.getElementById('main-services');
                gallery?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-geosang-teal text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-white hover:text-geosang-teal transition-all flex items-center gap-3 mx-auto group shadow-2xl"
            >
              우리의 비즈니스 확인하기 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════ Value Proposition ════════ */}
      <section className="py-40 bg-white" id="main-services">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2 lg:sticky lg:top-40">
              <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.4em] mb-8">What We Actually Do</div>
              <h2 className="text-5xl md:text-6xl font-light text-geosang-deep leading-tight mb-10">
                우리는 수거를 넘어<br />
                <span className="font-bold text-geosang-teal tracking-tighter">자원의 가치를 재정의합니다.</span>
              </h2>
              <p className="text-2xl text-slate-400 font-light leading-relaxed mb-12">
                거상자원이 수행하는 핵심 사업들은 환경보호를 넘어 <br />
                기업과 사회에 새로운 경제적 이익을 창출합니다.
              </p>
              <div className="w-24 h-1.5 bg-geosang-teal rounded-full" />
            </div>
            <div className="lg:w-1/2 w-full pt-4">
              <div className="space-y-16">
                {[
                  { icon: <Recycle className="text-geosang-teal" />, title: '재생 원료 선도', desc: '국내 최대 제지사들이 인정하는 고순도 원료 생산의 표준을 만듭니다.' },
                  { icon: <Building2 className="text-geosang-teal" />, title: '도시 자원 관리', desc: '가정과 기업의 폐기물이 100% 자원화되는 스마트 시티를 향해 나아갑니다.' },
                  { icon: <Database className="text-geosang-teal" />, title: '데이터 기반 투명성', desc: '모든 자원의 흐름을 수치화하여 ESG 경영의 확실한 근거를 제공합니다.' },
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="flex gap-8 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-geosang-teal/5 flex items-center justify-center shrink-0 group-hover:bg-geosang-teal/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-geosang-deep mb-4 group-hover:text-geosang-teal transition-colors tracking-tight">{item.title}</h3>
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
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center px-6">
                <div className="text-5xl md:text-7xl font-black text-geosang-deep mb-4 tracking-tighter">{s.value}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Sticky Services ════════ */}
      <StickyServices />

      {/* ════════ Partnership Success ════════ */}
      <section className="py-40 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.4em] mb-8">Infrastructure & Success</div>
            <h2 className="text-4xl md:text-5xl font-light text-geosang-deep mb-8 leading-tight">
              거상자원의 전문성은<br /><span className="font-bold text-geosang-teal">숫자와 파트너의 신뢰로 증명됩니다.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light">이미 국내 유수의 기업들이 거상자원과 함께 자원순환의 가치를 실현하고 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {partners.map((partner, i) => (
              <div key={i} className="bg-slate-50 rounded-[2.5rem] p-12 hover:bg-geosang-teal/5 transition-all group border border-transparent hover:border-geosang-teal/10">
                <div className="h-20 mb-12 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100 shadow-sm">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-geosang-deep mb-5 group-hover:text-geosang-teal transition-colors">{partner.name}</h3>
                <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed">{partner.desc}</p>
                <div className="inline-flex items-center gap-2 text-geosang-teal font-bold text-sm tracking-widest uppercase border-b-2 border-geosang-teal/20 pb-2 group-hover:border-geosang-teal transition-all">
                  Contact Specialist <ArrowRight size={16} />
                </div>
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
            className="text-5xl md:text-8xl font-bold text-white mb-16 leading-tight tracking-tighter"
          >
            지속 가능한 비즈니스,<br /><span className="text-geosang-teal">거상자원이 실천합니다.</span>
          </motion.h2>
          <p className="text-slate-300 text-2xl font-light mb-20 max-w-3xl mx-auto leading-relaxed">
            귀사의 폐기물 관리를 데이터와 전문성 기반의 <br className="hidden md:block" /> 핵심 비즈니스 자산으로 전환해 보세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button onClick={() => window.location.hash = 'contact'} className="bg-geosang-teal text-white hover:bg-white hover:text-geosang-teal px-16 py-8 rounded-full font-bold text-xl transition-all shadow-[0_20px_50px_rgba(0,162,142,0.3)] flex items-center gap-4 group">
              솔루션 상담 신청 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-16 py-8 rounded-full font-bold text-xl transition-all">
              소개서 다운로드
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
