import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

import { FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Brand */}
<div className={styles.brand}>
  <div className={styles.logo}>
    <Image
      src="/logo.png"
      alt="Only Jesus Logo"
      width={140}
      height={40}
      className={styles.logoImage}
      priority
    />
  </div>

         <p>
            Grow in faith and deepen your relationship with Jesus Christ. 
            Explore inspiring devotionals, Biblical teachings, and Christ-centered reflections 
            designed to encourage your walk with God every day.
            </p>

          {/* Social Icons */}
          <div className={styles.socials}>
            <a href="https://twitter.com" aria-label="Follow us on X (Twitter)">
                <FaXTwitter />
            </a>

            <a href="https://linkedin.com" aria-label="Visit our LinkedIn page">
                <FaLinkedinIn />
            </a>

            <a href="https://youtube.com" aria-label="Visit our YouTube channel">
                <FaYoutube />
            </a>

            <a href="https://instagram.com" aria-label="Follow us on Instagram">
                <FaInstagram />
            </a>
            </div>
        </div>

            {/* Categories */}
                <div className={styles.column}>
                <h4 className={styles.heading}>Categories</h4>
                <ul className={styles.links}>
                    <li><Link href="#">Devotionals</Link></li>
                    <li><Link href="#">Bible Study</Link></li>
                    <li><Link href="#">Prayer</Link></li>
                    <li><Link href="#">Faith & Doubt</Link></li>
                    <li><Link href="#">Testimonies</Link></li>
                    <li><Link href="#">Christian Living</Link></li>
                </ul>
                </div>

                {/* Ministry */}
                <div className={styles.column}>
                <h4 className={styles.heading}>Ministry</h4>
                <ul className={styles.links}>
                    <li><Link href="#">About Only Jesus</Link></li>
                    <li><Link href="#">Our Mission</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Write for Us</Link></li>
                    <li><Link href="#">Resources</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
                </div>

                {/* Support */}
                <div className={styles.column}>
                <h4 className={styles.heading}>Support</h4>
                <ul className={styles.links}>
                    <li><Link href="#">Help Center</Link></li>
                    <li><Link href="#">FAQs</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Terms of Use</Link></li>
                    <li><Link href="#">Community Guidelines</Link></li>
                </ul>
                </div>

      </div>

      {/* Bottom Bar */}
   <div className={styles.bottom}>
  <div className={styles.bottomInner}>
    <p>© {new Date().getFullYear()} Only Jesus. All rights reserved.</p>
    <p>Designed & Developed by: <a href="https://kevincross.com" target="_blank" rel="noopener noreferrer" className={styles.author}>Kevin Cross Minchakpu</a></p>
    <p>“Jesus said, I am the way, the truth, and the life.” – John 14:6</p>
  </div>
</div>
    </footer>
  );
}