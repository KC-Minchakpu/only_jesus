import styles from "./AboutKevinHero.module.css";

interface AboutKevinHeroProps {
  title?: string;
  subtitle?: string;
}

export default function AboutKevinHero({
  title = "Kevin Cross Minchakpu",
  subtitle = "About Us",
}: AboutKevinHeroProps) {
  return (
    <section className={styles.hero}>
         <div className={styles.gridOverlay}></div>
        <div className={styles.content}>
          <span className={styles.subtitle}>{subtitle}</span>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </section>
  );
}