import { ShieldCheck, Truck, LifeBuoy } from 'lucide-react';
import ProductListing from '../components/Products';
import '../index.css';

const Home = () => {
  return (
    <>
      <main className='bg-white'>
        <section
          className='py-3 bg-secondary text-white'
          style={{ background: 'linear-gradient(135deg, #0056b3, #003366)' }}
        >
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

        <section className='bg-white'>
          <div className='container'>
            <div className='row g-4'>
              {[
                {
                  icon: <ShieldCheck size={28} />,
                  title: 'Certified Quality',
                  text: 'ISO certified',
                },
                {
                  icon: <Truck size={28} />,
                  title: 'Fast Delivery',
                  text: 'Global logistics network',
                },
                {
                  icon: <LifeBuoy size={28} />,
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

        <ProductListing />
      </main>
    </>
  );
};

export default Home;
