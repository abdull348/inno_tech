import Hero from '../components/hero';
import TrustBar from '../components/trustBar';
import AboutUs from '../components/about';
import ProductListing from '../components/Products';
import Partner from '../components/partner';
import Testimonials from '../components/testimonials';
import '../index.css';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AboutUs />
      <ProductListing />
      <Partner />
      <Testimonials />
    </main>
  );
};

export default Home;
