import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

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