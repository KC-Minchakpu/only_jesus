import styles from "./CoreValuesSection.module.css";

const values = [
  {
    number: "1",
    title: "Everyone Belongs",
    description:
      "No matter your background, you have a place here. We're all on this journey together.",
  },
  {
    number: "2",
    title: "Authenticity Matters",
    description:
      "We don't pretend to have it all together. We create space for real questions and honest conversations.",
  },
  {
    number: "3",
    title: "Love in Action",
    description:
      "Faith isn't just about what we believe—it's about how we live. We serve our neighbors and city.",
  },
  {
    number: "4",
    title: "Growth is a Process",
    description:
      "We're patient with each other. Spiritual growth takes time, and every step forward matters.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>WHAT WE VALUE</p>
        <h2 className={styles.title}>Our Core Values</h2>
      </div>

      <div className={styles.grid}>
        {values.map((value) => (
          <div key={value.number} className={styles.card}>
            <div className={styles.badge}>{value.number}</div>

            <h3 className={styles.cardTitle}>{value.title}</h3>

            <p className={styles.description}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}