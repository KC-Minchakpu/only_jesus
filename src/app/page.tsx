import Hero from "@/components/Hero/Hero";
import Path from "@/components/Path/Path";
import styles from "./page.module.css";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";


export default function Home() {
  return (
    <div className={styles.mainSection}>
      <Hero />
      <Path />
      <FeaturedArticles />
     
     </div>
  );
}