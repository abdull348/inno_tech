import AboutImage from '/assets/Choose-Us-Image.jpg';
import { FlaskConical, ShieldCheck, Globe, BarChart } from 'lucide-react';

const AboutUs = () => {
  const services = [
    {
      icon: <FlaskConical className='text-primary' size={24} />,
      title: 'Advanced Equipment Supply',
      description:
        'Full-spectrum laboratory solutions for research, clinical, and industrial applications',
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
    <section className='py-5 bg-light' id='about'>
      <div className='container py-4 py-lg-5'>
        <div className='row align-items-center g-5'>
          <div className='col-lg-6 p-4 p-lg-4'>
            <div className='pe-lg-4'>
              <h2 className='display-5 fw-bold mb-4'>
                Scientific Solutions for Modern Laboratories
              </h2>

              <div className='row g-4 mt-4'>
                {services.map((service, index) => (
                  <div key={index} className='col-md-6'>
                    <div className='d-flex align-items-start'>
                      <div className='flex-shrink-0'>
                        <div
                          className='bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center'
                          style={{ width: '40px', height: '40px' }}
                        >
                          {service.icon}
                        </div>
                      </div>
                      <div className='ms-3'>
                        <h5 className='fw-semibold mb-1'>{service.title}</h5>
                        <p className='text-muted mb-0'>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='col-lg-6 d-flex align-items-center justify-content-center p-4 p-lg-5'>
            <div className='position-relative'>
              <img
                src={AboutImage}
                alt='Laboratory Equipment'
                className='img-fluid rounded-3 shadow-lg mx-auto'
                style={{ maxWidth: '90%', height: 'auto' }}
              />
              <div className='position-absolute bottom-0 start-0 bg-white p-3 m-3 rounded-2 shadow-sm'>
                <div className='d-flex align-items-center'>
                  <div className='flex-shrink-0'>
                    <div
                      className='bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2'
                      style={{ width: '40px', height: '40px' }}
                    >
                      <FlaskConical size={20} />
                    </div>
                  </div>
                  <div>
                    <h6 className='mb-0'>Since 2005</h6>
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
