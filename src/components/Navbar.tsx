import { useState } from 'react';
import { StudentUser } from '../types';
import { Menu, X, Landmark, GraduationCap, Video, Users, LineChart, User, LogOut } from 'lucide-react';

interface NavbarProps {
  student: StudentUser | null;
  onLogout: () => void;
  onOpenEnrollModal: (courseId?: string) => void;
  onOpenLoginModal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({
  student,
  onLogout,
  onOpenEnrollModal,
  onOpenLoginModal,
  activeSection,
  setActiveSection
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Landmark },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'free-lessons', label: 'Free Classes', icon: Video },
    { id: 'fii-dii', label: 'Market Insights', icon: LineChart },
    { id: 'zoom-portal', label: 'Live Zoom Schedule', icon: Users },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    // Scroll to section smoothly if present (or handled by state selector)
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <nav id="app-navigation" className="sticky top-0 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100 z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 group focus:outline-none cursor-pointer"
            >
              {/* Custom Candlestick Logo */}
              <div className="flex items-center space-x-1.5 h-10 w-10 justify-center bg-brand-900 rounded-lg shadow-md group-hover:bg-brand-800 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-1.5 bg-bullish rounded-full"></div>
                  <div className="w-2 h-4 bg-bullish rounded-sm"></div>
                  <div className="w-0.5 h-1.5 bg-bullish rounded-full"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-2.5 bg-bearish rounded-full"></div>
                  <div className="w-2 h-3 bg-bearish rounded-sm"></div>
                  <div className="w-0.5 h-2 bg-bearish rounded-full"></div>
                </div>
              </div>
              
              <div className="text-left">
                <span className="font-display text-xl font-bold tracking-tight text-brand-950 block leading-none">
                  CHART <span className="text-gold-500">DEKHO</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-500 tracking-widest block uppercase mt-1 font-mono">
                  Trading Seekho
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-brand-900 bg-brand-500/10 border-b-2 border-brand-800 shadow-sm' 
                      : 'text-slate-600 hover:text-brand-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-brand-800' : 'text-slate-400'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Student Account Area */}
          <div className="hidden lg:flex items-center space-x-3">
            {student ? (
              <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 rounded-lg p-1.5 pr-3">
                <div className="h-8 w-8 rounded-full bg-gold-500 text-brand-950 flex items-center justify-center font-display font-bold text-sm shadow-inner uppercase">
                  {student.name.charAt(0)}
                </div>
                <div className="text-xs">
                  <p className="font-medium text-slate-800 truncate max-w-[120px]">{student.name}</p>
                  <p className="text-[10px] text-emerald-600 font-medium font-mono">LIVE STUDENT</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-1 hover:bg-slate-200 text-slate-500 hover:text-bearish rounded transition-colors"
                  title="Logout Student Profile"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={onOpenLoginModal}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onOpenEnrollModal()}
                  className="px-4 py-2 bg-brand-900 text-white rounded-lg text-sm font-semibold hover:bg-brand-800 shadow-md border-b-2 border-gold-600 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-brand-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white shadow-inner animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-link-mobile-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2.5 w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all ${
                    isActive 
                      ? 'text-brand-900 bg-brand-900/5 font-semibold text-brand-800' 
                      : 'text-slate-600 hover:text-brand-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={18} className="text-slate-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            
            <div className="pt-4 pb-2 border-t border-slate-100 px-4 mt-2">
              {student ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-gold-500 text-brand-950 flex items-center justify-center font-display font-semibold text-lg">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{student.name}</p>
                      <p className="text-[10px] text-emerald-600 font-mono">ENROLLED STUDENT</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-1 px-3 py-1.5 border border-slate-200 text-slate-600 text-xs font-semibold rounded hover:bg-slate-50"
                  >
                    <LogOut size={14} />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onOpenLoginModal();
                      setMobileMenuOpen(false);
                    }}
                    className="py-2.5 text-center border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 bg-white"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      onOpenEnrollModal();
                      setMobileMenuOpen(false);
                    }}
                    className="py-2.5 text-center bg-brand-900 text-white rounded-lg text-sm font-semibold font-sans border-b border-gold-500 text-shadow-sm shadow"
                  >
                    Enroll Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
