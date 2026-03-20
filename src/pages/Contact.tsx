import { type Lang, translations } from '../translations';
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Handshake, Quote, Truck, Globe, ShieldCheck, Leaf } from 'lucide-react';

interface ContactProps { lang: Lang }

const Contact: FC<ContactProps> = ({ lang }) => {
  const t = (translations[lang] as any).contact;

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
                {t.hero.kicker}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-light text-geosang-deep leading-tight"
              >
                {t.hero.title_part1} <br />
                <span className="text-geosang-teal">{t.hero.title_part2}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 font-light leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button className="bg-geosang-teal text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-geosang-teal/20 hover:bg-geosang-deep transition-all active:scale-95">
                  {t.hero.ctaBtn}
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
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.form.sectionTag}</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-geosang-deep mb-6 leading-tight">
              {t.form.sectionTitle_part1} <br />{t.form.sectionTitle_part2}
            </h2>
            <p className="text-lg text-slate-500 font-light">
              {t.form.sectionSubtitle}
            </p>
          </div>

          <div className="bg-geosang-bg rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            {/* Tab Buttons */}
            <div className="flex border-b border-slate-200">
              <button className="flex-1 flex flex-col items-center justify-center py-6 bg-white border-b-2 border-geosang-teal text-geosang-teal">
                <Handshake size={20} className="mb-2" />
                <span className="text-sm font-bold">{t.form.tabs[0]}</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center py-6 text-slate-400 hover:text-geosang-deep transition-colors">
                <Quote size={20} className="mb-2" />
                <span className="text-sm font-bold">{t.form.tabs[1]}</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center py-6 text-slate-400 hover:text-geosang-deep transition-colors">
                <Truck size={20} className="mb-2" />
                <span className="text-sm font-bold">{t.form.tabs[2]}</span>
              </button>
            </div>

            <form className="p-4 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.companyLabel}</label>
                <input
                  type="text"
                  placeholder={t.form.companyPlaceholder}
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.businessTypeLabel}</label>
                <select className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all">
                  {t.form.businessTypeOptions.map((opt: string, i: number) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.contactPersonLabel}</label>
                <input
                  type="text"
                  placeholder={t.form.contactPersonPlaceholder}
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.emailLabel}</label>
                <input
                  type="email"
                  placeholder={t.form.emailPlaceholder}
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all"
                />
              </div>
              <div className="col-span-full flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.form.messageLabel}</label>
                <textarea
                  rows={4}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full rounded-xl bg-white border border-slate-200 p-4 text-geosang-deep placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-geosang-teal/30 transition-all resize-none"
                />
              </div>
              <div className="col-span-full pt-2">
                <button className="w-full bg-geosang-teal text-white font-bold py-5 rounded-full shadow-lg shadow-geosang-teal/20 hover:bg-geosang-deep transition-all active:scale-[0.99]">
                  {t.form.submitBtn}
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
            <div className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-4">{t.locations.sectionTag}</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-geosang-deep leading-tight">
              {t.locations.sectionTitle_part1} <br />{t.locations.sectionTitle_part2}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-10">
            {/* Address Cards */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-geosang-teal" />
                  <h4 className="font-bold text-geosang-deep text-lg">{t.locations.hq.name}</h4>
                </div>
                <p className="text-slate-500 font-light text-sm mb-4 leading-relaxed">
                  {t.locations.hq.address}
                </p>
                <div className="flex items-center gap-2 text-geosang-teal font-bold text-sm">
                  <Phone size={15} />
                  {t.locations.hq.phone}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-4 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-geosang-teal" />
                  <h4 className="font-bold text-geosang-deep text-lg">{t.locations.hub.name}</h4>
                </div>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  {t.locations.hub.address}
                </p>
              </motion.div>
            </div>

            {/* Map + Badges */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="w-full h-[200px] sm:h-[300px] bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner">
                <div
                  className="absolute inset-0 grayscale opacity-40 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-geosang-teal text-white py-3 px-6 rounded-full flex items-center gap-3 shadow-2xl">
                    <Globe size={22} />
                    <span className="font-bold">{t.locations.mapLabel}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-5 items-start"
                >
                  <div className="text-geosang-teal mt-1"><Leaf size={28} /></div>
                  <div>
                    <h4 className="font-bold text-geosang-deep mb-2">{t.locations.badge1Title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      {t.locations.badge1Desc}
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-4 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-5 items-start"
                >
                  <div className="text-geosang-teal mt-1"><ShieldCheck size={28} /></div>
                  <div>
                    <h4 className="font-bold text-geosang-deep mb-2">{t.locations.badge2Title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      {t.locations.badge2Desc}
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
