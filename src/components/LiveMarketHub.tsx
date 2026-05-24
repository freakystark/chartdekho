import { useState } from 'react';
import { FiiDiiData } from '../types';
import { RECENT_FII_DII_HISTORICAL } from '../data';
import { Landmark, ArrowUpRight, ArrowDownRight, RefreshCw, Calendar, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';

export default function LiveMarketHub() {
  const [fiiDiiLog, setFiiDiiLog] = useState<FiiDiiData[]>(RECENT_FII_DII_HISTORICAL);
  const [activeHistoryIndex, setActiveHistoryIndex] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const activeDay = fiiDiiLog[activeHistoryIndex];

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const getSentimentBadge = (sentiment: FiiDiiData['marketSentiment']) => {
    switch (sentiment) {
      case 'Bullish':
        return 'bg-bullish/15 text-bullish border-bullish/20';
      case 'Bearish':
        return 'bg-bearish/15 text-bearish border-bearish/20';
      case 'Neutral':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'Volatile':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getSentimentTextClass = (sentiment: FiiDiiData['marketSentiment']) => {
    switch (sentiment) {
      case 'Bullish': return 'text-bullish';
      case 'Bearish': return 'text-bearish';
      case 'Neutral': return 'text-slate-500';
      case 'Volatile': return 'text-amber-500';
    }
  };

  return (
    <section id="fii-dii" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div className="text-left max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-brand-900 bg-brand-500/10 px-3 py-1 rounded-full uppercase font-bold inline-flex items-center space-x-1.5">
              <TrendingUp size={11} />
              <span>INSTITUTIONAL DATA MATRICES</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 mt-3">
              Daily FII DII Flows & Market Insights
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
              We teach structural data over emotional bias. Look directly at the real flow of institutional money (Foreign Institutional Investors & Domestic Institutional Investors) to map clean market sentiments.
            </p>
          </div>

          <button
            onClick={triggerRefresh}
            disabled={isRefreshing}
            className="self-start md:self-end flex items-center space-x-2 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer disabled:opacity-50 inline-flex"
          >
            <RefreshCw size={13} className={isRefreshing ? 'animate-spin text-brand-900' : 'text-slate-500'} />
            <span>{isRefreshing ? 'Flushing Flows...' : 'Refresh Flows'}</span>
          </button>
        </div>

        {/* Content Panel Frame: Dual side split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Selected Day Flow Stats card (span 8) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-5 gap-3">
              <div className="flex items-center space-x-3 text-left">
                <div className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base">Flow Figures for {activeDay.date}</h3>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">Reported end of Cash segment trading session</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-400 font-mono">SENTIMENT:</span>
                <span className={`px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded border tracking-widest ${getSentimentBadge(activeDay.marketSentiment)}`}>
                  {activeDay.marketSentiment}
                </span>
              </div>
            </div>

            {/* Interactive Grid: FII Cards vs DII Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
              
              {/* FII Column Card */}
              <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100 text-left relative overflow-hidden">
                <div className="absolute right-0 top-0 text-[80px] leading-none opacity-[0.03] select-none pointer-events-none font-bold text-slate-900 font-mono">FII</div>
                <h4 className="font-display font-bold text-xs text-slate-500 uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  <span>Foreign Institutional (FII) Flows</span>
                </h4>
                
                {/* Net metrics block */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Net Action Value (INR Cash)</span>
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-2xl sm:text-3xl font-mono font-bold ${activeDay.fiiNet >= 0 ? 'text-bullish' : 'text-bearish'}`}>
                      {activeDay.fiiNet >= 0 ? '+' : ''}{activeDay.fiiNet.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Cr
                    </span>
                    <span className="text-slate-400 text-[10px] font-mono">Net</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-3 font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-sans">TOTAL BUY</span>
                    <span className="text-slate-800 font-semibold">{activeDay.fiiBuy.toLocaleString()} Cr</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-sans">TOTAL SELL</span>
                    <span className="text-slate-800 font-semibold">{activeDay.fiiSell.toLocaleString()} Cr</span>
                  </div>
                </div>
              </div>

              {/* DII Column Card */}
              <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100 text-left relative overflow-hidden">
                <div className="absolute right-0 top-0 text-[80px] leading-none opacity-[0.03] select-none pointer-events-none font-bold text-slate-900 font-mono">DII</div>
                <h4 className="font-display font-bold text-xs text-slate-500 uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Domestic Institutional (DII) Flows</span>
                </h4>
                
                {/* Net metrics block */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono text-slate-400">Net Action Value (Mutual Funds/LIC)</span>
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-2xl sm:text-3xl font-mono font-bold ${activeDay.diiNet >= 0 ? 'text-bullish' : 'text-bearish'}`}>
                      {activeDay.diiNet >= 0 ? '+' : ''}{activeDay.diiNet.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Cr
                    </span>
                    <span className="text-slate-400 text-[10px] font-mono">Net</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-3 font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-sans">TOTAL BUY</span>
                    <span className="text-slate-800 font-semibold">{activeDay.diiBuy.toLocaleString()} Cr</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-sans">TOTAL SELL</span>
                    <span className="text-slate-800 font-semibold">{activeDay.diiSell.toLocaleString()} Cr</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Commentary by Mr. Abhay Mukund */}
            <div className="border-t border-slate-100 pt-5 text-left bg-gradient-to-r from-brand-950/5 to-transparent p-4 rounded-xl border border-dashed border-slate-200">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-950 mb-2 flex items-center space-x-1.5">
                <Sparkles size={13} className="text-gold-500" />
                <span>Mentor Commentary & Pure Chart Interpretation</span>
              </h4>
              <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">
                "{activeDay.commentary}"
              </p>
              <div className="text-right mt-2 text-[10px] font-mono text-slate-400">
                — Signed, Mr. Abhay Mukund Jagirdar
              </div>
            </div>

          </div>

          {/* Historical navigation column & Educational Lessons (span 4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* History Selector Pane */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest pl-1 mb-3">
                HISTORICAL FLOW LOGS
              </p>
              
              <div className="space-y-2">
                {fiiDiiLog.map((day, idx) => {
                  const isActive = idx === activeHistoryIndex;
                  return (
                    <button
                      id={`btn-select-fii-day-${idx}`}
                      key={day.date}
                      onClick={() => setActiveHistoryIndex(idx)}
                      className={`w-full p-3 rounded-xl border text-left transition-all ${
                        isActive 
                          ? 'bg-brand-900 border-brand-900 text-white shadow-md' 
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-sans font-bold">{day.date}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isActive 
                            ? 'bg-white/10 text-white border-white/20' 
                            : getSentimentBadge(day.marketSentiment)
                        }`}>
                          {day.marketSentiment}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2 text-[11px] font-mono font-light">
                        <span>FII Net: <strong className={isActive ? 'text-gold-400' : getSentimentTextClass(day.fiiNet >= 0 ? 'Bullish' : 'Bearish')}>{day.fiiNet.toFixed(0)} Cr</strong></span>
                        <span>DII Net: <strong className={isActive ? 'text-white' : getSentimentTextClass(day.diiNet >= 0 ? 'Bullish' : 'Bearish')}>{day.diiNet.toFixed(0)} Cr</strong></span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Education callout about FII DII interpretation */}
            <div className="bg-brand-950 text-white rounded-2xl p-5 shadow-md border border-white/5 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 text-[100px] leading-none opacity-[0.02] select-none pointer-events-none font-bold text-white font-mono">Q</div>
              
              <h4 className="font-display font-bold text-xs tracking-wide uppercase text-gold-400 mb-2 flex items-center space-x-1.5">
                <HelpCircle size={14} className="text-gold-400" />
                <span>How to interpret this dataset?</span>
              </h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Most amateur retail traders read price movements post-facto. Mr. Abhay teaches you to aggregate these Institutional net figures with Candlestick Order Blocks.
              </p>
              
              <div className="mt-4 bg-white/5 p-3 rounded border border-white/10 text-[11px] text-slate-300 leading-normal font-mono">
                💡 <span className="font-semibold text-gold-400">Mentor Tip:</span> FII sell numbers can represent simple hedges; do not panic sell blindly. Learn how Options Spreads act as insurance inside our advanced cohorts.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
