import Hero1 from '/assets/Hero1.webp';
import Hero2 from '/assets/Hero2.webp';
import Hero3 from '/assets/Hero3.webp';

const Hero = () => {
  return (
    <div
      className='container-fluid position-relative bg-light text-dark text-center p-0'
      style={{ height: '90vh', overflow: 'hidden' }}
    >
      <div
        id='backgroundCarousel'
        className='carousel slide position-absolute top-0 start-0 w-100 h-80  d-none d-md-block'
        data-bs-ride='carousel'
        data-bs-interval='4000'
        style={{ zIndex: 0 }}
      >
        <div className='carousel-inner position-relative'>
          <div className='carousel-item' style={{ top: 0, left: 0 }}>
            <img
              src={Hero1}
              className='d-block w-100 h-100'
              alt='Biology Tech 1'
              style={{ opacity: '0.4', objectFit: 'cover' }}
            />
          </div>
          <div className='carousel-item' style={{ top: 0, left: 0 }}>
            <img
              src={Hero2}
              className='d-block w-100 h-100'
              alt='Biology Tech 2'
              style={{ opacity: '0.4', objectFit: 'cover' }}
            />
          </div>
          <div className='carousel-item active' style={{ top: 0, left: 0 }}>
            <img
              src={Hero3}
              className='d-block w-100 h-100'
              alt='Biology Tech 3'
              style={{ opacity: '0.4', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className='position-relative d-flex flex-column justify-content-center align-items-center w-100 h-100 p-3 p-lg-0'>
        <div className='col-lg-8'>
          <h1 className='display-4 fw-bold mb-3'>
            Innovating the Future of Laboratory Science
          </h1>
          <p className='lead mb-2 mb-lg-4 fw-semibold'>
            Explore cutting-edge solutions bridging technology with life
            sciences, <br />
            enhancing research precision and efficiency.
          </p>
          <div className='position-relative'>
            <a
              href='#contact'
              className='btn btn-contact'
              style={{
                border: '2px solid #1a1a1a',
                fontWeight: '600',
                borderRadius: '4px',
              }}
            >
              Consult Now
            </a>
          </div>
        </div>

        <div className='carousel-indicators position-absolute bottom-0 mb-4 d-none d-md-block'>
          <button
            type='button'
            data-bs-target='#backgroundCarousel'
            data-bs-slide-to='0'
            className='active'
          ></button>
          <button
            type='button'
            data-bs-target='#backgroundCarousel'
            data-bs-slide-to='1'
          ></button>
          <button
            type='button'
            data-bs-target='#backgroundCarousel'
            data-bs-slide-to='2'
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
