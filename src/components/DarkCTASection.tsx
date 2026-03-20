import { type FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.svg';

interface DarkCTASectionProps {
  h2: string;
  h2Teal?: string;        // teal italic text on second line (optional)
  paragraph?: string;
  primaryBtn: string;
  onPrimaryClick?: () => void;  // default: go to #get-started
  secondaryBtn?: string;
  onSecondaryClick?: () => void;
  bgVariant?: 'dark' | 'teal'; // 'dark' = bg-geosang-dark (default), 'teal' = bg-geosang-teal
}

const DarkCTASection: FC<DarkCTASectionProps> = ({
  h2,
  h2Teal,
  paragraph,
  primaryBtn,
  onPrimaryClick,
  secondaryBtn,
  onSecondaryClick,
  bgVariant = 'dark',
}) => {
  const bg = bgVariant === 'teal' ? 'bg-geosang-teal' : 'bg-geosang-dark';
  const handlePrimary = onPrimaryClick ?? (() => { window.location.hash = 'get-started'; });

  return (
    <section className={`section-padding ${bg} relative overflow-hidden text-center py-16 md:py-24 px-4 md:px-12`}>
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img src={logoImg} alt="" className="w-[300px] sm:w-[600px] opacity-[0.04] object-contain select-none" />
      </div>
      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-10 leading-tight">
            {h2}
            {h2Teal && <><br /><span className="text-geosang-teal italic">{h2Teal}</span></>}
          </h2>
          {paragraph && (
            <p className="text-xl text-white/60 font-light mb-12 max-w-xl mx-auto">{paragraph}</p>
          )}
          <div className={`flex ${secondaryBtn ? 'flex-col sm:flex-row items-center justify-center gap-6' : 'justify-center'}`}>
            <button
              onClick={handlePrimary}
              className="w-full sm:w-auto px-12 py-5 bg-geosang-teal hover:bg-geosang-teal-dark text-white font-bold rounded-full text-xl transition-all shadow-2xl shadow-geosang-teal/20 active:scale-95 flex items-center gap-3"
            >
              {primaryBtn} <ArrowRight size={24} />
            </button>
            {secondaryBtn && (
              <button
                onClick={onSecondaryClick}
                className="w-full sm:w-auto px-12 py-5 border border-white/30 text-white hover:bg-white/10 rounded-full font-bold text-xl transition-all"
              >
                {secondaryBtn}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DarkCTASection;
