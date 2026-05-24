import { useState, useEffect } from 'react';
import { StudentUser } from './types';

// Importing Custom-Crafted Modular Components
import MarketTicker from './components/MarketTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LiveMarketHub from './components/LiveMarketHub';
import AboutTeacher from './components/AboutTeacher';
import CoursesSection from './components/CoursesSection';
import FreeClassesSection from './components/FreeClassesSection';
import ZoomPortal from './components/ZoomPortal';
import Testimonials from './components/Testimonials';
import EnrollmentModal from './components/EnrollmentModal';
import Footer from './components/Footer';

import { Sparkles, ArrowUp, Send, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [student, setStudent] = useState<StudentUser | null>(null);
  
  // Modal controllers
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [preselectedCourseId, setPreselectedCourseId] = useState<string | undefined>(undefined);
  const [isLoginMode, setIsLoginMode] = useState(false);

  // Active navigation section
  const [activeSection, setActiveSection] = useState('home');

  // Load registered student profile on startup
  useEffect(() => {
    try {
      const cached = localStorage.getItem('chart_dekho_student');
      if (cached) {
        setStudent(JSON.parse(cached));
      }
    } catch (e) {
      console.warn("Storage item fetch failed", e);
    }
  }, []);

  const handleEnrollSuccess = (newStudent: StudentUser) => {
    setStudent(newStudent);
    try {
      localStorage.setItem('chart_dekho_student', JSON.stringify(newStudent));
    } catch (e) {
      console.warn("Saving profile failed", e);
    }
    // Keep modal open so they see successful checklist, or close later
  };

  const handleLogout = () => {
    setStudent(null);
    try {
      localStorage.removeItem('chart_dekho_student');
    } catch (e) {
      console.warn("Delete profile failed", e);
    }
  };

  const openEnrollModal = (courseId?: string) => {
    setPreselectedCourseId(courseId);
    setIsLoginMode(false);
    setEnrollModalOpen(true);
  };

  const openLoginModal = () => {
    setIsLoginMode(true);
    setEnrollModalOpen(true);
  };

  // Back to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreFreeClasses = () => {
    setActiveSection('free-lessons');
    const elem = document.getElementById('free-lessons');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigateToCourses = () => {
    setActiveSection('courses');
    const elem = document.getElementById('courses');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="chart-dekho-app-root" className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col justify-between selection:bg-brand-900 selection:text-white">
      
      {/* Top index ticker marquee */}
      <MarketTicker />

      {/* Main navigation header */}
      <Navbar 
        student={student}
        onLogout={handleLogout}
        onOpenEnrollModal={openEnrollModal}
        onOpenLoginModal={openLoginModal}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Primary educational layers sections layout blocks */}
      <main className="flex-grow">
        
        {/* Interactive Hero & Candle study board */}
        <section id="home">
          <HeroSection 
            onOpenEnrollModal={openEnrollModal}
            onExploreFreeClasses={handleExploreFreeClasses}
          />
        </section>

        {/* FII DII cash flows reporting hub */}
        <LiveMarketHub />

        {/* Mentorship profiles of Abhay Mukund */}
        <AboutTeacher />

        {/* Courses curriculum offerings & catalog selectors */}
        <CoursesSection 
          onOpenEnrollModal={openEnrollModal}
        />

        {/* Curated vertical first 3 classes video panels */}
        <FreeClassesSection 
          onOpenEnrollModal={openEnrollModal}
          onNavigateToCourses={handleNavigateToCourses}
        />

        {/* Zoom livestream classrooms schedule lists & emulator */}
        <ZoomPortal 
          student={student}
          onOpenLoginModal={openLoginModal}
          onOpenEnrollModal={() => openEnrollModal()}
        />

        {/* Student feedback and rating star lists */}
        <Testimonials />

      </main>

      {/* Popups & Drawer modals overlay */}
      <EnrollmentModal 
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        preselectedCourseId={preselectedCourseId}
        onEnrollSuccess={handleEnrollSuccess}
        isLoginMode={isLoginMode}
      />

      {/* Footer disclaimers compliance area */}
      <Footer 
        onNavigateToSection={setActiveSection}
        onOpenEnrollModal={() => openEnrollModal()}
      />

      {/* Small floating quick action button to scroll above */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-2.5 bg-brand-900 hover:bg-brand-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all border border-white/10 z-30 cursor-pointer group"
        title="Scroll to Top"
      >
        <ArrowUp size={18} className="transform group-hover:-translate-y-0.5 transition-transform" />
      </button>

    </div>
  );
}
