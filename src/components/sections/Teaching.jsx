import SectionWrapper from "../SectionWrapper";
import { teaching } from "../../data/content";
import styles from "./Teaching.module.css";

export default function Teaching() {
  return (
    <SectionWrapper id="teaching" title="Teaching">
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.current}`}>
          <div className={styles.cardLabel}>Current Courses</div>
          <ul className={styles.courseList}>
            {teaching.current.map((c) => (
              <li key={c.name} className={styles.courseItem}>
                <span className={styles.courseName}>{c.name}</span>
                <span className={styles.courseLevel}>{c.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.card} ${styles.past}`}>
          <div className={styles.cardLabel}>Previously Taught</div>
          <ul className={styles.courseList}>
            {teaching.past.map((c) => (
              <li key={c} className={styles.pastItem}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.notes}>
        <p className={styles.note}>{teaching.supervisions}</p>
      </div>
    </SectionWrapper>
  );
}
