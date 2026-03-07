import styles from "./FeaturedArticles.module.css";
import Image from "next/image";
import Link from "next/link";

type Article = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tag?: string;
  readTime: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "The Bridge",
    category: "FAITH",
    description:
      "Jesus Christ is the bridge between humanity and God. This article explains how His sacrifice restored our relationship with the Father and opened the way to eternal life.",
    image: "/images/bridge.jpg",
    tag: "FEATURED",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Nobody, but Jesus",
    category: "SALVATION",
    description:
      "In a world searching for answers, only Jesus has the power to truly save, restore, and transform lives. Discover why salvation is found in no one else but Him.",
    image: "/images/nobody.jpg",
    tag: "NEW",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Only Jesus",
    category: "DEVOTION",
    description:
      "When distractions and challenges fill our lives, this article reminds us that our focus must remain on Christ alone—the author and finisher of our faith.",
    image: "/images/only-jesus.jpg",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "In the Hands of God",
    category: "TRUST",
    description:
      "Life can feel uncertain, but when we place our lives in God's hands, we discover peace, direction, and protection that only He can provide.",
    image: "/images/hands-potter.jpg",
    tag: "FEATURED",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Even When You're Running",
    category: "GRACE",
    description:
      "Like Jonah and the prodigal son, many run from God's calling. Yet His grace continues to pursue us, inviting us back into His loving purpose.",
    image: "/images/grace.jpg",
    readTime: "6 min read",
  },
  {
  id: 6,
  title: "One Word from the Saviour",
  category: "FAITH",
  description:
    "Throughout Scripture, one word from Jesus brought healing, restoration, and hope. Discover the power of His voice and how a single word from the Savior can transform every situation.",
  image: "/images/theword.jpg",
  readTime: "5 min read",
},
{
  id: 7,
  title: "Awaken Me",
  category: "SPIRITUAL GROWTH",
  description:
    "Sometimes our hearts grow quiet and distant from God. This reflection is a prayer for renewal, asking the Holy Spirit to awaken our faith and revive our passion for Christ.",
  image: "/images/sleeping.jpg",
  tag: "NEW",
  readTime: "4 min read",
},
{
  id: 8,
  title: "One More Praise for You Jesus",
  category: "WORSHIP",
  description:
    "Praise is not only for the good moments but also for the difficult seasons. Learn how choosing to offer one more praise to Jesus can strengthen your faith and lift your spirit.",
  image: "/images/praise.jpg",
  readTime: "6 min read",
},
];

export default function FeaturedArticles() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Featured Articles</h2>
           <p className={styles.description}>
            Explore our faith-building articles, where we share biblical insights, spiritual encouragement, and messages that point hearts back to Christ.
            </p>
          </div>

          <Link href="/articles" className={styles.viewAll}>
            View All Articles →
          </Link>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <div key={article.id} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className={styles.image}
                />

                {article.tag && (
                  <span className={styles.tag}>{article.tag}</span>
                )}

                <span className={styles.readTime}>{article.readTime}</span>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.category}>{article.category}</p>

                <h3 className={styles.articleTitle}>{article.title}</h3>

                <p className={styles.articleDescription}>
                  {article.description}
                </p>

                <Link href="/articles" className={styles.readMore}>
                  Read Article →
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}