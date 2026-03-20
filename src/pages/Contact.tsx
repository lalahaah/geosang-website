import { motion } from 'framer-motion';
import { Phone, MapPin, Handshake, Quote, Truck, Globe, ShieldCheck, Leaf } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col w-full font-display bg-white overflow-x-hidden">

      {/* ─── Hero Section ─── */}
      <section className="section-padding bg-geosang-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Facility"
              />
              <div className="absolute inset-0 bg-geosang-deep/10" />
            </div>
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em]"
              >
                지속 가능한 미래
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-light text-geosang-deep leading-tight"
              >
                자원 순환의 리더와 <br />
                <span className="text-geosang-teal">함께하세요.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 font-light leading-relaxed"
              >
                거상자원과 함께 지속 가능한 미래를 만드십시오. 혁신적인 자원 순환 기술과
                투명한 데이터 기반 관리 네트워크가 귀사의 ESG 경영을 지원합니다.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button className="bg-geosang-teal text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-geosang-teal/20 hover:bg-geosang-deep transition-all active:scale-95">
                  ESG 리포트 보기
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Inquiry Form Section ─── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">문의하기</div>
            <h2 className="text-4xl md:text-5xl font-light text-geosang-deep mb-6 leading-tight">
              귀사에 맞는 솔루션을 <br />찾아드리겠습니다.
            </h2>
            <p className="text-lg text-slate-500 font-light">
              문의 유형을 선택하고 상세 내용을 입력해 주세요. 24시간 이내에 담당자가 연락드립니다.
            </p>
          </div>

          <div className="bg-geosang-bg rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            {/* Tab Buttons */}
            <div className="flex border-b border-slate-200">
              <button className="flex-1 flex flex-col items-center justify-center py-6 bg-white border-b-2 border-geosang-teal text-geosang-teal">
                <Handshake size={20} className="mb-2" />
                <span className="text-sm font-bold">파트너십</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center py-6 text-slate-400 hover:text-geosang-deep transition-colors">
                <Quote size={20} className="mb-2" />
                <span className="text-sm font-bold">견적 문의</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center py-6 text-slate-400 hover:text-geosang-deep transition-colors">
                <Truck size={20} className="mb-2" />
                <span className="text-sm font-bold">수거 신청</span>
              </button>
            </div>

            <form className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">회사명 (COMPANY NAME)</label>
                <input
                  type="text"
                  placeholder="예: 한솔제지 주식회사"
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">업종 (BUSINESS TYPE)</label>
                <select className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all">
                  <option>제조업</option>
                  <option>폐기물 관리</option>
                  <option>물류·운송</option>
                  <option>공공기관</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">담당자명 (CONTACT PERSON)</label>
                <input
                  type="text"
                  placeholder="성함을 입력해 주세요"
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">이메일 주소 (EMAIL ADDRESS)</label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all"
                />
              </div>
              <div className="col-span-full flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">문의 내용 (INQUIRY DETAILS)</label>
                <textarea
                  rows={4}
                  placeholder="문의 내용을 입력해 주세요..."
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all resize-none"
                />
              </div>
              <div className="col-span-full pt-2">
                <button className="w-full bg-geosang-teal text-white font-bold py-5 rounded-full shadow-lg shadow-geosang-teal/20 hover:bg-geosang-deep transition-all active:scale-[0.99]">
                  문의 제출하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Locations Section ─── */}
      <section className="section-padding bg-geosang-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">오시는 길</div>
            <h2 className="text-4xl md:text-5xl font-light text-geosang-deep leading-tight">
              거상자원의 <br />거점 네트워크
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Address Cards */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-geosang-teal" />
                  <h4 className="font-bold text-geosang-deep text-lg">본사 (Global HQ)</h4>
                </div>
                <p className="text-slate-500 font-light text-sm mb-4 leading-relaxed">
                  서울특별시 강남구 테헤란로 123 <br />그린벨리 테크파크
                </p>
                <div className="flex items-center gap-2 text-geosang-teal font-bold text-sm">
                  <Phone size={15} />
                  +82 2-1234-5678
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-geosang-teal" />
                  <h4 className="font-bold text-geosang-deep text-lg">물류 허브 (서부)</h4>
                </div>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  경기도 물류 클러스터 12단지
                </p>
              </motion.div>
            </div>

            {/* Map + Badges */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="w-full h-[300px] bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner">
                <div
                  className="absolute inset-0 grayscale opacity-40 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-geosang-teal text-white py-3 px-6 rounded-full flex items-center gap-3 shadow-2xl">
                    <Globe size={22} />
                    <span className="font-bold">전국 12개 거점 운영 중</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-5 items-start"
                >
                  <div className="text-geosang-teal mt-1"><Leaf size={28} /></div>
                  <div>
                    <h4 className="font-bold text-geosang-deep mb-2">ESG 우수 기업</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      글로벌 자원 순환 표준 상위 5% 인증 기업
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-5 items-start"
                >
                  <div className="text-geosang-teal mt-1"><ShieldCheck size={28} /></div>
                  <div>
                    <h4 className="font-bold text-geosang-deep mb-2">공인 인증 프로세스</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      ISO 14001 및 R2v3 책임 재활용 인증
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
