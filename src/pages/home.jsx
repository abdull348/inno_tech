import Hero from '../components/hero';
import AboutUs from '../components/about';
import ProductListing from '../components/Products';
import Partner from '../components/partner';
import '../index.css';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutUs className='container mx-auto mt-5 p-4' />
        <ProductListing className='container mx-auto mt-5 p-4' />
        <Partner className='container mx-auto mt-5 p-4' />
      </main>
    </>
  );
};

export default Home;
