import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductListing from '../components/Products';
import ContactUs from '../components/contact';
import { ShieldCheck, Truck, LifeBuoy } from 'lucide-react';
import '../index.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='bg-white'>
        <section className='py-3 bg-primary text-white'>
          <div className='container py-4 py-lg-5'>
            <div className='row align-items-center'>
              <div className='col-lg-8'>
                <h1 className='display-4 fw-bold mb-4'>
                  Precision <span className='text-primar'>Lab Equipment</span>{' '}
                  for Your Research
                </h1>
                <p className='lead mb-4'>
                  Trusted by 500+ research institutions worldwide for our
                  certified, high-performance laboratory solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-5 bg-white'>
          <div className='container py-5'>
            <div className='row g-4'>
              {[
                {
                  icon: <ShieldCheck size={32} />,
                  title: 'Certified Quality',
                  text: 'ISO certified',
                },
                {
                  icon: <Truck size={32} />,
                  title: 'Fast Delivery',
                  text: 'Global logistics network',
                },
                {
                  icon: <LifeBuoy size={32} />,
                  title: '24/7 Support',
                  text: 'Technical assistance anytime',
                },
              ].map((item, index) => (
                <div key={index} className='col-md-4'>
                  <div className='d-flex align-items-center p-3 bg-light rounded-3 h-100'>
                    <div className='bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3'>
                      {item.icon}
                    </div>
                    <div>
                      <h5 className='mb-1'>{item.title}</h5>
                      <p className='small text-muted mb-0'>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='products' className='py-5 bg-light'>
          <div className='container'>
            <ProductListing />
          </div>
        </section>

        <section className='py-5 bg-light' id='contact'>
          <div className='container py-5'>
            <ContactUs />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
