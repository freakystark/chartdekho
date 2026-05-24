import { useState, FormEvent } from 'react';
import { StudentUser, LiveClass } from '../types';
import { RECENT_LIVE_ZOOM_CLASSES } from '../data';
import { Video, Calendar, ShieldAlert, Lock, Sparkles, CheckCircle2, Tv, RefreshCw, Send, Users } from 'lucide-react';

interface ZoomPortalProps {
  student: StudentUser | null;
  onOpenLoginModal: () => void;
  onOpenEnrollModal: () => void;
}

export default function ZoomPortal({ student, onOpenLoginModal, onOpenEnrollModal }: ZoomPortalProps) {
  const [liveClasses, setLiveClasses] = useState<LiveClass[]>(RECENT_LIVE_ZOOM_CLASSES);
  const [showSimulatedZoomRoom, setShowSimulatedZoomRoom] = useState<boolean>(false);
  const [activeSimulationClass, setActiveSimulationClass] = useState<LiveClass | null>(null);
  
  // Simulation states
  const [chatInput, setChatInput] = useState<string>('');
  const [simulatedChats, setSimulatedChats] = useState<Array<{ sender: string; message: string; isMentor?: boolean; role?: string }>>([
    { sender: "System Bot", message: "Chart Dekho Live Webcast established. Connection secure.", role: "system" },
    { sender: "Mr. Abhay Mukund Jagirdar (Mentor)", message: "Good morning traders, let's look at the Nifty 50 15-minute chart. Huge resistance buildup near 22,430.", isMentor: true },
    { sender: "Priya Nair", message: "Yes Sir, I see massive call writing at 22,500 Strike too." },
    { sender: "Rohan Deshmukh", message: "Is that a liquidity sweep near the morning low?" },
    { sender: "Mr. Abhay Mukund Jagirdar (Mentor)", message: "Spot on Rohan. That was a high-volume stop loss hunt. Never chase that green candle; wait for our 2% Rule pullback confirmation.", isMentor: true },
    { sender: "Amit Kumar Verma", message: "Thanks sir, almost got trapped there!" }
  ]);

  const handleJoinSimulation = (meeting: LiveClass) => {
    setActiveSimulationClass(meeting);
    setShowSimulatedZoomRoom(true);
  };

  const handleSendChat = (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setSimulatedChats(prev => [
      ...prev,
      { sender: student?.name || "You", message: chatInput }
    ]);
    const currentInput = chatInput.toLowerCase();
    setChatInput('');

    // Simulate Mr. Abhay responding after 1.5 seconds if they ask something
    setTimeout(() => {
      let automatedResponse = "Keep tracking the candlestick volume, discipline is your edge!";
      if (currentInput.includes("support") || currentInput.includes("resistance")) {
        automatedResponse = "Support is an order volume zone, not a simple pixel-thin line. Let the sellers exhaustion print first.";
      } else if (currentInput.includes("options") || currentInput.includes("sell")) {
        automatedResponse = "Option writing gives you high mathematical probabilities, but never write options naked. Always hedge.";
      } else if (currentInput.includes("risk") || currentInput.includes("lost")) {
        automatedResponse = "Limit your max risk per trade to 2%. Drawdowns are a natural storm, position containment is your umbrella.";
      }

      setSimulatedChats(prev => [
        ...prev,
        { 
          sender: "Mr. Abhay Mukund Jagirdar (Mentor)", 
          message: automatedResponse, 
          isMentor: true 
        }
      ]);
    }, 1500);
  };

  return (
    <section id="zoom-portal" className="py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-mono tracking-widest text-[#2D8CFF] bg-[#2D8CFF]/10 px-3 py-1 rounded-full uppercase font-bold inline-flex items-center space-x-1.5">
            <Video size={12} className="text-[#2D8CFF]" />
            <span>EXPERT ZOOM WEBCASTS</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 mt-3">
            Pre-Market & Live Trading Classrooms
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            We operate daily live trading and pre-market mapping classrooms on Zoom. Review schedules and join Mr. Abhay Mukund for real-time order flows.
          </p>
        </div>

        {/* Locked Overlay Framework Logic */}
        {!student ? (
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
            
            {/* Background vector */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#2D8CFF]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              
              <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mx-auto ring-4 ring-[#2D8CFF]/30">
                <Lock size={24} className="text-gold-400" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">Live Zoom Schedule is Reserved</h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  To protect meeting capacity, prevent spambots, and reserve stream slots, direct Zoom hyperlinks and pre-market timers are accessible exclusively to registered students.
                </p>
              </div>

              {/* Instant registration value hook */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-mono text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-gold-400 shrink-0 mt-0.5" />
                  <span>No fee registration for free live seats</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-gold-400 shrink-0 mt-0.5" />
                  <span>Interactive Live chat Q&As with Abhay Sir</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-gold-400 shrink-0 mt-0.5" />
                  <span>Weekly pre-market levels delivered on SMS</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 size={14} className="text-gold-400 shrink-0 mt-0.5" />
                  <span>Immediate access to Zoom Simulation Room</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={onOpenLoginModal}
                  className="w-full sm:w-auto px-6 py-3 bg-[#2D8CFF] hover:bg-[#2D8CFF]/90 text-white font-sans font-bold text-sm rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  Sign In to Student Account
                </button>
                
                <span className="text-xs text-slate-500 font-mono">OR</span>

                <button
                  onClick={onOpenEnrollModal}
                  className="w-full sm:w-auto px-6 py-3 bg-white text-brand-950 hover:bg-slate-50 font-sans font-bold text-sm rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
                >
                  Register Instantly Free
                </button>
              </div>

              <p className="text-[10px] text-slate-500 font-mono">
                ✓ Fully compliant with Zoom user guidelines. High security classrooms.
              </p>

            </div>

          </div>
        ) : (
          // UNLOCKED STATE for registered students
          <div className="space-y-12">
            
            {/* Simulation Header Warning */}
            <div className="max-w-5xl mx-auto bg-brand-950/5 border border-brand-900/10 rounded-2xl p-4 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start space-x-3">
                <Sparkles className="text-gold-500 mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs font-bold text-brand-950">Active Student Account Unlocked!</p>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Welcome <strong className="text-brand-900">{student.name}</strong>. You now have full direct link access, calendars, and our exclusive <strong className="text-[#2D8CFF]">Zoom Class Web Simulator</strong> to preview live lectures.
                  </p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-[9px] bg-emerald-100 text-emerald-800 py-1 px-2.5 rounded font-bold uppercase tracking-wider">
                ✓ VERIFIED STUDENT ACCESS
              </span>
            </div>

            {/* Simulated Live Zoom Room Drawer */}
            {showSimulatedZoomRoom && activeSimulationClass && (
              <div className="max-w-5xl mx-auto bg-[#141519] text-white rounded-3xl border border-slate-700 shadow-2xl overflow-hidden animate-fade-in text-left">
                
                {/* Simulated Zoom Toolbar */}
                <div className="bg-[#1c1d21] px-5 py-3 border-b border-slate-700/60 flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                    <span className="font-semibold text-slate-100 truncate max-w-[280px]">
                      Zoom Meeting: {activeSimulationClass.title} [COMPANION STREAM]
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-400">
                    <span className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-white font-medium">96 kbps (Audio-HQ)</span>
                    <button 
                      onClick={() => setShowSimulatedZoomRoom(false)}
                      className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold rounded-md transition-colors"
                    >
                      Leave Studio
                    </button>
                  </div>
                </div>

                {/* Simulated Monitor Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 h-[450px]">
                  
                  {/* Left Column: Slides / Video Share Workspace (span 8) */}
                  <div className="lg:col-span-8 bg-black relative flex flex-col justify-between p-4 overflow-hidden">
                    
                    {/* Simulated Candlestick projection on blackboard */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:12px_12px]"></div>

                    {/* Presenter name */}
                    <div className="absolute top-4 left-4 bg-black/80 border border-white/10 px-2 py-1 rounded text-[10px] font-mono flex items-center space-x-1.5 backdrop-blur z-10">
                      <span className="h-1.5 w-1.5 bg-gold-400 rounded-full animate-ping"></span>
                      <span>PRESENTING: MR. ABHAY MUKUND JAGIRDAR</span>
                    </div>

                    {/* Large chart projection */}
                    <div className="my-auto text-center space-y-4">
                      
                      {/* Interactive slide visual */}
                      <div className="max-w-md mx-auto p-4 bg-slate-900/95 border border-gold-500/30 rounded-xl space-y-3 shadow-2xl relative">
                        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                          <span>NIFTY 50 (15M ZONE MAPPING)</span>
                          <span className="text-gold-400 font-bold">LIVE SETUP STUDY</span>
                        </div>
                        
                        {/* Custom SVG slide drawing */}
                        <svg className="w-full h-32" viewBox="0 0 300 120">
                          {/* Candle series with support markup */}
                          <line x1="20" y1="90" x2="280" y2="90" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
                          <text x="25" y="105" fill="#ef4444" className="text-[8px] font-mono font-bold">LIQUIDATION POOL (RETAILER STOPS)</text>

                          {/* Candles in sequence */}
                          <g stroke="#10b981" strokeWidth="1.5">
                            <line x1="50" y1="20" x2="50" y2="70" />
                            <rect x="42" y="30" width="16" height="30" fill="#10b981" />
                          </g>
                          <g stroke="#10b981" strokeWidth="1.5">
                            <line x1="100" y1="30" x2="100" y2="80" />
                            <rect x="92" y="35" width="16" height="30" fill="#10b981" />
                          </g>
                          <g stroke="#ef4444" strokeWidth="1.5">
                            <line x1="150" y1="40" x2="150" y2="105" /> {/* Stop hunt drop */}
                            <rect x="142" y="60" width="16" height="35" fill="#ef4444" />
                          </g>
                          <g stroke="#10b981" strokeWidth="1.5">
                            <line x1="200" y1="10" x2="200" y2="90" /> {/* Huge sweep entry */}
                            <rect x="192" y="20" width="16" height="70" fill="#10b981" />
                          </g>
                        </svg>

                        <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-[10px] text-left leading-normal font-mono text-slate-300">
                          💡 <span className="font-semibold text-gold-400">Anchor Topic:</span> Bullish Liquidity Sweep. Notice how the large red wick hunts the stops below horizontal support before launching into institutional longs.
                        </div>
                      </div>

                    </div>

                    {/* Streaming disclaimer */}
                    <div className="text-[9px] text-slate-500 font-mono text-center">
                      ⚠ Simulator Stream Draft. Always refer to official Zoom links for primary HD interactions.
                    </div>

                  </div>

                  {/* Right Column: Interaction Live Chat logs (span 4) */}
                  <div className="lg:col-span-4 bg-[#1e2024] border-l border-slate-700/60 flex flex-col justify-between h-full">
                    
                    {/* Header chat log */}
                    <div className="p-3 border-b border-slate-700/40 bg-[#16171a] flex justify-between items-center text-xs text-slate-300">
                      <span className="font-bold flex items-center space-x-1">
                        <Users size={12} className="text-[#2D8CFF]" />
                        <span>Meeting Room Chat</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">6 Enrolled Active</span>
                    </div>

                    {/* Chat Messages scroll area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
                      {simulatedChats.map((chat, idx) => {
                        const isSystem = chat.role === 'system';
                        return (
                          <div key={idx} className="text-left">
                            {isSystem ? (
                              <p className="text-[10px] font-mono text-slate-500 bg-slate-950/40 p-1.5 rounded text-center">
                                {chat.message}
                              </p>
                            ) : (
                              <div>
                                <p className={`font-mono text-[10px] font-bold ${
                                  chat.isMentor ? 'text-gold-400' : 'text-[#2D8CFF]'
                                }`}>
                                  {chat.sender}
                                  {chat.isMentor && <span className="text-[8px] bg-gold-400/15 font-sans px-1.5 rounded ml-1 uppercase">Mentor</span>}
                                </p>
                                <p className="text-slate-200 mt-0.5 leading-relaxed font-light break-words">
                                  {chat.message}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Interactive Entry Input box */}
                    <form onSubmit={handleSendChat} className="p-3 border-t border-slate-700/40 bg-[#16171a] flex space-x-1.5">
                      <input 
                        type="text" 
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Ask Abhay sir a chart query..." 
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#2D8CFF] placeholder-slate-500"
                      />
                      <button 
                        type="submit" 
                        className="p-1.5 bg-[#2D8CFF] hover:bg-[#2D8CFF]/90 text-white rounded-lg transition-colors shrink-0"
                      >
                        <Send size={14} />
                      </button>
                    </form>

                  </div>

                </div>

              </div>
            )}

            {/* Timetable List Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {liveClasses.map((item) => (
                <div 
                  id={`zoom-timetable-card-${item.id}`}
                  key={item.id} 
                  className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    
                    {/* Card Category Header */}
                    <div className="flex justify-between items-center text-xs">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase tracking-wider ${
                        item.isFree 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-indigo-100 text-indigo-800'
                      }`}>
                        {item.isFree ? "Free Live Class" : "Paid Cohort Live"}
                      </span>
                      
                      <span className="text-slate-400 font-mono text-[10px] flex items-center">
                        <Calendar size={11} className="mr-0.5" />
                        {item.date}
                      </span>
                    </div>

                    {/* Title & description */}
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base tracking-tight truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal font-light min-h-[54px] text-justify">
                        {item.topic}
                      </p>
                    </div>

                    {/* Location detail */}
                    <div className="bg-slate-50 rounded-lg p-2.5 font-mono text-[11px] text-slate-600 space-y-1">
                      <p><span className="text-slate-400">⏰ TIME: </span>{item.time}</p>
                      <p><span className="text-slate-400">⏱ DURO: </span>{item.duration}</p>
                      <p><span className="text-slate-400">🔗 CODE: </span>ZOOM-WEB-ABHAY-M</p>
                    </div>

                  </div>

                  {/* Actions to join or copy */}
                  <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                    {/* Simulated launch Button */}
                    <button
                      onClick={() => handleJoinSimulation(item)}
                      className="w-full py-2 bg-[#2D8CFF] hover:bg-[#2D8CFF]/90 text-white font-semibold text-xs rounded-lg transition-colors text-center flex items-center justify-center space-x-1 cursor-pointer shadow-sm"
                    >
                      <Tv size={12} />
                      <span>Launch Zoom Web Simulator</span>
                    </button>
                    
                    {/* Real Direct copy address URL option */}
                    <a
                      href={item.joinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] rounded text-center block transition-colors border border-slate-200"
                    >
                      Open Direct Zoom App Link
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
