import { ArrowUpRight, Handshake, ShieldCheck, Globe } from 'lucide-react';
import partnerImage from '/assets/partner.webp';

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
    <section className='bg-white partner-bg' id='partnership'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 d-flex justify-content-center'>
            <div className='position-relative w-100'>
              <img
                src={partnerImage}
                alt='Laboratory Partnership'
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
                    <Handshake size={18} />
                  </div>
                  <div>
                    <h6 className='mb-0 fw-semibold'>150+ Partners</h6>
                    <small className='text-muted'>Worldwide network</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 p-3 p-lg-5'>
            <div className='pe-lg-4'>
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
                Elevate Your Lab with Trusted Partnerships
              </h2>

              <p className='lead text-muted mb-4'>
                Join our network of 500+ scientific institutions benefiting from
                our reliable supply chain and technical expertise in laboratory
                solutions.
              </p>

              <div className='mb-4'>
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className='d-flex align-items-center mb-2'>
                    <div
                      className='text-primary me-2 d-flex align-items-center justify-content-center'
                      style={{ width: '28px', height: '28px' }}
                    >
                      {benefit.icon}
                    </div>
                    <p className='mb-0 fw-medium text-muted'>{benefit.text}</p>
                  </div>
                ))}
              </div>
              <div className='d-flex flex-wrap gap-3 mt-4'>
                <button
                  className='btn btn-primary btn-md px-4 py-2 d-flex align-items-center rounded-pill shadow-sm'
                  onClick={(e) => {
                    e.stopPropagation();
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Become a Partner <ArrowUpRight className='ms-2' size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
