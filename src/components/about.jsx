import AboutImage from '../assets/Choose-Us-Image.webp';

const AboutUs = () => {
  return (
    <div className='container my-5 pt-5'>
      <div className='row align-items-center my-5'>
        <div className='col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center'>
          <img src={AboutImage} alt='About Us' style={{ maxWidth: '485px' }} />
        </div>

        <div className='col-lg-6 text-center text-lg-start'>
          <p className='fw-semibold mb-2' style={{ color: '#f16921' }}>
            About Our Company
          </p>
          <h2 className='fw-bold mb-2'>Empower Your Financial Growth</h2>
          <p className='mb-2'>
            Inno Tech is dedicated to providing the best medical equipment for
            cutting-edge research and healthcare solutions. best medical
            equipment for cutting-edge research and healthcare solutions.
          </p>
          <ul className='list-unstyled'>
            <li className='d-flex align-items-center'>
              <span
                style={{
                  color: '#f16921',
                  fontSize: '1.7rem',
                  marginRight: '8px',
                }}
              >
                •
              </span>{' '}
              High-Quality Products
            </li>
            <li className='d-flex align-items-center'>
              <span
                style={{
                  color: '#f16921',
                  fontSize: '1.7rem',
                  marginRight: '8px',
                }}
              >
                •
              </span>{' '}
              Reliable Customer Support
            </li>
            <li className='d-flex align-items-center'>
              <span
                style={{
                  color: '#f16921',
                  fontSize: '1.7rem',
                  marginRight: '8px',
                }}
              >
                •
              </span>{' '}
              Innovative Technology Solutions
            </li>
          </ul>

          <a href='#' className='about-button mt-1'>
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
