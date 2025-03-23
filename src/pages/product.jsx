import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductListing from '../components/Products';
import ContactUs from '../components/contact';
import '../index.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <ProductListing className='container mx-auto mt-5 p-4' />
        <ContactUs className='container mx-auto' />
      </main>
      <Footer />
    </>
  );
};

export default Home;
