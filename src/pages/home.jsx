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
        <AboutUs />
        <ProductListing />
        <Partner />
      </main>
    </>
  );
};

export default Home;
