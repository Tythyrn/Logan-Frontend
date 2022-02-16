import Link from 'next/link';
import styles from './navbar.module.css'
import {useState, useEffect} from 'react'

export default function Navbar ({links}) {
  const [isActive, setIsActive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    function onScroll() {
      if(window.scrollY >= 95) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

    //adds scroll effect for navbar
    window.addEventListener("scroll", onScroll);
    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={styles.nav} role='navigation'>
      <Link href="/">
        <img style={navbar ? {display: "none"} : {display: "inline-block"} } className={styles.logo} src="https://media.graphcms.com/CgvhVPynSkuQrqEuX6dY" alt="LSR Creative Logo"></img>
      </Link>
      <div className={styles.menuToggle} onClick={() => setIsActive(!isActive)}>
        <input type="checkbox" checked={isActive} readOnly/>
        
        <span></span>
        <span></span>
        <span></span>
      
        <ul className={styles.menu}>
          {links.map((link) => {
            return (
              <li key={link.name}>
                <h2 className={styles.navHeader}>{link.name}</h2>
                <ul>
                  {link.projects.map((project) => {
                    return (
                      <li className={styles.navLinks} onClick={() => setIsActive(!isActive)} key={project.projectName}>
                        <Link href={project.projectUrl}><a>{project.projectName}</a></Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            );
          })}
          <li>
              <a href="mailto: logantscandling@gmail.com?subject=Hello There!"><h2 className={styles.navHeader}>Get In Touch</h2></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
