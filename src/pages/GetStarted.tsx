import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Truck, ChevronDown, CheckCircle2 } from 'lucide-react';

const GetStarted = () => {
  const [userType, setUserType] = useState<'enterprise' | 'independent' | 'hauler' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center">
        <div className="container-custom max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-geosang-bg p-12 rounded-3xl border border-slate-100 shadow-xl"
          >
            <div className="w-20 h-20 bg-geosang-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} className="text-geosang-teal" />
            </div>
            <h2 className="text-3xl font-bold text-geosang-deep mb-4">문의가 접수되었습니다!</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              거상자원 전문가 팀이 검토 후 영영 시간 기준 24시간 이내에 연락드리겠습니다. <br />
              감사합니다.
            </p>
            <button
              onClick={() => window.location.hash = 'home'}
              className="px-8 py-3 bg-geosang-deep text-white rounded-full hover:bg-geosang-teal transition-all"
            >
              홈으로 돌아가기
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4"
          >
            GET STARTED
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-light text-geosang-deep mb-6"
          >
            거상자원과 연결하기
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-light max-w-2xl mx-auto"
          >
            아래 폼을 작성해 주시면 담당 전문가가 귀하의 비즈니스에 최적화된 자원 순환 솔루션을 들고 연락드리겠습니다.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* User Type Selection */}
            <div>
              <label className="block text-xs font-bold text-geosang-deep uppercase tracking-widest mb-6">저는 다음의 역할을 담당하고 있습니다:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'enterprise', icon: <Building2 size={24} />, title: '기업 고객', desc: '20개 이상의 사업장 운영' },
                  { id: 'independent', icon: <Store size={24} />, title: '개인 사업자', desc: '20개 미만의 사업장 운영' },
                  { id: 'hauler', icon: <Truck size={24} />, title: '운송 파트너', desc: '자원 수거 및 운송 협력' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setUserType(type.id as any)}
                    className={`p-8 rounded-2xl border-2 text-left transition-all flex flex-col items-start gap-4 ${
                      userType === type.id 
                        ? 'border-geosang-teal bg-geosang-teal/5 shadow-md' 
                        : 'border-slate-100 hover:border-geosang-teal/30 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`${userType === type.id ? 'text-geosang-teal' : 'text-slate-400'}`}>
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-geosang-deep">{type.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">{type.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* About You Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">About You</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">성 (LAST NAME)</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">이름 (FIRST NAME)</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">이메일 주소 (EMAIL ADDRESS)</label>
                  <input required type="email" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">전화번호 (PHONE NUMBER)</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
              </div>
            </div>

            {/* Your Business Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">Your Business</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">회사명 (COMPANY NAME)</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">국가 (COUNTRY)</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                      <option>대한민국 (South Korea)</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">어떻게 저희를 알게 되셨나요? (HOW DID YOU HEAR ABOUT US?)</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                    <option value="">선택해주세요</option>
                    <option value="search">검색 엔진 (구글, 네이버 등)</option>
                    <option value="social">소셜 미디어</option>
                    <option value="referral">지인 추천</option>
                    <option value="ads">광고</option>
                    <option value="other">기타</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">문의 내용 (MESSAGE)</label>
                <textarea rows={6} className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none resize-none" placeholder="궁금하신 사항을 자유롭게 입력해 주세요."></textarea>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={!userType}
                className={`px-16 py-5 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-2xl active:scale-95 ${
                  userType 
                    ? 'bg-geosang-teal text-white hover:bg-geosang-deep' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                상담 신청하기 (SUBMIT)
              </button>
            </div>
            
            <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
              귀하의 개인정보는 수집 목적 외의 용도로 사용되지 않으며, <br />
              개인정보처리방침에 따라 안전하게 보호됩니다.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
