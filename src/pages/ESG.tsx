import { motion } from 'framer-motion';
import {
  Leaf,
  Users,
  ShieldCheck,
  Recycle,
  TrendingUp,
  Globe,
  TreePine,
  Wind,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Building2,
  HeartHandshake,
  Scale,
} from 'lucide-react';
import logoImg from '../assets/logo.svg';

/* ─────────────────────────────────────────────
   데이터 정의
 ───────────────────────────────────────────── */
const esgPillars = [
  {
    letter: 'E',
    label: 'Environmental',
    color: 'text-emerald-400',
    border: 'border-emerald-400/30',
    bg: 'bg-emerald-400/10',
    icon: <Leaf className="w-8 h-8" />,
    title: '환경적 책임',
    desc: '폐지·파지를 재생 원료로 전환하여 연간 수천 톤의 CO₂ 배출을 막고, 원목 벌채 없이 고품질 종이 생산을 가능하게 합니다. 자원 순환은 우리의 사업 모델인 동시에 지구를 지키는 실천입니다.',
    points: [
      '연간 약 1,370톤 CO₂ 절감 (처리 폐지 기준)',
      '원목 21,000그루 이상 보존 효과',
      'AI 물류 최적화로 차량 탄소 배출 20% 감소',
      '매립지 우회 폐기물 연간 1,248톤 이상',
    ],
  },
  {
    letter: 'S',
    label: 'Social',
    color: 'text-blue-400',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/10',
    icon: <Users className="w-8 h-8" />,
    title: '사회적 가치',
    desc: '전국 12개 거점과 1,000명 이상의 파트너 네트워크를 통해 지역사회의 자원순환 인프라를 책임지며, 안전하고 공정한 일터를 만들어갑니다.',
    points: [
      '1,000+ 수거 파트너 네트워크로 일자리 지원',
      '지자체 연계 주민 자원순환 교육 프로그램',
      '현장 근로자 안전 기준 100% 준수',
      '배출 기업 ESG 목표 달성 지원',
    ],
  },
  {
    letter: 'G',
    label: 'Governance',
    color: 'text-geosang-teal',
    border: 'border-geosang-teal/30',
    bg: 'bg-geosang-teal/10',
    icon: <ShieldCheck className="w-8 h-8" />,
    title: '투명한 거버넌스',
    desc: '국가 공인 계근 시스템과 올바로(Allbaro) 연계를 통해 자원 흐름의 전 과정을 투명하게 기록합니다. 40년간 쌓아온 정직한 경영 원칙이 거상자원의 신뢰 기반입니다.',
    points: [
      '국가 공인 계근 데이터 100% 전산화',
      '올바로(Allbaro) 시스템 폐기물 이력 연동',
      '법적 환경 규제 완벽 준수',
      'ESG 성과 데이터 자동 리포팅 (2026년)',
    ],
  },
];

const impactStats = [
  { value: '1,370+', unit: '톤', label: '연간 CO₂ 절감', icon: <Wind className="w-6 h-6" />, sub: '탄소 배출 감소' },
  { value: '21,000+', unit: '그루', label: '보존된 원목', icon: <TreePine className="w-6 h-6" />, sub: '산림 자원 보호' },
  { value: '1,248', unit: '톤/년', label: '자원 회수량', icon: <Recycle className="w-6 h-6" />, sub: '매립 폐기물 우회' },
  { value: '40+', unit: '년', label: '지속가능 경영', icon: <TrendingUp className="w-6 h-6" />, sub: '정직한 현장 경험' },
];

const sdgs = [
  { num: 11, title: '지속가능한 도시', color: 'bg-amber-500', icon: <Building2 className="w-5 h-5" />, desc: '12개 도시 거점, 스마트 수거 인프라로 지속가능한 도시 환경 조성' },
  { num: 12, title: '책임있는 소비·생산', color: 'bg-amber-600', icon: <Recycle className="w-5 h-5" />, desc: '폐기물을 고품질 재생 원료로 전환, 자원 순환 경제 선도' },
  { num: 13, title: '기후 행동', color: 'bg-green-600', icon: <Leaf className="w-5 h-5" />, desc: '연간 1,370톤 이상의 CO₂ 절감으로 탄소 중립 목표에 기여' },
  { num: 17, title: '글로벌 파트너십', color: 'bg-blue-600', icon: <Globe className="w-5 h-5" />, desc: '제지사·배출기업·지자체 연계 1,000+ 파트너 생태계 구축' },
];

