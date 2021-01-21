import Link from 'next/link';

export default function navBar () {


  return (
    <footer>
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
    </footer>
  );
}
