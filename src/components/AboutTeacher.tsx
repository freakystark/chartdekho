// import { FACULTY_PROFILE } from '../data';
// import { Award, BookOpen, Quote, ShieldAlert, CheckCircle } from 'lucide-react';

// export default function AboutTeacher() {
//   const profile = FACULTY_PROFILE;

//   return (
//     <section id="about-teacher" className="py-20 bg-white border-y border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-[11px] font-mono tracking-widest text-brand-900 bg-brand-500/10 px-3 py-1 rounded-full uppercase font-bold">
//             MASTER INSTRUCTOR COHORT
//           </span>
//           <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 mt-3">
//             Learn From a Proven Practitioner
//           </h2>
//           <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
//             Trading is not about certificates or corporate slide decks; it is about real skin in the game. Meet your sole mentor.
//           </p>
//         </div>

//         {/* Bio Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* Teacher Image & Signature Quote Card */}
//           <div className="lg:col-span-5 flex flex-col items-center">
//             <div className="relative group w-full max-w-sm">
              
//               {/* Gold Graphic Frame Overlay */}
//               <div className="absolute -inset-2 bg-gradient-to-r from-gold-500 to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-45 transition duration-300"></div>
              
//               {/* Picture Frame */}
//               <div className="relative bg-brand-900 p-2 rounded-2xl shadow-xl overflow-hidden">
//                 <img 
//                   src={profile.avatarUrl} 
//                   alt={profile.name}
//                   referrerPolicy="no-referrer"
//                   className="w-full h-96 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-[1.02]"
//                 />
                
//                 {/* Solitary Badge */}
//                 <span className="absolute top-6 left-6 bg-brand-950/90 text-gold-400 text-[10px] font-mono tracking-widest font-bold px-3 py-1 rounded border border-gold-400/20 shadow-md">
//                   SOLE INSTRUCTOR
//                 </span>
//               </div>
//             </div>

//             {/* Quote Bubble */}
//             <div className="mt-8 bg-slate-50 border-l-4 border-gold-500 p-6 rounded-r-xl max-w-md shadow-sm relative text-left">
//               <Quote className="absolute top-2 right-4 text-slate-200" size={40} />
//               <p className="italic text-slate-700 text-sm leading-relaxed relative z-10 font-sans">
//                 &ldquo;{profile.tagline}&rdquo;
//               </p>
//               <p className="text-xs font-mono font-bold text-brand-950 mt-3 uppercase tracking-wider text-right">
//                 — {profile.name}
//               </p>
//             </div>

//           </div>

//           {/* Detailed Biography, Methodology & Certifications */}
//           <div className="lg:col-span-7 flex flex-col text-left space-y-8">
            
//             {/* Title & Core Experience */}
//             <div>
//               <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
//                 MEET YOUR MENTOR
//               </p>
//               <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-950 mt-1">
//                 {profile.name}
//               </h3>
//               <p className="text-gold-600 font-mono text-xs font-semibold mt-1">
//                 {profile.experience}
//               </p>
              
//               <p className="text-slate-600 mt-4 leading-relaxed font-light text-sm sm:text-base">
//                 {profile.biography}
//               </p>
//             </div>

