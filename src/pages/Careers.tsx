import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Layers, Monitor, ChevronDown, CheckCircle2 } from 'lucide-react';

type RoleType = 'logistics' | 'field' | 'office' | null;

const Careers = () => {
  const [role, setRole] = useState<RoleType>(null);
  const [career, setCareer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white font-display pt-32 pb-20 flex items-center justify-center">
        <div className="container-custom max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-geosang-bg p-12 rounded-3xl border border-slate-100 shadow-xl"
          >
            <div className="w-20 h-20 bg-geosang-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} className="text-geosang-teal" />
            </div>
            <h2 className="text-3xl font-light text-geosang-deep mb-4">지원서가 접수되었습니다!</h2>
            <p className="text-slate-500 font-light mb-8 leading-relaxed">
              서류 검토 후 영업일 기준 5일 이내에 이메일로 결과를 안내드리겠습니다.<br />
              거상자원에 관심 가져주셔서 감사합니다.
            </p>
            <button
              onClick={() => window.location.hash = 'home'}
              className="px-8 py-3 bg-geosang-deep text-white rounded-full hover:bg-geosang-teal transition-all font-light"
            >
              홈으로 돌아가기
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-display overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4"
          >
            CAREERS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-light text-geosang-deep mb-6"
          >
            거상자원과 함께 성장하기
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-light max-w-2xl mx-auto"
          >
            40년의 현장 경험과 디지털 혁신이 만나는 곳에서 함께 일할 인재를 찾습니다.
            아래 지원서를 작성해 주세요.
          </motion.p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-12">

            {/* 지원 분야 선택 */}
            <div>
              <label className="block text-xs font-bold text-geosang-deep uppercase tracking-widest mb-6">
                지원하실 분야를 선택해 주세요:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    id: 'logistics',
                    icon: <Truck size={24} />,
                    title: '운전 · 물류',
                    desc: '수거 차량 운전 및 배송 업무',
                  },
                  {
                    id: 'field',
                    icon: <Layers size={24} />,
                    title: '현장 · 선별',
                    desc: '선별 공정 및 현장 작업 운영',
                  },
                  {
                    id: 'office',
                    icon: <Monitor size={24} />,
                    title: '사무 · IT',
                    desc: '기획, 영업, 개발 및 관리',
                  },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setRole(type.id as RoleType)}
                    className={`p-8 rounded-2xl border-2 text-left transition-all flex flex-col items-start gap-4 ${
                      role === type.id
                        ? 'border-geosang-teal bg-geosang-teal/5 shadow-md'
                        : 'border-slate-100 hover:border-geosang-teal/30 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`${role === type.id ? 'text-geosang-teal' : 'text-slate-400'}`}>
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-geosang-deep">{type.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">{type.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 인적 사항 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">인적 사항</h2>

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
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">이메일 주소 (EMAIL)</label>
                  <input required type="email" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">전화번호 (PHONE)</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">거주 지역 (REGION)</label>
                <input type="text" placeholder="예: 서울시 강남구" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
              </div>
            </div>

            {/* 지원 정보 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">지원 정보</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">경력 구분 (CAREER TYPE)</label>
                  <div className="relative">
                    <select
                      required
                      value={career}
                      onChange={(e) => setCareer(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none"
                    >
                      <option value="">선택해주세요</option>
                      <option value="new">신입</option>
                      <option value="experienced">경력</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">경력 연수 (YEARS OF EXP.)</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                      <option value="">선택해주세요</option>
                      <option>없음 (신입)</option>
                      <option>1년 미만</option>
                      <option>1 – 3년</option>
                      <option>3 – 5년</option>
                      <option>5 – 10년</option>
                      <option>10년 이상</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">최종 학력 (EDUCATION)</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                      <option value="">선택해주세요</option>
                      <option>고등학교 졸업</option>
                      <option>전문대학 졸업</option>
                      <option>4년제 대학교 졸업</option>
                      <option>대학원 이상</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">희망 근무 형태 (EMPLOYMENT)</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                      <option value="">선택해주세요</option>
                      <option>정규직</option>
                      <option>계약직</option>
                      <option>인턴</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">보유 자격증 및 기술 (SKILLS / LICENSES)</label>
                <input
                  type="text"
                  placeholder="예: 1종 운전면허, 지게차 자격증, React 개발 등"
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none"
                />
              </div>
            </div>

            {/* 자기소개 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">자기소개</h2>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">자기소개 (SELF INTRODUCTION)</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none resize-none"
                  placeholder="본인의 경험, 역량, 성격 등을 자유롭게 작성해 주세요."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">지원 동기 (MOTIVATION)</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none resize-none"
                  placeholder="거상자원에 지원하게 된 계기와 입사 후 목표를 작성해 주세요."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">포트폴리오 / 링크 (OPTIONAL)</label>
                <input
                  type="url"
                  placeholder="https://"
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={!role || !career}
                className={`px-16 py-5 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-2xl active:scale-95 ${
                  role && career
                    ? 'bg-geosang-teal text-white hover:bg-geosang-deep'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                지원서 제출하기 (SUBMIT)
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
              제출하신 지원서는 채용 목적 외의 용도로 사용되지 않으며,<br />
              개인정보처리방침에 따라 안전하게 보호됩니다.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;
