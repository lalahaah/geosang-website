import { type FC, type ReactNode, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export interface StickyScrollItem {
  step: string;
  icon: ReactNode;
  title: string;
  copy: string;
  desc: string;
  details: string[];
  image: string;
  imageAlt: string;
}

interface StickyScrollViewerProps {
  items: StickyScrollItem[];
  totalHeightVh?: number; // default: items.length * 100
}

const StickyScrollViewer: FC<StickyScrollViewerProps> = ({ items, totalHeightVh }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const heightVh = totalHeightVh ?? items.length * 100;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(Math.floor(latest * items.length), items.length - 1);
    if (next !== currentIndex) setCurrentIndex(next);
  });

  return (
    <div ref={containerRef} style={{ height: `${heightVh}vh` }} className="relative">
      <div className="md:sticky top-20 min-h-screen md:h-[calc(100vh-80px)] w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left: text */}
        <div className="w-full md:w-[42%] h-64 md:h-full bg-white flex flex-col px-4 sm:px-12 xl:px-20 py-12 relative">
          {/* Counter + progress */}
          <div className="flex items-center gap-4 mb-auto pb-8">
            <span className="text-[10px] tracking-[0.35em] text-slate-400 uppercase font-medium whitespace-nowrap">
              {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <div className="flex gap-1 flex-1">
              {items.map((_, i) => (
                <div key={i} className={`h-px flex-1 transition-all duration-700 ${i <= currentIndex ? 'bg-geosang-teal' : 'bg-slate-200'}`} />
              ))}
            </div>
          </div>

          {/* Content panels */}
          <div className="flex-1 relative">
            {items.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  y: currentIndex === index ? 0 : 20,
                  pointerEvents: currentIndex === index ? 'auto' : 'none',
                }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-geosang-teal/10 flex items-center justify-center text-geosang-teal">
                    {item.icon}
                  </div>
                  <span className="text-geosang-teal text-[10px] font-medium tracking-[0.35em] uppercase">{item.step}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl xl:text-5xl font-light text-geosang-deep leading-[1.15] mb-4">{item.title}</h2>
                <p className="text-sm text-geosang-teal font-light tracking-wide mb-5">{item.copy}</p>
                <div className="w-8 h-px bg-slate-200 mb-5" />
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 max-w-sm">{item.desc}</p>
                <ul className="space-y-3">
                  {item.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={13} className="text-geosang-teal mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-slate-500 font-light text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom item list */}
          <div className="mt-auto pt-8 border-t border-slate-100 space-y-1">
            {items.map((item, i) => (
              <div key={i} className={`text-xs tracking-wide transition-all duration-300 ${i === currentIndex ? 'text-geosang-teal font-medium' : 'text-slate-300 font-light'}`}>
                {item.title}
              </div>
            ))}
          </div>
        </div>

        {/* Right: images */}
        <div className="w-full md:w-[58%] h-full relative bg-slate-100 overflow-hidden">
          {items.map((item, index) => (
            <motion.div
              key={index}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollViewer;
