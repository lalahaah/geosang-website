import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { translations } from '../translations';
import logo from '../assets/logo.svg';

interface FooterProps {
  lang: 'ko' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  const t = translations[lang].footer;

  return (
    <footer className="bg-[#093944] text-white pt-24 pb-12 font-display font-light">
      <div className="container-custom">
        {/* Top Footer: Logo, Socials, Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-16 border-b border-white/10 mb-16">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="group-hover:rotate-12 transition-transform w-14 h-14 flex items-center justify-center">
              <img src={logo} alt="GEOSANG RESOURCES" className="w-full h-full object-contain filter-geosang-teal" />
            </div>
            <div className="text-2xl font-bold tracking-tight flex items-center gap-2 text-geosang-teal">
              <span>GEOSANG</span>
              <span className="text-geosang-teal">RESOURCES</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 뉴스레터 구독 폼 삭제 */}
        </div>

        {/* Middle Footer: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">{t.aboutTitle}</h5>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm whitespace-pre-line">
              {t.aboutDesc}
            </p>
          </div>

          <div>
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">{t.products}</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#what-we-do" className="hover:text-white transition-colors">{t.rawMaterials}</a></li>
              <li><a href="#what-we-do" className="hover:text-white transition-colors">{t.recyclingServices}</a></li>
              <li><a href="#esg" className="hover:text-white transition-colors">{t.esgReporting}</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">{t.digitalPlatform}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">{t.company}</h5>
            <ul className="space-y-4 text-sm text-white/60">
              {/* 리더십 항목 삭제 */}
              <li><a href="#about" className="hover:text-white transition-colors">{t.aboutUs}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.contact}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.careers}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">{t.connect}</h5>
            <div className="flex items-center gap-2 text-sm text-geosang-teal font-bold group hover:gap-3 transition-all cursor-pointer">
              {t.getInTouch} <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Bottom Footer: Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[11px] font-medium tracking-widest text-white/30 uppercase">
          <div className="flex flex-col gap-2">
            <p>{t.rep}</p>
            <p>{t.address}</p>
            <p>© {currentYear} GEOSANG RESOURCES. All rights reserved.</p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
