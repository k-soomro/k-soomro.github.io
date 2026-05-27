import SectionWrapper from '../SectionWrapper';
import { bio, profile } from '../../data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <SectionWrapper id="about" title="About" first>
      <p className={styles.bio}>{bio}</p>
      <div className={styles.chips}>
        {profile.credentials.map((c) => (
          <span key={c} className={styles.chip}>{c}</span>
        ))}
      </div>
    </SectionWrapper>
  );
}
