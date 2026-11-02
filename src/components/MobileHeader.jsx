import { useCallback } from 'react';
import { profile } from '../data/content';
import styles from './MobileHeader.module.css';

export default function MobileHeader({ sections, menuOpen, onMenuToggle, onNavClick }) {
  const handleNavClick = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
    onNavClick();
  }, [onNavClick]);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.monogram}>{profile.initials}</div>
        <div className={styles.nameBlock}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.title}>{profile.title}</span>
        </div>
      </div>
      <button
        className={styles.hamburger}
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
      </button>
      {menuOpen && (
        <nav className={styles.menu}>
          {sections.map(({ id, label }) => (
            <button key={id} className={styles.menuItem} onClick={() => handleNavClick(id)}>
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
