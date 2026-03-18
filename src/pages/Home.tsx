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
  CheckCircle2,
  Clock,
  ArrowRightCircle,
  Mail,
  Phone,
  ChevronRight,
  Truck,
  Settings,
  Factory,
  Smartphone
} from 'lucide-react';

const Home = () => {
  const [resourceCount, setResourceCount] = useState<number>(1248000);
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    type: 'collection',
    message: ''
  });

  // 실시간 카운터 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setResourceCount((prev: number) => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 곧 연락드리겠습니다.');
  };

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

      {/* What We Do Section (New Section 03) */}
      <section className="section-padding bg-white" id="what-we-do">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4"
            >
              WHAT WE DO
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight"
            >
              자원순환의 새로운 표준
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-slate-500 font-light max-w-3xl mx-auto"
            >
              "거상의 정직한 땀방울이 자원순환의 투명한 데이터가 됩니다."
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: "Step 1",
                title: "전략적 자원 수집",
                enTitle: "Strategic Collection",
                desc: "전국 파트너 네트워크와 유연한 배차 시스템으로 신속하게 상차합니다.",
                icon: <Truck size={32} />,
                color: "bg-[#166534]", // Forest Green
                stats: "연간 수거량 120만톤",
                details: ["전국 수거 파트너 네트워크", "유연한 실시간 배차 시스템", "맞춤형 수거 주기 관리"]
              },
              {
                step: "Step 2",
                title: "정밀 선별 및 가공",
                enTitle: "Precision Sorting",
                desc: "1g의 오차도 허용하지 않는 정직함으로 고순도 원료를 분류합니다.",
                icon: <Settings size={32} />,
                color: "bg-[#1A2C4E]", // Geosang Navy
                stats: "선별 순도 99.9%",
                details: ["고순도 재생 제지 원료 선별", "공정 투입 최적 상태 유지", "엄격한 품질 검수 및 기록"]
              },
              {
                step: "Step 3",
                title: "안정적 원료 납품",
                enTitle: "Reliable Supply",
                desc: "국내 주요 제지사와의 파트너십으로 안정적인 공급망을 보장합니다.",
                icon: <Factory size={32} />,
                color: "bg-[#166534]",
                stats: "주요 제지사 15곳 파트너십",
                details: ["안정적 원료 공급망 확보", "수요처별 맞춤 규격 납품", "투명한 거래 이력 보장"]
              },
              {
                step: "Step 4",
                title: "데이터 기반 순환 관리",
                enTitle: "Digital Loop",
                desc: "모든 과정을 디지털 데이터로 전환하여 순환의 가치를 증명합니다.",
                icon: <Smartphone size={32} />,
                color: "bg-[#1A2C4E]",
                stats: "실시간 데이터 리포트",
                details: ["디지털 데이터 전환 관리", "ESG 성과 시각화", "투명한 정산 및 이력 조회"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-geosang-bg rounded-3xl p-8 h-full border border-slate-100 hover:shadow-2xl hover:bg-white transition-all duration-500 overflow-hidden">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {item.icon}
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-geosang-teal text-xs font-bold uppercase tracking-widest">{item.step}</span>
                    <h3 className="text-2xl font-light text-geosang-deep mt-2">{item.title}</h3>
                    <p className="text-slate-400 text-xs mt-1 font-medium">{item.enTitle}</p>
                  </div>

                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400 font-light">
                        <div className="w-1 h-1 rounded-full bg-geosang-teal/40" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-slate-100 mt-auto">
                    <div className="text-geosang-deep font-bold text-sm tracking-tight">
                      {item.stats}
                    </div>
                  </div>
                </div>

                {/* Arrow Connector (Desktop) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10 translate-y-[-50%] opacity-20 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-geosang-teal" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-geosang-bg" id="solutions">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
            <div className="lg:w-1/2">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Solutions</div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-geosang-deep">
                전문성을 기술로 증명하는 <br />
                지속 가능한 서비스.
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pb-2">
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                거상자원은 국내 최고 수준의 수거 플랫폼과 원료 공급망을 통해 자원의 선순환 구조를 구축하고 비즈니스의 가치를 극대화합니다.
              </p>
            </div>
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

      {/* Platform Preview Section */}
      <section className="section-padding bg-geosang-dark text-white overflow-hidden" id="partnerships">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            <div className="lg:w-1/3">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">IT Innovation</div>
              <h2 className="text-4xl md:text-5xl font-light mb-10 leading-[1.1] text-white">
                기술과 자원의 <br />
                스마트한 만남.
              </h2>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
                버려지는 데이터에서 새로운 수익을 발견하고, 자원 순환의 모든 과정을 투명하게 관리하는 거상자원의 IT 플랫폼을 경험하세요.
              </p>
              <button className="bg-geosang-teal hover:bg-[#008f84] text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3">
                플랫폼 체험하기 <ArrowRight size={20} />
              </button>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: "투명한 데이터", desc: "계근 데이터 실시간 카톡 알림 및 통합 이력 관리 시스템으로 신뢰를 쌓습니다." },
                  { title: "스마트 정산", desc: "시장 단가 자동 연동 및 투명한 정산 프로세스를 통해 효율성을 극대화합니다." },
                  { title: "ESG Report", desc: "탄소 배출 절감량 및 환경 기여도를 실시간 수치화하여 직관적으로 확인합니다." },
                  { title: "Asset Value", desc: "비즈니스 자산으로서의 자원 가치를 최적화하는 전략적 솔루션을 제안합니다." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-4 border-l border-white/10 pl-8"
                  >
                    <h4 className="text-2xl font-light text-white">{feature.title}</h4>
                    <p className="text-lg text-white/50 font-light leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Tester Recruitment */}
      <section className="py-24 bg-geosang-teal relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            지금 플랫폼 베타 테스터로 <br />
            참여하고 독점 혜택을 받으세요.
          </h2>
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {[
              "플랫폼 평생 이용료 50% 할인",
              "실시간 시장 단가 리포트 무료 제공",
              "전용 컨설턴트 1:1 매칭"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90 font-medium">
                <CheckCircle2 size={20} /> {benefit}
              </div>
            ))}
          </div>
          <button className="bg-white text-geosang-teal hover:bg-geosang-bg font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest">
            지금 신청하기
          </button>
        </div>
      </section>

      {/* ESG Section */}
      <section className="section-padding bg-white" id="esg">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Sustainability</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-geosang-deep">
                가장 정직한 <br />
                ESG의 시작.
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                거상자원은 단순히 폐기물을 처리하는 것을 넘어, 자원의 전 생애주기를 데이터로 추적하여 실질적인 환경 가치를 창출합니다.
              </p>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "자원 순환량", value: resourceCount.toLocaleString() + " kg", icon: <Recycle size={24} /> },
                  { label: "보존된 나무", value: "1,500 그루", icon: <Leaf size={24} /> },
                  { label: "탄소 절감량", value: "420.5 톤", icon: <Clock size={24} /> },
                  { label: "에너지 절약", value: "32%", icon: <TrendingUp size={24} /> }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-10 border border-slate-100 rounded-3xl bg-geosang-bg transition-all"
                  >
                    <div className="text-geosang-teal mb-6">{stat.icon}</div>
                    <div className="text-xs text-slate-400 mb-2 tracking-[0.1em] uppercase font-bold">{stat.label}</div>
                    <div className="text-4xl font-light text-geosang-deep tracking-tight">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Grid & Contact Form */}
      <section className="section-padding bg-geosang-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-geosang-deep p-16 rounded-3xl text-white relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-light mb-4">Start a Collection</h3>
                <p className="text-lg text-white/50 mb-10 max-w-xs font-light">전국 어디서나 신속하고 투명한 자원 수거를 요청하세요.</p>
                <div className="flex items-center gap-2 font-bold text-geosang-teal group-hover:text-white transition-colors uppercase tracking-widest text-sm">
                  Request Now <ArrowRightCircle size={20} />
                </div>
              </div>
              <Recycle size={280} className="absolute -bottom-20 -right-20 text-white/5 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-16 rounded-3xl text-geosang-deep border border-slate-200 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-light mb-4 text-geosang-deep">Partner with Us</h3>
                <p className="text-lg text-slate-500 mb-10 max-w-xs font-light">거상과 함께 혁신적인 순환 파트너십을 구축하세요.</p>
                <div className="flex items-center gap-2 font-bold text-geosang-teal group-hover:text-geosang-dark transition-colors uppercase tracking-widest text-sm">
                  Join Now <ArrowRightCircle size={20} />
                </div>
              </div>
              <Building2 size={280} className="absolute -bottom-20 -right-20 text-geosang-deep/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            <div className="lg:w-1/3 bg-geosang-deep p-16 text-white leading-relaxed">
              <h3 className="text-4xl font-light mb-8 leading-tight">빠르고 확실한 <br />비즈니스 파트너십.</h3>
              <p className="text-white/60 mb-12 text-lg font-light">상담 요청을 남겨주시면 담당 전문가가 24시간 내에 연락드립니다.</p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl"><Mail className="text-geosang-teal" /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email</p>
                    <p className="text-lg font-light">contact@geosang.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl"><Phone className="text-geosang-teal" /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Phone</p>
                    <p className="text-lg font-light">031-000-0000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Company Name</label>
                    <input
                      type="text"
                      placeholder="회사명을 입력해주세요"
                      className="w-full bg-geosang-bg border border-slate-100 rounded-xl p-5 text-lg font-light focus:ring-1 focus:ring-geosang-teal focus:border-transparent outline-none transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Contact Number</label>
                    <input
                      type="text"
                      placeholder="연락처를 입력해주세요"
                      className="w-full bg-geosang-bg border border-slate-100 rounded-xl p-5 text-lg font-light focus:ring-1 focus:ring-geosang-teal focus:border-transparent outline-none transition-all"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Inquiry Type</label>
                  <select
                    className="w-full bg-geosang-bg border border-slate-100 rounded-xl p-5 text-lg font-light focus:ring-1 focus:ring-geosang-teal focus:border-transparent outline-none transition-all appearance-none"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="collection">수거 요청 (Recycling)</option>
                    <option value="supply">원료 공급 (Supply)</option>
                    <option value="it">플랫폼 도입 (Smart Platform)</option>
                    <option value="partnership">기타 파트너십</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Message</label>
                  <textarea
                    placeholder="문의하실 내용을 상세히 적어주세요"
                    rows={4}
                    className="w-full bg-geosang-bg border border-slate-100 rounded-xl p-5 text-lg font-light focus:ring-1 focus:ring-geosang-teal focus:border-transparent outline-none transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button className="w-full bg-geosang-teal text-white font-bold py-6 rounded-full text-xl shadow-xl hover:bg-geosang-dark transition-all flex items-center justify-center gap-3 active:scale-[0.99] uppercase tracking-widest">
                  문의 전송하기 <ChevronRight size={24} />
                </button>
              </form>
            </div>
          </div>
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
