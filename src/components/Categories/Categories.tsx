import styles from "./Categories.module.css";
import Link from "next/link";
import { FaPrayingHands, FaLandmark, FaMicrochip, FaBookOpen, FaArrowRight  } from "react-icons/fa";

const categories = [
  {
    icon: <FaPrayingHands />,
    title: "Christian Living",
    description:
      "Grow deeper in your walk with Christ through devotionals and biblical teachings.",
    link: "/categories/christian-living",
  },
  {
    icon: <FaLandmark />,
    title: "Politics & Governance",
    description:
      "Explore leadership, governance, and politics through a biblical worldview.",
    link: "/categories/politics-governance",
  },
  {
    icon: <FaMicrochip />,
    title: "Technology & Innovations",
    description:
      "Discover how technology is shaping the world and how believers can engage wisely.",
    link: "/categories/technology",
  },
  {
    icon: <FaBookOpen />,
    title: "Books & Story Telling",
    description:
      "Read inspiring stories and book reflections that encourage faith and wisdom.",
    link: "/categories/books-storytelling",
  },
];

export default function Categories() {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2>Explore Categories</h2>
          <p>
            Explore faith-centered topics and reflections. Each category shares insights, teachings, and stories designed to help you grow in Christ and deepen your understanding of life through a biblical perspective.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>
                {cat.icon}
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            <Link href={cat.link} className={styles.arrow}>
            <FaArrowRight />
          </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}