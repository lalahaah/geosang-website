import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.avif';
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

const Home = () => {
  const [resourceCount, setResourceCount] = useState<number>(1248000);

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
        Read story <ExternalLink size={14} />
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col w-full font-display overflow-x-hidden bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-geosang-deep">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Modern Smart Yard"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-geosang-deep/20 via-geosang-deep/60 to-geosang-deep z-10" />
        </div>

        <div className="relative z-20 container-custom py-32 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-8"
          >
            The Future of Resource Circulation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl"
          >
            땀으로 일군 어제,<br />
            <span className="text-geosang-teal">가치로 잇는 내일.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl"
          >
            거상자원은 40년의 정직함을 데이터에 담아,<br className="hidden md:block" />
            자원순환의 새로운 표준을 만듭니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="bg-geosang-teal hover:bg-[#008f84] text-white font-bold py-4 px-10 rounded-full text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-geosang-teal/20 group">
              지금 수거 요청하기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full text-lg border border-white/30 transition-all backdrop-blur-sm">
              원료 공급 문의하기
            </button>
          </motion.div>
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
            {/* Left Column: Title and Description (Sticky-like behavior on lg) */}
            <div className="lg:w-1/3 flex flex-col justify-start pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-6"
              >
                What We Do
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light leading-tight text-geosang-deep mb-8"
              >
                지속 가능한 미래를 위한 <br />
                포괄적인 자원 순환 솔루션.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-slate-500 font-light leading-relaxed mb-10"
              >
                거상자원은 40년 현장 실무의 정직함과 최첨단 디지털 기술을 결합하여 자원순환의 새로운 표준을 제시합니다.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 text-geosang-deep/40 group cursor-pointer hover:text-geosang-teal transition-colors">
                  <span className="text-sm font-medium uppercase tracking-widest">Scroll to explore</span>
                  <div className="w-12 h-[1px] bg-current" />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Horizontal Scrolling Cards */}
            <div className="lg:w-2/3 -mx-4 px-4 lg:mx-0 lg:px-0">
              <div className="flex flex-col gap-6 pb-12 pt-4 no-scrollbar">
                {[
                  {
                    icon: <Factory size={32} />,
                    title: "재생 제지 원료 납품",
                    desc: "수거된 폐지 및 파지를 정밀하게 선별하고 가공하여 제지 공정에 즉시 투입 가능한 고순도 재생 원료로 재탄생시킵니다."
                  },
                  {
                    icon: <Trash2 size={32} />,
                    title: "생활폐기물 재활용",
                    desc: "가정 및 상업 시설에서 발생하는 재활용 자원을 체계적으로 관리하여 자원 회수율을 극대화합니다."
                  },
                  {
                    icon: <Building2 size={32} />,
                    title: "산업폐기물 재활용",
                    desc: "산업 현장에서 발생하는 대량의 폐기물을 법적 규제에 맞춰 안전하고 투명하게 처리합니다."
                  },
                  {
                    icon: <Globe size={32} />,
                    title: "재활용 산업 전반 업무",
                    desc: "전통적인 자원 산업에 IT 기술을 접목하여 산업 전반의 효율성을 높이는 플랫폼 비즈니스를 선도합니다."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center gap-8"
                  >
                    <div className="w-16 h-16 shrink-0 bg-geosang-bg rounded-2xl flex items-center justify-center text-geosang-teal shadow-inner">
                      {item.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-geosang-deep mb-2">{item.title}</h3>
                      <p className="text-slate-500 font-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-geosang-bg flex items-center justify-center text-geosang-teal group cursor-pointer hover:bg-geosang-teal hover:text-white transition-all">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It Section (4-Step Value Chain) */}
      <section className="section-padding bg-[#093944] text-white overflow-hidden" id="how-we-do-it">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Side: Sticky Title & Description */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#00C2B5] text-sm font-bold uppercase tracking-[0.2em] mb-6"
              >
                How We Do It
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-light leading-tight mb-8"
              >
                자원순환의 <br />
                새로운 표준을 <br />
                만들어갑니다
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-300 font-light leading-relaxed mb-10"
              >
                현장의 발로 뛰는 정직함과 <br />
                데이터 기반의 투명한 시스템으로 <br />
                자원의 가치를 극대화합니다.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => window.location.hash = 'get-started'}
                className="px-10 py-4 bg-transparent border border-white hover:bg-white hover:text-[#093944] rounded-full transition-all text-lg font-medium active:scale-95 group flex items-center gap-3"
              >
                시작하기
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Right Side: Step Sequence */}
            <div className="lg:w-2/3 space-y-24">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#00C2B5] border border-white/10 group-hover:bg-[#00C2B5] group-hover:text-white transition-colors duration-500">
                    <Truck size={32} />
                  </div>
                  <div className="flex-grow pt-2">
                    <span className="text-sm font-bold text-[#00C2B5] mb-2 block uppercase tracking-widest">Step 01</span>
                    <h3 className="text-2xl font-bold mb-4">전략적 자원 수집</h3>
                    <p className="text-xl text-slate-300 font-light mb-6">"현장의 발로 뛰는 신속한 수집"</p>
                    <ul className="space-y-4">
                      {["전국적인 수거 파트너 네트워크 운영", "자사 및 협력사 차량을 활용한 유연한 배차 시스템", "배출처별 맞춤형 수거 주기 관리"].map((text, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2B5] opacity-50" />
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
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#00C2B5] border border-white/10 group-hover:bg-[#00C2B5] group-hover:text-white transition-colors duration-500">
                    <Layers size={32} />
                  </div>
                  <div className="flex-grow pt-2">
                    <span className="text-sm font-bold text-[#00C2B5] mb-2 block uppercase tracking-widest">Step 02</span>
                    <h3 className="text-2xl font-bold mb-4">정밀 선별 및 가공</h3>
                    <p className="text-xl text-slate-300 font-light mb-6">"1g의 오차도 허용하지 않는 정직한 품질"</p>
                    <ul className="space-y-4">
                      {["숙련된 전문가와 시스템을 통한 고순도 재생 제지 원료 선별", "제지 공정에 즉시 투입 가능한 최적의 원료 상태 유지", "엄격한 품질 검수 및 계근 데이터 기록"].map((text, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2B5] opacity-50" />
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
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#00C2B5] border border-white/10 group-hover:bg-[#00C2B5] group-hover:text-white transition-colors duration-500">
                    <Handshake size={32} />
                  </div>
                  <div className="flex-grow pt-2">
                    <span className="text-sm font-bold text-[#00C2B5] mb-2 block uppercase tracking-widest">Step 03</span>
                    <h3 className="text-2xl font-bold mb-4">안정적 원료 납품</h3>
                    <p className="text-xl text-slate-300 font-light mb-6">"제지 산업의 든든한 상생 파트너"</p>
                    <ul className="space-y-4">
                      {["국내 주요 제지사와의 장기적이고 안정적인 파트너십", "고객사별 요구 규격에 맞춘 커스텀 압축 및 가공 규격 제공", "대규모 적치 공간 확보를 통한 수급 불안정 원천 차단"].map((text, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2B5] opacity-50" />
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
                className="relative group bg-white/5 rounded-3xl p-10 border border-white/10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#00C2B5] flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,194,181,0.3)]">
                    <BarChart3 size={32} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-[#00C2B5] uppercase tracking-widest">Step 04</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-tighter text-white/50 border border-white/5">COMING SOON</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Digital Loop</h3>
                    <p className="text-xl text-slate-300 font-light mb-10">"자원순환의 완성, 디지털 데이터 거버넌스"</p>
                    
                    <div className="space-y-8 relative">
                      {/* Vertical line for roadmap */}
                      <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#00C2B5]/50 to-transparent ml-1" />
                      
                      {[
                        { phase: "Phase 1", title: "디지털 계근 및 정산 시스템 도입", date: "2025년 상반기" },
                        { phase: "Phase 2", title: "수거 차량 최적 경로 AI 알고리즘 적용", date: "2025년 하반기" },
                        { phase: "Phase 3", title: "통합 데이터 플랫폼 'Geosang Loop' 런칭", date: "2026년" }
                      ].map((item, i) => (
                        <div key={i} className="relative pl-8">
                          <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#00C2B5] shadow-[0_0_10px_rgba(0,194,181,0.5)]" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <span className="text-[#00C2B5] font-bold text-sm w-16">{item.phase}</span>
                            <span className="text-white font-medium flex-grow">{item.title}</span>
                            <span className="text-slate-500 text-sm italic">{item.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5 italic text-slate-400 font-light leading-relaxed">
                      "우리는 단순히 폐지를 옮기는 것을 넘어, 자원의 흐름을 데이터로 증명하여 투명하고 효율적인 순환경제를 선도할 것입니다."
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-geosang-bg" id="solutions">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Who We Serve</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-geosang-deep mb-6">
              전문성을 기술로 증명하는 <br />
              지속 가능한 서비스.
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              거상자원은 국내 최고 수준의 수거 플랫폼과 원료 공급망을 통해 자원의 선순환 구조를 구축하고 비즈니스의 가치를 극대화합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Recycle size={32} />,
                title: "Industrial Collection",
                desc: "국가 공인 계근 시스템 기반의 투명하고 정직한 전단가 매입 및 신속 수거 서비스를 제공합니다."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Smart Solutions",
                desc: "최첨단 자동 선별 시스템과 IT 플랫폼을 결합하여 자원의 투명한 이력 관리와 자산 가치를 극대화합니다."
              },
              {
                icon: <Building2 size={32} />,
                title: "B2B Partnership",
                desc: "주요 제지사 및 제조사와의 긴밀한 파트너십을 통해 안정적이고 신뢰할 수 있는 원료 공급망을 유지합니다."
              }
            ].map((solution, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-12 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-geosang-bg rounded-2xl flex items-center justify-center mb-8 text-geosang-teal">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-light mb-4 text-geosang-deep">{solution.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8">{solution.desc}</p>
                <div className="flex items-center gap-2 text-geosang-teal text-sm font-bold group hover:gap-3 transition-all cursor-pointer">
                  Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ESG Section */}
      <section className="section-padding bg-white" id="esg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Mission</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-geosang-deep">
                가장 정직한 <br />
                ESG의 시작.
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                거상자원은 단순히 폐기물을 처리하는 것을 넘어, 자원의 전 생애주기를 데이터로 추적하여 실질적인 환경 가치를 창출합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "자원 순환량", value: resourceCount.toLocaleString() + " kg", icon: <Recycle size={24} /> },
                { label: "보존된 나무", value: "1,500 그루", icon: <Leaf size={24} /> },
                { label: "탄소 절감량", value: "420.5 톤", icon: <Clock size={24} /> },
                { label: "에너지 절약", value: "32%", icon: <TrendingUp size={24} /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 border border-slate-100 rounded-3xl bg-geosang-bg transition-all flex flex-col items-center text-center"
                >
                  <div className="text-geosang-teal mb-6">{stat.icon}</div>
                  <div className="text-[10px] text-slate-400 mb-2 tracking-[0.1em] uppercase font-bold">{stat.label}</div>
                  <div className="text-2xl md:text-3xl font-light text-geosang-deep tracking-tight">{stat.value}</div>
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
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Resources</div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-geosang-deep">
                Latest from the blog.
              </h2>
            </div>
            <button className="text-geosang-deep font-bold flex items-center gap-2 hover:text-geosang-teal transition-all group border-b-2 border-transparent hover:border-geosang-teal pb-1">
              View all resources <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                category: "Sustainability",
                date: "March 15, 2026",
                title: "How to Build a Transparent Resource Circulation System",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
              },
              {
                category: "Technology",
                date: "March 10, 2026",
                title: "The Role of AI in Waste Management and Route Optimization",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              },
              {
                category: "Business",
                date: "March 5, 2026",
                title: "Maximizing the Economic Value of Recyclable Resources",
                image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800"
              }
            ].map((post, i) => (PostCard(post, i)))}
          </div>
        </div>
      </section>

      {/* Take the next step Section */}
      <section className="section-padding bg-[#093944] relative overflow-hidden" id="take-next-step">
        {/* Subtle background logo/graphic */}
        <div className="absolute inset-0 z-0 opacity-5 flex items-center justify-center pointer-events-none">
          <Recycle size={600} className="text-white rotate-12" />
        </div>

        <div className="container-custom relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
              Ready to take the <br /> 
              <span className="text-geosang-teal italic">next step?</span>
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto">
              거상자원과 함께 자원순환의 가치를 실현하고 <br />
              비즈니스의 지속 가능성을 높이세요.
            </p>
            <button 
              onClick={() => window.location.hash = 'get-started'}
              className="px-12 py-5 bg-geosang-teal hover:bg-[#008f84] text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3 mx-auto"
            >
              Get started
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>


      {/* Floating CTA */}
      <div className="fixed bottom-12 right-12 z-[200]">
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
