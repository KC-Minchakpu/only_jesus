import Image from "next/image";
import styles from "./AboutKevinStory.module.css";

export default function AboutKevinStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.imageWrapper}>
          <Image
            src="/writers/kevin.jpg"
            alt="Kevin Cross Minchakpu"
            width={336}
            height={344}
            className={styles.image}
          />
        </div>
       

        <div className={styles.content}>
          <p>
            Kevin Cross Minchakpu is a returned missionary of <strong>The Church of Jesus Christ of Latter-day 
            Saints,</strong> a writer, a speaker, and a passionate web and computer programmer with a strong focus on 
            full-stack development. With a deep interest in computing and problem-solving, Kevin 
            enjoys building practical, user-focused digital solutions that blend clean design with 
            reliable functionality.
          </p>

          <p>
           Beyond technology, Kevin is deeply committed to <strong>Christian ministry and service</strong>. He writes 
           Christian articles aimed at encouraging and uplifting readers, especially those who are 
           hurting, struggling with guilt, feeling lonely, or discouraged. At the heart of his message 
           is a simple but powerful truth: <strong>&quot;God loves you&quot;</strong>.
          </p>

          <p>
            As a writer, Kevin is known for communicating faith in a clear, relatable, and compassionate 
            way. His articles consistently point readers to God as the ultimate source of healing, 
            hope, and lasting blessings. Drawing from <strong>personal faith, missionary experience, and 
            everyday life,</strong> Kevin seeks to remind others that spiritual growth and restoration are 
            possible through the atonement of Jesus Christ and obedience to His word.
          </p>
          <p>
            Whether he is writing code or sharing messages of faith, Kevin’s work reflects a desire 
            to serve, inspire, and make a positive impact—using both <strong>technology and testimony</strong> as tools 
            to bless lives.
          </p>
        </div>

      </div>
    </section>
  );
}