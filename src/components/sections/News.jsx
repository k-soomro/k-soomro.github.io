import SectionWrapper from '../SectionWrapper';
import { news } from '../../data/content';
import styles from './News.module.css';

export default function News() {
  return (
    <SectionWrapper id="news" title="News">
      <div className={styles.list}>
        {news.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.title}>{item.title}</div>
            <p className={styles.body}>{item.body}</p>
            {item.link && (
              <a
                href={item.link}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.linkLabel || 'Read more'} ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
