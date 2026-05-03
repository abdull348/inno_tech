import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import AnimatedText from './animatedText';

const CTABanner = () => {
  const goToContact = () =>
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className='py-5 bg-white'>
      <div className='container'>
        <AnimatedText>
          <div className='it-cta-banner'>
            <div className='row align-items-center g-4'>
              <div className='col-lg-8'>
                <span className='it-cta-pill mb-3'>
                  <Clock size={13} /> Custom Quote in 24 Hours
                </span>
                <h2 className='display-6 mb-3 mt-2'>
                  Ready to equip your lab with{' '}
                  <span style={{ color: '#7ad3ff' }}>
                    confidence and precision?
                  </span>
                </h2>
                <p
                  className='mb-0'
                  style={{
                    color: 'rgba(255,255,255,0.78)',
                    fontSize: '1.02rem',
                    maxWidth: '620px',
                    lineHeight: 1.65,
                  }}
                >
                  Talk to a US-based specialist about equipment selection,
                  installation, and after-sales support. Most quotes returned
                  within one business day.
                </p>
              </div>

              <div className='col-lg-4'>
                <div className='d-flex flex-column gap-3'>
                  <button
                    className='btn-it-light justify-content-center'
                    onClick={goToContact}
                  >
                    Request a Quote
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href='tel:+18189431786'
                    className='d-flex align-items-center gap-2 text-decoration-none'
                    style={{ color: '#fff' }}
                  >
                    <span
                      className='d-inline-flex align-items-center justify-content-center rounded-2'
                      style={{
                        width: '38px',
                        height: '38px',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <Phone size={16} />
                    </span>
                    <span>
                      <span
                        className='d-block'
                        style={{
                          fontSize: '0.72rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.6)',
                        }}
                      >
                        Call Us
                      </span>
                      <span style={{ fontWeight: 600 }}>+1 (818) 943-1786</span>
                    </span>
                  </a>

                  <a
                    href='mailto:sales@innotechtechnologies.us'
                    className='d-flex align-items-center gap-2 text-decoration-none'
                    style={{ color: '#fff' }}
                  >
                    <span
                      className='d-inline-flex align-items-center justify-content-center rounded-2'
                      style={{
                        width: '38px',
                        height: '38px',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <Mail size={16} />
                    </span>
                    <span>
                      <span
                        className='d-block'
                        style={{
                          fontSize: '0.72rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.6)',
                        }}
                      >
                        Email Sales
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        sales@innotechtechnologies.us
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
};

export default CTABanner;
