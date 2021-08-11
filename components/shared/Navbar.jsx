import Link from 'next/link';
import {useState} from 'react'

export default function navBar () {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav role='navigation'>
      <Link href="/">
        <img className="logo" src="/images/nav/logo.png" alt="LSR Creative Logo"></img>
      </Link>
      <div id="menuToggle" onClick={() => setIsActive(!isActive)}>
        <input type="checkbox" checked={isActive}/>
        
        <span></span>
        <span></span>
        <span></span>
      
        <ul id="menu">
          <li>
            <h2>Graphic Design</h2>
            <ul>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/cws"><a>CWS</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/riverbend"><a>Riverbend</a></Link>
              </li>
            </ul>
          </li>
          <li>
            <h2>Motion Graphics</h2>
            <ul>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/diesel-dance-party"><a>Diesel Dance Party</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/premium-beat"><a>Premiumbeat.com</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/expedition100"><a>Expedition 100</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/ibm"><a>IBM</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/converse"><a>Converse</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/12km"><a>12KM</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/tokyo-throwdown"><a>Tokyo Throwdown</a></Link>
              </li>
              <li className="nav-links" onClick={() => setIsActive(!isActive)}>
                <Link href="/mood-boards"><a>Mood Boards</a></Link>
              </li>
            </ul>
            <li>
              <a href="mailto: logantscandling@gmail.com?subject=Hello There!"><h2>Get In Touch</h2></a>
            </li>
          </li>
        </ul>
      </div>
    </nav>
  );
}
