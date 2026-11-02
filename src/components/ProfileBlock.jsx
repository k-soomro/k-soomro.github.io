import { profile } from '../data/content';
import styles from './ProfileBlock.module.css';

export default function ProfileBlock() {
  return (
    <div className={styles.block}>
      <div className={styles.text}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
        <p className={styles.dept}>{profile.department} · {profile.university}</p>
      </div>
      <div className={styles.links}>
        <a href={profile.links.scholar}    className={styles.linkBtn} target="_blank" rel="noreferrer">Google Scholar</a>
        <a href={profile.links.orcid}      className={styles.linkBtn} target="_blank" rel="noreferrer">ORCID</a>
        <a href={profile.links.linkedin}   className={styles.linkBtn} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.links.uweProfile} className={styles.linkBtn} target="_blank" rel="noreferrer">UWE Profile</a>
      </div>
    </div>
  );
}
