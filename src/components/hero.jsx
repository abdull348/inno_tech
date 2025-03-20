import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';
import Hero3 from '../assets/hero3.jpg';

const Hero = () => {
  return (
    <div
      className='container-fluid position-relative bg-light text-dark text-center p-0'
      style={{ height: '90vh', overflow: 'hidden' }}
    >
      <div
        id='backgroundCarousel'
        className='carousel slide position-absolute top-0 start-0 w-100 h-80'
        data-bs-ride='carousel'
        data-bs-interval='5000'
        style={{ zIndex: 0 }}
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={Hero1}
              className='d-block w-100 h-100'
              alt='Biology Tech 1'
              style={{ opacity: '0.5', objectFit: 'cover' }}
            />
          </div>
          <div className='carousel-item active'>
            <img
              src={Hero2}
              className='d-block w-100 h-100'
              alt='Biology Tech 2'
              style={{ opacity: '0.5', objectFit: 'cover' }}
            />
          </div>
          <div className='carousel-item active'>
            <img
              src={Hero3}
              className='d-block w-100 h-100'
              alt='Biology Tech 3'
              style={{ opacity: '0.5', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className='position-relative d-flex flex-column justify-content-center align-items-center w-100 h-100'>
        <div className='col-lg-8'>
          <h1 className='display-4 fw-bold mb-3'>
            Welcome to the Future of Bioinformatics
          </h1>
          <p className='lead mb-4 fw-semibold'>
            Discover the power of technology in the world of Biochemistry and
            Biology.
          </p>
          <div className='position-relative'>
            <a
              href='#'
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

        <div className='carousel-indicators position-absolute bottom-0 mb-4'>
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
