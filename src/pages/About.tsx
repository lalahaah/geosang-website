import { type Lang, translations } from '../translations';
import { type FC } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import {
  ShieldCheck,
  Recycle,
  ArrowRight,
  Globe,
  Award,
  Lightbulb,
  Target,
  Users,
} from 'lucide-react';
// About 히어로 이미지
const aboutHero = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop';
// CTA 배경 로고 import
import logoImg from '../assets/logo.svg';

interface AboutProps { lang: Lang }
const About: FC<AboutProps> = ({ lang }) => {
  const t = (translations[lang] as any).about;

  const valueIcons = [
    <ShieldCheck className="text-geosang-teal" size={32} />,
    <Lightbulb className="text-geosang-teal" size={32} />,
    <Recycle className="text-geosang-teal" size={32} />,
    <Globe className="text-geosang-teal" size={32} />,
  ];

  return (
    // pt-0: 헤더와 히어로 섹션이 겹치도록 상단 패딩 제거
    <div className="flex flex-col w-full bg-white font-display overflow-x-hidden">

      {/* ─── Hero Section ─── */}
      <PageHero
        bgImage={aboutHero}
        kicker={t.hero.kicker}
        h1={t.hero.h1Part1}
        h1Teal={t.hero.h1Part2}
        subtitle={t.hero.sub}
      />

      {/* ─── Our Story Section ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-6">{t.story.tag}</div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-10 leading-tight text-geosang-deep">
                {t.story.h2}
              </h2>
              <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                <p>{t.story.p1}</p>
                <p>{t.story.p2}</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                {/* Our Story: 자원순환·재활용 관련 실사 이미지로 교체 */}
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2670&auto=format&fit=crop"
                  alt="재활용 자원순환"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-geosang-deep p-12 rounded-3xl text-white hidden md:block">
                <div className="text-3xl sm:text-5xl font-light mb-2 text-geosang-teal">40+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/50">{t.story.badge}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── History Timeline Section ─── */}
      <section className="section-padding bg-geosang-bg">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.history.tag}</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-geosang-deep">
                {t.history.h2}
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                {t.history.desc}
              </p>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-8 sm:space-y-16">
                {t.history.items.map((step: { year: string; title: string; desc: string }, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-8 items-start border-t border-slate-200 pt-10"
                  >
                    <div className="md:w-1/4 text-geosang-teal font-bold text-xl uppercase tracking-widest">{step.year}</div>
                    <div className="md:w-3/4">
                      <h4 className="text-2xl font-light text-geosang-deep mb-4">{step.title}</h4>
                      <p className="text-lg text-slate-500 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission Section ─── 배경 이미지 원본, 아이콘 로고 심볼로 교체 */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* 배경: 원본 이미지 그대로 사용, 텍스트 가독성을 위해 어두운 오버레이 추가 */}
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop"
            alt="자원순환"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 z-10" />
        </div>
        <div className="relative z-20 container-custom text-center">
          <div className="max-w-4xl mx-auto">
            {/* 아이콘: 기존 Target 아이콘 → 거상자원 심볼 로고로 교체 */}
            <div className="w-20 h-20 mx-auto mb-10 flex items-center justify-center">
              <img
                src={logoImg}
                alt="거상자원 심볼"
                className="w-full h-full object-contain filter-geosang-teal"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-relaxed mb-12">
              {t.mission.quote}
            </h2>
            <div className="w-24 h-[1px] bg-geosang-teal mx-auto" />
          </div>
        </div>
      </section>

      {/* ─── Core Values Section ─── */}
      <section className="section-padding bg-geosang-bg">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-20 text-geosang-deep">
            <div className="lg:w-1/2">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.values.tag}</div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                {t.values.h2}
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pb-2">
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                {t.values.desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 text-geosang-deep">
            {t.values.items.map((value: { num: string; title: string; desc: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-10 p-6 sm:p-12 bg-white rounded-3xl border border-slate-100 group hover:shadow-xl transition-all"
              >
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-light text-slate-200 mb-6 group-hover:text-geosang-teal transition-colors">{value.num}</div>
                  <div className="w-[1px] h-full bg-slate-100" />
                </div>
                <div>
                  <div className="mb-6">{valueIcons[i]}</div>
                  <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership Section ─── */}
      <section className="section-padding bg-white text-geosang-deep">
        <div className="container-custom">
          <div className="text-center mb-24">
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.leadership.tag}</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">{t.leadership.h2}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
            {t.leadership.members.map((member: { name: string; role: string; desc: string }, i: number) => (
              <div key={i} className="group">
                <div className="aspect-square bg-slate-100 rounded-3xl mb-8 overflow-hidden relative">
                  <div className="absolute inset-0 bg-geosang-deep/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Users className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 w-20 h-20" />
                </div>
                <h4 className="text-2xl font-light mb-2">{member.name}</h4>
                <p className="text-geosang-teal text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-500 font-light text-sm italic">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Awards & Partners (Mockup) ─── */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center gap-6 sm:gap-12 opacity-30 grayscale contrast-125">
            {t.awards.map((award: string, i: number) => {
              const icons = [<Award key={i} />, <Recycle key={i} />, <Target key={i} />, <Globe key={i} />];
              return (
                <div key={i} className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
                  {icons[i % icons.length]} {award}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── 배경 로고, 버튼 "함께하기"로 변경 */}
      <section className="py-24 bg-geosang-teal relative overflow-hidden">
        {/* 배경 로고 워터마크 */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            src={logoImg}
            alt=""
            className="w-[500px] opacity-[0.06] object-contain select-none"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
            {t.cta.h2}
          </h2>
          {/* CTA 버튼 텍스트 */}
          <button
            onClick={() => window.location.hash = 'get-started'}
            className="bg-white text-geosang-teal hover:bg-geosang-bg font-bold py-5 px-12 rounded-full text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
          >
            {t.cta.btn} <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
