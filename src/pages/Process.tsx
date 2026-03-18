import { motion } from 'framer-motion';
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
  { value: '40+', label: '년간 현장 경험' },
  { value: '1,000+', label: '배출처 네트워크' },
  { value: '99.9%', label: '계근 데이터 정확도' },
  { value: '2026', label: 'Digital Loop 론칭' },
];

const steps = [
  {
    step: 'Step 01',
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: '전략적 자원 수집',
    copy: '현장의 발로 뛰는 신속한 수집',
    desc: '전국적인 수거 파트너 네트워크와 자사 차량으로 배출처별 최적의 수거 주기를 운영합니다. 단 한 번의 발걸음도 데이터로 기록됩니다.',
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
    desc: '숙련된 전문가와 자동화 시스템이 결합된 선별 공정으로 고순도 재생 원료를 생산합니다. 국가 공인 계근 시스템으로 모든 과정을 실시간 기록합니다.',
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
    desc: '국내 주요 제지사와 장기적이고 신뢰 기반의 파트너십을 유지합니다. 대규모 적치 공간으로 수급 불안정을 원천 차단하고 안정적인 원료를 공급합니다.',
    details: [
      '국내 주요 제지사와의 장기적이고 안정적인 파트너십',
      '고객사별 요구 규격에 맞춘 커스텀 압축 및 가공 규격 제공',
      '대규모 적치 공간 확보를 통한 수급 불안정 원차단',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
    imageAlt: '원료 납품 현장',
  },
];

const roadmap = [
  { phase: 'Phase 1', title: '디지털 계근 및 정산 시스템 도입', date: '2025년 상반기', done: true },
  { phase: 'Phase 2', title: '수거 차량 최적 경로 AI 알고리즘 적용', date: '2025년 하반기', done: false },
  { phase: 'Phase 3', title: '통합 데이터 플랫폼 "Geosang Loop" 런칭', date: '2026년', done: false },
];

/* ─────────────────────────────────────────────
   컴포넌트
───────────────────────────────────────────── */
const Process = () => {
  return (
    // 헤더와 겹치도록 pt 없음
    <div className="flex flex-col w-full bg-white font-display overflow-x-hidden">

      {/* ══════════════════════════════════════
          ① Hero Section
      ══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden bg-geosang-deep">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="프로세스 히어로"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0B2D35]/95 z-10" />
        </div>

        <div className="relative z-20 container-custom w-full">
          <div className="max-w-3xl">
            {/* 태그 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-geosang-teal text-sm font-bold uppercase tracking-[0.3em] mb-6"
            >
              프로세스
            </motion.div>
            {/* 메인 타이틀 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-light text-white leading-[1.08] mb-8"
            >
              자원순환의<br />
              <span className="text-geosang-teal">새로운 표준</span>을<br />
              만들어갑니다.
            </motion.h1>
            {/* 서브 텍스트 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 font-light leading-relaxed max-w-xl"
            >
              현장의 발로 뛰는 정직함과 데이터 기반의 투명한 시스템으로<br />
              자원의 가치를 극대화합니다.
            </motion.p>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          ② 통계 배지 (Stats Bar)
      ══════════════════════════════════════ */}
      <section className="bg-geosang-deep border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col items-center py-10 px-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-light text-geosang-teal mb-2">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ③ Step 01 / 02 / 03 — 교대 레이아웃
      ══════════════════════════════════════ */}
      {steps.map((step, i) => {
        const isEven = i % 2 === 1; // 짝수 스텝은 이미지가 오른쪽
        return (
          <section
            key={i}
            className={`section-padding ${isEven ? 'bg-geosang-bg' : 'bg-white'}`}
          >
            <div className="container-custom">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                {/* 이미지 영역 */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* 스텝 번호 배지 */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-geosang-deep rounded-2xl flex flex-col items-center justify-center shadow-xl">
                      <div className="text-[10px] font-bold text-geosang-teal uppercase tracking-widest mb-0.5">Step</div>
                      <div className="text-2xl font-light text-white">{String(i + 1).padStart(2, '0')}</div>
                    </div>
                  </div>
                </motion.div>

                {/* 텍스트 영역 */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  {/* 아이콘 */}
                  <div className="w-14 h-14 rounded-2xl bg-geosang-teal/10 border border-geosang-teal/20 flex items-center justify-center text-geosang-teal mb-8">
                    {step.icon}
                  </div>
                  {/* 태그 */}
                  <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.25em] mb-4">{step.step}</div>
                  {/* 제목 */}
                  <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight mb-4">
                    {step.title}
                  </h2>
                  {/* 카피 */}
                  <p className="text-geosang-teal text-base font-medium mb-6 italic">{step.copy}</p>
                  {/* 설명 */}
                  <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">{step.desc}</p>
                  {/* 세부 체크리스트 */}
                  <ul className="space-y-4">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <CheckCircle2 size={20} className="text-geosang-teal shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-slate-600 font-light">{d}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════════════════════════════════
          ④ Step 04 — Digital Loop (다크 섹션)
      ══════════════════════════════════════ */}
      <section className="relative py-32 bg-[#093944] overflow-hidden">
        {/* 배경 글로우 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-geosang-teal/5 blur-3xl" />
        </div>

        <div className="relative z-10 container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* 좌측: 헤더 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 lg:sticky lg:top-32"
            >
              {/* 아이콘 */}
              <div className="w-14 h-14 rounded-2xl bg-geosang-teal flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(0,194,181,0.4)]">
                <BarChart3 size={32} strokeWidth={1.5} />
              </div>
              <div className="text-geosang-teal text-xs font-bold uppercase tracking-[0.25em] mb-4">Step 04</div>
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                Digital<br />Loop
              </h2>
              <p className="text-slate-400 font-light leading-relaxed mb-4">
                자원순환의 완성,<br />디지털 데이터 거버넌스
              </p>
              {/* Coming Soon 배지 */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold tracking-widest text-geosang-teal">
                출시 예정
              </span>
            </motion.div>

            {/* 우측: 로드맵 타임라인 */}
            <div className="lg:w-2/3">
              {/* 인용문 */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-light text-white/70 leading-relaxed italic border-l-2 border-geosang-teal pl-8 mb-16"
              >
                "우리는 단순히 폐지를 옮기는 것을 넘어, 자원의 흐름을 데이터로 증명하여<br className="hidden md:block" />
                투명하고 효율적인 순환경제를 선도할 것입니다."
              </motion.blockquote>

              {/* 로드맵 */}
              <div className="relative space-y-10">
                {/* 수직 라인 */}
                <div className="absolute left-4 top-2 bottom-2 w-[1px] bg-gradient-to-b from-geosang-teal/60 via-geosang-teal/20 to-transparent" />

                {roadmap.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative pl-14 py-8 px-10 rounded-2xl border transition-all ${
                      item.done
                        ? 'bg-geosang-teal/10 border-geosang-teal/30'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    {/* 타임라인 닷 */}
                    <div className={`absolute left-[10px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full border-2 z-10 ${
                      item.done
                        ? 'bg-geosang-teal border-geosang-teal shadow-[0_0_14px_rgba(0,194,181,0.6)]'
                        : 'bg-[#093944] border-geosang-teal/40'
                    }`} />

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="text-geosang-teal text-xs font-bold uppercase tracking-widest mb-2">{item.phase}</div>
                        <div className="text-white text-lg font-light">{item.title}</div>
                      </div>
                      <div className="md:text-right shrink-0">
                        <span className={`text-sm font-bold ${item.done ? 'text-geosang-teal' : 'text-slate-500'}`}>
                          {item.date}
                        </span>
                        {item.done && (
                          <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-geosang-teal">
                            ✓ 완료
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ⑤ CTA Section
      ══════════════════════════════════════ */}
      <section className="py-28 bg-geosang-teal relative overflow-hidden">
        {/* 배경 로고 워터마크 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            src={logoImg}
            alt=""
            className="w-[480px] opacity-[0.06] object-contain select-none"
          />
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-6">함께하기</div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              거상자원과 함께<br />자원순환의 미래를 시작하세요.
            </h2>
            <p className="text-white/70 text-lg font-light mb-12 max-w-xl mx-auto">
              40년의 현장 경험과 최신 디지털 기술로, 여러분의 비즈니스에 가장 투명하고 효율적인 자원순환 솔루션을 제공합니다.
            </p>
            <button
              onClick={() => (window.location.hash = 'get-started')}
              className="bg-white text-geosang-teal hover:bg-geosang-bg font-bold py-5 px-14 rounded-full text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
            >
              함께하기 <ArrowRight size={22} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Process;
