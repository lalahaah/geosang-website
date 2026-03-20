import { type Lang, translations } from '../translations';
import { type FC } from 'react';
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
import DarkCTASection from '../components/DarkCTASection';

/* ─────────────────────────────────────────────
   Props
 ───────────────────────────────────────────── */
interface ESGProps {
  lang: Lang;
}

/* ─────────────────────────────────────────────
   메인 컴포넌트
 ───────────────────────────────────────────── */
const ESG: FC<ESGProps> = ({ lang }) => {
  const t = (translations[lang] as any).esg;

  const pillarIcons = [
    <Leaf className="w-8 h-8" />,
    <Users className="w-8 h-8" />,
    <ShieldCheck className="w-8 h-8" />,
  ];
  const pillarColors = [
    { color: 'text-emerald-400', border: 'border-emerald-400/30', bg: 'bg-emerald-400/10' },
    { color: 'text-blue-400', border: 'border-blue-400/30', bg: 'bg-blue-400/10' },
    { color: 'text-geosang-teal', border: 'border-geosang-teal/30', bg: 'bg-geosang-teal/10' },
  ];
  const esgPillars = t.pillars.map((p: any, i: number) => ({
    ...p,
    icon: pillarIcons[i],
    ...pillarColors[i],
  }));

  const statIcons = [
    <Wind className="w-6 h-6" />,
    <TreePine className="w-6 h-6" />,
    <Recycle className="w-6 h-6" />,
    <TrendingUp className="w-6 h-6" />,
  ];
  const impactStats = t.impactStats.map((s: any, i: number) => ({
    ...s,
    icon: statIcons[i],
  }));

  const sdgIcons = [
    <Building2 className="w-5 h-5" />,
    <Recycle className="w-5 h-5" />,
    <Leaf className="w-5 h-5" />,
    <Globe className="w-5 h-5" />,
  ];
  const sdgColors = ['bg-amber-500', 'bg-amber-600', 'bg-green-600', 'bg-blue-600'];
  const sdgs = t.sdgs.map((s: any, i: number) => ({
    ...s,
    icon: sdgIcons[i],
    color: sdgColors[i],
  }));

  const roadmap = t.roadmap;

  const declarationItems = lang === 'ko' ? [
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
  ] : [
    {
      icon: <Recycle size={28} />,
      title: 'Every Resource Collected Becomes Raw Material',
      desc: "The waste paper and trim Geosang collects is not garbage. Through precision sorting and processing, it is reborn as high-purity recycled raw material supplied to major domestic paper mills. Ensuring that every resource circulates without waste is our first ESG practice.",
    },
    {
      icon: <HeartHandshake size={28} />,
      title: 'Growing Together with Local Communities',
      desc: "1,000+ collection partners, 12 regional hubs, local government-linked programs. Geosang's business moves with the local community. Fair transactions and safe workplaces are not negotiables — they are our basic principles.",
    },
    {
      icon: <Scale size={28} />,
      title: 'Transparency is Our Competitive Edge',
      desc: "Nationally certified weighing data, Allbaro history management, and the integrated ESG dashboard set for public release in 2026. Geosang does not hide resource flows. Trust proven by data is the foundation of our 40 years in business.",
    },
  ];

  const envImpactItems = lang === 'ko' ? [
    { label: '종이 1톤 재활용 시 CO₂ 절감', value: '약 1.1톤', bar: 78 },
    { label: '종이 1톤 재활용 시 보존 원목', value: '약 17그루', bar: 85 },
    { label: '매립 대비 에너지 절감률', value: '약 64%', bar: 64 },
    { label: '물 사용량 절감률', value: '약 50%', bar: 50 },
  ] : [
    { label: 'CO₂ reduction per 1 ton of paper recycled', value: 'approx. 1.1 tons', bar: 78 },
    { label: 'Trees preserved per 1 ton of paper recycled', value: 'approx. 17 trees', bar: 85 },
    { label: 'Energy savings vs. landfill', value: 'approx. 64%', bar: 64 },
    { label: 'Water usage reduction rate', value: 'approx. 50%', bar: 50 },
  ];

  const socialStats = t.social.stats;

  return (
    <div className="flex flex-col w-full font-display bg-white">

      {/* ════════ Hero ════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-geosang-dark">
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
            {t.hero.tag}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-5xl lg:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl mx-auto"
          >
            {t.hero.h1}<br />
            <span className="text-geosang-teal">{t.hero.h1Teal}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/55 font-light leading-relaxed max-w-2xl mx-auto mb-14"
          >
            {t.hero.p}
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
              {t.hero.btn1} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all">
              {t.hero.btn2}
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
                {t.declaration.tag}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl lg:text-5xl font-light text-geosang-deep leading-tight mb-8"
              >
                {t.declaration.h2}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-500 font-light leading-relaxed text-lg"
              >
                {t.declaration.desc}
              </motion.p>
            </div>

            {/* 우측 */}
            <div className="lg:w-2/3 space-y-6">
              {declarationItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-start gap-7"
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
      <section className="section-padding bg-geosang-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.25em] mb-5">Three Pillars</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
              {lang === 'ko' ? (
                <>E · S · G, 세 가지 기준으로<br />경영을 평가합니다</>
              ) : (
                <>E · S · G — Three Standards<br />We Measure Our Business By</>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {esgPillars.map((pillar: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative p-6 sm:p-10 rounded-3xl border ${pillar.border} bg-white/5 hover:bg-white/8 transition-all group`}
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
                  {pillar.points.map((point: string, j: number) => (
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
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-20 items-center">
            {/* 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden relative"
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2560&auto=format&fit=crop"
                alt={lang === 'ko' ? '자연 환경 보호' : 'Nature and Environmental Protection'}
                className="w-full h-full object-cover"
              />
              {/* 오버레이 카드 */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                    <Leaf className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {lang === 'ko' ? '연간 CO₂ 절감' : 'Annual CO₂ Reduction'}
                    </div>
                    <div className="text-emerald-400 font-light text-2xl tracking-tight">
                      1,370 <span className="text-base">{lang === 'ko' ? '톤' : 'tons'}</span>
                    </div>
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
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-geosang-deep leading-tight mb-8">
                {lang === 'ko' ? (
                  <>종이 한 장 안에<br />담긴 환경의 무게</>
                ) : (
                  <>The Environmental Weight<br />Within a Sheet of Paper</>
                )}
              </h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg mb-10">
                {lang === 'ko'
                  ? 'A4 용지 1장을 재생 원료로 만들면 나무 1그루의 0.006%를 지킬 수 있습니다. 거상자원이 연간 처리하는 1,248톤의 폐지·파지는 원목 약 21,000그루를 보존하고, 1,370톤의 CO₂ 배출을 막습니다.'
                  : 'Making one sheet of A4 paper from recycled materials saves 0.006% of a single tree. The 1,248 tons of waste paper Geosang processes annually preserves approximately 21,000 trees and prevents 1,370 tons of CO₂ emissions.'}
              </p>
              <div className="space-y-5">
                {envImpactItems.map((item, i) => (
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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-geosang-deep leading-tight">
              {lang === 'ko' ? (
                <>숫자로 보는<br />거상자원의 ESG 성과</>
              ) : (
                <>Geosang's ESG Performance<br />in Numbers</>
              )}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat: any, i: number) => (
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
                alt={lang === 'ko' ? '지역사회 파트너십' : 'Community Partnership'}
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
              <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.2em] mb-6">{t.social.tag}</div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-geosang-deep leading-tight mb-8">
                {t.social.h2}
              </h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg mb-10">
                {t.social.p}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Users size={20} />, title: socialStats[0].value, desc: socialStats[0].label },
                  { icon: <Building2 size={20} />, title: socialStats[1].value, desc: socialStats[1].label },
                  { icon: <BarChart3 size={20} />, title: socialStats[2].value, desc: socialStats[2].label },
                  { icon: <Globe size={20} />, title: socialStats[3].value, desc: socialStats[3].label },
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
      <section className="section-padding bg-geosang-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
              <div className="text-geosang-teal text-sm font-medium uppercase tracking-[0.2em] mb-6">UN SDGs</div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight mb-8">
                {lang === 'ko' ? (
                  <>유엔의 지속가능발전목표에<br /><span className="text-geosang-teal">직접 기여</span>합니다</>
                ) : (
                  <>Directly Contributing<br />to <span className="text-geosang-teal">UN SDGs</span></>
                )}
              </h2>
              <p className="text-slate-300 font-light leading-relaxed text-base">
                {lang === 'ko'
                  ? '거상자원의 사업 모델은 UN이 제시한 17개 지속가능발전목표 중 4개 목표와 직접적으로 연결되어 있습니다. 자원순환은 지역 문제를 넘어 글로벌 과제의 해법입니다.'
                  : "Geosang's business model directly aligns with 4 of the 17 Sustainable Development Goals set by the UN. Resource circulation is a solution not only to local challenges but to global ones."}
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sdgs.map((sdg: any, i: number) => (
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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-geosang-deep leading-tight">
              {lang === 'ko' ? '연도별 ESG 이행 계획' : 'Annual ESG Implementation Plan'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {roadmap.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl border p-4 sm:p-8 transition-all ${
                  i < 2
                    ? 'bg-geosang-teal/5 border-geosang-teal/20'
                    : 'bg-slate-50 border-slate-100 hover:border-geosang-teal/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-geosang-teal shadow-[0_0_8px_rgba(0,194,181,0.6)]' : 'bg-slate-300'}`} />
                      <span className={`text-[10px] tracking-[0.3em] uppercase font-medium ${i < 2 ? 'text-geosang-teal' : 'text-slate-400'}`}>
                        {i < 2 ? (lang === 'ko' ? 'Completed' : 'Completed') : (lang === 'ko' ? 'Planned' : 'Planned')}
                      </span>
                    </div>
                    <h3 className="text-xl font-light text-geosang-deep">{item.title}</h3>
                  </div>
                  <span className="text-2xl font-light text-slate-200 whitespace-nowrap">{item.year}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {item.items.map((task: string, j: number) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${i < 2 ? 'bg-geosang-teal' : 'bg-slate-300'}`} />
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
      <DarkCTASection
        h2={t.cta.h2}
        h2Teal={t.cta.h2Teal}
        paragraph={t.cta.p}
        primaryBtn={t.cta.btn1}
        secondaryBtn={t.cta.btn2}
      />

    </div>
  );
};

export default ESG;
