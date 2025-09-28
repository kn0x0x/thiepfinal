import React, { useState, useEffect } from 'react';
import './App.css';

// Import components
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import AnnouncementSection from './components/AnnouncementSection';
import InvitationSection from './components/InvitationSection';
import TimelineSection from './components/TimelineSection';
import FAQSection from './components/FAQSection';
import GiftSection from './components/GiftSection';
import ContactSection from './components/ContactSection';
import FlipbookSection from './components/FlipbookSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'announcement', 'timeline', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <HeroSection />
      
      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
      />
      
      <AnnouncementSection />
      
      <InvitationSection />
      
      <TimelineSection />
      
      <FAQSection />
      
      <GiftSection />
      
      <FlipbookSection />
      
      <ContactSection />
    </div>
  );
}

export default App;