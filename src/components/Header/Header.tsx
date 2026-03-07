"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? styles.active : "";
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.menu}>

            <li>
              <Link href="/" className={isActive("/")}>Home</Link>
            </li>

            {/* About Dropdown */}
            <li className={styles.dropdown}>
              <Link href="/about" className={isActive("/about")}>
                About
              </Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/about/kcminchakpu">KCMinchakpu</Link></li>
                <li><Link href="/about/only-jesus">Only Jesus</Link></li>
                <li><Link href="/about/writers">Our Writers</Link></li>
                <li><Link href="/about/donating">Donating</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/books" className={isActive("/books")}>Books</Link>
            </li>

            <li>
              <Link href="/blog" className={isActive("/blog")}>Blog</Link>
            </li>

            {/* Q&A Dropdown */}
            <li className={styles.dropdown}>
              <Link href="/qa" className={isActive("/qa")}>
                Q & A
              </Link>
              <ul className={styles.dropdownMenu}>
                <li><Link href="/qa/church">The Church</Link></li>
                <li><Link href="/qa/faith-doubt">Faith and Doubt</Link></li>
                <li><Link href="/qa/sexuality">Sexuality</Link></li>
                <li><Link href="/qa/living-christianity">Living Christianity</Link></li>
                <li><Link href="/qa/personal-matters">Personal Matters</Link></li>
                <li><Link href="/qa/politics">Politics</Link></li>
                <li><Link href="/qa/prayer">Prayer</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/articles" className={isActive("/articles")}>Articles</Link>
            </li>

            <li>
              <Link href="/ghost-stories" className={isActive("/ghost-stories")}>Ghost Stories</Link>
            </li>

            <li>
              <Link href="/contact" className={isActive("/contact")}>Contact</Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}