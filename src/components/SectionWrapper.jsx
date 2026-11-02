import { useEffect, useRef } from 'react';
import styles from './SectionWrapper.module.css';

export default function SectionWrapper({ id, title, children, first = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
      return;
    }

    el.classList.add('reveal-hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('reveal-hidden');
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.07 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${first ? styles.first : ''}`}
    >
      <div className={styles.heading}>
        <span className={styles.line} />
        <span className={styles.headingText}>{title}</span>
      </div>
      {children}
    </section>
  );
}
