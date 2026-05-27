import { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/sections/About';
import ResearchInterests from './components/sections/ResearchInterests';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Teaching from './components/sections/Teaching';
import LeadershipService from './components/sections/LeadershipService';
import News from './components/sections/News';
import Contact from './components/sections/Contact';
import MobileHeader from './components/MobileHeader';
import styles from './App.module.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'research-interests', label: 'Research Interests' },
  { id: 'projects', label: 'Research Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'leadership', label: 'Leadership & Service' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <MobileHeader
        sections={SECTIONS}
        menuOpen={mobileMenuOpen}
        onMenuToggle={() => setMobileMenuOpen((v) => !v)}
        onNavClick={() => setMobileMenuOpen(false)}
      />
      <Sidebar sections={SECTIONS} />
      <main className={styles.main}>
        <About />
        <ResearchInterests />
        <Projects />
        <Publications />
        <Teaching />
        <LeadershipService />
        <News />
        <Contact />
      </main>
    </div>
  );
}
