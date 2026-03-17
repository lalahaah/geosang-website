import { Truck, Settings2, PackageCheck } from 'lucide-react';

const Business = () => {
  const steps = [
    {
      id: '01',
      title: 'Collection',
      icon: <Truck size={32} />,
      desc: '전국적인 네트워크를 통해 고품질의 재활용 자원을 신속하게 수집합니다.',
    },
    {
      id: '02',
      title: 'Precision Sorting',
      icon: <Settings2 size={32} />,
      desc: '최신 자동화 설비와 숙련된 전문가의 안목으로 불순물을 제거하고 등급별로 정밀 선별합니다.',
      active: true
    },
    {
      id: '03',
      title: 'Delivery to Mills',
      icon: <PackageCheck size={32} />,
      desc: '국내외 주요 제지사의 요구 규격에 맞춰 안정적으로 원료를 공급합니다.',
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[480px] w-full flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=2000')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Precision Sorting &<br />Sustainable Supply
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            거상자원은 단순한 수거를 넘어, 제지 원료의 고부가가치를 창출하는 
            순환 경제의 핵심 파트너입니다.
          </p>
        </div>
      </section>

      {/* Cycle Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">The Circular Economy Cycle</h2>
            <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 -translate-y-1/2 z-0"></div>
            
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-300 ${
                  step.active 
                    ? 'bg-primary text-white scale-110 shadow-xl shadow-primary/20 ring-4 ring-primary/10' 
                    : 'bg-slate-50 dark:bg-slate-800 text-primary dark:text-blue-400 group-hover:bg-primary group-hover:text-white group-hover:scale-105'
                }`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm px-4">
                  {step.desc}
                </p>
                <div className="mt-6 text-xs font-black uppercase tracking-widest text-primary/30 dark:text-slate-500">
                  Phase {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 bg-background-light dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Logistics" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-4 block">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Resource Collection & Logistics</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              거상자원의 강력한 물류 인프라는 안정적인 공급의 기반입니다. 
              최신 사양의 압축 설비와 대형 운송 차량을 직접 운영하여 
              어떠한 환경에서도 중단 없는 자원 순환을 보장합니다.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="text-4xl font-black text-primary dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Logistics Vehicles</div>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="text-4xl font-black text-primary dark:text-blue-400 mb-2">12</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Regional Centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
