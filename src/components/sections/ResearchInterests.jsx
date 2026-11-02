import { useEffect, useRef } from 'react';
import SectionWrapper from '../SectionWrapper';
import { researchInterests } from '../../data/content';
import styles from './ResearchInterests.module.css';

export default function ResearchInterests() {
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('[data-tag]');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(items).forEach((item, i) => {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, i * 55);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    // Check if already visible
    const rect = listRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      Array.from(items).forEach((item, i) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, i * 55);
      });
    } else {
      Array.from(items).forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(12px)';
        item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      });
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="research-interests" title="Research Interests">
      <div className={styles.grid} ref={listRef}>
        {researchInterests.map((interest) => (
          <span key={interest} data-tag className={styles.tag}>
            {interest}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
