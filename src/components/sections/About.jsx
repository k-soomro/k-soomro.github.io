import SectionWrapper from '../SectionWrapper';
import { bio, profile } from '../../data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <SectionWrapper id="about" title="About">
      {bio.split('\n\n').map((para, i) => (
        <p key={i} className={styles.bio}>{para}</p>
      ))}
      <div className={styles.chips}>
        {profile.credentials.map((c) => (
          <span key={c} className={styles.chip}>{c}</span>
        ))}
      </div>
    </SectionWrapper>
  );
}
