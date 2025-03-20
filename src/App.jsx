import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';
import Hero from './components/hero';
import AboutUs from './components/about';
import ProductListing from './components/Products';
import Partner from './components/partner';
import ContactUs from './components/contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs className='container mx-auto mt-5 p-4' />
        <ProductListing className='container mx-auto mt-5 p-4' />
        <Partner className='container mx-auto mt-5 p-4' />
        <ContactUs className='container mx-auto mt-5 p-4' />
      </main>
      <Footer />
    </>
  );
};

export default App;
