import {
  FlaskConical,
  ShieldCheck,
  Globe,
  Award,
  HardHat,
  LifeBuoy,
  Check,
  Wrench,
  GraduationCap,
  Truck,
  ClipboardCheck,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import labtechnician from '/assets/lab-technitian.webp';
import AnimatedText from '../components/animatedText';

const serviceOfferings = [
  {
    icon: <Truck size={24} />,
    title: 'Equipment Supply',
    desc: 'OEM-direct sourcing of certified lab instruments — from centrifuges to spectrophotometers.',
    items: ['Genuine parts', 'Best pricing', 'Fast delivery'],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Installation & Setup',
    desc: 'On-site installation, calibration, and validation by certified field engineers.',
    items: ['IQ/OQ/PQ protocols', 'Site survey', 'Day-1 training'],
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Calibration & Validation',
    desc: 'Routine calibration with full traceability — keep your equipment audit-ready year-round.',
    items: ['ISO traceability', 'Annual contracts', 'Loaner units'],
  },
  {
    icon: <LifeBuoy size={24} />,
    title: 'Maintenance & Repair',
    desc: '24/7 technical support with regional engineers and 48-hour emergency dispatch.',
    items: ['Preventive plans', 'Genuine spares', 'Rapid response'],
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Training Programs',
    desc: 'Hands-on user training and operator certification for new equipment and protocols.',
    items: ['On-site sessions', 'Custom curriculum', 'Certification'],
  },
  {
    icon: <Award size={24} />,
    title: 'OEM Partnerships',
    desc: 'Direct relationships with leading manufacturers — never grey-market, always supported.',
    items: ['Authorized resale', 'Warranty support', 'Tech updates'],
  },
];

const equipmentCategories = [
  {
    title: 'Sterilization & Safety',
    icon: <ShieldCheck size={22} />,
    items: ['Autoclave', 'Biosafety Cabinet', 'Laminar Flow', 'Fume Hood', 'PCR Cabinet'],
  },
  {
    title: 'Centrifugation',
    icon: <HardHat size={22} />,
    items: ['Centrifuge', 'Refrigerated Centrifuge', 'Micro Centrifuge'],
  },
  {
    title: 'Temperature Control',
    icon: <FlaskConical size={22} />,
    items: ['Refrigerator', 'Freezer', 'Incubator', 'CO2 Incubator', 'Oven', 'Water Bath'],
  },
  {
    title: 'Sample Preparation',
    icon: <Award size={22} />,
    items: ['Vortex', 'Stirrer', 'Hot Plate', 'Heat Block', 'Shaker', 'Sonicator'],
  },
  {
    title: 'Analysis & Measurement',
    icon: <LifeBuoy size={22} />,
    items: ['Spectrophotometer', 'Meter', 'Flame Photometer', 'Microscope', 'Analyzer'],
  },
  {
    title: 'Cryogenics & Storage',
    icon: <Globe size={22} />,
    items: ['Liquid Nitrogen Container', 'Freeze Dryer', '-86°C Freezer', 'Cryotank'],
  },
];

const fullCatalog = [
  'Autoclave', 'Centrifuge', 'Refrigerated Centrifuge', 'Refrigerator', 'Freezer',
  'Freeze Dryer', 'Chiller', 'Thermal Cycler', 'RT Thermal Cycler',
  'Biosafety Cabinet', 'Laminar Flow', 'Fume Hood', 'PCR Cabinet',
  'Plant Growth Chamber', 'Rotary Evaporator', 'Analyzer', 'Reader & Washer',
  'Spectrophotometer', 'Meter', 'Flame Photometer', 'Incubator', 'CO2 Incubator',
  'Oven', 'Vortex', 'Water Bath', 'Dry Bath', 'Stirrer', 'Hot Plate',
  'Heat Block', 'Microscope', 'Nitrogen Container', 'Ice Maker', 'Muffle Furnace',
  'Shaker', 'Sonicator', 'Vacuum Pump',
];

const processSteps = [
  {
    n: '01',
    title: 'Consult',
    desc: 'Tell us about your application, throughput, and constraints. We map options to your real needs.',
  },
  {
    n: '02',
    title: 'Specify',
    desc: 'Receive a detailed proposal with model recommendations, lead times, and total cost of ownership.',
  },
  {
    n: '03',
    title: 'Deliver & Install',
    desc: 'On-site installation, calibration, and operator training by certified field engineers.',
  },
  {
    n: '04',
    title: 'Support',
    desc: 'Ongoing maintenance, validation, and 24/7 technical support — your lab never stops.',
  },
];

const features = [
  {
    icon: <Globe size={22} />,
    title: 'Global Support Network',
    description:
      '24/7 technical assistance with US-based engineers and regional service teams worldwide.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Certified Quality',
    description:
      'All equipment meets ISO &amp; IEC standards with full documentation and traceability.',
  },
  {
    icon: <Award size={22} />,
    title: 'OEM Partnerships',
    description:
      'Direct manufacturer relationships ensuring genuine parts, best pricing, and fast delivery.',
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className='it-page-hero'>
        <div className='container'>
          <AnimatedText>
            <nav className='it-breadcrumb mb-3'>
              <Link to='/'>Home</Link>
              <ChevronRight size={14} className='it-breadcrumb-sep' />
              <span className='current'>Services</span>
            </nav>
          </AnimatedText>

          <div className='row align-items-end g-4'>
            <div className='col-lg-8'>
              <AnimatedText delay={0.05}>
                <span className='it-eyebrow dark mb-3'>Our Services</span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h1 className='display-4 mb-3'>
                  End-to-End <span className='accent'>Lab Equipment</span>
                  <br />
                  Services for US Research
                </h1>
              </AnimatedText>
              <AnimatedText delay={0.18}>
                <p className='lead mb-0' style={{ maxWidth: '720px' }}>
                  Beyond supply — we install, calibrate, validate, and support
                  every instrument in our catalog. Trusted by 500+ research
                  institutions for the work that comes after the sale.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <section className='it-section-pad bg-white'>
        <div className='container'>
          <div className='text-center mb-5'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>What We Do</span>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h2 className='display-5 it-heading mb-2'>
                Complete <span className='it-heading-grad'>Service Portfolio</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.16}>
              <p
                className='mx-auto mb-0'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                }}
              >
                Six integrated service lines designed to keep your lab running
                at peak performance from day one through year ten.
              </p>
            </AnimatedText>
          </div>

          <div className='row g-4'>
            {serviceOfferings.map((s, i) => (
              <div key={i} className='col-md-6 col-lg-4'>
                <AnimatedText delay={0.04 * i}>
                  <div className='it-service-card'>
                    <div className='it-service-icon'>{s.icon}</div>
                    <div className='it-service-title'>{s.title}</div>
                    <p className='it-service-desc'>{s.desc}</p>
                    <ul className='it-service-list'>
                      {s.items.map((it, idx) => (
                        <li key={idx}>
                          <Check size={14} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='it-section-pad it-section-soft'>
        <div className='container'>
          <div className='text-center mb-5'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>Equipment Categories</span>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h2 className='display-5 it-heading mb-2'>
                Comprehensive{' '}
                <span className='it-heading-grad'>Equipment Portfolio</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.16}>
              <p
                className='mx-auto mb-0'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                }}
              >
                We supply and support the full spectrum of laboratory
                instruments for research, diagnostics, and innovation.
              </p>
            </AnimatedText>
          </div>

          <div className='row g-4'>
            {equipmentCategories.map((c, i) => (
              <div key={i} className='col-md-6 col-lg-4'>
                <AnimatedText delay={0.04 * i}>
                  <div className='it-service-card'>
                    <div className='d-flex align-items-center gap-3 mb-3'>
                      <div className='it-service-icon mb-0'>{c.icon}</div>
                      <div className='it-service-title mb-0'>{c.title}</div>
                    </div>
                    <ul className='list-unstyled mb-0'>
                      {c.items.map((it, idx) => (
                        <li
                          key={idx}
                          className='d-flex align-items-center gap-2 py-1'
                          style={{
                            color: 'var(--it-text)',
                            fontSize: '0.92rem',
                          }}
                        >
                          <Check size={14} style={{ color: 'var(--it-blue)' }} />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='it-section-pad bg-white'>
        <div className='container'>
          <div className='text-center mb-5'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>How We Work</span>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h2 className='display-5 it-heading mb-2'>
                A simple,{' '}
                <span className='it-heading-grad'>proven process</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.16}>
              <p
                className='mx-auto mb-0'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                }}
              >
                From first conversation to long-term support — four steps that
                turn a purchase into a partnership.
              </p>
            </AnimatedText>
          </div>

          <div className='row g-4'>
            {processSteps.map((p, i) => (
              <div key={i} className='col-md-6 col-lg-3'>
                <AnimatedText delay={0.05 * i}>
                  <div className='it-process-step'>
                    <div className='it-process-num'>{p.n}</div>
                    <div className='it-process-title'>{p.title}</div>
                    <p className='it-process-desc'>{p.desc}</p>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='it-section-pad it-section-soft'>
        <div className='container'>
          <div className='text-center mb-5'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>Complete Catalog</span>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h2 className='display-5 it-heading mb-2'>
                Every instrument we{' '}
                <span className='it-heading-grad'>supply &amp; support</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.16}>
              <p
                className='mx-auto mb-0'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  maxWidth: '640px',
                  lineHeight: 1.65,
                }}
              >
                Don&apos;t see what you need? Our team can source virtually any
                lab instrument with full technical and warranty backing.
              </p>
            </AnimatedText>
          </div>

          <AnimatedText>
            <div
              className='p-3 p-lg-4 rounded-4'
              style={{
                background: '#fff',
                border: '1px solid var(--it-border)',
              }}
            >
              <div className='row g-2'>
                {fullCatalog.map((item, i) => (
                  <div key={i} className='col-md-4 col-sm-6'>
                    <div className='it-catalog-item'>
                      <Check size={14} />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>

      <section className='it-section-pad bg-white'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-6'>
              <div className='position-relative'>
                <span
                  className='it-img-dots d-none d-md-block'
                  style={{ top: '-26px', left: '-26px' }}
                />
                <div className='it-img-frame'>
                  <img src={labtechnician} alt='Certified Lab Technician' />
                </div>
                <div
                  className='it-float-card d-none d-md-flex'
                  style={{ bottom: '24px', right: '-18px' }}
                >
                  <div className='icon'>
                    <Wrench size={20} />
                  </div>
                  <div>
                    <div className='num'>Field Engineers</div>
                    <div className='label'>On-site service</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <AnimatedText>
                <span className='it-eyebrow mb-3'>Why Choose Us</span>
              </AnimatedText>
              <AnimatedText delay={0.1}>
                <h2 className='display-5 it-heading mb-3'>
                  Beyond Equipment{' '}
                  <span className='it-heading-grad'>Supply</span>
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
                  We don&apos;t just ship boxes. We partner with your team to
                  ensure every instrument runs reliably for years — backed by
                  certified engineers and the spare parts to match.
                </p>
              </AnimatedText>

              <div className='mb-4'>
                {features.map((f, i) => (
                  <AnimatedText key={i} delay={0.05 * i}>
                    <div className='feature-item'>
                      <div className='feature-icon'>{f.icon}</div>
                      <div>
                        <div className='feature-title'>{f.title}</div>
                        <p
                          className='feature-desc'
                          dangerouslySetInnerHTML={{ __html: f.description }}
                        />
                      </div>
                    </div>
                  </AnimatedText>
                ))}
              </div>

              <AnimatedText>
                <button
                  className='btn-it-primary'
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Request a Service Quote
                  <ArrowUpRight size={16} />
                </button>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
