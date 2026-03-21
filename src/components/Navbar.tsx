import { type Lang, translations } from '../translations';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.svg';

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].navbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.services, href: '#service' },
    { name: t.process, href: '#process' },
    { name: t.platform, href: '#platform' },
    { name: t.esg, href: '#esg' }
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 font-light ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-12">
          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <img
                src={logo}
                alt="GEOSANG RESOURCES"
                className={`w-full h-full object-contain transition-all duration-500 ${
                  isScrolled ? 'sm:filter-geosang-teal filter-geosang-teal-mobile' : 'sm:filter-white filter-geosang-teal-mobile'
                }`}
              />
            </div>
            <div className={`hidden sm:flex text-xl font-bold tracking-tight transition-colors items-center gap-2 ${
              isScrolled ? 'text-geosang-teal' : 'text-white'
            }`}>
              <span>GEOSANG</span>
              <span className={isScrolled ? 'text-geosang-teal' : 'text-white'}>RESOURCES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-[13px] tracking-widest font-medium transition-all hover:opacity-100 ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-geosang-teal opacity-80' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Section */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Language Switcher */}
            <div className={`flex items-center gap-2 p-1 rounded-full border transition-colors ${
              isScrolled ? 'bg-slate-100 border-slate-200' : 'bg-black/5 border-white/10'
            }`}>
              <button 
                onClick={() => setLang('ko')}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                  lang === 'ko' ? 'bg-white shadow-sm scale-110' : 'opacity-40 hover:opacity-100'
                }`}
                title="한국어"
              >
                🇰🇷
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                  lang === 'en' ? 'bg-white shadow-sm scale-110' : 'opacity-40 hover:opacity-100'
                }`}
                title="English"
              >
                🇺🇸
              </button>
            </div>

            <button className={`hidden lg:block text-[13px] tracking-widest font-medium transition-all ${
              isScrolled ? 'text-slate-500 hover:text-geosang-deep' : 'text-white/70 hover:text-white'
            }`}>
              {t.login}
            </button>
            <button
              onClick={() => window.location.hash = 'get-started'}
              className="hidden lg:block bg-geosang-teal hover:bg-geosang-deep text-white text-[12px] tracking-widest font-bold px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-geosang-teal/20"
            >
              {t.contact}
            </button>
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 sm:p-8 lg:hidden shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-light tracking-widest text-slate-900 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight size={20} className="text-slate-300" />
              </a>
            ))}
            <hr className="border-slate-100" />
            <button className="text-left py-2 text-slate-600 font-medium tracking-widest">
              {t.login}
            </button>
            <button 
              onClick={() => {
                window.location.hash = 'get-started';
                setMobileMenuOpen(false);
              }}
              className="w-full bg-geosang-deep text-white font-bold py-4 rounded-xl tracking-widest text-sm"
            >
              {t.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
