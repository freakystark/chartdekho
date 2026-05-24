import { useState } from 'react';
import { Play, TrendingUp, Sparkles, BookOpen, Clock, Activity, Target } from 'lucide-react';
import { SIMULATED_CANDLE_DATA } from '../data';

interface HeroSectionProps {
  onOpenEnrollModal: (courseId?: string) => void;
  onExploreFreeClasses: () => void;
}

export default function HeroSection({ onOpenEnrollModal, onExploreFreeClasses }: HeroSectionProps) {
  // Chart sandbox states
  const [indicator, setIndicator] = useState<'none' | 'sma' | 'bollinger' | 'trendline'>('none');
  const [candleData, setCandleData] = useState(SIMULATED_CANDLE_DATA);
  const [selectedCandleIndex, setSelectedCandleIndex] = useState<number | null>(7); // default show last
  const [timeframe, setTimeframe] = useState<'15m' | '1h' | '1D'>('15m');
  const [chartSentiment, setChartSentiment] = useState<'all' | 'bullish' | 'bearish'>('all');

  const selectedCandle = selectedCandleIndex !== null ? candleData[selectedCandleIndex] : null;

  // Let's toggle dynamic trendline starting and ending coordinates
  const getTrendlineCoords = () => {
    // Let's connect low of 10:00 AM (22340) and low of 11:00 AM (22340) which then broke up
    return { x1: "10%", y1: "80%", x2: "90%", y2: "20%" };
  };

  return (
    <header className="bg-gradient-to-b from-brand-950 via-brand-900 to-slate-900 text-white relative py-12 lg:py-24 overflow-hidden">
      
      {/* Background Grid Pattern & Golden Particles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Tagline / Indicator Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm animate-pulse-soft">
              <span className="h-2 w-2 rounded-full bg-gold-500"></span>
              <span className="text-[11px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                CHART DEKHO TRADING SEEKHO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Learn to Read <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-amber-300">
                Charts Like a Pro
              </span> <br />
              Not Just Indicators.
            </h1>

            {/* High-impact description */}
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Dequench the stock market noise. Join <span className="font-semibold text-white">Chart Dekho</span>, led by <span className="text-gold-400 font-medium whitespace-nowrap">Mr. Abhay Mukund Jagirdar</span>. Master institutional order flow, pure price action candlesticks, and asymmetric derivatives hedging risk models.
            </p>

            {/* CTA Interaction Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenEnrollModal()}
                className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-brand-950 font-sans font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-gold-500/10 transform hover:-translate-y-0.5 border-b-2 border-gold-600 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Sparkles size={18} />
                <span>Join Live Masterclass</span>
              </button>

              <button
                onClick={onExploreFreeClasses}
                className="px-6 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans font-semibold text-sm rounded-xl transition-all flex items-center justify-center space-x-2 backdrop-blur-sm cursor-pointer"
              >
                <Play size={16} className="fill-current text-white" />
                <span>Watch First 3 Lessons Free</span>
              </button>
            </div>

            {/* Core Trust Badges / Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">12+ Yrs</p>
                <p className="text-xs text-slate-400 tracking-wide mt-1">Trading Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-gold-400 tracking-tight">1 & Only</p>
                <p className="text-xs text-slate-400 tracking-wide mt-1">Direct Mentor Learning</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">4,800+</p>
                <p className="text-xs text-slate-400 tracking-wide mt-1">Traders Empowered</p>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Interactive Trading Station Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-slate-900/90 border border-white/15 rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-md relative overflow-hidden">
              
              {/* Terminal Window Header Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-bearish block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-400 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-bullish block"></span>
                  </div>
                  <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
                    CHART_DEKHO_WIDGET_V1
                  </span>
                </div>
                
                <div className="flex items-center space-x-1 BG-slate-800 rounded p-0.5 border border-white/5 font-mono">
                  {(['15m', '1h', '1D'] as const).map(tf => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-1.5 py-0.5 rounded text-[10px] ${
                        timeframe === tf ? 'bg-gold-500 text-brand-950 font-bold' : 'hover:bg-white/5 text-slate-400'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Candlestick Values Display */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 py-3 bg-white/5 rounded-lg my-3 px-3 text-left font-mono text-[11px] sm:text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] font-sans">OPEN</span>
                  <span className="text-white font-semibold">{selectedCandle ? selectedCandle.open : '---'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] font-sans text-emerald-400">HIGH</span>
                  <span className="text-emerald-400 font-semibold">{selectedCandle ? selectedCandle.high : '---'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] font-sans text-rose-400">LOW</span>
                  <span className="text-rose-400 font-semibold">{selectedCandle ? selectedCandle.low : '---'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] font-sans">CLOSE</span>
                  <span className={`font-semibold ${selectedCandle && selectedCandle.close >= selectedCandle.open ? 'text-bullish' : 'text-bearish'}`}>
                    {selectedCandle ? selectedCandle.close : '---'}
                  </span>
                </div>
              </div>

              {/* The Candlestick Chart Window Canvas rendered inside an SVG */}
              <div className="relative h-60 w-full bg-slate-950/80 rounded-lg p-2 border border-white/5 overflow-hidden">
                
                <svg className="w-full h-full" viewBox="0 0 600 240" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="160" x2="600" y2="160" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="200" x2="600" y2="200" stroke="rgba(255,255,255,0.05)" />
                  
                  {/* Horizontal static levels */}
                  <line x1="0" y1="120" x2="600" y2="120" stroke="rgba(212,175,55,0.2)" strokeDasharray="3,3" />
                  <text x="5" y="115" fill="#d4af37" className="text-[9px] font-mono opacity-80 font-semibold">22,390 SUPPORT LEVEL</text>
                  
                  {/* Dynamic SMA Overlay indicators if chosen */}
                  {indicator === 'sma' && (
                    <path 
                      d="M 37.5 190 Q 112.5 170 187.5 140 T 337.5 120 T 487.5 70 T 562.5 50" 
                      fill="none" 
                      stroke="#dfc15d" 
                      strokeWidth="2" 
                      className="transition-all duration-505"
                    />
                  )}

                  {/* Bollinger Bands Upper and Lower Channels */}
                  {indicator === 'bollinger' && (
                    <>
                      <path 
                        d="M 37.5 150 Q 112.5 130 187.5 100 T 337.5 80 T 487.5 40 T 562.5 20" 
                        fill="none" 
                        stroke="#0056cc" 
                        strokeWidth="1.5" 
                        strokeDasharray="2,2" 
                        className="opacity-70 transition-all"
                      />
                      <path 
                        d="M 37.5 220 Q 112.5 210 187.5 175 T 337.5 150 T 487.5 110 T 562.5 90" 
                        fill="none" 
                        stroke="#0056cc" 
                        strokeWidth="1.5" 
                        strokeDasharray="2,2" 
                        className="opacity-70 transition-all"
                      />
                    </>
                  )}

                  {/* Trendline connectors */}
                  {indicator === 'trendline' && (
                    <line 
                      x1="10%" y1="90%" x2="90%" y2="25%" 
                      stroke="#10b981" 
                      strokeWidth="2.5" 
                      strokeDasharray="4,4" 
                      className="transition-all duration-300"
                    />
                  )}

                  {/* Mapping Candle Bars */}
                  {candleData.map((candle, idx) => {
                    const step = 600 / 8; // width divisions
                    const xCoord = idx * step + step / 2;
                    
                    // Map Prices 22310 - 22440 into SVG coordinate height (200px offset by padding)
                    const minPrice = 22300;
                    const maxPrice = 22450;
                    const mapY = (price: number) => {
                      return 220 - ((price - minPrice) / (maxPrice - minPrice)) * 180;
                    };

                    const yOpen = mapY(candle.open);
                    const yClose = mapY(candle.close);
                    const yHigh = mapY(candle.high);
                    const yLow = mapY(candle.low);
                    
                    const isBullish = candle.close >= candle.open;
                    const candleColor = isBullish ? '#10b981' : '#ef4444'; 
                    const bodyHeight = Math.max(Math.abs(yClose - yOpen), 3); // guarantee min height
                    const bodyY = Math.min(yOpen, yClose);

                    const isSelected = selectedCandleIndex === idx;

                    return (
                      <g 
                        id={`candle-group-${idx}`}
                        key={idx} 
                        className="cursor-pointer group/candle"
                        onClick={() => setSelectedCandleIndex(idx)}
                      >
                        {/* Interactive hover background bar */}
                        <rect 
                          x={xCoord - step/2 + 2} 
                          y="10" 
                          width={step - 4} 
                          height="220" 
                          fill={isSelected ? 'rgba(255,255,255,0.06)' : 'transparent'} 
                          className="hover:fill-white/5 transition-colors" 
                        />

                        {/* Candle Wick (High to Low line) */}
                        <line 
                          x1={xCoord} 
                          y1={yHigh} 
                          x2={xCoord} 
                          y2={yLow} 
                          stroke={candleColor} 
                          strokeWidth="2" 
                        />

                        {/* Candle Body */}
                        <rect 
                          x={xCoord - 10} 
                          y={bodyY} 
                          width="20" 
                          height={bodyHeight} 
                          fill={candleColor} 
                          stroke={isSelected ? '#ffffff' : 'none'}
                          strokeWidth="1.5"
                          className="transition-all rounded-sm shadow-md"
                        />

                        {/* Small Volume bars at bottom */}
                        <rect 
                          x={xCoord - 8} 
                          y={235 - (candle.volume / 35) * 45} 
                          width="16" 
                          height={(candle.volume / 35) * 45} 
                          fill={candleColor} 
                          className="opacity-25" 
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Annotation Tooltip overlay */}
                <div className="absolute top-2 right-2 flex space-x-1.5 opacity-90">
                  <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-brand-950 text-gold-400 border border-gold-400/20 shadow-sm animate-pulse">
                    {(selectedCandleIndex !== null) ? `SELECTED: ${candleData[selectedCandleIndex].date}` : "Hover / Click Candles"}
                  </span>
                </div>
              </div>

              {/* Chart Indicator Control Dashboard (Visual demonstration of Chart Dekho name) */}
              <div className="mt-4 border-t border-white/10 pt-4 text-left">
                <p className="text-slate-400 text-[11px] uppercase font-mono tracking-wider font-semibold mb-2">
                  Interactive Charting Tools — Try toggling styles:
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setIndicator(indicator === 'sma' ? 'none' : 'sma')}
                    className={`px-3 py-1.5 rounded text-xs select-none font-medium flex items-center space-x-1 transition-all ${
                      indicator === 'sma' 
                        ? 'bg-slate-100 text-brand-950 font-bold' 
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <Activity size={12} className="text-gold-500" />
                    <span>Simple Moving Average (SMA)</span>
                  </button>
                  
                  <button
                    onClick={() => setIndicator(indicator === 'bollinger' ? 'none' : 'bollinger')}
                    className={`px-3 py-1.5 rounded text-xs select-none font-medium flex items-center space-x-1 transition-all ${
                      indicator === 'bollinger' 
                        ? 'bg-slate-100 text-brand-950 font-bold' 
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <Target size={12} className="text-brand-500" />
                    <span>Bollinger Bands Channels</span>
                  </button>

                  <button
                    onClick={() => setIndicator(indicator === 'trendline' ? 'none' : 'trendline')}
                    className={`px-3 py-1.5 rounded text-xs select-none font-medium flex items-center space-x-1 transition-all ${
                      indicator === 'trendline' 
                        ? 'bg-slate-100 text-brand-950 font-bold' 
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <BookOpen size={12} className="text-emerald-400" />
                    <span>Draw Bullish S/R Trendline</span>
                  </button>
                </div>
              </div>

              <div className="mt-3 text-[10px] text-slate-500 font-mono text-center flex items-center justify-center space-x-2">
                <span>⚡ Interactive Candlestick Study Box</span>
                <span>•</span>
                <span>Click individual candles to inspect volumetric OHLCs</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </header>
  );
}
