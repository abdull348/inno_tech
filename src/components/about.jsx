import AboutImage from '/assets/Choose-Us-Image.webp';

const AboutUs = () => {
  const about = [
    'Leading supplier of laboratory equipment for research, healthcare, and industrial applications.',
    'Committed to quality, precision, and complete client satisfaction.',
    'Specializing in innovative scientific solutions for diverse laboratory requirements.',
    'Trusted by professionals worldwide for our high-performance equipment.',
    'Continuously evolving to meet the latest scientific and technological advancements.',
  ];

  return (
    <div
      className='container my-5 pt-0 pt-lg-5'
      style={{ padding: '1rem' }}
      id='about'
    >
      <div className='row align-items-center my-5'>
        <div className='col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center'>
          <img
            src={AboutImage}
            alt='About Us'
            className='img-fluid'
            style={{ maxWidth: '90%', height: 'auto' }}
          />
        </div>

        <div className='col-lg-6 text-lg-start'>
          <h2 className='fw-bold fs-2 mb-2'>Who we are?</h2>
          <ul className='list-unstyled'>
            {about.map((point, index) => (
              <li
                key={index}
                className='d-flex align-items-center lh-lg'
                style={{
                  fontSize: '17px',
                  letterSpacing: '0.2px',
                  lineHeight: '1.6',
                }}
              >
                <span
                  style={{
                    color: '#f16921',
                    fontSize: '1.2rem',
                    marginRight: '8px',
                  }}
                >
                  ◆
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
