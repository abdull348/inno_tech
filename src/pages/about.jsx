import {
  FlaskConical,
  ShieldCheck,
  Globe,
  CheckCircle,
  Award,
  BadgeCheck,
  Users,
  Lightbulb,
  Target,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutlab from '/assets/about-lab.jpg';
import chooseUs from '/assets/choose-us.jpg';
import AnimatedText from '../components/animatedText';

const heroStats = [
  { num: '500+', label: 'Institutions Served' },
  { num: '30+', label: 'Countries Worldwide' },
  { num: '10+', label: 'Years of Expertise' },
  { num: '98%', label: 'Client Retention' },
];

const coreValues = [
  {
    icon: <FlaskConical size={22} />,
    title: 'Scientific Integrity',
    description:
      'Equipment that meets strict research standards — every unit calibrated, validated, and traceable.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Quality Assurance',
    description:
      'ISO-certified manufacturing partnerships and full documentation on every shipment.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Global Impact',
    description:
      'Serving 500+ institutions across 30+ countries from our US headquarters in Lenexa, KS.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Continuous Innovation',
    description:
      'In-house R&D and OEM partnerships ensure access to the latest precision instruments.',
  },
];

const milestones = [
  {
    year: '2014',
    title: 'Founded in Lenexa, KS',
    description:
      'InnoTech Technologies opens its doors with a mission to bring precision lab equipment to US research institutions.',
  },
  {
    year: '2017',
    title: 'ISO 9001 Certification',
    description:
      'Achieved ISO 9001 quality management certification, formalizing our commitment to traceable quality.',
  },
  {
    year: '2019',
    title: '100+ Institutional Partners',
    description:
      'Crossed the 100-institution mark across the United States, with expanding service in pharma and biotech.',
  },
  {
    year: '2021',
    title: 'Global Logistics Network',
    description:
      'Launched 48-hour emergency dispatch with regional warehouses and on-site service engineers.',
  },
  {
    year: '2024',
    title: '500+ Labs · 30+ Countries',
    description:
      'Trusted by leading research institutions, hospitals, and biotech innovators worldwide.',
  },
];

const certifications = [
  { icon: <ShieldCheck size={28} />, label: 'ISO 9001', sub: 'Quality Management' },
  { icon: <BadgeCheck size={28} />, label: 'CE Marked', sub: 'European Conformity' },
  { icon: <Award size={28} />, label: 'FDA Compliant', sub: 'US Regulatory' },
  { icon: <Target size={28} />, label: 'IEC Standards', sub: 'Electrical Safety' },
];

const teamPoints = [
  '10+ years specializing in precision instruments',
  'In-house R&D team developing cutting-edge technology',
  'PhD-level scientists and engineers on staff',
  'Dedicated calibration and validation specialists',
  'OEM partnerships with leading manufacturers',
];

const AboutUs = () => {
  return (
    <>
      <section className='it-page-hero'>
        <div className='container'>
          <AnimatedText>
            <nav className='it-breadcrumb mb-3'>
              <Link to='/'>Home</Link>
              <ChevronRight size={14} className='it-breadcrumb-sep' />
              <span className='current'>About</span>
            </nav>
          </AnimatedText>

          <div className='row align-items-end g-4'>
            <div className='col-lg-7'>
              <AnimatedText delay={0.05}>
                <span className='it-eyebrow dark mb-3'>About InnoTech</span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h1 className='display-4 mb-3'>
                  Built for Science.
                  <br />
                  Backed by <span className='accent'>US Engineering.</span>
                </h1>
              </AnimatedText>
              <AnimatedText delay={0.18}>
                <p className='lead mb-0' style={{ maxWidth: '620px' }}>
                  Since 2014 we&apos;ve been the trusted lab equipment partner
                  for research institutions, hospitals, and biotech innovators
                  across the United States and beyond.
                </p>
              </AnimatedText>
            </div>

            <div className='col-lg-5'>
              <div className='row g-3'>
                {heroStats.map((s, i) => (
                  <div key={i} className='col-6'>
                    <AnimatedText delay={0.05 * i}>
                      <div
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.14)',
                          borderRadius: '12px',
                          padding: '1rem',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <div
                          style={{
                            color: '#fff',
                            fontWeight: 800,
                            fontSize: '1.6rem',
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {s.num}
                        </div>
                        <div
                          style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.78rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            marginTop: '0.25rem',
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    </AnimatedText>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='it-section-pad bg-white'>
        <div className='container'>
          <div className='row align-items-center g-5'>
            <div className='col-lg-6'>
              <div className='position-relative'>
                <span
                  className='it-img-dots d-none d-md-block'
                  style={{ top: '-26px', left: '-26px' }}
                />
                <div className='it-img-frame'>
                  <img
                    src={chooseUs}
                    alt='InnoTech Laboratory Equipment'
                  />
                </div>

                <div
                  className='it-float-card d-none d-md-flex'
                  style={{ bottom: '24px', right: '-18px' }}
                >
                  <div className='icon cyan'>
                    <Users size={20} />
                  </div>
                  <div>
                    <div className='num'>PhD-Led Team</div>
                    <div className='label'>Scientists &amp; engineers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <AnimatedText>
                <span className='it-eyebrow mb-3'>Our Story</span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h2 className='display-5 it-heading mb-3'>
                  A Decade of <span className='it-heading-grad'>Precision</span>
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.18}>
                <div className='it-divider mb-3' />
              </AnimatedText>
              <AnimatedText delay={0.22}>
                <p
                  style={{
                    color: 'var(--it-muted)',
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                  }}
                  className='mb-3'
                >
                  Founded in 2014 in Lenexa, Kansas, InnoTech Technologies
                  began with a simple conviction — that US labs deserved a
                  partner who treated equipment supply as engineering, not
                  retail.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.28}>
                <p
                  style={{
                    color: 'var(--it-muted)',
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                  }}
                  className='mb-4'
                >
                  Ten years on, we&apos;ve grown into a trusted source for
                  centrifuges, freezers, sterilizers, spectrophotometers, and
                  the full spectrum of precision instruments — backed by
                  US-based technical support and a dedicated calibration team.
                </p>
              </AnimatedText>

              <ul className='list-unstyled mb-4'>
                {teamPoints.map((p, i) => (
                  <AnimatedText key={i} delay={0.04 * i}>
                    <li className='d-flex align-items-start gap-3 mb-2'>
                      <CheckCircle
                        size={18}
                        style={{ color: 'var(--it-blue)', marginTop: '3px' }}
                      />
                      <span
                        style={{
                          color: 'var(--it-text)',
                          fontWeight: 500,
                          lineHeight: 1.55,
                        }}
                      >
                        {p}
                      </span>
                    </li>
                  </AnimatedText>
                ))}
              </ul>

              <AnimatedText>
                <button
                  className='btn-it-primary'
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Talk to a Specialist
                  <ArrowUpRight size={16} />
                </button>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <section className='it-section-pad it-section-soft'>
        <div className='container'>
          <div className='text-center mb-5'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>What Drives Us</span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className='display-5 it-heading mb-2'>
                Our <span className='it-heading-grad'>Core Principles</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.18}>
              <p
                className='mx-auto mb-0'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                }}
              >
                Driving scientific progress through uncompromising quality,
                disciplined engineering, and dedicated US-based service.
              </p>
            </AnimatedText>
          </div>

          <div className='row g-4'>
            {coreValues.map((v, i) => (
              <div key={i} className='col-md-6 col-lg-3'>
                <AnimatedText delay={0.05 * i}>
                  <div className='it-service-card'>
                    <div className='it-service-icon'>{v.icon}</div>
                    <div className='it-service-title'>{v.title}</div>
                    <p className='it-service-desc'>{v.description}</p>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='it-section-pad bg-white'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-5'>
              <AnimatedText>
                <span className='it-eyebrow mb-3'>Our Journey</span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h2 className='display-5 it-heading mb-3'>
                  A Decade of{' '}
                  <span className='it-heading-grad'>Milestones</span>
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.18}>
                <div className='it-divider mb-3' />
              </AnimatedText>
              <AnimatedText delay={0.22}>
                <p
                  style={{
                    color: 'var(--it-muted)',
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                  }}
                  className='mb-4'
                >
                  From a single Kansas warehouse to a global supplier serving
                  500+ institutions — every step earned through reliability,
                  service, and relentless attention to detail.
                </p>
              </AnimatedText>
              <AnimatedText>
                <img
                  src={aboutlab}
                  alt='Lab equipment at InnoTech'
                  className='img-fluid rounded-4 shadow-lg'
                  style={{ maxHeight: '320px', objectFit: 'cover', width: '100%' }}
                />
              </AnimatedText>
            </div>
            <div className='col-lg-7'>
              <div className='it-timeline'>
                {milestones.map((m, i) => (
                  <AnimatedText key={i} delay={0.05 * i}>
                    <div className='it-timeline-item'>
                      <span className='it-timeline-dot' />
                      <div className='it-timeline-year'>{m.year}</div>
                      <div className='it-timeline-title'>{m.title}</div>
                      <p className='it-timeline-desc'>{m.description}</p>
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='it-section-pad it-section-soft'>
        <div className='container'>
          <div className='text-center mb-5'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>Trust &amp; Compliance</span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className='display-5 it-heading mb-2'>
                Certified to{' '}
                <span className='it-heading-grad'>International Standards</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.18}>
              <p
                className='mx-auto mb-0'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                }}
              >
                Every product ships with full documentation, traceability, and
                regulatory paperwork — peace of mind for every audit.
              </p>
            </AnimatedText>
          </div>

          <div className='row g-4'>
            {certifications.map((c, i) => (
              <div key={i} className='col-6 col-lg-3'>
                <AnimatedText delay={0.05 * i}>
                  <div
                    className='bg-white rounded-4 p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center'
                    style={{
                      border: '1px solid var(--it-border)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div
                      className='rounded-3 d-inline-flex align-items-center justify-content-center mb-3'
                      style={{
                        width: '64px',
                        height: '64px',
                        background:
                          'linear-gradient(135deg, var(--it-blue-soft), #fff)',
                        color: 'var(--it-blue)',
                      }}
                    >
                      {c.icon}
                    </div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: 'var(--it-ink)',
                        fontSize: '1.05rem',
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        color: 'var(--it-muted)',
                        fontSize: '0.85rem',
                        marginTop: '0.2rem',
                      }}
                    >
                      {c.sub}
                    </div>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
