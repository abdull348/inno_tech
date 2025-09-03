import { FlaskConical, ShieldCheck, Globe, BarChart } from 'lucide-react';
import AboutImage from '/assets/choose-us.jpg';

const AboutUs = () => {
  const services = [
    {
      icon: <FlaskConical className='text-primary' size={24} />,
      title: 'Advanced Equipment Supply',
      description: 'Full-spectrum laboratory solutions for research',
    },
    {
      icon: <ShieldCheck className='text-primary' size={24} />,
      title: 'Certified Quality Assurance',
      description: 'ISO Certified - compliant equipment with full traceability',
    },
    {
      icon: <Globe className='text-primary' size={24} />,
      title: 'Global Technical Support',
      description:
        '24/7 multilingual support network with field service engineers',
    },
    {
      icon: <BarChart className='text-primary' size={24} />,
      title: 'Performance Optimization',
      description:
        'Equipment calibration and validation services for peak performance',
    },
  ];

  return (
    <section className='bg-light' id='about'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 p-3 p-lg-5'>
            <div className='pe-lg-0'>
              <h2
                className='display-6 fw-bold mb-2'
                style={{
                  background: 'linear-gradient(to right, #222, #1a237e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                }}
              >
                Scientific Solutions for Modern Laboratories
              </h2>

              <div className='row g-3 mt-2'>
                {services.map((service, index) => (
                  <div key={index} className='col-md-6'>
                    <div className='d-flex align-items-start'>
                      <div className='flex-shrink-0'>
                        <div
                          className='bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center'
                          style={{ width: '36px', height: '36px' }}
                        >
                          {service.icon}
                        </div>
                      </div>
                      <div className='ms-3'>
                        <h6 className='fw-bold mb-1'>{service.title}</h6>
                        <p className='text-muted mb-0'>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='col-lg-6 d-flex justify-content-center'>
            <div className='position-relative w-100'>
              <img
                src={AboutImage}
                alt='Laboratory Equipment'
                className='img-fluid rounded-3 shadow-lg'
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              <div
                className='position-absolute bottom-0 start-50 translate-middle-x bg-white px-3 py-2 rounded-2 shadow'
                style={{
                  width: '90%',
                  maxWidth: '290px',
                }}
              >
                <div className='d-flex align-items-center'>
                  <div
                    className='bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3'
                    style={{ width: '36px', height: '36px' }}
                  >
                    <FlaskConical size={18} />
                  </div>
                  <div>
                    <h6 className='mb-0 fw-semibold'>Since 2014</h6>
                    <small className='text-muted'>
                      Advancing scientific discovery
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
