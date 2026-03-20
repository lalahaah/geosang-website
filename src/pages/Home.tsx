import { type Lang, translations } from '../translations';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// 히어로 섹션 배경 이미지 import
import heroBg from '../assets/herosection-bg.avif';
// CTA 섹션 배경 로고 이미지 import
import logoImg from '../assets/logo.svg';

import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Recycle,
  TrendingUp,
  MessageSquare,
  Building2,
  Clock,
  Factory,
  Trash2,
  Globe,
  Truck,
  Layers,
  Handshake,
  BarChart3,
  ExternalLink
} from 'lucide-react';

interface HomeProps {
  lang: Lang;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const [resourceCount, setResourceCount] = useState<number>(1248000);
  const t = (translations[lang] as any).home;

  // 실시간 카운터 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setResourceCount((prev: number) => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const PostCard = (post: any, i: number) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-geosang-deep">
          {post.category}
        </div>
      </div>
      <div className="text-slate-400 text-xs font-medium mb-3 tracking-widest uppercase">{post.date}</div>
      <h3 className="text-2xl font-bold text-geosang-deep mb-5 group-hover:text-geosang-teal transition-colors leading-snug">
        {post.title}
      </h3>
      <div className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-slate-200 group-hover:border-geosang-teal transition-all pb-1">
        {t.blog.readStory} <ExternalLink size={14} />
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col w-full font-display overflow-x-hidden bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Modern Smart Yard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55 z-10" />
        </div>

