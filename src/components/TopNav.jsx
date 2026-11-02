import { useState, useCallback } from 'react';
import { profile } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './TopNav.module.css';

const SECTION_IDS = [
  'about', 'research-interests', 'projects', 'publications',
  'teaching', 'leadership', 'news',
];

export default function TopNav({ sections }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const handleNavClick = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.title}>{profile.title} · {profile.university}</span>
        </div>

        {/* Desktop nav links */}
        <nav className={styles.links}>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.link} ${activeSection === id ? styles.linkActive : ''}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className={styles.mobileMenu}>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.mobileLink} ${activeSection === id ? styles.mobileLinkActive : ''}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
