import { UserRound, Download, Award } from 'lucide-react';
import Hero1 from '/assets/Hero1.webp';
import Hero2 from '/assets/Hero2.webp';
import Hero3 from '/assets/Hero3.webp';
import Hero4 from '/assets/Hero4.webp';
import AnimatedText from './animatedText';

const Hero = () => {
  return (
    <section
      className='container-fluid position-relative'
      style={{ height: '90vh', overflow: 'hidden' }}
    >
      <div
        id='labCarousel'
        className='carousel slide position-absolute top-0 start-0 w-100 h-80 d-none d-md-block'
        data-bs-ride='carousel'
        data-bs-interval='3500'
        style={{ zIndex: 0 }}
      >
        <div className='carousel-inner h-100'>
          {[Hero1, Hero2, Hero3, Hero4].map((img, index) => (
            <div
              key={index}
              className={`carousel-item h-100 ${index === 2 ? 'active' : ''}`}
            >
              <img
                src={img}
                className='d-block w-100 h-100'
                alt={`Laboratory Equipment ${index + 1}`}
                style={{
                  objectFit: 'cover',
                  filter: 'brightness(0.4)',
                  objectPosition: 'center 30%',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='position-absolute top-0 start-0 w-100 h-100 d-md-none bg-light' />
      <div className='position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-3'>
        <div className='col-lg-8 col-xl-7'>
          <div className='d-flex justify-content-center mb-3'>
            <AnimatedText>
              <span className='badge bg-white bg-md-dark text-dark text-md-white fs-6 fw-normal px-3 py-2 rounded-pill d-flex align-items-center d-none d-md-block'>
                <Award size={18} className='me-2' />
                Lab Technology Innovator Since 2014
              </span>
            </AnimatedText>
          </div>

          <h1 className='display-3 fw-bold mb-3 hero-tagline'>
            Precision <span className='text-primary'>Laboratory Solutions</span>{' '}
            for <br className='d-none d-md-block' />
            Critical Research
          </h1>

          <p className='lead mb-4 fs-5 hero-description'>
            Trusted by 500+ institutions worldwide for uncompromising quality in{' '}
            <br />
            medical diagnostics, pharmaceutical research, and biotech innovation
          </p>

          <div className='d-flex flex-wrap justify-content-center gap-3'>
            <a
              href='#contact'
              className='btn btn-primary btn-lg px-2 py-2 fw-semibold d-flex align-items-center'
              style={{ fontSize: '18px' }}
            >
              <UserRound className='me-2' size={16} />
              Request Technical Consultation
            </a>
            <a
              href='/catalog.pdf'
              className='btn btn-outline-light btn-lg px-2 py-2 fw-semibold d-flex align-items-center d-none d-md-block'
              style={{ fontSize: '18px' }}
              download
            >
              <Download className='me-2' size={16} />
              Download Full Catalog
            </a>
          </div>
        </div>
      </div>

      <div className='position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block'>
        <div className='carousel-indicators'>
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              type='button'
              data-bs-target='#labCarousel'
              data-bs-slide-to={i}
              className={i === 2 ? 'active' : ''}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
