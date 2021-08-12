import Link from 'next/link';
import styles from './footer.module.css'
import { useState } from 'react';

export default function Footer () {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <Link href="/">
            <h2 className={styles.footerLogo}>LSR Creative</h2>
        </Link>
        <div className={styles.brandIcons}>
            <a href="https://www.linkedin.com/in/logan-rundquist-03130897/" target="_blank" rel="noopener">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/lsr.creative/" target="_blank" rel="noopener">
                <i className="fab fa-instagram"></i>
            </a>
        </div>
      </div>
      <div className={styles.subFooter}>
        <small>&copy; Copyright {currentYear}, Logan Rundquist</small>
      </div>
    </footer>
  );
}
