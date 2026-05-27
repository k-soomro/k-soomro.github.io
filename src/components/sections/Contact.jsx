import SectionWrapper from '../SectionWrapper';
import { profile } from '../../data/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <span className={styles.label}>Email</span>
          <a href={`mailto:${profile.email}`} className={styles.value}>
            {profile.email}
          </a>
        </div>
        <div className={styles.infoCard}>
          <span className={styles.label}>Office</span>
          <span className={styles.value}>{profile.office}</span>
        </div>
      </div>

      <div className={styles.linkRow}>
        <a
          href={profile.links.scholar}
          className={styles.linkBtn}
          target="_blank"
          rel="noreferrer"
        >
          Google Scholar
        </a>
        <a
          href={profile.links.orcid}
          className={styles.linkBtn}
          target="_blank"
          rel="noreferrer"
        >
          ORCID
        </a>
        <a
          href={profile.links.linkedin}
          className={styles.linkBtn}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={profile.links.uweProfile}
          className={styles.linkBtn}
          target="_blank"
          rel="noreferrer"
        >
          UWE Profile
        </a>
      </div>
    </SectionWrapper>
  );
}
