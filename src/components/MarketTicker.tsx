import { useEffect, useState } from 'react';
import { MarketTickerSymbol } from '../types';
import { MARKET_TICKER_SYMBOLS } from '../data';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

export default function MarketTicker() {
  const [tickers, setTickers] = useState<MarketTickerSymbol[]>(MARKET_TICKER_SYMBOLS);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulate tick price fluctuations and subtle real-time highlights
  useEffect(() => {
    const tickInterval = setInterval(() => {
      // Pick 1 or 2 random indices to update to keep rendering lightweight and natural
      const numberToUpdate = Math.floor(Math.random() * 2) + 1; // 1 or 2
      const indicesToUpdate: number[] = [];
      while (indicesToUpdate.length < numberToUpdate) {
        const randomIndex = Math.floor(Math.random() * tickers.length);
        if (!indicesToUpdate.includes(randomIndex)) {
          indicesToUpdate.push(randomIndex);
        }
      }

      setTickers(prev => 
        prev.map((ticker, idx) => {
          if (!indicesToUpdate.includes(idx)) {
            // Keep normal but clear flash in case it's aged
            return {
              ...ticker,
              flash: null
            };
          }

          const priceValue = parseFloat(ticker.price.replace(/,/g, ''));
          const changeValue = parseFloat(ticker.change.replace(/[+-]/g, ''));
          
          // Micro-tick random factor between -0.04% and +0.05%
          const changePercentFactor = (Math.random() * 0.09 - 0.04) / 100;
          const delta = priceValue * changePercentFactor;
          const newPrice = priceValue + delta;
          const isUp = delta >= 0;
          
          const isPositive = isUp ? (Math.random() > 0.3) : (Math.random() < 0.3);
          const newChange = (isPositive ? '+' : '-') + Math.abs(changeValue + (delta * 0.08)).toFixed(2);
          const newChangePercent = (isPositive ? '+' : '-') + Math.abs((newPrice - priceValue) / priceValue * 100).toFixed(2) + '%';

          return {
            ...ticker,
            price: newPrice.toLocaleString('en-IN', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            }),
            change: newChange,
            changePercent: newChangePercent,
            isPositive: isPositive,
            flash: isUp ? 'up' : 'down'
          };
        })
      );
      setLastUpdated(new Date());

      // Setup timeout to clear the flash effect after 750ms so it flashes and fades
      setTimeout(() => {
        setTickers(prev => 
          prev.map(t => t.flash ? { ...t, flash: null } : t)
        );
      }, 750);

    }, 1500);

    return () => clearInterval(tickInterval);
  }, [tickers.length]);

  return (
    <div id="market-ticker-banner" className="bg-brand-950 border-b border-white/10 text-white py-2 select-none relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
        
        {/* Live Indicator Pillar */}
        <div className="flex items-center space-x-2 shrink-0 pr-4 border-r border-white/10 bg-brand-950 z-10 font-sans font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bullish opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-bullish"></span>
          </span>
          <span className="text-[10px] tracking-wider uppercase font-mono text-slate-300">NSE/BSE INDEXES</span>
          <span className="text-[10px] font-mono text-slate-400 font-normal hidden md:inline">
            ({lastUpdated.toLocaleTimeString()})
          </span>
        </div>

        {/* Scrolling container */}
        <div className="overflow-hidden flex-1 relative flex items-center h-6">
          <div className="animate-marquee flex whitespace-nowrap space-x-10 pl-4 items-center">
            {/* First Set */}
            {tickers.map((ticker, index) => {
              const hasFlash = ticker.flash;
              const flashClass = hasFlash === 'up' 
                ? 'text-emerald-400 bg-emerald-500/20 font-bold scale-[1.02] border border-emerald-500/30' 
                : hasFlash === 'down'
                  ? 'text-rose-400 bg-rose-500/20 font-bold scale-[1.02] border border-rose-500/30'
                  : 'text-white border border-transparent';

              return (
                <div 
                  id={`ticker-item-${ticker.symbol}-${index}`}
                  key={`ticker-1-${ticker.symbol}`} 
                  className={`inline-flex items-center space-x-2 font-mono text-xs transition-all duration-300 p-0.5 px-2 rounded-md ${flashClass}`}
                >
                  <span className="text-slate-400 font-sans font-semibold">{ticker.name}</span>
                  <span className="font-semibold transition-colors duration-200">{ticker.price}</span>
                  <span className={`inline-flex items-center px-1 py-0.5 rounded text-[10px] font-semibold transition-all duration-300 ${
                    ticker.isPositive 
                      ? 'text-bullish bg-bullish/10' 
                      : 'text-bearish bg-bearish/10'
                  }`}>
                    {ticker.isPositive ? <TrendingUp size={10} className="mr-0.5" /> : <TrendingDown size={10} className="mr-0.5" />}
                    {ticker.changePercent}
                  </span>
                </div>
              );
            })}
            
            {/* Duplicate Set for infinite scroll logic */}
            {tickers.map((ticker, index) => {
              const hasFlash = ticker.flash;
              const flashClass = hasFlash === 'up' 
                ? 'text-emerald-400 bg-emerald-500/20 font-bold scale-[1.02] border border-emerald-500/30' 
                : hasFlash === 'down'
                  ? 'text-rose-400 bg-rose-500/20 font-bold scale-[1.02] border border-rose-500/30'
                  : 'text-white border border-transparent';

              return (
                <div 
                  id={`ticker-item-dup-${ticker.symbol}-${index}`}
                  key={`ticker-2-${ticker.symbol}`} 
                  className={`inline-flex items-center space-x-2 font-mono text-xs transition-all duration-300 p-0.5 px-2 rounded-md ${flashClass}`}
                >
                  <span className="text-slate-400 font-sans font-semibold">{ticker.name}</span>
                  <span className="font-semibold transition-colors duration-200">{ticker.price}</span>
                  <span className={`inline-flex items-center px-1 py-0.5 rounded text-[10px] font-semibold transition-all duration-300 ${
                    ticker.isPositive 
                      ? 'text-bullish bg-bullish/10' 
                      : 'text-bearish bg-bearish/10'
                  }`}>
                    {ticker.isPositive ? <TrendingUp size={10} className="mr-0.5" /> : <TrendingDown size={10} className="mr-0.5" />}
                    {ticker.changePercent}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-1.5 shrink-0 pl-4 border-l border-white/10 text-[10px] text-slate-400 font-mono">
          <RefreshCw size={10} className="animate-spin text-slate-500" style={{ animationDuration: '3.5s' }} />
          <span>LIVE TICKER SIMULATED</span>
        </div>

      </div>
    </div>
  );
}
