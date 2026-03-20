import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
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
  TrendingUp,
} from 'lucide-react';
import logoImg from '../assets/logo.svg';

/* ─────────────────────────────────────────────
   데이터 정의
 ───────────────────────────────────────────── */
const platformFeatures = [
  {
    id: 'iot',
    title: '스마트 IoT 계근 시스템',
    subtitle: 'Real-time Data Collection',
    description:
      '현장의 모든 계근 데이터를 IoT 센서를 통해 즉시 디지털화합니다. 수작업의 오류를 배제하고 위변조가 불가능한 신뢰 데이터를 실시간으로 클라우드에 전송합니다.',
    features: ['실시간 클라우드 동기화', '위변조 방지 블록체인 연동', '모바일 기반 현장 관리'],
    icon: <Smartphone className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 'market-price',
    title: '글로벌 마켓 시세 연동',
    subtitle: 'Dynamic Pricing Engine',
    description:
      'LME(런던금속거래소) 및 국내외 재생 자원 지표를 실시간으로 추적합니다. 시장 변동성을 정밀하게 분석하여 투명하고 합리적인 매입·매출 단가를 자동으로 제안합니다.',
    features: ['LME 실시간 데이터 피드', '단가 예측 알고리즘', '투명한 정산 리포트'],
    icon: <LineChart className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1611974714658-b8d468805f7a?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 'ai',
    title: 'AI 물류 및 선별 최적화',
    subtitle: 'Smart Resource Optimization',
    description:
      'AI 알고리즘이 수거 차량의 최적 경로를 산출하고 효율적인 배차를 관리합니다. AI 이미지 인식을 통한 자동 재질 분류 기술로 선별 프로세스의 혁신을 이끕니다.',
    features: ['최적 경로 알고리즘', '실시간 차량 관제(FMS)', '물류비용 20% 이상 절감'],
    icon: <Cpu className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 'esg',
    title: 'ESG 임팩트 대시보드',
    subtitle: 'Data-driven Sustainability',
    description:
      '수거된 자원의 양을 기반으로 탄소 절감 효과를 자동 산출합니다. 기업의 ESG 공시를 위한 투명한 지표 데이터를 시각화하여 환경적 기여도를 한눈에 증명합니다.',
    features: ['탄소 배출권 지표화', '자원 순환 기여도 산출', '규제 준수 자동 리포팅'],
    icon: <BarChart3 className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 'marketplace',
    title: '순환 자원 마켓플레이스',
    subtitle: 'Geosang Loop Ecosystem',
    description:
      '배출처와 수요자를 투명하게 연결하는 B2B 마켓플레이스를 지향합니다. 안정적인 원료 수급과 고품질 재생 원료의 선순환을 통해 지속 가능한 산업 생태계를 완성합니다.',
    features: ['공급처·수요자 매칭', '거래 이력 투명 공개', '품질 인증 데이터 연동'],
    icon: <Globe className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop',
  },
];

const techStack = [
  {
    icon: <Wifi className="w-7 h-7" />,
    name: 'IoT Sensors',
    label: '사물인터넷',
    desc: '현장 계근·수거 데이터를 실시간으로 자동 수집하는 스마트 센서 네트워크',
  },
  {
    icon: <BrainCircuit className="w-7 h-7" />,
    name: 'AI / ML',
    label: '인공지능',
    desc: '경로 최적화, 수요 예측, 이미지 기반 재질 자동 분류를 위한 머신러닝 엔진',
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    name: 'Cloud Infra',
    label: '클라우드',
    desc: 'AWS 기반의 확장 가능한 인프라로 전국 거점 데이터를 무중단으로 처리',
  },
  {
    icon: <Link2 className="w-7 h-7" />,
    name: 'Blockchain',
    label: '블록체인',
    desc: '계근 기록·거래 이력의 위변조를 원천 차단하는 분산 원장 기반 무결성 보증',
  },
  {
    icon: <Database className="w-7 h-7" />,
    name: 'Big Data',
    label: '빅데이터',
    desc: '수거량·단가·ESG 지표를 통합 분석하여 시장 동향과 미래 수요를 예측',
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    name: 'Mobile App',
    label: '모바일 플랫폼',
    desc: '현장 작업자·배출 기업·수거 차량을 하나의 앱으로 연결하는 통합 관리 툴',
  },
];

