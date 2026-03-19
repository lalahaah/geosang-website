import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Cpu,
  LineChart,
  Truck,
  BarChart3,
  Globe,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Smartphone,
  Cloud
} from 'lucide-react';

const Platform = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5단계 스티키 섹션 인덱스 계산 (0 ~ 0.2, 0.2 ~ 0.4, 0.4 ~ 0.6, 0.6 ~ 0.8, 0.8 ~ 1.0)
    const step = Math.min(Math.floor(latest * 5), 4);
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  const platformFeatures = [
    {
      id: 'iot',
      title: '스마트 IoT 계근 시스템',
      subtitle: 'Real-time Data Collection',
      description: '현장의 모든 계근 데이터를 IoT 센서를 통해 즉시 디지털화합니다. 수작업의 오류를 배제하고 위변조가 불가능한 신뢰 데이터를 실시간으로 클라우드에 전송합니다.',
      features: ['실시간 클라우드 동기화', '위변조 방지 블록체인 연동', '모바일 기반 현장 관리'],
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bbda38a5f67d?auto=format&fit=crop&q=80&w=2000",
      color: "#00C2B5"
    },
    {
      id: 'market',
      title: '글로벌 마켓 시세 연동',
      subtitle: 'Dynamic Pricing Engine',
      description: 'LME(런던금속거래소) 및 국내외 재생 자원 지표를 실시간으로 추적합니다. 시장 변동성을 정밀하게 분석하여 투명하고 합리적인 매입/매출 단가를 자동으로 제안합니다.',
      features: ['LME 실시간 데이터 피드', '단가 예측 알고리즘', '투명한 정산 리포트'],
      icon: <LineChart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1611974714658-b8d468805f7a?auto=format&fit=crop&q=80&w=2000",
      color: "#6366F1"
    },
    {
      id: 'ai',
      title: 'AI 물류 및 선별 최적화',
      subtitle: 'Smart Resource Optimization',
      description: 'AI 알고리즘이 수거 차량의 최적 경로를 산출하고 효율적인 배차를 관리합니다. 향후 AI 이미지 인식을 통한 자동 재질 분류 기술로 선별 프로세스의 혁신을 이끕니다.',
      features: ['최적 경로 알고리즘', '실시간 차량 관제(FMS)', '물류비용 20% 이상 절감'],
      icon: <Cpu className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
      color: "#F59E0B"
    },
    {
      id: 'esg',
      title: 'ESG 임팩트 대시보드',
      subtitle: 'Data-driven Sustainability',
      description: '수거된 자원의 양을 기반으로 탄소 절감 효과를 자동 산출합니다. 기업의 ESG 공시를 위한 투명한 지표 데이터를 시각화하여 환경적 기여도를 한눈에 증명합니다.',
      features: ['탄소 배출권 지표화', '자원 순환 기여도 산출', '규제 준수 자동 리포팅'],
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
      color: "#10B981"
    },
    {
      id: 'market',
      title: '순환 자원 마켓플레이스',
      subtitle: 'Geosang Loop Ecosystem',
      description: '배출처와 수요자를 투명하게 연결하는 B2B 마켓플레이스를 지향합니다. 안정적인 원료 수급과 고품질 재생 원료의 선순환을 통해 지속 가능한 산업 생태계를 완성합니다.',
      features: ['공급처-수요자 매칭', '거래 이력 투명 공개', '품질 인증 데이터 연동'],
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
      color: "#3B82F6"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-geosang-deep py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,181,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full border border-white/20 text-white/80 text-sm font-medium tracking-wider uppercase mb-8">
              Digital Transformation (DX)
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              Geosang Loop: <br />
              <span className="font-bold text-geosang-teal italic">자원순환의 완성, 디지털 거버넌스</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              40년 현장의 신뢰와 IT 기술의 융합. <br />
              투명한 데이터가 자원의 가치를 새롭게 정의합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-4 bg-geosang-teal text-white rounded-full font-medium hover:bg-[#00A89D] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-teal-900/20">
                플랫폼 도입 상담
              </button>
              <button className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all">
                데모 신청하기
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">Scroll to Explore</div>
          <div className="w-px h-12 bg-gradient-to-b from-geosang-teal to-transparent" />
        </motion.div>
      </section>

      {/* Value Prop Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">Value Proposition</div>
              <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight">
                현장 중심의 데이터가 만드는 <br />
                <span className="font-bold">투명한 순환 경제의 시작.</span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-light max-w-sm mb-2">
              우리는 현장에서 발생하는 모든 자원의 흐름을 디지털로 연결하여 신뢰를 바탕으로 한 효율적인 자원 순환 체계를 지향합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Database className="w-10 h-10" />,
                title: '데이터 무결성',
                desc: 'IoT 기반 자동 생성 데이터를 통해 인간의 개입으로 인한 오류를 차단하고 100% 투명한 정산 체계를 지원합니다.'
              },
              { 
                icon: <Zap className="w-10 h-10" />,
                title: '운영 효율성',
                desc: 'AI 최적화 알고리즘을 통한 물류비 절감 및 선별 프로세스 디지털화로 폐기물 처리 비용을 혁신적으로 개선합니다.'
              },
              { 
                icon: <ShieldCheck className="w-10 h-10" />,
                title: '환경적 투명성',
                desc: '자원의 회수부터 재투입까지 전 과정을 데이터로 증명하여 기업의 지속 가능한 ESG 목표 달성을 돕습니다.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-geosang-bg rounded-2xl flex items-center justify-center text-geosang-teal mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-geosang-deep mb-4">{item.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Digital Features Section */}
      <section ref={containerRef} className="h-[500vh] bg-geosang-deep relative">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="container-custom h-full flex flex-col md:flex-row items-center gap-12 py-20 px-6 md:px-12">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center relative">
              <div className="space-y-12">
                {platformFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    animate={{ 
                      opacity: activeStep === index ? 1 : 0.15,
                      x: activeStep === index ? 0 : -20,
                      scale: activeStep === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`${activeStep === index ? 'block' : 'hidden md:block pointer-events-none'}`}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="px-4 py-1 bg-white/10 rounded-full text-geosang-teal text-xs font-bold tracking-widest uppercase">
                          Step 0{index + 1}
                        </div>
                        <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-white">
                          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            {feature.icon}
                          </div>
                          <h3 className="text-4xl md:text-5xl font-bold leading-tight">{feature.title}</h3>
                        </div>
                        <div className="text-geosang-teal font-medium tracking-wide">{feature.subtitle}</div>
                        <p className="text-lg text-slate-300 font-light leading-relaxed max-w-lg">
                          {feature.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-4">
                        {feature.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white/80 text-sm">
                            <CheckCircle2 size={16} className="text-geosang-teal" />
                            {f}
                          </div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-3 text-white font-medium group mt-6"
                      >
                        상세 기술 스펙 보기
                        <ArrowRight size={20} className="text-geosang-teal transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar (Vertical for Desktop) */}
              <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4">
                {platformFeatures.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-1.5 h-12 rounded-full transition-all duration-500 ${
                      activeStep === i ? 'h-20 bg-geosang-teal' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Image Display */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0,
                    scale: activeStep === index ? 1 : 1.1,
                    filter: activeStep === index ? 'blur(0px) brightness(1)' : 'blur(20px) brightness(0.5)'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-geosang-deep via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                      <div className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Status</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-geosang-teal animate-pulse" />
                        <span className="text-white font-medium text-sm">System Active</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                      <Lock className="text-white/50" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: '데이터 정밀도', value: '99.9%' },
              { label: '물류 효율 향상', value: '25%+' },
              { label: '실시간 관제', value: '24/7' },
              { label: '데이터 가용성', value: '100%' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8"
              >
                <div className="text-4xl md:text-5xl font-bold text-geosang-deep mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Integration */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Integrated with Ecosystem Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder for integration icons/logos */}
            <div className="text-2xl font-bold">ALLBARO</div>
            <div className="text-2xl font-bold">AWS CLOUD</div>
            <div className="text-2xl font-bold">IoT SENSORS</div>
            <div className="text-2xl font-bold">ECO-LAB</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative rounded-[3rem] overflow-hidden bg-geosang-deep p-12 md:p-24 text-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,181,0.2),transparent_70%)]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                준비되셨나요? <br />
                <span className="font-bold">거상자원의 디지털 루프를 시작하세요.</span>
              </h2>
              <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
                지금 플랫폼 도입 상담을 신청하고, 귀사의 자원 순환 프로세스를 <br className="hidden md:block" /> 데이터 중심으로 혁신하십시오.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="px-10 py-4 bg-geosang-teal text-white rounded-full font-medium hover:bg-[#00A89D] transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                  도입 신청하기
                </button>
                <button className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all">
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
