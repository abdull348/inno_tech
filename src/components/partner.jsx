import {
  ArrowUpRight,
  Handshake,
  ShieldCheck,
  Globe,
  Truck,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import partnerImage from '/assets/partner.webp';
import secondaryImage from '/assets/lab-technitian.webp';
import AnimatedText from './animatedText';

const benefits = [
  {
    icon: <ShieldCheck size={18} />,
    text: 'Certified equipment with full documentation and traceability',
  },
  {
    icon: <Truck size={18} />,
    text: 'Global logistics network with 48-hour emergency dispatch',
  },
  {
    icon: <Globe size={18} />,
    text: 'On-site service engineers across major US research hubs',
  },
];

const Partner = () => {
  return (
    <section
      className='it-section-pad bg-white position-relative'
      id='partnership'
    >
      <div className='container position-relative'>
        <div className='row align-items-center g-5'>
          <div className='col-lg-6'>
            <div className='it-img-stack'>
              <span className='accent-shape' />

              <img
                src={partnerImage}
                alt='Laboratory Partnership'
                className='main-img'
              />

              <img
                src={secondaryImage}
                alt='Lab technician at work'
                className='accent-img d-none d-sm-block'
              />

              <div
                className='it-float-card d-none d-md-flex'
                style={{ top: '20px', right: '-18px' }}
              >
                <div className='icon cyan'>
                  <Handshake size={20} />
                </div>
                <div>
                  <div className='num'>150+ Partners</div>
                  <div className='label'>Worldwide network</div>
                </div>
              </div>

              <div
                className='it-float-card d-none d-md-flex'
                style={{ bottom: '90px', left: '-22px' }}
              >
                <div className='icon'>
                  <Globe2 size={20} />
                </div>
                <div>
                  <div className='num'>30+ Countries</div>
                  <div className='label'>Global logistics</div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>Partnership Program</span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className='display-5 it-heading mb-3'>
                Elevate Your Lab With{' '}
                <span className='it-heading-grad'>Trusted Partnerships</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.18}>
              <div className='it-divider mb-3' />
            </AnimatedText>

            <AnimatedText delay={0.22}>
              <p
                className='mb-4'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  lineHeight: 1.7,
                }}
              >
                Join a network of 500+ research institutions, hospitals, and
                biotech innovators benefiting from our reliable supply chain,
                technical expertise, and dedicated US-based account management.
              </p>
            </AnimatedText>

            <ul className='list-unstyled mb-4'>
              {benefits.map((b, i) => (
                <AnimatedText key={i} delay={0.05 * i}>
                  <li className='d-flex align-items-start gap-3 mb-3'>
                    <div
                      className='rounded-2 d-flex align-items-center justify-content-center flex-shrink-0'
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--it-blue-soft)',
                        color: 'var(--it-blue)',
                      }}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <span
                      style={{
                        color: 'var(--it-text)',
                        fontWeight: 500,
                        lineHeight: 1.55,
                      }}
                    >
                      {b.text}
                    </span>
                  </li>
                </AnimatedText>
              ))}
            </ul>

            <AnimatedText delay={0.1}>
              <button
                className='btn-it-primary'
                onClick={(e) => {
                  e.stopPropagation();
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Become a Partner
                <ArrowUpRight size={16} />
              </button>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
