import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Recycle,
  ArrowRight,
  Globe,
  Award
} from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col w-full bg-white font-display overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-geosang-deep">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop" 
            alt="Geosang Office"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-geosang-deep/20 via-geosang-deep/60 to-geosang-deep z-10" />
        </div>
        
        <div className="relative z-20 container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            About Geosang
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-white leading-tight mb-8"
          >
            신뢰로 쌓아온 40년,<br />
            <span className="text-geosang-teal">기술로 여는 순환의 미래.</span>
          </motion.h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-6">Our Story</div>
              <h2 className="text-4xl md:text-5xl font-light mb-10 leading-tight text-geosang-deep">
                땀방울에서 시작된 <br />
                정직한 데이터의 역사.
              </h2>
              <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                <p>
                  1986년, 거상자원은 현장에서 직접 마대를 지고 달렸던 한 청년의 땀방울에서 시작되었습니다. 
                  우리는 지난 40년 동안 "단 1g도 속이지 않는다"는 원칙 하나로 대한민국 자원 순환의 현장을 지켜왔습니다.
                </p>
                <p>
                  전통적인 고물상에서 시작하여 오늘날 IT 기반의 스마트 자원 관리 플랫폼으로 성장하기까지, 
                  거상의 성장은 곧 대한민국 순환 경제의 진화였습니다. 우리는 현장의 경험과 디지털 기술을 결합하여 
                  가장 투명하고 효율적인 자원 순환 생태계를 만듭니다.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1530124560677-bdaea027df21?q=80&w=2670&auto=format&fit=crop" 
                  alt="Nature and Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-geosang-deep p-12 rounded-3xl text-white hidden md:block">
                <div className="text-5xl font-light mb-2 text-geosang-teal">40+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/50">Years of Integrity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section (Full Background) */}
      <section className="relative py-32 overflow-hidden bg-geosang-deep">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2626&auto=format&fit=crop" 
            alt="Circular Economy" 
            className="w-full h-full object-cover opacity-20 grayscale fixed-bg"
          />
        </div>
        <div className="relative z-10 container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <Target className="w-16 h-16 text-geosang-teal mx-auto mb-10" />
            <h2 className="text-3xl md:text-5xl font-light text-white leading-relaxed mb-12">
              "우리는 데이터와 기술을 통해 버려지는 모든 것에 <br className="hidden md:block" />
              <span className="text-geosang-teal italic">새로운 생명과 경제적 가치</span>를 부여합니다."
            </h2>
            <div className="w-24 h-[1px] bg-geosang-teal mx-auto" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-geosang-bg">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-20 text-geosang-deep">
            <div className="lg:w-1/2">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Core Values</div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                우리가 결코 <br />
                타협하지 않는 원칙.
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pb-2">
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                거상자원의 모든 결정은 환경에 대한 책임감과 데이터에 대한 확신, 
                그리고 파트너에 대한 정직함에서 시작됩니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-geosang-deep">
            {[
              { 
                num: "01",
                title: "Absolute Honesty", 
                desc: "단 1g의 오차도 허용하지 않는 국가 공인 계근 시스템과 실시간 데이터 공유로 투명한 거래의 문화를 만듭니다.",
                icon: <ShieldCheck className="text-geosang-teal" size={32} />
              },
              { 
                num: "02",
                title: "Digital Innovation", 
                desc: "재래식 자원 산업에 AI와 클라우드 기술을 접목하여, 자원의 흐름을 예측하고 최적의 순환 경로를 설계합니다.",
                icon: <Lightbulb className="text-geosang-teal" size={32} />
              },
              { 
                num: "03",
                title: "Sustainable Impact", 
                desc: "비즈니스의 성장이 곧 지구의 회복이 되도록, 폐기물이 다시 원료가 되는 선순환 구조를 완성해 나갑니다.",
                icon: <Recycle className="text-geosang-teal" size={32} />
              },
              { 
                num: "04",
                title: "Local to Global", 
                desc: "지역 사회의 정밀한 수거망에서 시작하여 전 세계 제조 현장에 고품질 재생 원료를 공급하는 글로벌 파트너가 됩니다.",
                icon: <Globe className="text-geosang-teal" size={32} />
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-10 p-12 bg-white rounded-3xl border border-slate-100 group hover:shadow-xl transition-all"
              >
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-light text-slate-200 mb-6 group-hover:text-geosang-teal transition-colors">{value.num}</div>
                  <div className="w-[1px] h-full bg-slate-100" />
                </div>
                <div>
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section (Mockup) */}
      <section className="section-padding bg-white text-geosang-deep">
        <div className="container-custom">
          <div className="text-center mb-24">
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Leadership</div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">신념을 실천하는 사람들.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Hong Gil-dong", role: "Founder & CEO", desc: "40년 현장 경험을 바탕으로 거상의 정직한 문화를 구축했습니다." },
              { name: "Kim Cheol-su", role: "CTO", desc: "자원 순환의 디지털 전환을 이끄는 기술 총괄 책임자입니다." },
              { name: "Lee Young-hee", role: "Head of ESG", desc: "지속 가능한 순환 경제의 가치를 정량화하고 확산시킵니다." }
            ].map((member, i) => (
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

      {/* Awards & Partners (Mockup) */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale contrast-125">
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter"><Award /> KOREA BRAND</div>
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter"><Recycle /> ECO CERT</div>
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter"><Target /> ESG TOP 100</div>
            <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter"><Globe /> GLOBAL GREEN</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-geosang-teal relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
            거상자원과 함께 더 투명하고 <br />
            지속 가능한 미래를 만드세요.
          </h2>
          <button className="bg-white text-geosang-teal hover:bg-geosang-bg font-bold py-5 px-12 rounded-full text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto uppercase tracking-widest">
            Contact Us Today <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
