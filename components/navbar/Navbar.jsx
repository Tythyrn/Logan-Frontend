import Link from 'next/link';
import styles from './navbar.module.css'
import {useState} from 'react'

export default function Navbar () {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.nav} role='navigation'>
      <Link href="/">
        <img className={styles.logo} src="/images/nav/logo.png" alt="LSR Creative Logo"></img>
      </Link>
      <div className={styles.menuToggle} onClick={() => setIsActive(!isActive)}>
        <input type="checkbox" checked={isActive}/>
        
        <span></span>
        <span></span>
        <span></span>
      
        <ul className={styles.menu}>
          <li>
            <h2 className={styles.navHeader}>Graphic Design</h2>
            <ul>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/cws"><a>CWS</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/riverbend"><a>Riverbend</a></Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className={styles.navHeader}>Motion Graphics</h2>
            <ul>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/diesel-dance-party"><a>Diesel Dance Party</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/premium-beat"><a>Premiumbeat.com</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/expedition100"><a>Expedition 100</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/ibm"><a>IBM</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/converse"><a>Converse</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/12km"><a>12KM</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/tokyo-throwdown"><a>Tokyo Throwdown</a></Link>
              </li>
              <li className={styles.navLinks} onClick={() => setIsActive(!isActive)}>
                <Link href="/mood-boards"><a>Mood Boards</a></Link>
              </li>
            </ul>
          </li>
          <li>
              <a href="mailto: logantscandling@gmail.com?subject=Hello There!"><h2 className={styles.navHeader}>Get In Touch</h2></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
