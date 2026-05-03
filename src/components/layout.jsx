import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import ContactUs from './contact';
import CTABanner from './ctaBanner';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CTABanner />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Layout;
