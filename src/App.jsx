import TopNav from './components/TopNav';
import ProfileBlock from './components/ProfileBlock';
import About from './components/sections/About';
import ResearchInterests from './components/sections/ResearchInterests';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Teaching from './components/sections/Teaching';
import LeadershipService from './components/sections/LeadershipService';
import News from './components/sections/News';
import styles from './App.module.css';

const SECTIONS = [
  { id: 'about',              label: 'About' },
  { id: 'research-interests', label: 'Research' },
  { id: 'projects',           label: 'Projects' },
  { id: 'publications',       label: 'Publications' },
  { id: 'teaching',           label: 'Teaching' },
  { id: 'leadership',         label: 'Leadership' },
  { id: 'news',               label: 'News' },
];

export default function App() {
  return (
    <>
      <TopNav sections={SECTIONS} />
      <div className={styles.page}>
        <main className={styles.main}>
          <ProfileBlock />
          <About />
          <ResearchInterests />
          <Projects />
          <Publications />
          <Teaching />
          <LeadershipService />
          <News />
        </main>
      </div>
    </>
  );
}
