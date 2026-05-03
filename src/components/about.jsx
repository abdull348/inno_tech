import {
  FlaskConical,
  ShieldCheck,
  Globe,
  BarChart,
  ArrowUpRight,
  Award,
  BadgeCheck,
} from 'lucide-react';
import AboutImage from '/assets/choose-us.jpg';
import AnimatedText from './animatedText';

const features = [
  {
    icon: <FlaskConical size={20} />,
    title: 'Advanced Equipment Supply',
    description:
      'Full-spectrum laboratory instruments, from sample prep to high-precision analysis.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Certified Quality Assurance',
    description:
      'ISO-certified, FDA-compliant equipment with full documentation and traceability.',
  },
  {
    icon: <Globe size={20} />,
    title: 'Global Technical Support',
    description:
      '24/7 multilingual support backed by US-based engineers and field service teams.',
  },
  {
    icon: <BarChart size={20} />,
    title: 'Performance Optimization',
    description:
      'On-site calibration and validation services to keep your lab running at peak.',
  },
];

const stats = [
  { num: '500', plus: '+', label: 'Institutions Served' },
  { num: '30', plus: '+', label: 'Countries Worldwide' },
  { num: '10', plus: '+', label: 'Years of Expertise' },
  { num: '98', plus: '%', label: 'Client Retention' },
];

const AboutUs = () => {
  return (
    <section className='it-section-pad bg-white position-relative' id='about'>
      <div className='container position-relative'>
        <div className='row align-items-center g-5'>
          <div className='col-lg-6'>
            <div className='position-relative'>
              <span
                className='it-img-dots d-none d-md-block'
                style={{ top: '-26px', left: '-26px' }}
              />
              <span
                className='it-img-dots d-none d-md-block'
                style={{ bottom: '-26px', right: '-26px' }}
              />

              <div className='it-img-frame'>
                <img
                  src={AboutImage}
                  alt='InnoTech Laboratory Equipment'
                />
              </div>

              <div
                className='it-float-card d-none d-md-flex'
                style={{ top: '24px', left: '-18px' }}
              >
                <div className='icon'>
                  <Award size={20} />
                </div>
                <div>
                  <div className='num'>Since 2014</div>
                  <div className='label'>10+ years of expertise</div>
                </div>
              </div>

              <div
                className='it-float-card d-none d-md-flex'
                style={{ bottom: '28px', right: '-18px' }}
              >
                <div className='icon cyan'>
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <div className='num'>ISO Certified</div>
                  <div className='label'>FDA · CE · ISO 9001</div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>About InnoTech</span>
            </AnimatedText>

            <AnimatedText delay={0.1}>
              <h2 className='display-5 it-heading mb-3'>
                Scientific Solutions Built for{' '}
                <span className='it-heading-grad'>Modern US Laboratories</span>
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
                We partner with research institutions, hospitals, and biotech
                innovators across the United States to deliver precision lab
                equipment, validated performance, and the on-the-ground service
                that keeps critical work moving.
              </p>
            </AnimatedText>

            <div className='mb-4'>
              {features.map((f, i) => (
                <AnimatedText key={i} delay={0.05 * i}>
                  <div className='feature-item'>
                    <div className='feature-icon'>{f.icon}</div>
                    <div>
                      <div className='feature-title'>{f.title}</div>
                      <p className='feature-desc'>{f.description}</p>
                    </div>
                  </div>
                </AnimatedText>
              ))}
            </div>

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
                Talk to a Specialist
                <ArrowUpRight size={16} />
              </button>
            </AnimatedText>
          </div>
        </div>

        <div className='row g-4 mt-5 pt-4'>
          {stats.map((s, i) => (
            <div key={i} className='col-6 col-lg-3'>
              <AnimatedText delay={0.05 * i}>
                <div className='stat-block'>
                  <div className='stat-num'>
                    {s.num}
                    <span className='plus'>{s.plus}</span>
                  </div>
                  <div className='stat-label'>{s.label}</div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
