import { type FC } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface FormSuccessScreenProps {
  h2: string;
  paragraph: string;
  btnLabel: string;
  onHome?: () => void; // default: go to #home
}

const FormSuccessScreen: FC<FormSuccessScreenProps> = ({ h2, paragraph, btnLabel, onHome }) => {
  const handleHome = onHome ?? (() => { window.location.hash = 'home'; });
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
          <h2 className="text-3xl font-light text-geosang-deep mb-4">{h2}</h2>
          <p className="text-slate-500 font-light mb-8 leading-relaxed">{paragraph}</p>
          <button
            onClick={handleHome}
            className="px-8 py-3 bg-geosang-deep text-white rounded-full hover:bg-geosang-teal transition-all font-light"
          >
            {btnLabel}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FormSuccessScreen;