const roadmap = [
  {
    year: '2024',
    title: '현장 안전 & 법규 준수 체계 고도화',
    items: ['산업안전보건법 기준 작업 환경 전면 점검', '협력사 환경 기준 가이드라인 수립', '올바로 시스템 연동 폐기물 관리 전산화'],
    done: true,
  },
  {
    year: '2025',
    title: 'ESG 데이터 인프라 구축',
    items: ['IoT 기반 자원 회수량 실시간 측정 시스템 도입', '탄소 절감량 자동 산출 엔진 개발', '협력 파트너 ESG 온보딩 프로그램 출시'],
    done: true,
  },
  {
    year: '2026',
    title: 'Geosang ESG 리포트 공개',
    items: ['통합 ESG 임팩트 대시보드 기업 공개', '탄소 배출권 거래 연동 정산 시스템', '글로벌 ESG 공시 기준(GRI·SASB) 대응'],
    done: false,
  },
];

/* ─────────────────────────────────────────────
   메인 컴포넌트
 ───────────────────────────────────────────── */
const ESG = () => {
  return (
    <div className="flex flex-col w-full font-display bg-white">

      {/* ════════ Hero ════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#093944]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#093944]/40 via-[#093944]/25 to-[#093944]/65" />
        </div>

        <div className="relative z-10 container-custom text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-medium uppercase tracking-[0.25em] mb-8"
          >
            Environmental · Social · Governance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl mx-auto"
          >
            지속 가능한 내일을 위한<br />
            <span className="text-geosang-teal">거상자원의 약속</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/55 font-light leading-relaxed max-w-2xl mx-auto mb-14"
          >
            40년간 현장에서 자원을 순환시켜 온 거상자원은<br />
            환경·사회·거버넌스 모든 면에서 새로운 기준을 세웁니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button
              onClick={() => window.location.hash = 'get-started'}
              className="px-10 py-4 bg-geosang-teal text-white rounded-full font-medium hover:bg-white hover:text-geosang-teal transition-all shadow-lg flex items-center gap-3 group"
            >
              ESG 파트너십 문의 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all">
              ESG 보고서 다운로드
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-25"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* ════════ ESG 선언 ════════ */}
      <section className="section-padding bg-geosang-bg" id="esg-intro">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* 좌측 sticky */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-geosang-teal text-sm font-medium uppercase tracking-[0.2em] mb-6"
              >
                Our ESG Commitment
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight mb-8"
              >
                자원 순환은<br />우리의 사업이자<br />
                <span className="text-geosang-teal">우리의 책임</span>입니다
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-500 font-light leading-relaxed text-lg"
              >
                단순히 폐기물을 처리하는 것이 아닙니다.
                버려지는 자원에 새 생명을 불어넣고,
                그 과정에서 환경과 지역사회와 미래 세대를 생각합니다.
              </motion.p>
            </div>

            {/* 우측 */}
            <div className="lg:w-2/3 space-y-6">
              {[
                {
                  icon: <Recycle size={28} />,
                  title: '수거한 모든 자원은 원료가 됩니다',
                  desc: '거상자원이 수거하는 폐지·파지는 쓰레기가 아닙니다. 정밀 선별과 가공을 통해 국내 주요 제지사에 납품되는 고순도 재생 원료로 재탄생합니다. 하나의 자원이 낭비 없이 순환되도록 하는 것이 우리의 첫 번째 ESG 실천입니다.',
                },
                {
                  icon: <HeartHandshake size={28} />,
                  title: '지역사회와 함께 성장합니다',
                  desc: '1,000명이 넘는 수거 파트너, 12개 지역 거점, 지자체 연계 프로그램. 거상자원의 비즈니스는 지역 공동체와 함께 움직입니다. 공정한 거래와 안전한 일터는 우리의 협상 대상이 아닌 기본 원칙입니다.',
                },
                {
                  icon: <Scale size={28} />,
                  title: '투명성이 경쟁력입니다',
                  desc: '국가 공인 계근 데이터, 올바로(Allbaro) 이력 관리, 그리고 2026년 공개 예정인 통합 ESG 대시보드까지. 거상자원은 자원의 흐름을 숨기지 않습니다. 데이터로 증명하는 신뢰가 40년 사업의 근간입니다.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-start gap-7"
                >
                  <div className="w-14 h-14 shrink-0 bg-geosang-bg rounded-2xl flex items-center justify-center text-geosang-teal">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-geosang-deep mb-3">{item.title}</h3>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ E · S · G 세 기둥 ════════ */}
      <section className="section-padding bg-[#093944] text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.25em] mb-5">Three Pillars</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              E · S · G, 세 가지 기준으로<br />경영을 평가합니다
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {esgPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-3xl border ${pillar.border} bg-white/5 hover:bg-white/8 transition-all group`}
              >
                {/* 대문자 */}
                <div className={`text-[100px] font-black leading-none ${pillar.color} opacity-10 absolute -top-4 -right-2 select-none pointer-events-none`}>
                  {pillar.letter}
                </div>

                <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center ${pillar.color} mb-8`}>
                  {pillar.icon}
                </div>
                <div className={`text-[10px] tracking-[0.35em] uppercase font-medium ${pillar.color} mb-3`}>{pillar.label}</div>
                <h3 className="text-2xl font-light text-white mb-5">{pillar.title}</h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">{pillar.desc}</p>
                <ul className="space-y-3">
                  {pillar.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={13} className={`${pillar.color} mt-0.5 shrink-0 opacity-80`} strokeWidth={2} />
                      <span className="text-slate-400 font-light text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ 환경 임팩트 (이미지 + 텍스트) ════════ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden relative"
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2560&auto=format&fit=crop"
                alt="자연 환경 보호"
                className="w-full h-full object-cover"
              />
              {/* 오버레이 카드 */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                    <Leaf className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">연간 CO₂ 절감</div>
                    <div className="text-emerald-400 font-light text-2xl tracking-tight">1,370 <span className="text-base">톤</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.2em] mb-6">Environmental Impact</div>
              <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight mb-8">
                종이 한 장 안에<br />담긴 환경의 무게
              </h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg mb-10">
                A4 용지 1장을 재생 원료로 만들면 나무 1그루의 0.006%를 지킬 수 있습니다.
                거상자원이 연간 처리하는 1,248톤의 폐지·파지는
                원목 약 21,000그루를 보존하고, 1,370톤의 CO₂ 배출을 막습니다.
              </p>
              <div className="space-y-5">
                {[
                  { label: '종이 1톤 재활용 시 CO₂ 절감', value: '약 1.1톤', bar: 78 },
                  { label: '종이 1톤 재활용 시 보존 원목', value: '약 17그루', bar: 85 },
                  { label: '매립 대비 에너지 절감률', value: '약 64%', bar: 64 },
                  { label: '물 사용량 절감률', value: '약 50%', bar: 50 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-500 font-light">{item.label}</span>
                      <span className="text-sm text-geosang-teal font-medium">{item.value}</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.bar}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-geosang-teal rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ 임팩트 숫자 ════════ */}
      <section className="section-padding bg-geosang-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.25em] mb-4">Our Impact</div>
            <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight">
              숫자로 보는<br />거상자원의 ESG 성과
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-geosang-teal/10 flex items-center justify-center text-geosang-teal mb-6">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-light text-geosang-deep tracking-tight mb-1">
                  {stat.value}
                  <span className="text-base text-slate-400 ml-1">{stat.unit}</span>
                </div>
                <div className="text-[10px] text-geosang-teal tracking-[0.2em] uppercase font-medium mb-1">{stat.sub}</div>
                <div className="text-xs text-slate-400 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ 사회적 가치 (reversed layout) ════════ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            {/* 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                alt="지역사회 파트너십"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.2em] mb-6">Social Commitment</div>
              <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight mb-8">
                1,000명의 파트너와<br />함께 만드는<br />지속가능한 공동체
              </h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg mb-10">
                거상자원의 수거 네트워크는 단순한 공급망이 아닙니다.
                전국에 분산된 수거 파트너들은 각 지역사회의 자원순환을 책임지는
                핵심 구성원이며, 공정한 거래와 안정적인 수익을 통해 함께 성장합니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users size={20} />, title: '1,000+', desc: '수거 파트너' },
                  { icon: <Building2 size={20} />, title: '12개', desc: '지역 거점' },
                  { icon: <BarChart3 size={20} />, title: '50+', desc: '자사 물류 차량' },
                  { icon: <Globe size={20} />, title: '40+', desc: '년 지역사회 기여' },
                ].map((item, i) => (
                  <div key={i} className="bg-geosang-bg rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-geosang-teal">{item.icon}</div>
                    <div>
                      <div className="text-2xl font-light text-geosang-deep">{item.title}</div>
                      <div className="text-xs text-slate-400 font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ UN SDGs ════════ */}
      <section className="section-padding bg-[#093944] text-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
              <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.2em] mb-6">UN SDGs</div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                유엔의 지속가능발전목표에<br />
                <span className="text-geosang-teal">직접 기여</span>합니다
              </h2>
              <p className="text-slate-300 font-light leading-relaxed text-base">
                거상자원의 사업 모델은 UN이 제시한 17개 지속가능발전목표 중
                4개 목표와 직접적으로 연결되어 있습니다.
                자원순환은 지역 문제를 넘어 글로벌 과제의 해법입니다.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sdgs.map((sdg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${sdg.color} flex items-center justify-center text-white`}>
                      {sdg.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 tracking-widest uppercase font-medium">SDG {sdg.num}</div>
                      <div className="text-white font-light">{sdg.title}</div>
                    </div>
                  </div>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">{sdg.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ ESG 로드맵 ════════ */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.25em] mb-5">ESG Roadmap</div>
            <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight">
              연도별 ESG 이행 계획
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border p-8 transition-all ${
                  item.done
                    ? 'bg-geosang-teal/5 border-geosang-teal/20'
                    : 'bg-slate-50 border-slate-100 hover:border-geosang-teal/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-2 h-2 rounded-full ${item.done ? 'bg-geosang-teal shadow-[0_0_8px_rgba(0,194,181,0.6)]' : 'bg-slate-300'}`} />
                      <span className={`text-[10px] tracking-[0.3em] uppercase font-medium ${item.done ? 'text-geosang-teal' : 'text-slate-400'}`}>
                        {item.done ? 'Completed' : 'Planned'}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-geosang-deep">{item.title}</h3>
                  </div>
                  <span className="text-2xl font-light text-slate-200 whitespace-nowrap">{item.year}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {item.items.map((task, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${item.done ? 'bg-geosang-teal' : 'bg-slate-300'}`} />
                      <span className="text-xs text-slate-400 font-light leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="section-padding bg-[#093944] relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img src={logoImg} alt="" className="w-[600px] opacity-[0.04] object-contain select-none" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,181,0.1),transparent_60%)]" />

        <div className="container-custom relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.25em] mb-8">Together for Tomorrow</div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
              귀사의 ESG 목표,<br />
              <span className="text-geosang-teal italic">거상자원이 데이터로 증명합니다.</span>
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto leading-relaxed">
              탄소 절감량, 자원 회수율, 순환 기여도 —<br />
              우리가 함께 만들어 낸 지속 가능한 숫자를 ESG 보고서에 담으세요.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => window.location.hash = 'get-started'}
                className="px-12 py-5 bg-geosang-teal hover:bg-[#008f84] text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3 mx-auto sm:mx-0"
              >
                ESG 파트너십 시작하기 <ArrowRight size={24} />
              </button>
              <button className="px-12 py-5 border border-white/20 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                ESG 보고서 다운로드
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ESG;
