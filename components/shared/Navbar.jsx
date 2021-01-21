import Link from 'next/link';
import {useState, useEffect} from 'react'

export default function navBar () {
  const [isActive, setIsActive] = useState(false);
  const [openGraphic, setOpenGraphic] = useState(false);
  const [openMotion, setOpenMotion] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    function onScroll() {
      if(window.scrollY >= 85) {
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
    <nav className={navbar ? 'navbar scrolled' : 'navbar'}>
      <span className="navbar-toggle" onClick={() => setIsActive(!isActive)}>
        <i className="fas fa-bars"></i>
      </span>
      <Link href="/">
        <img className="logo" src="/images/nav/logo.png" alt="LSR Creative Logo"></img>
      </Link>
      <ul className={`main-nav ${isActive ? 'active' : ''}` }>
        <li className="dropdown"><a className="nav-links" onClick={() => {setOpenGraphic(!openGraphic); setOpenMotion(false)}}>Graphic Design <i className={`fa ${openGraphic ? 'fa-caret-up' : 'fa-caret-down'}`}></i></a>
          <ul className={`dropdown-content graphic-drop ${openGraphic ? 'active' : ''}`} onClick={() => {setOpenGraphic(false); setIsActive(false)}}>
            <li><Link href="/graphic-designs/cws-home-services"><a>CWS Home Services</a></Link></li>
            <li><Link href="/graphic-designs/riverbend"><a>Riverbend</a></Link></li>
            <li><Link href="/graphic-designs/tales-aplenty-podcast"><a>Tales Aplenty Podcast</a></Link></li>
          </ul>
        </li>
        <li className="dropdown"><a className="nav-links" onClick={() => {setOpenMotion(!openMotion); setOpenGraphic(false)}}>Motion Graphics <i className={`fa ${openMotion ? 'fa-caret-up' : 'fa-caret-down'}`}></i></a>
          <ul className={`dropdown-content motion-drop ${openMotion ? 'active' : ''}`} onClick={() => {setOpenMotion(false); setIsActive(false)}}>
            <li><Link href="/motion-graphics/diesel-dance-party"><a>Diesel Dance Party</a></Link></li>
            <li><Link href="/motion-graphics/premium-beat"><a>Premiumbeat.com</a></Link></li>
            <li><Link href="/motion-graphics/mission-to-mars"><a>Mission To Mars</a></Link></li>
            <li><Link href="/motion-graphics/ibm"><a>IBM</a></Link></li>
            <li><Link href="/motion-graphics/converse"><a>Converse</a></Link></li>
            <li><Link href="/motion-graphics/12km"><a>12KM</a></Link></li>
            <li><Link href="/motion-graphics/tokyo-throwdown"><a>Tokyo Throwdown</a></Link></li>
            <li><Link href="/motion-graphics/mood-boards"><a>Mood Boards</a></Link></li>
          </ul>
        </li>
        <li><a className="nav-links" href="mailto: logantscandling@gmail.com?subject=Hello There!">Get In Touch</a></li>
      </ul>
    </nav>
  );
}
