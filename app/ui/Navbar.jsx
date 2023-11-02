'use client'

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
    <nav className="fixed z-10 w-full" role='navigation'>
      <Link href="/">
        <img style={navbar ? {display: "none"} : {display: "inline-block"} } className="no-underline cursor-pointer text-white m-0 w-16 md:w-24 inline-block decor" src="https://media.graphcms.com/CgvhVPynSkuQrqEuX6dY" alt="LSR Creative Logo"></img>
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
                <h2 className="text-8xl">{link.name}</h2>
                <ul>
                  {link.projects.map((project) => {
                    return (
                      <Link href={project.projectUrl}>
                      <li className="text-lg" onClick={() => setIsActive(!isActive)} key={project.projectName}>
                        {project.projectName}
                      </li>
                      </Link>
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
