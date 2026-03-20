import { type Lang, translations } from '../translations';
import { type FC, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Truck, Layers, Monitor, ChevronDown, CheckCircle2 } from 'lucide-react';

type RoleType = 'logistics' | 'field' | 'office' | null;

interface CareersProps { lang: Lang }

const Careers: FC<CareersProps> = ({ lang }) => {
  const t = (translations[lang] as any).careers;

  const roleIds = ['logistics', 'field', 'office'];
  const roleIcons = [<Truck size={24} />, <Layers size={24} />, <Monitor size={24} />];

  const [role, setRole] = useState<RoleType>(null);
  const [career, setCareer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
            <h2 className="text-3xl font-light text-geosang-deep mb-4">{t.success.h2}</h2>
            <p className="text-slate-500 font-light mb-8 leading-relaxed">
              {t.success.p}
            </p>
            <button
              onClick={() => window.location.hash = 'home'}
              className="px-8 py-3 bg-geosang-deep text-white rounded-full hover:bg-geosang-teal transition-all font-light"
            >
              {t.success.btn}
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-display overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 bg-geosang-dark overflow-hidden">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4"
          >
            {t.hero.tag}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-light text-white mb-6"
          >
            {t.hero.h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 font-light max-w-2xl mx-auto"
          >
            {t.hero.p}
          </motion.p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-12">

            {/* Role selection */}
            <div>
              <label className="block text-xs font-bold text-geosang-deep uppercase tracking-widest mb-6">
                {t.roleLabel}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.roles.map((roleItem: { title: string; desc: string }, i: number) => (
                  <button
                    key={roleIds[i]}
                    type="button"
                    onClick={() => setRole(roleIds[i] as RoleType)}
                    className={`p-8 rounded-2xl border-2 text-left transition-all flex flex-col items-start gap-4 ${
                      role === roleIds[i]
                        ? 'border-geosang-teal bg-geosang-teal/5 shadow-md'
                        : 'border-slate-100 hover:border-geosang-teal/30 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`${role === roleIds[i] ? 'text-geosang-teal' : 'text-slate-400'}`}>
                      {roleIcons[i]}
                    </div>
                    <div>
                      <h3 className="font-medium text-geosang-deep">{roleItem.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">{roleItem.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Personal information */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">{t.personal.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.personal.lastName}</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.personal.firstName}</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.personal.email}</label>
                  <input required type="email" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.personal.phone}</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.personal.region}</label>
                <input type="text" placeholder={t.personal.regionPlaceholder} className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none" />
              </div>
            </div>

            {/* Job information */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">{t.jobInfo.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.jobInfo.careerType}</label>
                  <div className="relative">
                    <select
                      required
                      value={career}
                      onChange={(e) => setCareer(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none"
                    >
                      {t.jobInfo.careerOptions.map((opt: string, i: number) => (
                        <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.jobInfo.yearsExp}</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                      {t.jobInfo.yearsOptions.map((opt: string, i: number) => (
                        <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.jobInfo.education}</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                      {t.jobInfo.eduOptions.map((opt: string, i: number) => (
                        <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.jobInfo.employType}</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none appearance-none">
                      {t.jobInfo.employOptions.map((opt: string, i: number) => (
                        <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.jobInfo.skills}</label>
                <input
                  type="text"
                  placeholder={t.jobInfo.skillsPlaceholder}
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none"
                />
              </div>
            </div>

            {/* Self introduction */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-light text-geosang-deep border-b border-slate-50 pb-6 italic">{t.intro.title}</h2>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.intro.selfIntro}</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none resize-none"
                  placeholder={t.intro.selfPlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.intro.motivation}</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-geosang-teal transition-all outline-none resize-none"
                  placeholder={t.intro.motivationPlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.intro.portfolio}</label>
                <input
                  type="url"
                  placeholder={t.intro.portfolioPlaceholder}
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
                {t.submit}
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t.privacy}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;
