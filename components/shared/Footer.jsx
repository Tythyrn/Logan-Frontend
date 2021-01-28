import Link from 'next/link';
import { useState } from 'react';

export default function navBar () {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer>
      <div className="main-footer">
        <Link href="/">
            <h2 className="footer-logo">LSR Creative</h2>
        </Link>
        <div className="brand-icons">
            <a href="https://www.linkedin.com/in/logan-rundquist-03130897/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/lsr.creative/" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
        </div>
      </div>
      <div className="sub-footer">
        <small>&copy; Copyright {currentYear}, Logan Rundquist</small>
      </div>
    </footer>
  );
}
