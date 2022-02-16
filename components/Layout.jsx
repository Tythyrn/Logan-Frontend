import Navbar from './navbar/Navbar';
import Footer from './Footer';

const Layout = ({ children, links }) => (
  <div>
    <Navbar links={links}/>
    <div>
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout;