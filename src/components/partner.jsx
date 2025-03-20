import partnerImage from '../assets/partner.jpg';

const Partner = () => {
  return (
    <section
      className=''
      style={{
        background: 'linear-gradient(135deg, #334155, #1e293b, #0f172a)',
        padding: '2rem',
      }}
    >
      <div className='container py-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6 text-center text-lg-start'>
            <h2 className='fw-bold text-white mb-2'>
              Why <span style={{ color: '#f16921' }}>Partner</span> with Us?
            </h2>
            <p className='mb-2 text-white'>
              Inno Tech is dedicated to providing the best medical equipment for
              cutting-edge research and healthcare solutions. best medical
              equipment for cutting-edge research and healthcare solutions. and
              healthcare solutions. best medical equipment for cutting-edge
              research and healthcare solutions.
            </p>
            <a
              href='#'
              className='btn btn-contact mt-2'
              style={{
                border: '1px solid #fff',
                color: '#fff',
                fontWeight: '600',
                borderRadius: '4px',
              }}
            >
              Get to Quote
            </a>
          </div>
          <div className='col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center'>
            <img
              src={partnerImage}
              alt='About Us'
              style={{ maxWidth: '400px', borderRadius: '12px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
