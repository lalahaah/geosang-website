import { Recycle, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#093944] text-white pt-24 pb-12 font-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Footer: Logo, Socials, Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-16 border-b border-white/10 mb-16">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-geosang-teal p-1.5 rounded text-white group-hover:rotate-12 transition-transform">
              <Recycle size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight">GEOSANG</span>
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

          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Join our newsletter" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-geosang-teal w-full sm:w-64 transition-all"
              />
              <button className="bg-geosang-teal hover:bg-[#008f84] text-white font-bold py-3 px-8 rounded-full text-sm transition-all whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Middle Footer: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">About Geosang</h5>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              우리는 40년의 정직함과 최첨단 디지털 기술을 결합하여 <br />
              자원순환의 새로운 표준을 제시합니다. <br />
              단순한 폐기물 수거를 넘어, 자원의 가치를 극대화하는 <br />
              파트너십을 구축합니다.
            </p>
          </div>

          <div>
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">Products</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#what-we-do" className="hover:text-white transition-colors">Raw Materials</a></li>
              <li><a href="#what-we-do" className="hover:text-white transition-colors">Recycling Services</a></li>
              <li><a href="#esg" className="hover:text-white transition-colors">ESG Reporting</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Digital Platform</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">Our Company</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[#00C2B5] text-xs font-bold tracking-[0.2em] uppercase mb-8">Connect</h5>
            <div className="flex items-center gap-2 text-sm text-geosang-teal font-bold group hover:gap-3 transition-all cursor-pointer">
              Get in touch <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Bottom Footer: Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[11px] font-medium tracking-widest text-white/30 uppercase">
          <div className="flex flex-col gap-2">
            <p>(주)거상자원 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>본사: 경기도 파주시 OO면 OO로 123 | Phone: 031-123-4567</p>
            <p>© {currentYear} Geosang Resources. All rights reserved.</p>
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
