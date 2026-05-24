import { useState } from 'react';
import { COURSES } from '../data';
import { Course } from '../types';
import { BookOpen, Check, HelpCircle, ChevronDown, ChevronUp, Sparkles, Clock, Globe } from 'lucide-react';

interface CoursesSectionProps {
  onOpenEnrollModal: (courseId: string) => void;
}

export default function CoursesSection({ onOpenEnrollModal }: CoursesSectionProps) {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>("cd-basics"); // default expand first

  const toggleCourseModules = (courseId: string) => {
    if (expandedCourseId === courseId) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(courseId);
    }
  };

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Helper colors based on level
  const getBadgeColors = (level: Course['level']) => {
    switch (level) {
      case 'Basics':
        return 'bg-emerald-500/10 text-emerald-700 border-emerald-400/20';
      case 'Advanced':
        return 'bg-brand-500/10 text-brand-700 border-brand-500/20';
      case 'Masterclass':
        return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="courses" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur and Grid */}
      <div className="absolute right-[-100px] top-[10%] w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-[-150px] bottom-[20%] w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-brand-900 bg-brand-500/10 px-3 py-1 rounded-full uppercase font-bold">
            EDUCATIONAL OFFERS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 mt-3">
            Structured Trading Curriculums
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            No disorganized YouTube clips. Mr. Abhay Mukund teaches systematic, step-by-step pathways designed specifically to survive and extract profits consistently.
          </p>
        </div>

        {/* Courses Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {COURSES.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            const savingsPercent = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

            return (
              <div 
                id={`course-card-${course.id}`}
                key={course.id}
                className={`bg-white rounded-2xl border transition-all duration-300 relative ${
                  course.id === 'cd-advanced' 
                    ? 'border-gold-500 ring-2 ring-gold-500/20 lg:scale-[1.03] shadow-xl' 
                    : 'border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg'
                }`}
              >
                
                {/* Popularity Banner Badge for main advanced course */}
                {course.id === 'cd-advanced' && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-500 text-brand-950 text-[10px] font-bold font-sans tracking-wider uppercase px-4 py-1 rounded-full shadow-md flex items-center space-x-1">
                    <Sparkles size={11} className="fill-current" />
                    <span>Most Enrolled</span>
                  </span>
                )}

                <div className="p-6 sm:p-8 text-left">
                  
                  {/* Category Level & Tags */}
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded border tracking-widest ${getBadgeColors(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-slate-400 font-mono text-[10px] flex items-center">
                      <Clock size={11} className="mr-1" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Title & Slogan */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-brand-950 block">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 pb-4 border-b border-slate-100 italic min-h-[44px]">
                    {course.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm mt-4 font-light leading-relaxed min-h-[96px]">
                    {course.description}
                  </p>

                  {/* Dynamic Pricing layout */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 font-sans tracking-wide uppercase font-semibold">Special Pricing (Inclusive of taxes)</p>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-xl sm:text-2xl font-mono font-bold text-brand-950">{formatRupees(course.price)}</span>
                        <span className="line-through text-xs font-mono text-slate-400">{formatRupees(course.originalPrice)}</span>
                      </div>
                    </div>
                    <span className="bg-bullish/10 text-bullish text-[10px] font-bold py-1 px-2 rounded-md font-mono">
                      Save {savingsPercent}%
                    </span>
                  </div>

                  {/* Key Highlights of Course */}
                  <div className="mt-6 space-y-2">
                    <p className="text-[10px] text-slate-500 font-sans uppercase font-bold tracking-wider">Cohort Inclusions:</p>
                    {course.features.map((feat, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Check size={14} className="text-bullish shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Syllabus / Module Accordion Trigger Toggle */}
                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleCourseModules(course.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-brand-900 bg-brand-500/5 hover:bg-brand-500/10 px-4 py-3 rounded-lg transition-colors group cursor-pointer"
                    >
                      <span className="flex items-center space-x-1.5 uppercase font-mono tracking-wider text-[10px]">
                        <BookOpen size={12} className="text-brand-800" />
                        <span>Interactive Syllabus Map</span>
                      </span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {/* Expandable Module Breakdown */}
                    {isExpanded && (
                      <div className="mt-3 space-y-3 pl-1 pr-1 max-h-[295px] overflow-y-auto pt-1 animate-fade-in divide-y divide-slate-100">
                        {course.modules.map((module, mIdx) => (
                          <div key={mIdx} className="pt-3 first:pt-0">
                            <p className="text-xs font-display font-medium text-brand-950 block">
                              {module.title}
                            </p>
                            <ul className="mt-1.5 space-y-1 pl-2.5">
                              {module.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="text-[11px] text-slate-600 list-disc list-inside">
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Enrollment Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => onOpenEnrollModal(course.id)}
                      className={`w-full py-3 px-4 font-sans font-bold text-sm tracking-wide rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 text-center cursor-pointer ${
                        course.id === 'cd-advanced'
                          ? 'bg-brand-900 border-b-2 border-gold-500 hover:bg-brand-850 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      Enroll in Course Online
                    </button>
                    <p className="text-center text-[10px] text-slate-400 font-mono mt-2 flex items-center justify-center space-x-1">
                      <Globe size={10} />
                      <span>Starts on Zoom in next 48 Hours</span>
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic FAQ prompt */}
        <div className="mt-12 bg-white/70 border border-slate-200 rounded-2xl p-6 text-left shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3.5">
            <HelpCircle size={24} className="text-gold-500 mt-1 shrink-0" />
            <div>
              <h4 className="font-display font-bold text-sm text-brand-950">Unsure which path matches your experience?</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Connect directly with Mr. Abhay on WhatsApp. Let him review your trade journals and recommend the path that saves your capital.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-sans py-2.5 px-4 rounded-lg flex items-center space-x-1.5 shadow-md"
          >
            <span>Ask Mentor on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
