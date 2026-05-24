import { Landmark, GraduationCap, Mail, Phone, MapPin, Scale, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenEnrollModal: () => void;
}

export default function Footer({ onNavigateToSection, onOpenEnrollModal }: FooterProps) {
  
  const handleFootClick = (secId: string) => {
    onNavigateToSection(secId);
    const element = document.getElementById(secId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="app-footer" className="bg-brand-950 text-slate-300 pt-16 pb-8 border-t border-white/10 text-left select-none relative z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid layout columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Logo column & Core tagline (span 4) */}
          <div className="md:col-span-4 space-y-4">
            
            <button 
              onClick={() => handleFootClick('home')}
              className="flex items-center space-x-2 text-left focus:outline-none cursor-pointer"
            >
              {/* Candlestick vector icon */}
              <div className="flex space-x-1 h-9 w-9 items-center justify-center bg-white/5 rounded-lg border border-white/10">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-1 bg-bullish rounded-full"></div>
                  <div className="w-1.5 h-3 bg-bullish rounded-sm"></div>
                  <div className="w-0.5 h-1 bg-bullish rounded-full"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-2 bg-bearish rounded-full"></div>
                  <div className="w-1.5 h-2.5 bg-bearish rounded-sm"></div>
                  <div className="w-0.5 h-1 bg-bearish rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  CHART <span className="text-gold-500">DEKHO</span>
                </span>
                <span className="text-[10px] block font-mono text-slate-400 tracking-wider">Trading Seekho</span>
              </div>
            </button>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Chart Dekho is India&apos;s premier price-action educational institute, focused strictly on empowering retail traders with clean structure charting rules and calculated risk mitigation systems.
            </p>

            <div className="text-xs space-y-1.5 font-mono text-slate-400">
              <p className="flex items-center space-x-2">
                <Mail size={12} className="text-gold-400" />
                <span>learn@chartdekho.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={12} className="text-gold-400" />
                <span>+91 98204 XXXXX (Office Inquiry)</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin size={12} className="text-gold-400 text-left shrink-0" />
                <span className="truncate">Pune, Maharashtra, India</span>
              </p>
            </div>

          </div>

          {/* Quick Navigation column (span 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#dfc15d] flex items-center space-x-1">
              <GraduationCap size={13} />
              <span>COHORT DISCIPLES</span>
            </h4>
            <ul className="space-y-2 text-xs font-sans font-normal">
              <li>
                <button onClick={() => handleFootClick('courses')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Price Action Basics Course
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick('courses')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Advanced Order Flow Masterclass
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick('courses')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Elite Option Selling System
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick('free-lessons')} className="hover:text-white transition-colors cursor-pointer text-left text-emerald-400 font-medium">
                  Watch 3 Free Lessons
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional column (span 2) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 flex items-center space-x-1">
              <Landmark size={13} />
              <span>MARKET INSIGHTS</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleFootClick('fii-dii')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Daily FII DII Net Net Flows
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick('fii-dii')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Pre-Market Open Commentaries
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick('zoom-portal')} className="hover:text-white transition-colors cursor-pointer text-left text-[#2D8CFF] font-medium">
                  Student Live Zoom Calendar
                </button>
              </li>
              <li>
                <button onClick={onOpenEnrollModal} className="hover:text-white transition-colors cursor-pointer text-left">
                  Apply for Free Student ID
                </button>
              </li>
            </ul>
          </div>

          {/* Social / Certifications (span 3) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 flex items-center space-x-1">
              <Scale size={13} />
              <span>REGULATORY STANCES</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light">
              We strictly adhere to regulatory frameworks. All courses are curated by Mr. Abhay Mukund Jagirdar (NISM XV Certified Analyst Practitioner).
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px]">
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded">NISM-XV CERTIFIED</span>
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded">NISM-VIII CERTIFIED</span>
            </div>
          </div>

        </div>

        {/* Technical Regulatory Disclosure Board (Critical for Financial portals) */}
        <div className="py-8 text-[10px] text-slate-500 font-mono leading-relaxed space-y-3 border-b border-white/5">
          
          <div className="flex items-start space-x-2 bg-white/[0.02] border border-white/5 p-4 rounded-lg">
            <ShieldCheck size={18} className="text-slate-500 shrink-0 mt-0.5" />
            <div className="text-left font-light">
              <p className="font-semibold text-slate-400">⚠️ OFFICIAL SEBI MANDATED DISCLAIMPTION:</p>
              <p className="mt-1">
                Stock trading, intraday execution, futures, and writing options products are subject to high volatility and significant downside market risks. Retail traders represent a segment where more than 9 out of 10 participants incur losses in active trading according to statutory assessments. Past performance statistics shared by Chart Dekho or Mr. Abhay Mukund Jagirdar do not serve as indicators or guarantees of future yields.
              </p>
              <p className="mt-1">
                Chart Dekho and its mentors act exclusively as educational coaches. We do NOT act as SEBI-registered portfolio managers, brokers, financial advisors, or stock tip providers. No content on this website constitutes a direct solicitation to buy, sell, or write any specific security, futures contract, or derivative strike. All actions taken based on these candlesticks charts are at the absolute discretion and accountability of the individual participant.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 font-mono gap-4">
          <p>© 2026 Chart Dekho Trading Institute. Designed with ♥️ by freakystark</p>
          <div className="space-x-4">
            <span className="hover:text-white cursor-default">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-default">Syllabus Guidelines</span>
            <span>•</span>
            <span className="hover:text-white cursor-default">SEBI Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
