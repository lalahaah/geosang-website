import { useState, useEffect } from 'react';
import { Menu, X, Recycle, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



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
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-rubicon-deep p-1.5 rounded flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform">
              <Recycle size={20} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-rubicon-deep' : 'text-white'
            }`}>
              GEOSANG
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: 'ABOUT', href: '#about' },
              { name: 'SOLUTIONS', href: '#solutions' },
              { name: 'PARTNERSHIPS', href: '#partnerships' },
              { name: 'ESG', href: '#esg' },
              { name: 'PLATFORMS', href: '#platform' }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-[13px] tracking-widest font-medium transition-all hover:opacity-100 ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-rubicon-teal opacity-80' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Section */}
          <div className="flex items-center gap-8">
            <button className={`hidden lg:block text-[13px] tracking-widest font-medium transition-all ${
              isScrolled ? 'text-slate-500 hover:text-rubicon-deep' : 'text-white/70 hover:text-white'
            }`}>
              Login
            </button>
            <button className="bg-rubicon-teal hover:bg-rubicon-deep text-white text-[12px] tracking-widest font-bold px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-rubicon-teal/20">
              REQUEST COLLECTION
            </button>
            <button 
              className="md:hidden text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 md:hidden shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            {['ABOUT', 'SOLUTIONS', 'PARTNERSHIPS', 'ESG', 'PLATFORMS'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-light tracking-widest text-slate-900 flex justify-between items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
                <ChevronRight size={20} className="text-slate-300" />
              </a>
            ))}
            <hr className="border-slate-100" />
            <button className="w-full bg-rubicon-deep text-white font-bold py-4 rounded-xl tracking-widest text-sm">
              REQUEST COLLECTION
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
