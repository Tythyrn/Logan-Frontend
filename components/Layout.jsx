import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div>
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout;