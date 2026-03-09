import styles from "./MissionSection.module.css";

export default function MissionSection() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <p className={styles.label}>OUR MISSION</p>
        <h2 className={styles.text}>
          To help people find and follow Jesus.
          And to make the Bible accessible, engaging, and relevant to everyone.
        </h2>
      </div>

      <div className={styles.card}>
        <p className={styles.label}>OUR VISION</p>
        <h2 className={styles.text}>
          To be a Christian community where everyone experiences the hope, love, and
          life-changing power of Jesus Christ.
        </h2>
      </div>
    </section>
  );
}