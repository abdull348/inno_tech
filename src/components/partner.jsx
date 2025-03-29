import { ArrowUpRight, Handshake, ShieldCheck, Globe } from 'lucide-react';
import partnerImage from '/assets/partner.webp';
import AnimatedText from './animatedText';

const Partner = () => {
  const partnerBenefits = [
    {
      icon: <ShieldCheck size={20} />,
      text: 'Certified equipment with full documentation',
    },
    {
      icon: <Globe size={20} />,
      text: 'Global logistics network with 48h emergency dispatch',
    },
  ];

  return (
    <section className='py-5 bg-white' id='partnership'>
      <div className='container py-4 py-lg-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6 order-lg-1 p-4 p-lg-5 mx-auto'>
            <div className='position-relative'>
              <img
                src={partnerImage}
                alt='Laboratory Partnership'
                className='img-fluid rounded-3 shadow-lg mx-auto'
                style={{
                  maxWidth: '90%',
                  height: 'auto',
                }}
              />
              <div className='position-absolute bottom-0 start-0 bg-white p-3 m-3 rounded-2 shadow-sm'>
                <div className='d-flex align-items-center'>
                  <div
                    className='bg-primary text-white rounded-circle p-2 d-flex align-items-center justify-content-center'
                    style={{ width: '40px', height: '40px' }}
                  >
                    <Handshake size={20} />
                  </div>
                  <div className='ms-2'>
                    <h6 className='mb-0'>150+ Partners</h6>
                    <small className='text-muted'>Worldwide network</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 p-4 p-lg-5'>
            <div className='pe-lg-4'>
              <AnimatedText>
                <span className='badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 d-inline-flex align-items-center'>
                  <Handshake size={16} className='me-2' />
                  Strategic Partnerships
                </span>
              </AnimatedText>
              <h2 className='display-5 fw-bold mb-4'>
                Elevate Your Lab with Trusted Partnerships
              </h2>

              <p className='lead text-muted mb-4'>
                Join our network of 500+ scientific institutions benefiting from
                our reliable supply chain and technical expertise in laboratory
                solutions.
              </p>

              <div className='mb-4'>
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className='d-flex align-items-center mb-3'>
                    <div
                      className='bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center'
                      style={{ width: '40px', height: '40px' }}
                    >
                      {benefit.icon}
                    </div>
                    <p className='mb-0 fw-medium'>{benefit.text}</p>
                  </div>
                ))}
              </div>
              <div className='d-flex flex-wrap gap-3 mt-4'>
                <a
                  href='#contact'
                  className='btn btn-primary px-4 py-2 d-flex align-items-center'
                >
                  Become a Partner <ArrowUpRight className='ms-2' size={18} />
                </a>
                <a
                  href='/partnership-brochure.pdf'
                  className='btn btn-outline-primary px-4 py-2 d-flex align-items-center'
                  download
                >
                  Download Partnership Kit{' '}
                  <ArrowUpRight className='ms-2' size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
