import { type FC, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroButton {
  label: string;
  variant: 'primary' | 'ghost';
  onClick?: () => void;
}

interface PageHeroProps {
  /** Background image URL. If omitted, renders plain dark background */
  bgImage?: string;
  /** Small kicker text above h1 */
  kicker: string;
  /** Main heading — first part (white text) */
  h1: string;
  /** Main heading — teal-colored second line (optional) */
  h1Teal?: string;
  /** Subtitle / description paragraph */
  subtitle?: string;
  /** Action buttons (optional) */
  buttons?: HeroButton[];
  /** Extra overlay / effects — rendered inside the background div (optional) */
  overlayExtras?: ReactNode;
  /** Whether to show the animated scroll indicator at the bottom (default true) */
  showScrollIndicator?: boolean;
  /** Additional className for the section */
  className?: string;
}

const PageHero: FC<PageHeroProps> = ({
  bgImage,
  kicker,
  h1,
  h1Teal,
  subtitle,
  buttons,
  overlayExtras,
  showScrollIndicator = true,
  className = '',
}) => {
  return (
    <section className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-geosang-deep text-center ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55 z-10" />
        {overlayExtras}
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom pt-24 pb-12 md:pt-40 md:pb-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-geosang-teal text-sm font-bold uppercase tracking-[0.2em] mb-8"
        >
          {kicker}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-7xl font-light text-white leading-[1.1] mb-10 max-w-4xl mx-auto"
        >
          {h1}
          {h1Teal && (
            <><br /><span className="text-geosang-teal">{h1Teal}</span></>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {subtitle}
          </motion.p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {buttons.map((btn, i) => (
              btn.variant === 'primary' ? (
                <button
                  key={i}
                  onClick={btn.onClick}
                  className="w-full sm:w-auto px-10 py-4 bg-geosang-teal text-white rounded-full font-medium hover:bg-geosang-teal-dark transition-all shadow-lg flex items-center gap-3"
                >
                  {btn.label}
                </button>
              ) : (
                <button
                  key={i}
                  onClick={btn.onClick}
                  className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white border border-white/15 rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  {btn.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      )}
    </section>
  );
};

export default PageHero;
