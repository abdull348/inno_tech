import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import ContactUs from './contact';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Layout;
