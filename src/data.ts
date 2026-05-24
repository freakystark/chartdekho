import { Course, FacultyProfile, Testimonial, LiveClass, MarketTickerSymbol, FiiDiiData, FreeClassVideo } from './types';

export const FACULTY_PROFILE: FacultyProfile = {
  name: "Mr. Abhay Mukund Jagirdar",
  role: "Founder & Chief Mentor",
  tagline: "Price action is the absolute truth; indicators are merely downstream summaries.",
  experience: "12+ Years of Professional Trading & Mentorship",
  biography: "Mr. Abhay Mukund Jagirdar is an accomplished full-time algorithmic and price action trader with over a decade of deep market exposure. Having successfully completed his Master's in Financial Markets, Abhay worked as an Institutional Derivatives Analyst before dedicating his career to independent trading and grassroots financial education. Through Chart Dekho, his mission is to demystify complex charts, shield retail traders from deceptive market noise, and instill structural risk intelligence.",
  methodology: [
    "Pure Price Action Strategy sans delayed indicator noise.",
    "Order Flow Analysis and Volume Profile setups.",
    "Institutional Liquidity Pools and Trap Trading detection.",
    "Asymmetric Risk-to-Reward Ratio selection (minimum 1:3 targets)."
  ],
  keyLessons: [
    "Capital Preservation: Your trading account represents your business oxygen; guard it first.",
    "Emotional Detachment: Trade the charts in front of you, not the biased opinion in your head.",
    "Trend Identification: The trend is your primary ally until structural exhaustion is confirmed."
  ],
  certifications: [
    "NISM Series XV: Research Analyst Certified",
    "NISM Series VIII: Equity Derivatives Certified",
    "Certified Technical Analyst Practitioner"
  ],
  //avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  avatarUrl: "gs://thepianoproject-shantanuj.firebasestorage.app/chartdekho/Abhay-Jagirdar_portrait.jpeg"
};

