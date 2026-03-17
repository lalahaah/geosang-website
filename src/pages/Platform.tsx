import { Rocket, Scale, LineChart, ShieldCheck } from 'lucide-react';

const Platform = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-32 lg:py-48 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 w-fit">
              <Rocket size={14} />
              <span className="text-xs font-bold uppercase tracking-wider">Coming Q4 2024</span>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                The Future of <br />
                <span className="text-primary dark:text-blue-400">Resource Circulation</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                IoT 통합 계근 시스템, 실시간 단가 연동, 탄소 배출량 대시보드. 
                거상자원의 스마트 자원 관리 플랫폼이 투명한 순환 경제의 미래를 앞당깁니다.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 max-w-md">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Waitlist for Beta</p>
              <div className="flex p-1.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl focus-within:ring-2 ring-primary/20 transition-all">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="flex-1 px-4 bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white font-medium" 
                />
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                <LineChart size={120} className="text-primary/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=1000" 
                alt="Dashboard" 
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              
              {/* Floating Cards Mockup */}
              <div className="absolute top-8 right-8 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce-slow">
                <div className="flex items-center gap-2 text-green-500 font-bold text-xs mb-1">
                  <Scale size={14} />
                  <span>Verified Weight</span>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">1,240.5 kg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6">
                <Scale size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Smart Weighing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                IoT 연동 계근 시스템으로 모든 수거 데이터를 실시간 캡처합니다. 위변조 불가능한 신뢰 데이터를 제공합니다.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 mb-6">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Live Market Rates</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                시장 변동 단가를 실시간으로 반영하여 최적의 정산 시점을 제안합니다. 투명한 가격 결정을 보장합니다.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">ESG Reporting</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                우리 기업의 탄소 절감량과 자원 기여도를 한눈에 확인하고 보고서로 즉시 출력할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
