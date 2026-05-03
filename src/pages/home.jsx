import Hero from '../components/hero';
import TrustBar from '../components/trustBar';
import AboutUs from '../components/about';
import ProductListing from '../components/Products';
import Partner from '../components/partner';
import Testimonials from '../components/testimonials';
import FAQ from '../components/faq';
import { defaultFaqs } from '../data/faqData';
import SEO from '../components/seo';
import '../index.css';

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: defaultFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

const Home = () => {
  return (
    <main>
      <SEO
        title='Precision Lab Equipment Supplier in the USA'
        description='Certified centrifuges, freezers, autoclaves, and spectrophotometers — trusted by 500+ US research institutions. ISO 9001 certified. 24/7 US-based technical support. Headquartered in Lenexa, Kansas.'
        path='/'
        jsonLd={homeFaqJsonLd}
      />
      <Hero />
      <TrustBar />
      <AboutUs />
      <ProductListing />
      <Partner />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
