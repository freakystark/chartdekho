import { TESTIMONIALS } from '../data';
import { Star, MessageCircle, Quote, Medal } from 'lucide-react';

export default function Testimonials() {
  const reviews = TESTIMONIALS;

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-100 relative">
      
      {/* Visual background elements */}
      <div className="absolute left-[-100px] top-[30%] w-72 h-72 bg-gold-400/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-brand-900 bg-brand-500/10 px-3 py-1 rounded-full uppercase font-bold inline-flex items-center space-x-1.5">
            <MessageCircle size={12} />
            <span>STUDENT SUCCESS FEEDBACKS</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 mt-3">
            What Our Traders Are Achieving
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            We don&apos;t promise overnight luxury sports-cars; we train systematic risk management. Here is real feedback from our trade cohort.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div 
              id={`student-review-card-${rev.id}`}
              key={rev.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-left shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              
              <Quote className="absolute top-6 right-6 text-slate-100" size={54} />

              <div className="space-y-4">
                
                {/* Top Rating stars bar */}
                <div className="flex space-x-1">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-current text-gold-500" />
                  ))}
                </div>

                {/* Main Quote Content */}
                <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed relative z-10 italic">
                  &ldquo;{rev.feedback}&rdquo;
                </p>

                {/* Success highlight (Profit story highlights) */}
                {rev.profitStory && (
                  <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-start space-x-2.5">
                    <Medal size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wide">VERIFIED PORTFOLIO SHIFT</p>
                      <p className="text-xs text-slate-700 mt-0.5 font-sans font-medium">{rev.profitStory}</p>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom bio card */}
              <div className="flex items-center space-x-3.5 mt-6 pt-5 border-t border-slate-100">
                <div className="h-10 w-10 rounded-full bg-brand-900 text-white flex items-center justify-center font-display font-bold text-sm tracking-tight shadow-inner">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-950 text-sm sm:text-base">{rev.name}</h4>
                  <div className="flex flex-wrap items-center text-[10px] text-slate-400 font-mono gap-1.5 mt-0.5">
                    <span>{rev.role}</span>
                    <span>•</span>
                    <span className="text-brand-900 font-bold">{rev.courseName} Graduate</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
