import { useCallback } from 'react';
import { profile, researchInterests } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './Sidebar.module.css';

const SECTION_IDS = [
  'about', 'research-interests', 'projects', 'publications',
  'teaching', 'leadership', 'news', 'contact',
];

export default function Sidebar({ sections }) {
  const activeSection = useActiveSection(SECTION_IDS);

  const handleNavClick = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 32;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <aside className={styles.sidebar}>
      {/* Monogram */}
      <div className={styles.monogramWrap}>
        <div className={styles.monogram}>{profile.initials}</div>
      </div>

      {/* Identity */}
      <div className={styles.identity}>
        <div className={styles.name}>{profile.name}</div>
        <div className={styles.title}>{profile.title}</div>
        <div className={styles.university}>{profile.university}</div>
        <p className={styles.excerpt}>{profile.bioExcerpt}</p>
        <div className={styles.credentialChips}>
          {profile.credentials.map((c) => (
            <span key={c} className={styles.chip}>{c}</span>
          ))}
        </div>
      </div>

      {/* Research areas */}
      <div className={styles.researchAreas}>
        <div className={styles.areaLabel}>Research Areas</div>
        <div className={styles.areaTags}>
          {researchInterests.slice(0, 5).map((r) => (
            <span key={r} className={styles.areaTag}>{r}</span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.navBtn} ${activeSection === id ? styles.navBtnActive : ''}`}
            onClick={() => handleNavClick(id)}
          >
            <span className={styles.dot} />
            {label}
          </button>
        ))}
      </nav>

      {/* External links */}
      <div className={styles.links}>
        <a href={profile.links.scholar} className={styles.linkPill} target="_blank" rel="noreferrer">
          Scholar
        </a>
        <a href={profile.links.orcid} className={styles.linkPill} target="_blank" rel="noreferrer">
          ORCID
        </a>
        <a href={profile.links.linkedin} className={styles.linkPill} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.links.uweProfile} className={styles.linkPill} target="_blank" rel="noreferrer">
          UWE
        </a>
      </div>
    </aside>
  );
}
