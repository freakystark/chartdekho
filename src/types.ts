/**
 * Course structure for Chart Dekho Trading Institute
 */
export interface Course {
  id: string;
  title: string;
  subtitle: string;
  level: 'Basics' | 'Advanced' | 'Masterclass';
  description: string;
  objective: string;
  duration: string;
  modules: { title: string; topics: string[] }[];
  price: number;
  originalPrice: number;
  tags: string[];
  features: string[];
}

/**
 * Faculty/Teacher profile
 */
export interface FacultyProfile {
  name: string;
  role: string;
  tagline: string;
  experience: string;
  biography: string;
  methodology: string[];
  keyLessons: string[];
  certifications: string[];
  avatarUrl: string;
}

/**
 * Testimonial from student
 */
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  courseName: string;
  feedback: string;
  profitStory?: string;
  rating: number;
  avatarSeed: string; // for consistent styling
}

/**
 * Scheduled Upcoming or Live Sessions
 */
export interface LiveClass {
  id: string;
  title: string;
  topic: string;
  date: string;
  time: string;
  duration: string;
  platform: 'Zoom' | 'YouTube Live' | 'Inistitute Webcast';
  isFree: boolean;
  status: 'Upcoming' | 'Live' | 'Ended';
  joinUrl?: string;
}

/**
 * Market Ticker Data structure (NIFTYs, Sensex, etc.)
 */
export interface MarketTickerSymbol {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  flash?: 'up' | 'down' | null;
}

/**
 * Institutional Trading Flows (FII & DII data in INR Crores)
 */
export interface FiiDiiData {
  date: string;
  fiiNet: number; // in Crores (positive/negative)
  diiNet: number; 
  fiiBuy: number;
  fiiSell: number;
  diiBuy: number;
  diiSell: number;
  marketSentiment: 'Bullish' | 'Bearish' | 'Neutral' | 'Volatile';
  commentary: string;
}

/**
 * Video object for free educational videos
 */
export interface FreeClassVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoId: number;
  takeaways: string[];
  videoThumbnail: string;
  mockVideoUrl: string; // Embed or simulation trigger
}

/**
 * User Profile for logged-in/registered state (simulating real features)
 */
export interface StudentUser {
  name: string;
  email: string;
  phone: string;
  registeredAt: string;
  enrolledCourseIds: string[];
}
