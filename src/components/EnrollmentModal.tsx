import { useState, useEffect, FormEvent } from 'react';
import { Course, StudentUser } from '../types';
import { COURSES } from '../data';
import { X, Check, ShieldCheck, GraduationCap, Video, Users, HelpCircle } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
  onEnrollSuccess: (student: StudentUser) => void;
  isLoginMode?: boolean;
}

export default function EnrollmentModal({
  isOpen,
  onClose,
  preselectedCourseId,
  onEnrollSuccess,
  isLoginMode = false
}: EnrollmentModalProps) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(preselectedCourseId || 'cd-basics');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [localIsLoginMode, setLocalIsLoginMode] = useState(isLoginMode);

  // Sync mode state of parent trigger
  useEffect(() => {
    setLocalIsLoginMode(isLoginMode);
    setError('');
  }, [isLoginMode, isOpen]);

  // Sync chosen course if preselected changes
  useEffect(() => {
    if (preselectedCourseId) {
      setSelectedCourseId(preselectedCourseId);
    }
  }, [preselectedCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Field audits
    if (localIsLoginMode) {
      if (!email.trim() || !name.trim()) {
        setError('Please enter both your Student Name and Registered Email to proceed.');
        return;
      }
    } else {
      if (!name.trim() || !email.trim() || !phone.trim()) {
        setError('All fields are mandatory to establish secure student registrations.');
        return;
      }
      if (phone.length < 10) {
        setError('Please provide a valid 10-digit Indian mobile number for trade alert SMS setup.');
        return;
      }
    }

    setIsSubmitting(true);
    
    // Simulate API registration network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      const newStudent: StudentUser = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        registeredAt: new Date().toISOString(),
        enrolledCourseIds: [selectedCourseId]
      };
      
      onEnrollSuccess(newStudent);
    }, 1200);
  };

  return (
    <div id="enrollment-portal-backdrop" className="fixed inset-0 bg-brand-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in text-left select-none">
      
      {/* Outer Card container */}
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative max-h-[90vh]">
        
        {/* Header decoration */}
        <div className="bg-brand-950 text-white p-6 relative">
          <div className="absolute right-0 top-0 w-32 h-32 bg-gold-400/5 rounded-full blur-xl pointer-events-none"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight flex items-center space-x-2">
            <GraduationCap size={24} className="text-gold-500" />
            <span>
              {success 
                ? "Setup Complete!" 
                : localIsLoginMode 
                  ? "Access Student Portal" 
                  : "Establish Student Enrollment"
              }
            </span>
          </h3>
          <p className="text-slate-300 text-xs mt-1 leading-normal font-light">
            {success 
              ? "Your Chart Dekho parameters have been generated successfully." 
              : localIsLoginMode 
                ? "Enter your credentials to unlock daily class timetables and webinar feeds." 
                : "Fill out the secure registration profile below to generate direct learning keys."
            }
          </p>
        </div>

        {/* Success screen card */}
        {success ? (
          <div className="p-8 text-center space-y-6">
            <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 ring-4 ring-emerald-50 shadow-md">
              <Check size={32} />
            </div>

            <div className="space-y-2">
              <h4 className="font-display font-bold text-xl text-brand-950">Welcome to Chart Dekho, {name}!</h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                Your student profile has been created successfully. All upcoming live <strong className="text-brand-900">Zoom classes</strong>, pre-market update notifications, and study materials are now unlocked.
              </p>
            </div>

            {/* Inclusions unlocked */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-mono text-slate-600 space-y-2.5 max-w-sm mx-auto text-left">
              <p className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-bullish"></span>
                <span>Direct Live Webcast channels activated</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-bullish"></span>
                <span>Zoom Web Classroom Simulator enabled</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-bullish"></span>
                <span>Complimentary PDF trading workbook loaded</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full max-w-sm py-3 bg-brand-900 hover:bg-brand-800 text-white font-sans font-bold text-sm rounded-xl shadow-lg border-b-2 border-gold-600 transition-colors cursor-pointer block mx-auto text-center"
            >
              Access Student Zoom Timetable Now
            </button>
            
          </div>
        ) : (
          // Active entry form
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
            
            {error && (
              <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-xs text-bearish font-medium">
                ⚠ {error}
              </div>
            )}

            {/* Form Fields container */}
            <div className="space-y-3">
              
              <div>
                <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Full Student Name
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Mukund Deshpande" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-900 focus:bg-white transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-900 focus:bg-white transition-colors"
                  required
                />
              </div>

              {/* Only show Phone and Course selection for SIGN UP / ENROLL mode */}
              {!localIsLoginMode && (
                <>
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Indian Mobile Number (For trade alerts SMS)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-sm font-mono text-slate-400 font-bold">+91</span>
                      <input 
                        type="tel" 
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="9876543210" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-900 focus:bg-white transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Primary Course Track Preference
                    </label>
                    <select
                      value={selectedCourseId}
                      onChange={(e) => setSelectedCourseId(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-900 focus:bg-white transition-colors cursor-pointer"
                    >
                      {COURSES.map(course => (
                        <option key={course.id} value={course.id}>
                          {course.title} ({course.level})
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

            </div>

            {/* SEBI education warning statement */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-[10px] text-slate-400 leading-normal flex items-start space-x-2">
              <ShieldCheck className="text-slate-400 shrink-0 mt-0.5" size={14} />
              <span>We do not offer guaranteed profits, tip advisory, or account management services. Registration establishes educational cohort entries only.</span>
            </div>

            {/* Submit loader button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-brand-900 hover:bg-brand-800 text-white font-sans font-bold text-sm tracking-wide rounded-xl shadow-md border-b-2 border-gold-600 transition-colors cursor-pointer flex items-center justify-center space-x-2 justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  <span>Generating Student IDs...</span>
                </>
              ) : (
                <span>
                  {localIsLoginMode 
                    ? "Log Into My Classroom" 
                    : "Confirm Registration & Enrollment"
                  }
                </span>
              )}
            </button>

            {/* Mode swapper link */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  setLocalIsLoginMode(!localIsLoginMode);
                  setError('');
                }}
                className="text-xs font-semibold text-brand-900 hover:underline cursor-pointer"
              >
                {localIsLoginMode 
                  ? "Don't have a profile? Register free here" 
                  : "Already registered? Sign in here"
                }
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
