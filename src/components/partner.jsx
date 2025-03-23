import partnerImage from '/assets/partner.webp';

const Partner = () => {
  return (
    <section
      className=''
      style={{
        background:
          'linear-gradient(135deg,rgb(83, 69, 53),rgb(79, 58, 38),rgb(37, 22, 9))',
        padding: '1rem',
      }}
    >
      <div className='container py-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6 text-lg-start'>
            <h2 className='fw-bold fs-2 text-white mb-2'>
              <span style={{ color: '#f16921' }}>Work</span> with us.
            </h2>
            <p
              className='mb-2 text-white lh-lg'
              style={{
                fontSize: '17px',
                letterSpacing: '0.2px',
                lineHeight: '1.8',
              }}
            >
              InnoTech Technologies is committed to delivering top-quality
              laboratory equipment tailored to diverse scientific needs. We
              prioritize innovation, precision, and exceptional customer
              satisfaction, ensuring reliable solutions for all research
              environments. Our expertise and dedication make us a trusted
              partner for laboratories worldwide.
            </p>
            <a
              href='#contact'
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
              className='img-fluid mt-5 mt-lg-0'
              style={{ maxWidth: '90%', height: 'auto', borderRadius: '14px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
