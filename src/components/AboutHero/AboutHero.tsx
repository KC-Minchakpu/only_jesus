import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <span className={styles.badge}>Our Story</span>

        <h1 className={styles.title}>
          Challenging the <br />
          Church to <span className={styles.highlight}> Live for Jesus!</span>
        </h1>

        <p className={styles.description}>
          &quot;Now is the judgment of this world; now the ruler of this world will be cast out. And I, if I am lifted up from the earth, will draw all peoples to Myself.&quot;
          <span>John 12: 32-33</span>
        </p>
      </div>
    </section>
  );
}