        {/* 텍스트 블록: 이미지 정중앙 배치 */}
        <div className="relative z-20 container-custom py-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-8"
          >
            {t.hero.subtitle}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl whitespace-pre-line"
          >
            {lang === 'ko' ? (
              <>
                땀으로 일군 어제,<br />
                <span className="text-geosang-teal">가치로 잇는 내일.</span>
              </>
            ) : (
              <>
                Built by Sweat,<br />
                <span className="text-geosang-teal">Connected by Value.</span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl whitespace-pre-line"
          >
            {t.hero.description}
          </motion.p>
          {/* Buttons removed per request */}
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* What We Do Section (Formerly Our Core Business) */}
      <section className="section-padding bg-geosang-bg overflow-hidden" id="what-we-do">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Title and Description */}
            <div className="lg:w-1/3 flex flex-col justify-start pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-6"
              >
                {t.whatWeDo.tag}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-geosang-deep mb-8 whitespace-pre-line"
              >
                {t.whatWeDo.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-slate-500 font-light leading-relaxed mb-10"
              >
                {t.whatWeDo.desc}
              </motion.p>

              {/* '스크롤하여 더보기' 제거 → '서비스' 버튼으로 교체 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => window.location.hash = 'service'}
                  className="px-10 py-4 bg-transparent border border-geosang-deep hover:bg-geosang-deep hover:text-white text-geosang-deep rounded-full transition-all text-base font-medium active:scale-95 group flex items-center gap-3"
                >
                  {t.whatWeDo.serviceBtn}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Cards (화살표 아이콘 제거) */}
            <div className="lg:w-2/3 -mx-4 px-4 lg:mx-0 lg:px-0">
              <div className="flex flex-col gap-6 pb-12 pt-4 no-scrollbar">
                {t.whatWeDo.items.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full bg-white p-4 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center gap-8"
                  >
                    <div className="w-16 h-16 shrink-0 bg-geosang-bg rounded-2xl flex items-center justify-center text-geosang-teal shadow-inner">
                      {i === 0 && <Factory size={32} />}
                      {i === 1 && <Trash2 size={32} />}
                      {i === 2 && <Building2 size={32} />}
                      {i === 3 && <Globe size={32} />}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-geosang-deep mb-2">{item.title}</h3>
                      <p className="text-slate-500 font-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    {/* 가로 화살표 제거 */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It Section (4-Step Value Chain) */}
      {/* 태그: 진행 프로세스 → 프로세스, 스텝 간격 축소 */}
      <section className="section-padding bg-geosang-dark text-white overflow-hidden" id="how-we-do-it">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Side: Sticky Title & Description */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#00C2B5] text-sm font-bold uppercase tracking-[0.2em] mb-6"
              >
                {t.howWeDoIt.tag}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-light leading-tight mb-8 whitespace-pre-line"
              >
                {t.howWeDoIt.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-300 font-light leading-relaxed mb-10 whitespace-pre-line"
              >
                {t.howWeDoIt.desc}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => window.location.hash = 'get-started'}
                className="px-10 py-4 bg-transparent border border-white hover:bg-white hover:text-geosang-dark rounded-full transition-all text-lg font-medium active:scale-95 group flex items-center gap-3"
              >
                {t.howWeDoIt.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Right Side: Step Sequence — 간격 줄임(space-y-24 → space-y-12), 제목+카피 한 줄 처리 */}
            <div className="lg:w-2/3 space-y-12">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#00C2B5] border border-white/10 group-hover:bg-[#00C2B5] group-hover:text-white transition-colors duration-500">
                    <Truck size={28} />
                  </div>
                  <div className="flex-grow pt-1">
                    {/* 스텝 라벨 + 제목 + 카피를 한 줄 형태로 compact하게 */}
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                      <span className="text-xs font-bold text-[#00C2B5] uppercase tracking-widest">{t.howWeDoIt.steps[0].step}</span>
                      <h3 className="text-xl font-bold">{t.howWeDoIt.steps[0].title}</h3>
                      <span className="text-slate-400 font-light text-sm">— {t.howWeDoIt.steps[0].copy}</span>
                    </div>
                    <ul className="space-y-2">
                      {t.howWeDoIt.steps[0].details.map((text: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 font-light text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2B5] opacity-50 shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#00C2B5] border border-white/10 group-hover:bg-[#00C2B5] group-hover:text-white transition-colors duration-500">
                    <Layers size={28} />
                  </div>
                  <div className="flex-grow pt-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                      <span className="text-xs font-bold text-[#00C2B5] uppercase tracking-widest">{t.howWeDoIt.steps[1].step}</span>
                      <h3 className="text-xl font-bold">{t.howWeDoIt.steps[1].title}</h3>
                      <span className="text-slate-400 font-light text-sm">— {t.howWeDoIt.steps[1].copy}</span>
                    </div>
                    <ul className="space-y-2">
                      {t.howWeDoIt.steps[1].details.map((text: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 font-light text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2B5] opacity-50 shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#00C2B5] border border-white/10 group-hover:bg-[#00C2B5] group-hover:text-white transition-colors duration-500">
                    <Handshake size={28} />
                  </div>
                  <div className="flex-grow pt-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                      <span className="text-xs font-bold text-[#00C2B5] uppercase tracking-widest">{t.howWeDoIt.steps[2].step}</span>
                      <h3 className="text-xl font-bold">{t.howWeDoIt.steps[2].title}</h3>
                      <span className="text-slate-400 font-light text-sm">— {t.howWeDoIt.steps[2].copy}</span>
                    </div>
                    <ul className="space-y-2">
                      {t.howWeDoIt.steps[2].details.map((text: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 font-light text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2B5] opacity-50 shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Digital Loop (Coming Soon) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group bg-white/5 rounded-3xl p-8 border border-white/10"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#00C2B5] flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,194,181,0.3)]">
                    <BarChart3 size={28} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                      <span className="text-xs font-bold text-[#00C2B5] uppercase tracking-widest">{t.howWeDoIt.steps[3].step}</span>
                      <h3 className="text-xl font-bold">{t.howWeDoIt.steps[3].title}</h3>
                      <span className="px-3 py-0.5 bg-white/10 rounded-full text-[10px] font-bold tracking-tighter text-white/50 border border-white/5">{t.howWeDoIt.steps[3].comingSoon}</span>
                    </div>
                    <p className="text-slate-300 font-light mb-6 text-sm">— {t.howWeDoIt.steps[3].copy}</p>

                    <div className="space-y-5 relative">
                      {/* Vertical line for roadmap */}
                      <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#00C2B5]/50 to-transparent ml-1" />

                      {t.howWeDoIt.steps[3].phases.map((item: any, i: number) => (
                        <div key={i} className="relative pl-8">
                          <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#00C2B5] shadow-[0_0_10px_rgba(0,194,181,0.5)]" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <span className="text-[#00C2B5] font-bold text-sm w-16">{item.phase}</span>
                            <span className="text-white font-medium flex-grow text-sm">{item.title}</span>
                            <span className="text-slate-500 text-sm italic">{item.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-5 bg-white/5 rounded-2xl border border-white/5 italic text-slate-400 font-light leading-relaxed text-sm">
                      "{t.howWeDoIt.steps[3].quote}"
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section — id를 #service로 변경, 링크 버튼 추가 */}
      <section className="section-padding bg-geosang-bg" id="service">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.whoWeServe.tag}</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-geosang-deep mb-6 whitespace-pre-line">
              {t.whoWeServe.title}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed whitespace-pre-line">
              {t.whoWeServe.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whoWeServe.items.map((solution: any, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-12 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-geosang-bg rounded-2xl flex items-center justify-center mb-8 text-geosang-teal">
                  {i === 0 && <Recycle size={32} />}
                  {i === 1 && <ShieldCheck size={32} />}
                  {i === 2 && <Building2 size={32} />}
                </div>
                <h3 className="text-2xl font-light mb-4 text-geosang-deep">{solution.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{solution.desc}</p>
                {/* 각 카드 '더 알아보기' 화살표 버튼 제거 */}
              </motion.div>
            ))}
          </div>

          {/* 플랫폼 페이지로 이동하는 링크 버튼 */}
          <div className="text-center mt-14">
            <button
              onClick={() => window.location.hash = 'platform'}
              className="px-10 py-4 bg-transparent border border-geosang-deep hover:bg-geosang-deep hover:text-white text-geosang-deep rounded-full transition-all text-base font-medium active:scale-95 group inline-flex items-center gap-3"
            >
              {t.whoWeServe.platformBtn}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>



      {/* ESG Section */}
      <section className="section-padding bg-white" id="esg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.esg.tag}</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-geosang-deep whitespace-pre-line">
                {t.esg.title}
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                {t.esg.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.esg.stats.map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 border border-slate-100 rounded-3xl bg-geosang-bg transition-all flex flex-col items-center text-center"
                >
                  <div className="text-geosang-teal mb-6">
                    {i === 0 && <Recycle size={24} />}
                    {i === 1 && <Leaf size={24} />}
                    {i === 2 && <Clock size={24} />}
                    {i === 3 && <TrendingUp size={24} />}
                  </div>
                  <div className="text-[10px] text-slate-400 mb-2 tracking-[0.1em] uppercase font-bold">{stat.label}</div>
                  <div className="text-2xl md:text-3xl font-light text-geosang-deep tracking-tight">
                    {i === 0 ? resourceCount.toLocaleString() + (lang === 'ko' ? " kg" : " kg") : stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest from the Blog Section */}
      <section className="section-padding bg-[#f8f9fa]" id="blog">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              {/* 섹션 태그("리소스") 제거 */}
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-geosang-deep">
                {t.blog.title}
              </h2>
            </div>
            {/* '모든 포스트 보기' 버튼 → 블로그 페이지로 이동 */}
            <button
              onClick={() => window.location.hash = 'blog'}
              className="px-8 py-3 bg-geosang-deep hover:bg-geosang-teal text-white font-bold rounded-full text-sm transition-all flex items-center gap-2 group"
            >
              {t.blog.viewAll} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10">
            {[
              {
                // 한글 목업 데이터로 변경
                category: '지속가능성',
                date: '2026년 3월 15일',
                title: '투명한 자원순환 시스템을 구축하는 방법',
                image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
              },
              {
                category: '기술',
                date: '2026년 3월 10일',
                title: 'AI가 폐기물 관리와 경로 최적화에 미치는 영향',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
              },
              {
                category: '비즈니스',
                date: '2026년 3월 5일',
                title: '재활용 자원의 경제적 가치를 극대화하는 전략',
                image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800'
              }
            ].map((post, i) => (PostCard(post, i)))}
          </div>
        </div>
      </section>

      {/* CTA Section — '함께 미래로' */}
      <section className="section-padding bg-geosang-dark relative overflow-hidden" id="take-next-step">
        <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            src={logoImg}
            alt=""
            className="w-[600px] opacity-[0.04] object-contain select-none"
          />
        </div>

        <div className="container-custom relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
              {lang === 'ko' ? (
                <>
                  함께 <span className="text-geosang-teal italic">미래</span>로 <br />
                  나아갈 준비가 되셨나요?
                </>
              ) : (
                <>
                  Ready to step into <br />
                  <span className="text-geosang-teal italic">the future?</span>
                </>
              )}
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto whitespace-pre-line">
              {t.cta.desc}
            </p>
            {/* 뉴스레터 구독 폼 삭제 — 시작하기 버튼만 유지 */}
            <button
              onClick={() => window.location.hash = 'get-started'}
              className="px-12 py-5 bg-geosang-teal hover:bg-geosang-teal-dark text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3 mx-auto"
            >
              {t.cta.btn}
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>


      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 sm:bottom-12 sm:right-12 z-[200]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white font-black p-5 rounded-full shadow-3xl flex items-center justify-center gap-3 border-4 border-white/10 backdrop-blur-md"
        >
          <MessageSquare size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
