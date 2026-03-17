import { Recycle, Mail, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rubicon-deep text-slate-400 pt-32 pb-16 font-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-10 group">
              <div className="bg-rubicon-teal p-1.5 rounded text-white group-hover:rotate-12 transition-transform">
                <Recycle size={20} />
              </div>
              <span className="text-xl font-bold tracking-widest text-white">GEOSANG</span>
            </div>
            <p className="max-w-xs mb-10 text-[14px] leading-relaxed text-white/50 tracking-wide">
              40 years of integrity in every data point. <br />
              Setting new global standards for resource circulation.
            </p>
            <div className="flex gap-6">
              {[Globe, Mail, Share2].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7 text-[13px] tracking-widest">
            <h5 className="text-white font-bold mb-8 opacity-90">COMPANY</h5>
            <ul className="space-y-4">
              <li><a href="#solutions" className="hover:text-rubicon-teal transition-colors">SOLUTIONS</a></li>
              <li><a href="#partnerships" className="hover:text-rubicon-teal transition-colors">PARTNERSHIPS</a></li>
              <li><a href="#esg" className="hover:text-rubicon-teal transition-colors">ESG</a></li>
              <li><a href="#platform" className="hover:text-rubicon-teal transition-colors">PLATFORMS</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10 text-[13px] tracking-widest">
            <h5 className="text-white font-bold mb-8 opacity-90">CONTACT</h5>
            <ul className="space-y-4">
              <li className="text-white/50">info@geosang.co.kr</li>
              <li className="text-white/50">02-1234-5678</li>
              <li><a href="#contact" className="text-rubicon-teal hover:underline decoration-rubicon-teal/30 underline-offset-8 transition-all">REQUEST QUOTE</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[11px] font-medium tracking-widest opacity-30">
          <div className="flex flex-col gap-2">
            <p>(주)거상자원 | 대표이사: 홍길동 | 사업자등록번호: 000-00-00000</p>
            <p>본사: 서울특별시 강남구 테헤란로 123 거상타워 | 야적장: 경기도 파주시 OO면 OO로 456</p>
            <p>© {currentYear} Geosang Resources. All rights reserved.</p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
