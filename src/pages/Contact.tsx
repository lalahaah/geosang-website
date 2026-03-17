import { Phone, MapPin, Handshake, Quote, Truck, Globe, ShieldCheck, Leaf } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-10 py-32 lg:py-48">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Facility" 
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">Sustainable Future</span>
            <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Partner with the Leader in Resource Circulation
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              거상자원과 함께 지속 가능한 미래를 만드십시오. 혁신적인 리사이클링 기술과 
              윤리적인 자원 관리 네트워크가 귀사의 ESG 경영을 지원합니다.
            </p>
            <button className="bg-primary text-white font-bold py-4 px-8 rounded-xl w-fit shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              View ESG Report
            </button>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="w-full bg-white dark:bg-slate-900/50 py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Inquiry Form</h2>
            <p className="text-slate-500 dark:text-slate-400">문의 유형을 선택하고 상세 내용을 입력해 주세요. 24시간 이내에 담당자가 연락드립니다.</p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="flex border-b border-slate-100 dark:border-slate-800">
              <button className="flex-1 flex flex-col items-center justify-center py-6 bg-primary/5 text-primary border-b-2 border-primary">
                <Handshake size={20} className="mb-2" />
                <span className="text-sm font-bold">Partnership</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center py-6 text-slate-400 hover:text-slate-600 transition-all">
                <Quote size={20} className="mb-2" />
                <span className="text-sm font-bold">Quote</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center py-6 text-slate-400 hover:text-slate-600 transition-all">
                <Truck size={20} className="mb-2" />
                <span className="text-sm font-bold">Collection</span>
              </button>
            </div>
            
            <form className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Company Name</label>
                <input type="text" placeholder="e.g. EcoCorp International" className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 ring-primary/20 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Business Type</label>
                <select className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 ring-primary/20 transition-all">
                  <option>Manufacturer</option>
                  <option>Waste Management</option>
                  <option>Logistics Provider</option>
                  <option>Government Agency</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Contact Person</label>
                <input type="text" placeholder="Full name" className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 ring-primary/20 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" placeholder="email@company.com" className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 ring-primary/20 transition-all" />
              </div>
              <div className="col-span-full flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Inquiry Details</label>
                <textarea rows={4} placeholder="문의 내용을 입력해 주세요..." className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 focus:ring-2 ring-primary/20 transition-all"></textarea>
              </div>
              <div className="col-span-full pt-4">
                <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-slate-800 transition-all">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 dark:text-white">
            <MapPin className="text-primary" />
            Our Locations
          </h3>
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-lg mb-2 dark:text-white">Global HQ</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">123 Green Valley Tech Park, Seoul, Republic of Korea</p>
              <div className="flex items-center gap-2 text-primary dark:text-blue-400 font-bold text-sm">
                <Phone size={16} />
                +82 2-1234-5678
              </div>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-lg mb-2 dark:text-white">Logistics Hub West</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Gyeonggi Logistics Cluster, Site 12</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex flex-col gap-10">
          <div className="w-full h-[400px] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 grayscale opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary text-white p-4 rounded-2xl flex items-center gap-3 shadow-2xl animate-bounce-slow">
                <Globe size={24} />
                <span className="font-bold">Operating in 14 Countries</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-900/30 flex gap-4">
              <div className="text-green-600"><Leaf size={32} /></div>
              <div>
                <h4 className="font-bold text-green-900 dark:text-green-400">ESG Excellence</h4>
                <p className="text-sm text-green-700/70 dark:text-green-400/60 mt-1">Global Top 5% resource circulation standard provider.</p>
              </div>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex gap-4">
              <div className="text-blue-600"><ShieldCheck size={32} /></div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-400">Certified Process</h4>
                <p className="text-sm text-blue-700/70 dark:text-blue-400/60 mt-1">ISO 14001 & R2v3 certified responsible recycling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
