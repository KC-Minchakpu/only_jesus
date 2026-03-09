import styles from "./BeliefsSection.module.css";

const beliefs = [
  {
    title: "The Bible",
    text: "We believe the Bible is the inspired Word of God as far as it is translated correctly, the ultimate authority for faith and life.",
    verse: "2 Timothy 3:16–17",
  },
  {
    title: "God",
    text: "We believe in one God, eternally existing as the Father of our Spirits.",
    verse: "Matthew 28:19",
  },
  {
    title: "Jesus Christ",
    text: "We believe Jesus is the Son of God, born of a virgin, lived a sinless life, died for our sins, and rose again.",
    verse: "John 3:16",
  },
  {
    title: "Salvation",
    text: "We believe salvation is a gift from God, received through faith in Jesus Christ alone. We also believe that Exaltation is the ultimate goal of salvation, where faithful followers of Christ can become like Him and dwell in His presence forever.",
    verse: "Ephesians 2:8–9",
  },
  {
    title: "The Church",
    text: "We believe the Church is the body of Christ, His Kingdom on earth called to worship, serve, and share the gospel with the world.",
    verse: "1 Corinthians 12:27",
  },
  {
    title: "Eternity",
    text: "We believe in the resurrection of both the saved and the lost—the saved to eternal life and Exaltation, the lost to eternal separation from God.",
    verse: "John 5:28–29",
  },
];

export default function BeliefsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>OUR FAITH</p>
        <h2 className={styles.title}>What We Believe</h2>
      </div>

      <div className={styles.grid}>
        {beliefs.map((belief, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{belief.title}</h3>
            <p className={styles.text}>{belief.text}</p>
            <span className={styles.verse}>{belief.verse}</span>
          </div>
        ))}
      </div>
    </section>
  );
}