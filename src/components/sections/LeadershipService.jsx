import SectionWrapper from '../SectionWrapper';
import { leadership } from '../../data/content';
import styles from './LeadershipService.module.css';

export default function LeadershipService() {
  return (
    <SectionWrapper id="leadership" title="Leadership & Service">
      <div className={styles.list}>
        {leadership.map((item) => (
          <div key={item.id} className={styles.entry}>
            <span className={styles.dot} />
            <div className={styles.content}>
              <div className={styles.top}>
                <span className={styles.role}>{item.role}</span>
                <span className={styles.separator}> — </span>
                <span className={styles.org}>{item.org}</span>
                {item.upcoming && (
                  <span className={styles.upcomingBadge}>Upcoming</span>
                )}
              </div>
              <div className={styles.detail}>{item.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