//             {/* Key Pedagogical Lessons */}
//             <div className="bg-brand-950 text-white rounded-xl p-6 shadow-md border border-white/5">
//               <div className="flex items-center space-x-2 mb-4">
//                 <ShieldAlert className="text-gold-400" size={18} />
//                 <h4 className="font-display font-bold text-sm tracking-wide uppercase text-gold-400">
//                   Abhay&apos;s Core Protection Pillars
//                 </h4>
//               </div>
//               <ul className="space-y-3">
//                 {profile.keyLessons.map((lesson, idx) => (
//                   <li key={idx} className="flex items-start space-x-2">
//                     <span className="h-5 w-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] shrink-0 font-mono font-bold mt-0.5">
//                       {idx + 1}
//                     </span>
//                     <span className="text-xs sm:text-sm text-slate-200 text-left font-light leading-relaxed">
//                       {lesson}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Trading Methodologies */}
//             <div>
//               <h4 className="font-display font-bold text-sm tracking-wide uppercase text-brand-950 mb-4 flex items-center space-x-2">
//                 <BookOpen size={16} className="text-gold-500" />
//                 <span>Mentorship Methodology Set</span>
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {profile.methodology.map((meth, idx) => (
//                   <div key={idx} className="flex items-start space-x-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-100">
//                     <CheckCircle className="text-bullish shrink-0 mt-0.5" size={15} />
//                     <span className="text-xs text-slate-700 leading-relaxed font-normal">
//                       {meth}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Licensing & Verified Certs */}
//             <div>
//               <div className="border-t border-slate-100 pt-6">
//                 <h4 className="font-display font-bold text-xs tracking-wider uppercase text-slate-400 mb-3 flex items-center space-x-1.5">
//                   <Award size={14} className="text-gold-500" />
//                   <span>REGULATORY & TECHNICAL STANDARDS (NISM INDIA)</span>
//                 </h4>
//                 <div className="flex flex-wrap gap-2.5">
//                   {profile.certifications.map((cert, idx) => (
//                     <span 
//                       key={idx} 
//                       className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono rounded font-medium transition-colors cursor-default border border-slate-200"
//                     >
//                       ✓ {cert}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
import { FACULTY_PROFILE } from '../data';
import { Award, BookOpen, Quote, ShieldAlert, CheckCircle } from 'lucide-react';

export default function AboutTeacher() {
  const profile = FACULTY_PROFILE;

  return (
    <section id="about-teacher" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-brand-900 bg-brand-500/10 px-3 py-1 rounded-full uppercase font-bold">
            MASTER INSTRUCTOR COHORT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 mt-3">
            Learn From a Proven Practitioner
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base font-light">
            Trading is not about certificates or corporate slide decks; it is about real skin in the game. Meet your sole mentor.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Teacher Image & Signature Quote Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Gold Graphic Frame Overlay */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-500 to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-45 transition duration-300"></div>
              
              {/* Picture Frame */}
              <div className="relative bg-brand-900 p-2 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-96 object-cover rounded-xl transition-all duration-500 transform group-hover:scale-[1.02]"
                />
                
                {/* Solitary Badge */}
                <span className="absolute top-6 left-6 bg-brand-950/90 text-gold-400 text-[10px] font-mono tracking-widest font-bold px-3 py-1 rounded border border-gold-400/20 shadow-md">
                  SOLE INSTRUCTOR
                </span>
              </div>
            </div>

            {/* Quote Bubble */}
            <div className="mt-8 bg-slate-50 border-l-4 border-gold-500 p-6 rounded-r-xl max-w-md shadow-sm relative text-left">
              <Quote className="absolute top-2 right-4 text-slate-200" size={40} />
              <p className="italic text-slate-700 text-sm leading-relaxed relative z-10 font-sans">
                &ldquo;{profile.tagline}&rdquo;
              </p>
              <p className="text-xs font-mono font-bold text-brand-950 mt-3 uppercase tracking-wider text-right">
                — {profile.name}
              </p>
            </div>

          </div>

          {/* Detailed Biography, Methodology & Certifications */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-8">
            
            {/* Title & Core Experience */}
            <div>
              <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                MEET YOUR MENTOR
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-950 mt-1">
                {profile.name}
              </h3>
              <p className="text-gold-600 font-mono text-xs font-semibold mt-1">
                {profile.experience}
              </p>
              
              <p className="text-slate-600 mt-4 leading-relaxed font-light text-sm sm:text-base">
                {profile.biography}
              </p>
            </div>

            {/* Key Pedagogical Lessons */}
            <div className="bg-brand-950 text-white rounded-xl p-6 shadow-md border border-white/5">
              <div className="flex items-center space-x-2 mb-4">
                <ShieldAlert className="text-gold-400" size={18} />
                <h4 className="font-display font-bold text-sm tracking-wide uppercase text-gold-400">
                  Abhay&apos;s Core Protection Pillars
                </h4>
              </div>
              <ul className="space-y-3">
                {profile.keyLessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="h-5 w-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] shrink-0 font-mono font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 text-left font-light leading-relaxed">
                      {lesson}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trading Methodologies */}
            <div>
              <h4 className="font-display font-bold text-sm tracking-wide uppercase text-brand-950 mb-4 flex items-center space-x-2">
                <BookOpen size={16} className="text-gold-500" />
                <span>Mentorship Methodology Set</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.methodology.map((meth, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle className="text-bullish shrink-0 mt-0.5" size={15} />
                    <span className="text-xs text-slate-700 leading-relaxed font-normal">
                      {meth}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Licensing & Verified Certs */}
            <div>
              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-display font-bold text-xs tracking-wider uppercase text-slate-400 mb-3 flex items-center space-x-1.5">
                  <Award size={14} className="text-gold-500" />
                  <span>REGULATORY & TECHNICAL STANDARDS (NISM INDIA)</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {profile.certifications.map((cert, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-mono rounded font-medium transition-colors cursor-default border border-slate-200"
                    >
                      ✓ {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