export const COURSES: Course[] = [
  {
    id: "cd-basics",
    title: "Price Action Foundation Course",
    subtitle: "From Zero knowledge to structural understanding of market cycles and candlestick reading.",
    level: "Basics",
    description: "Designed strictly for beginners and struggling retail traders. Master the grammar of charts, interpret buyer-seller momentum, map clean support/resistance zones, and execute highly reliable entry setups.",
    objective: "Establish an unbreakable financial foundation to independently analyze any global candlestick chart accurately.",
    duration: "4 Weeks (16+ Hours of Intensive Training)",
    price: 4999,
    originalPrice: 9999,
    tags: ["Technical Analysis", "Candlesticks", "Support & Resistance", "Risk Basics"],
    features: [
      "Access to 12 Live Masterclass Sessions on Zoom",
      "Comprehensive PDF Workbook & Candlestick Cheat Sheets",
      "Private Student WhatsApp Group for Query Resolution",
      "Course Certificate upon Final Evaluation"
    ],
    modules: [
      {
        title: "Module 1: The Foundations of Markets",
        topics: ["Who makes the market move? Demand vs Supply", "Types of Market participants (Retailers vs FII/DII)", "Understanding Bid, Ask, Spreads, and Order Books"]
      },
      {
        title: "Module 2: Candlestick Anatomy & Psychology",
        topics: ["Body, Wicks, and what they reveal about psychological battles", "Primary single candlesticks (Marubozu, Pinbars, Dojis)", "Reliable multi-candle setups (Engulfing, Harami, Morning Stars)"]
      },
      {
        title: "Module 3: Structural Price Action Mechanics",
        topics: ["Market Phases: Accumulation, Markup, Distribution, Markdown", "Drawing precise Support & Resistance zones instead of thin lines", "Trendlines & Channel Breakouts: Confirming real vs fake moves"]
      },
      {
        title: "Module 4: Risk Mitigation & Trade Planning",
        topics: ["The Math of Survival: 2% Max Risk Rule", "Setting stop-loss orders based on structural invalidations", "Writing your very first Trade Journal"]
      }
    ]
  },
  {
    id: "cd-advanced",
    title: "Advanced Order Flow & Momentum Masterclass",
    subtitle: "Trade alongside institutions. Discover volume profiles, liquidity hunts and advanced setups.",
    level: "Advanced",
    description: "Take the quantum leap from standard Retail Technical Analysis to Institutional Market Analysis. Learn to spot institutional traps, understand order flows, trade high-volume breakouts, and ride large index movements.",
    objective: "Trade with supreme confidence using professional tools and asymmetrical trade structures.",
    duration: "6 Weeks (24+ Hours of Applied Trading)",
    price: 11999,
    originalPrice: 24999,
    tags: ["Order Flow", "Volume Profile", "Breakout Science", "Institutional Traps"],
    features: [
      "Live Zoom Trading Room Simulator & Backtesting",
      "Full Volume Profile & Market Profile Add-ons for TradingView",
      "Bi-Weekly Live Portfolio Reviews with Mr. Abhay Mukund",
      "Lifetime Community Membership of Chart Dekho Elite Circle"
    ],
    modules: [
      {
        title: "Module 1: Advanced Price Action Structures",
        topics: ["Change of Character (CHoCH) vs Break of Structure (BoS)", "Identifying Order Blocks and Fair Value Gaps (FVG)", "Multi-Timeframe sync setup (Daily to 5-Minute Execution)"]
      },
      {
        title: "Module 2: Mastering Volume & Market Profiles",
        topics: ["Point of Control (POC), Value Area High/Low (VAH/VAL)", "Using Volume Profile to distinguish high-probability breakout trades", "Single prints and auction dynamics"]
      },
      {
        title: "Module 3: Institutional Traps & Liquidity Concepts",
        topics: ["Stop-loss hunting mechanics: How retailers are trapped", "Executing high-probability entries at liquidation pools", "The Wyckoff Schematics: Accumulation/Distribution deep dive"]
      },
      {
        title: "Module 4: Execution Excellence & Trading Psychology",
        topics: ["Re-entry signals, trailing stop-losses for massive risk-reward setups", "Emotional stress defense metrics: Overcoming fear of losing capital", "Advanced spreadsheet layouts for systemic testing"]
      }
    ]
  },
  {
    id: "cd-options-sell",
    title: "Elite Option Writing & Risk Management System",
    subtitle: "Harness time decay. Design income-generation strategies with mathematically capped risks.",
    level: "Masterclass",
    description: "Option buying is a game of speed; option selling is a disciplined business of probabilities. Master advanced option Greeks, build non-directional strategies, adjust losing trades dynamically, and ensure monthly portfolio consistency.",
    objective: "Operate as a market buffer, underwriting risk under the guidance of Mr. Abhay Mukund.",
    duration: "8 Weeks (32+ Hours of Structural Options Strategy)",
    price: 18999,
    originalPrice: 39999,
    tags: ["Options Selling", "Option Greeks", "Spread Adjustments", "Consistent Income"],
    features: [
      "3 Months of Daily Live Pre-Market Zoom Analysis with Mr. Abhay",
      "Proprietary Google Sheets Adjustment Calculator",
      "Direct 1-on-1 Mentorship and Strategy Audits",
      "Verified Option Trade Logging & Mentorship Review"
    ],
    modules: [
      {
        title: "Module 1: The Mathematics of Options Pricing",
        topics: ["Understanding Implied Volatility (IV) and IV Rank", "The Real Power of Theta (Time Decay) & Delta (Directional Risk)", "Vega and Gamma: Managing volatility spikes safely"]
      },
      {
        title: "Module 2: Advanced Directional & Non-Directional Spreads",
        topics: ["Bull Put and Bear Call Spreads setup", "Iron Condors and Iron Flies: High-probability sideways trading", "Calendar and Diagonal spreads for earnings season"]
      },
      {
        title: "Module 3: Dynamic Trade Adjustments (The Healing Art)",
        topics: ["How to save a broken option spread: Roll up, down, or out?", "Using futures to hedge critical options exposure", "Delta balancing during intense trend days"]
      },
      {
        title: "Module 4: Capital allocation and Business Scaling",
        topics: ["Leveraging margins correctly via pledge mechanisms", "Risk budgeting: Drawdown controls and portfolio protection", "Designing a sustainable monthly yield trading plan"]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Deshmukh",
    role: "IT Consultant",
    courseName: "Price Action Foundation Course",
    feedback: "Before joining Chart Dekho, I was treating stock trading like an online casino. Abhay Sir changed my entire worldview. His structural approach to candlesticks taught me to wait for high-probability zones. I finally understand when NOT to take a trade.",
    profitStory: "Turned my trading account from negative to consistently booked 15-20% monthly returns.",
    rating: 5,
    avatarSeed: "Rohan"
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Chartered Accountant & Homemaker",
    courseName: "Elite Option Writing Strategy",
    feedback: "The options adjustments module is pure gold. While other books teach theoretical payoff charts, Abhay Mukund teaches genuine live-market healing strategies. Being a CA, I appreciate the hard mathematical probability backing his strategies.",
    profitStory: "Safely generating a consistent ₹25k to ₹35k absolute monthly return in hedging options.",
    rating: 5,
    avatarSeed: "Priya"
  },
  {
    id: 3,
    name: "Amit Kumar Verma",
    role: "Full-Time Trader",
    courseName: "Advanced Order Flow & Momentum",
    feedback: "Chart Dekho's treatment of institutional traps is eye-opening. For years, I got stopped out exactly where the stock reversed. Now, I enter trades precisely where retail players are forced to exit. Amazing Price Action insights!",
    profitStory: "My strike rate jumped from 41% to 65% with high-conviction institutional block entries.",
    rating: 5,
    avatarSeed: "Amit"
  },
  {
    id: 4,
    name: "Dr. Sandeep Kulkarni",
    role: "Pediatrician",
    courseName: "Price Action Foundation Course",
    feedback: "With my chaotic hospital schedule, I could never do intra-day watch. Abhay Sir set up an elegant Daily Candle Swing framework that takes only 15 minutes in the evening. Extremely practical trading school!",
    profitStory: "Successfully capturing longer-term high-reward swing trends with minimal screen times.",
    rating: 5,
    avatarSeed: "Sandeep"
  }
];

export const FREE_CLASS_VIDEOS: FreeClassVideo[] = [
  {
    id: "free-class-1",
    videoId: 1,
    title: "Lesson 1: The Psychology Behind Candlesticks",
    description: "Learn how to read any stock chart. Understand what body shapes, shadows, and ranges tell you about who dominates - the buyers or the sellers. This starts your foundational price action journey.",
    duration: "42 Mins",
    takeaways: [
      "The exact anatomy of a single Japanese candlestick",
      "How to read institutional pressure from long lower/upper shadows",
      "Why standard candlestick patterns often fail retail investors"
    ],
    videoThumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
    mockVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // simulated video context
  },
  {
    id: "free-class-2",
    videoId: 2,
    title: "Lesson 2: Support, Resistance & The Accumulation Trap",
    description: "Move past single thin support and supply lines. Abhay Sir maps out 'Actionable Supply and Demand Zones' and reveals how institutional players generate fake breakout traps to feed on retail liquidity.",
    duration: "48 Mins",
    takeaways: [
      "Why traditional horizontal lines fail in real-time volatility",
      "Steps to map high-liquidity order zones on various periods",
      "Determining a false breakout (Liquidity Sweep) before it triggers"
    ],
    videoThumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
    mockVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "free-class-3",
    videoId: 3,
    title: "Lesson 3: The 2% Capital Protection Blueprint",
    description: "Your survival is more critical than statistical wins. Learn Abhay's strict risk-management formula used to shield your trading account, calculate position-sizing precisely, and manage emotions during drawdowns.",
    duration: "55 Mins",
    takeaways: [
      "The mathematical trap of drawdowns: recovers are asymmetric",
      "Position-sizing calculations using ATR (Average True Range)",
      "Maintaining an ironclad Trade Journal and defense-first mentality"
    ],
    videoThumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    mockVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const RECENT_LIVE_ZOOM_CLASSES: LiveClass[] = [
  {
    id: "live-zoom-1",
    title: "Nifty Pre-Market & Structural Levels Setup",
    topic: "Pre-market opening ticks, gap strategies, defining major day pivoting zones on Bank Nifty.",
    date: "2026-05-22", // tomorrow relative to metadata 2026-05-21
    time: "08:45 AM - 09:30 AM IST",
    duration: "45 Mins",
    platform: "Zoom",
    isFree: false,
    status: "Upcoming",
    joinUrl: "https://zoom.us/"
  },
  {
    id: "live-zoom-2",
    title: "Live Price Action Execution Room",
    topic: "Observing real-time institutional sweeps and execution tracking on active options contracts.",
    date: "2026-05-22",
    time: "10:30 AM - 12:00 PM IST",
    duration: "90 Mins",
    platform: "Zoom",
    isFree: false,
    status: "Upcoming",
    joinUrl: "https://zoom.us/"
  },
  {
    id: "live-zoom-free",
    title: "Beginner Q&A Session - Chart Dekho Live",
    topic: "Ask Mr. Abhay Mukund anything about Candlestick charts, basic concepts and course enrollment.",
    date: "2026-05-23",
    time: "11:00 AM - 12:00 PM IST",
    duration: "60 Mins",
    platform: "Zoom",
    isFree: true,
    status: "Upcoming",
    joinUrl: "https://zoom.us/j/free-class-demo"
  }
];

export const MARKET_TICKER_SYMBOLS: MarketTickerSymbol[] = [
  { symbol: "NIFTY_50", name: "NIFTY 50", price: "22,412.60", change: "+138.45", changePercent: "+0.62%", isPositive: true },
  { symbol: "NIFTY_BANK", name: "NIFTY BANK", price: "48,223.95", change: "+482.20", changePercent: "+1.01%", isPositive: true },
  { symbol: "SENSEX", name: "SENSEX", price: "73,895.50", change: "+412.10", changePercent: "+0.56%", isPositive: true },
  { symbol: "NIFTY_NEXT_50", name: "NIFTY NEXT 50", price: "61,845.20", change: "-124.30", changePercent: "-0.20%", isPositive: false },
  { symbol: "NIFTY_MIDCAP", name: "NIFTY MIDCAP 100", price: "50,119.80", change: "+244.15", changePercent: "+0.49%", isPositive: true },
  { symbol: "NIFTY_IT", name: "NIFTY IT", price: "34,228.40", change: "-310.60", changePercent: "-0.90%", isPositive: false },
  { symbol: "INDIA_VIX", name: "INDIA VIX", price: "14.12", change: "+0.42", changePercent: "+3.07%", isPositive: false } // VIX high is bearish, we mark positive or handle custom
];

export const RECENT_FII_DII_HISTORICAL: FiiDiiData[] = [
  {
    date: "May 21, 2026 (Today)",
    fiiNet: -1345.80,
    diiNet: 2410.50,
    fiiBuy: 10452.10,
    fiiSell: 11797.90,
    diiBuy: 9845.20,
    diiSell: 7434.70,
    marketSentiment: "Neutral",
    commentary: "FIIs remain passive sellers in index heavyweights ahead of weekend expirations. However, massive DII absorption at key support zones limited major downside, driving Nifty to positive closure. Spot trend shows high consolidation."
  },
  {
    date: "May 20, 2026",
    fiiNet: -412.45,
    diiNet: 1845.60,
    fiiBuy: 11456.30,
    fiiSell: 11868.75,
    diiBuy: 9540.20,
    diiSell: 7694.60,
    marketSentiment: "Bullish",
    commentary: "Strong domestic mutual fund flows (DIIs) push indices higher, completely overshadowing FII net sell figures. IT Sector saw recovery bottom buying, whereas FMCG experienced light profit booking."
  },
  {
    date: "May 19, 2026",
    fiiNet: 142.10,
    diiNet: 948.30,
    fiiBuy: 12015.40,
    fiiSell: 11873.30,
    diiBuy: 8945.70,
    diiSell: 7997.40,
    marketSentiment: "Bullish",
    commentary: "A positive net dynamic from both institutional sectors. FIIs turned net buyers for the first time in five trading sessions, triggerings an automated short covering breakout above major daily pivot regions."
  }
];

export const SIMULATED_CANDLE_DATA = [
  { date: '10:00 AM', open: 22350, high: 22380, low: 22340, close: 22375, volume: 14.5 },
  { date: '10:15 AM', open: 22375, high: 22395, low: 22360, close: 22390, volume: 18.2 },
  { date: '10:30 AM', open: 22390, high: 22395, low: 22320, close: 22330, volume: 32.7 }, // red bearish sweep
  { date: '10:45 AM', open: 22330, high: 22350, low: 22310, close: 22345, volume: 24.1 },
  { date: '11:00 AM', open: 22345, high: 22410, low: 22340, close: 22405, volume: 28.6 }, // large bullish candle
  { date: '11:15 AM', open: 22405, high: 22425, low: 22390, close: 22415, volume: 19.8 },
  { date: '11:30 AM', open: 22415, high: 22440, low: 22410, close: 22430, volume: 15.3 },
  { date: '11:45 AM', open: 22430, high: 22435, low: 22395, close: 22412, volume: 21.0 }
];
