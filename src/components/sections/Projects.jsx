import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import { projects } from '../../data/content';
import styles from './Projects.module.css';

const FILTERS = ['All', 'Current', 'Past'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    return p.status === filter.toLowerCase();
  });

  return (
    <SectionWrapper id="projects" title="Research Projects">
      <div className={styles.filterBar}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.projectName}>{project.name}</span>
              {project.status === 'current' && (
                <span className={styles.badge}>Current</span>
              )}
            </div>
            <div className={styles.meta}>
              <span className={styles.funder}>{project.funder}</span>
              <span className={styles.separator}>·</span>
              <span className={styles.role}>{project.role}</span>
            </div>
            <p className={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
