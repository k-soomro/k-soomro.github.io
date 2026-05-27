import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import { publications } from '../../data/content';
import styles from './Publications.module.css';

const FILTERS = ['All', 'Journal', 'Conference', 'Workshop'];

export default function Publications() {
  const [filter, setFilter] = useState('All');

  const filtered = publications.filter((p) => {
    if (filter === 'All') return true;
    return p.type === filter.toLowerCase();
  });

  return (
    <SectionWrapper id="publications" title="Selected Publications">
      <p className={styles.note}>
        <em>Placeholder entries — replace with actual publications.</em>
      </p>
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
      <div className={styles.list}>
        {filtered.map((pub) => (
          <div key={pub.id} className={styles.entry}>
            <div className={styles.yearBadge}>{pub.year}</div>
            <div className={styles.content}>
              <div className={styles.title}>{pub.title}</div>
              <div className={styles.authors}>{pub.authors}</div>
              <div className={styles.bottom}>
                <span className={styles.venue}>{pub.venue}</span>
                <span className={`${styles.typeTag} ${styles[pub.type]}`}>
                  {pub.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