const roadmap = [
  {
    phase: 'Phase 1',
    period: '2025년 상반기',
    title: '디지털 계근 & 정산 시스템',
    items: [
      'IoT 기반 현장 계근 데이터 자동 수집',
      '클라우드 정산 자동화 파이프라인 구축',
      '배출처별 모바일 영수증 발행',
    ],
    done: true,
  },
  {
    phase: 'Phase 2',
    period: '2025년 하반기',
    title: 'AI 물류 최적화 엔진',
    items: [
      '수거 차량 경로 자동 생성 알고리즘',
      '실시간 FMS(차량관제시스템) 연동',
      '배차 효율 기반 탄소 절감 리포팅',
    ],
    done: false,
  },
  {
    phase: 'Phase 3',
    period: '2026년',
    title: 'Geosang Loop 플랫폼 런칭',
    items: [
      '순환 자원 B2B 마켓플레이스 오픈',
      'ESG 임팩트 대시보드 기업 공개',
      '글로벌 마켓 시세 연동 자동 정산',
    ],
    done: false,
  },
];

/* ─────────────────────────────────────────────
   메인 컴포넌트
 ───────────────────────────────────────────── */
const Platform = () => {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-geosang-deep">
        {/* 배경 */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-geosang-deep/80 via-geosang-deep/60 to-geosang-deep" />
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
              Digital Transformation (DX)
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-8 max-w-4xl mx-auto">
              Geosang Loop<br />
              <span className="text-geosang-teal italic">자원순환의 완성,</span><br />
              디지털 거버넌스
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-14 max-w-2xl mx-auto">
              40년 현장의 신뢰에 IoT·AI·빅데이터를 더합니다.<br />
              투명한 데이터가 자원의 가치를 새롭게 정의합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => window.location.hash = 'get-started'}
                className="px-10 py-4 bg-geosang-teal text-white rounded-full font-medium hover:bg-white hover:text-geosang-teal transition-all shadow-lg shadow-geosang-teal/20 flex items-center gap-3 group"
              >
                플랫폼 도입 상담 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-white/5 text-white border border-white/15 rounded-full font-medium hover:bg-white/10 transition-all">
                데모 신청하기
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
            <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-6">Why Digital Transformation</div>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.15] mb-8">
              재활용 산업에<br />
              디지털 혁신이 필요한 이유
            </h2>
            <p className="text-white/40 font-light text-lg leading-relaxed max-w-xl">
              국내 폐기물 처리 시장 규모는 연간 20조 원을 넘어섰지만,
              대부분의 사업자는 여전히 수기 장부와 전화 배차에 의존합니다.
              데이터 없는 산업에는 신뢰도, 효율도, 미래도 없습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 현재 문제 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10"
            >
              <div className="text-[10px] tracking-[0.3em] text-red-400 uppercase font-medium mb-8">현재의 문제</div>
              <ul className="space-y-5">
                {[
                  '수기 계근으로 인한 단가 분쟁 및 불신',
                  '비효율적인 전화 배차로 물류비 과다 발생',
                  '배출량·탄소 절감량 데이터 부재로 ESG 대응 불가',
                  '시세 변동에 무방비한 아날로그 가격 협상',
                  '산재된 운영 데이터로 의사결정 지연',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 mt-2 shrink-0" />
                    <span className="text-white/50 font-light text-sm leading-relaxed">{item}</span>
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
              <div className="text-[10px] tracking-[0.3em] text-geosang-teal uppercase font-medium mb-8">Geosang의 해법</div>
              <ul className="space-y-5">
                {[
                  'IoT 자동 계근으로 실시간 투명 정산',
                  'AI 경로 최적화로 물류비 20% 이상 절감',
                  '탄소 배출권 산출·ESG 리포트 자동 생성',
                  'LME 연동 실시간 시세 기반 공정 단가',
                  '통합 대시보드로 즉각적인 데이터 기반 의사결정',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={14} className="text-geosang-teal mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-white/70 font-light text-sm leading-relaxed">{item}</span>
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
              <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-5">Value Proposition</div>
              <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight">
                현장 중심의 데이터가 만드는<br />
                투명한 순환 경제의 시작
              </h2>
            </div>
            <p className="text-slate-500 font-light text-base max-w-sm leading-relaxed">
              모든 자원의 흐름을 디지털로 연결하여<br />
              신뢰를 바탕으로 한 효율적인 자원 순환 체계를 지향합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: '데이터 무결성',
                desc: 'IoT 기반 자동 생성 데이터를 통해 인간의 개입으로 인한 오류를 차단하고 100% 투명한 정산 체계를 지원합니다.',
                stat: '100%',
                statLabel: '데이터 정확도',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: '운영 효율성',
                desc: 'AI 최적화 알고리즘을 통한 물류비 절감 및 선별 프로세스 디지털화로 폐기물 처리 비용을 혁신적으로 개선합니다.',
                stat: '25%+',
                statLabel: '물류비 절감',
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: '환경적 투명성',
                desc: '자원의 회수부터 재투입까지 전 과정을 데이터로 증명하여 기업의 지속 가능한 ESG 목표 달성을 돕습니다.',
                stat: '24/7',
                statLabel: '실시간 모니터링',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-10 border border-slate-100 hover:shadow-xl hover:border-geosang-teal/10 transition-all group"
              >
                <div className="w-14 h-14 bg-geosang-teal/8 rounded-2xl flex items-center justify-center text-geosang-teal mb-8 group-hover:bg-geosang-teal group-hover:text-white transition-all">
                  {item.icon}
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
                {platformFeatures.map((_, i) => (
                  <div
                    key={i}
                    className={`h-px flex-1 transition-all duration-700 ${i <= activeStep ? 'bg-geosang-teal' : 'bg-white/10'}`}
                  />
                ))}
              </div>
            </div>

            {/* 콘텐츠 */}
            <div className="flex-1 relative">
              {platformFeatures.map((feature, index) => (
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
                    {feature.features.map((f, j) => (
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
              {platformFeatures.map((feature, i) => (
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
            {platformFeatures.map((feature, index) => (
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
              미래 산업을 구성하는<br />6가지 핵심 기술
            </h2>
            <p className="text-slate-400 font-light text-base leading-relaxed">
              거상자원은 재활용 산업의 고질적 문제를 해결하기 위해
              최첨단 기술 스택을 현장에 직접 적용합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, i) => (
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
                단계적으로<br />완성되는<br />
                <span className="text-geosang-teal">디지털 루프</span>
              </h2>
              <p className="text-white/40 font-light text-sm leading-relaxed mb-10">
                현장 디지털화부터 글로벌 마켓플레이스까지,
                거상자원의 IT 전환 로드맵은 이미 시작됐습니다.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-geosang-teal/30 bg-geosang-teal/10">
                <span className="w-1.5 h-1.5 rounded-full bg-geosang-teal animate-pulse" />
                <span className="text-geosang-teal text-[10px] tracking-widest uppercase font-medium">Phase 1 Active</span>
              </div>
            </div>

            {/* 우측 타임라인 */}
            <div className="lg:w-2/3 w-full space-y-6">
              {roadmap.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl border p-8 transition-all ${
                    item.done
                      ? 'bg-geosang-teal/10 border-geosang-teal/30'
                      : 'bg-white/3 border-white/8 hover:bg-white/5'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-2 h-2 rounded-full ${item.done ? 'bg-geosang-teal animate-pulse shadow-[0_0_8px_rgba(0,194,181,0.8)]' : 'bg-white/20'}`} />
                        <span className={`text-[10px] tracking-[0.3em] uppercase font-medium ${item.done ? 'text-geosang-teal' : 'text-white/30'}`}>
                          {item.phase}
                        </span>
                        {item.done && (
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
                    {item.items.map((task, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${item.done ? 'bg-geosang-teal' : 'bg-white/20'}`} />
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
            {[
              { label: '데이터 정밀도', value: '99.9%', sub: 'Accuracy' },
              { label: '물류 효율 향상', value: '25%+', sub: 'Cost Reduction' },
              { label: '실시간 관제', value: '24/7', sub: 'Monitoring' },
              { label: '데이터 가용성', value: '100%', sub: 'Availability' },
            ].map((stat, i) => (
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
              { name: 'ALLBARO', desc: '공공 폐기물 관리 시스템' },
              { name: 'AWS CLOUD', desc: '클라우드 인프라' },
              { name: 'IoT HUB', desc: '스마트 센서 네트워크' },
              { name: 'ECO-LAB', desc: '환경 데이터 분석' },
              { name: 'LME DATA', desc: '글로벌 시세 연동' },
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
              <div className="text-geosang-teal text-[10px] font-medium tracking-[0.4em] uppercase mb-8">Get Started</div>
              <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                준비되셨나요?<br />
                거상자원의 디지털 루프를<br />
                시작하세요.
              </h2>
              <p className="text-white/40 font-light text-lg mb-14 leading-relaxed max-w-xl mx-auto">
                지금 플랫폼 도입 상담을 신청하고,<br />
                귀사의 자원 순환 프로세스를 데이터 중심으로 혁신하십시오.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <button
                  onClick={() => window.location.hash = 'get-started'}
                  className="px-12 py-5 bg-geosang-teal text-white rounded-full font-medium hover:bg-white hover:text-geosang-teal transition-all shadow-lg flex items-center gap-3 group"
                >
                  도입 신청하기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-12 py-5 bg-white/5 text-white border border-white/15 rounded-full font-medium hover:bg-white/10 transition-all">
                  회사 소개서 다운로드
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
