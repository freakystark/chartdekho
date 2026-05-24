import { useState } from 'react';
import { FREE_CLASS_VIDEOS } from '../data';
import { Play, Check, Flame, Trophy, Lock, Sparkles, AlertCircle, Headphones } from 'lucide-react';

interface FreeClassesSectionProps {
  onOpenEnrollModal: (courseId?: string) => void;
  onNavigateToCourses: () => void;
}

export default function FreeClassesSection({ onOpenEnrollModal, onNavigateToCourses }: FreeClassesSectionProps) {
  const [activeVideoId, setActiveVideoId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const activeVideo = FREE_CLASS_VIDEOS.find(v => v.videoId === activeVideoId) || FREE_CLASS_VIDEOS[0];

  const handleLessonSelect = (id: number) => {
    setLoading(true);
    setIsPlaying(false);
    setActiveVideoId(id);
    
    // Smooth loading simulation
    setTimeout(() => {
      setLoading(false);
    }, 450);
  };

  return (
    <section id="free-lessons" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-mono tracking-widest text-emerald-700 bg-emerald-500/10 px-3 py-1 rounded-full uppercase font-bold inline-flex items-center space-x-1">
            <Flame size={12} />
            <span>Instant Free Access</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 mt-3">
            Start Free: First 3 Core Masterclasses
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            No dynamic wall, no credit card. Access the absolute core strategies Mr. Abhay Mukund teaches his paid cohort, free of charge to jumpstart your price action literacy.
          </p>
        </div>

        {/* Dynamic Player Framework Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cinema Player (Left column, span 8) */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-video flex flex-col justify-between p-4 group select-none">
              
              {/* Dynamic Video background mockup or thumbnail */}
              {(!isPlaying || loading) ? (
                <div className="absolute inset-0 bg-brand-950">
                  <img 
                    src={activeVideo.videoThumbnail} 
                    alt={activeVideo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent"></div>
                </div>
              ) : (
                // Play Simulation
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-900/95 overflow-hidden">
                  
                  {/* Glowing chart particles */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  
                  {/* Dynamic waveform visualizer to simulate playing lesson audio */}
                  <div className="flex space-x-1.5 items-end justify-center h-20 mb-4 scale-110">
                    <div className="w-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDuration: '0.8s' }}></div>
                    <div className="w-1.5 bg-bullish rounded-full h-12 animate-bounce" style={{ animationDuration: '0.5s' }}></div>
                    <div className="w-1.5 bg-white rounded-full h-16 animate-bounce" style={{ animationDuration: '1.2s' }}></div>
                    <div className="w-1.5 bg-gold-500 rounded-full h-10 animate-bounce" style={{ animationDuration: '0.7s' }}></div>
                    <div className="w-1.5 bg-bearish rounded-full h-14 animate-bounce" style={{ animationDuration: '0.9s' }}></div>
                    <div className="w-1.5 bg-gold-400 rounded-full animate-bounce" style={{ animationDuration: '1s' }}></div>
                  </div>

                  <p className="text-sm font-mono text-gold-400 tracking-wider">PLAYING EDUCATIONAL WEBCAST MODEL</p>
                  <p className="text-white font-semibold font-display text-base px-6 text-center mt-1">{activeVideo.title}</p>
                  
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs transition-colors"
                  >
                    Pause Video Draft
                  </button>
                </div>
              )}

              {/* Status Header Overlay */}
              <div className="relative z-10 flex justify-between items-center text-xs text-white/70">
                <span className="bg-emerald-600 text-white font-mono font-bold uppercase py-0.5 px-2 rounded text-[9px] tracking-wider">
                  FREE LECTURE DEMO
                </span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-[10px]">
                  DURATION: {activeVideo.duration}
                </span>
              </div>

              {/* Play Trigger / Loading Spinner */}
              {(!isPlaying && !loading) && (
                <div className="relative z-10 mx-auto my-auto flex flex-col items-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gold-500 hover:bg-gold-400 text-brand-950 flex items-center justify-center shadow-lg transform hover:scale-105 transition-all outline-none border-b-2 border-gold-600 ring-4 ring-white/5 cursor-pointer"
                  >
                    <Play size={28} className="fill-current text-brand-950 translate-x-0.5" />
                  </button>
                  <p className="text-white text-xs mt-3.5 font-mono tracking-widest uppercase text-shadow-md">
                    Click to Play Lesson {activeVideo.videoId}
                  </p>
                </div>
              )}

              {loading && (
                <div className="relative z-10 mx-auto my-auto flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
                  <p className="text-white/60 text-xs mt-3 font-mono">LOADING TEACHING MATERIAL...</p>
                </div>
              )}

              {/* Footer controls overlay */}
              <div className="relative z-10 w-full flex items-center justify-between text-xs text-white/80 bg-brand-950/70 p-2.5 rounded-lg border border-white/5 backdrop-blur-sm">
                <p className="truncate text-[11px] sm:text-xs">
                  <span className="text-gold-400 font-bold font-mono">Abhay Mukund Jagirdar Series: </span>
                   Lesson {activeVideo.videoId} of 3
                </p>
                
                <div className="text-[10px] font-mono text-slate-300 hidden sm:block">
                  NSE Market Education Compliance verified
                </div>
              </div>

            </div>

            {/* Video metadata overview */}
            <div className="text-left bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="font-display font-bold text-lg text-brand-950 flex items-center space-x-2">
                <span className="text-gold-500 font-mono">0{activeVideo.videoId}.</span>
                <span>{activeVideo.title}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">{activeVideo.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4 pt-4 border-t border-slate-200 text-left">
                {activeVideo.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="bg-white p-3 border border-slate-150 rounded-lg">
                    <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Lesson Focus {tIdx + 1}</p>
                    <p className="text-xs text-slate-700 leading-relaxed font-light mt-1 text-left">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Index & Call to Action (span 4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Playlist cards */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest pl-1 mb-3">
                CURATED LEARNING PATHWAY
              </p>
              
              <div className="space-y-2.5">
                {FREE_CLASS_VIDEOS.map((video) => {
                  const isActive = video.videoId === activeVideoId;
                  return (
                    <button
                      id={`btn-free-video-select-${video.videoId}`}
                      key={video.videoId}
                      onClick={() => handleLessonSelect(video.videoId)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center space-x-3.5 group cursor-pointer ${
                        isActive 
                          ? 'bg-brand-900 border-brand-900 text-white shadow-md' 
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      {/* Play or play symbol icon */}
                      <span className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        isActive ? 'bg-gold-500 text-brand-950' : 'bg-slate-100 group-hover:bg-slate-200 text-slate-500'
                      }`}>
                        {isActive ? <Play size={12} className="fill-current text-brand-950 translate-x-[1px]" /> : `L0${video.videoId}`}
                      </span>

                      <div className="flex-1 min-w-0">
                        <p className={`text-[11px] font-mono tracking-wide font-medium uppercase truncate ${isActive ? 'text-gold-400' : 'text-slate-400'}`}>
                          LESSON 0{video.videoId} • {video.duration}
                        </p>
                        <p className="text-[12px] font-sans font-bold leading-tight truncate">
                          {video.title.replace(/Lesson \d+: /, '')}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* HIGH-IMPACT CTAs (Path to paid courses!) */}
            <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 border border-gold-500/30 rounded-2xl p-5 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-gold-400/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="inline-flex items-center space-x-1 bg-gold-400/10 text-gold-400 rounded-md py-0.5 px-2 text-[9px] font-mono font-bold tracking-widest uppercase mb-4 self-start">
                  <Sparkles size={10} />
                  <span>PREMIUM COHORT UPGRADE</span>
                </div>

                <div className="text-white">
                  <h4 className="font-display font-bold text-lg leading-tight tracking-tight">
                    Ready to Scale past free modules?
                  </h4>
                  <p className="text-slate-300 text-xs font-light mt-1.5 leading-relaxed">
                    While these free lessons establish core structures, trading consistently requires live feedback, pre-market mapping updates, and options defensive math strategies.
                  </p>
                </div>

                {/* Clear path indicators */}
                <div className="mt-4 space-y-2 border-t border-b border-white/10 py-3 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Trophy size={13} className="text-gold-400" />
                    <span>Access Private Slack Trader Hub</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Headphones size={13} className="text-gold-400" />
                    <span>Pre-Market Analysis Daily Feeds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock size={13} className="text-gold-400" />
                    <span>Real-Time Case Study Critiques</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <button
                    onClick={() => onOpenEnrollModal()}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-brand-950 text-xs font-bold py-3 px-3 rounded-lg text-center shadow border-b border-gold-600 transition-all cursor-pointer"
                  >
                    Enroll in Full Masterclasses
                  </button>
                  <button
                    onClick={onNavigateToCourses}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold py-2.5 px-3 rounded-lg text-center transition-all cursor-pointer"
                  >
                    Compare Course Plans
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
