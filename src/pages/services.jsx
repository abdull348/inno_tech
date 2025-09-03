import {
  FlaskConical,
  ShieldCheck,
  Globe,
  Award,
  HardHat,
  LifeBuoy,
  Check,
} from 'lucide-react';
import labtechnician from '/assets/lab-technitian.webp';
import AnimatedText from '../components/animatedText';

const ServicesPage = () => {
  const equipmentCategories = [
    {
      title: 'Sterilization & Safety',
      items: [
        'Autoclave',
        'Biosafety Cabinet',
        'Laminar Flow',
        'Fume Hood',
        'PCR Cabinet',
      ],
      icon: <ShieldCheck size={24} className='text-primary' />,
    },
    {
      title: 'Centrifugation',
      items: ['Centrifuge', 'Refrigerated Centrifuge'],
      icon: <HardHat size={24} className='text-primary' />,
    },
    {
      title: 'Temperature Control',
      items: [
        'Refrigerator',
        'Freezer',
        'Incubator',
        'CO2 Incubator',
        'Oven',
        'Water Bath',
      ],
      icon: <FlaskConical size={24} className='text-primary' />,
    },
    {
      title: 'Sample Preparation',
      items: [
        'Vortex',
        'Stirrer',
        'Hot Plate',
        'Heat Block',
        'Shaker',
        'Sonicator',
      ],
      icon: <Award size={24} className='text-primary' />,
    },
    {
      title: 'Analysis & Measurement',
      items: [
        'Spectrophotometer',
        'Meter',
        'Flame Photometer',
        'Microscope',
        'Analyzer',
      ],
      icon: <LifeBuoy size={24} className='text-primary' />,
    },
  ];

  const features = [
    {
      id: 1,
      icon: <Globe size={24} />,
      title: 'Global Support Network',
      description:
        '24/7 technical assistance with local service engineers in major research hubs worldwide.',
    },
    {
      id: 2,
      icon: <ShieldCheck size={24} />,
      title: 'Certified Quality',
      description:
        'All equipment meets ISO & IEC standards with full documentation and traceability.',
    },
    {
      id: 3,
      icon: <Award size={24} />,
      title: 'OEM Partnerships',
      description:
        'Direct manufacturer relationships ensuring genuine parts, best pricing, and fast delivery.',
    },
  ];

  return (
    <main className='bg-white'>
      <section
        className='py-3 bg-secondary text-white'
        style={{ background: 'linear-gradient(135deg, #0056b3, #003366)' }}
      >
        <div className='container py-4 py-lg-5'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h1 className='display-4 fw-bold mb-4'>
                Precision Laboratory Solutions
              </h1>
              <p className='lead opacity-90 mb-4'>
                Trusted provider of high-performance lab equipment for research,
                healthcare, and industrial applications
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light'>
        <div className='container'>
          <div className='text-center mb-5'>
            <AnimatedText>
              <span className='badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill mb-3 fs-7'>
                Our Expertise
              </span>
            </AnimatedText>
            <h2
              className='display-6 fw-bold mb-3'
              style={{
                background: 'linear-gradient(to right, #222, #1a237e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Comprehensive Equipment Portfolio
            </h2>
            <p
              className='lead text-muted mx-auto'
              style={{ maxWidth: '700px' }}
            >
              We supply and support the full spectrum of laboratory instruments
              for your research, diagnostics, and innovation.
            </p>
          </div>

          <div className='row g-4'>
            {equipmentCategories.map((category, index) => (
              <div key={index} className='col-lg-4 col-md-6'>
                <div className='card border-0 shadow-sm h-100 hover-shadow-lg transition-all duration-300 rounded-3'>
                  <div className='card-body p-4'>
                    <div className='d-flex align-items-center mb-3'>
                      <div className='bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-2'>
                        {category.icon}
                      </div>
                      <h3 className='h5 mb-0 fw-semibold'>{category.title}</h3>
                    </div>
                    <ul className='list-unstyled mb-0'>
                      {category.items.map((item, i) => (
                        <li key={i} className='mb-2 d-flex align-items-center'>
                          <Check
                            size={16}
                            className='text-success me-2 flex-shrink-0'
                          />
                          <medium className='text-muted'>{item}</medium>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='container'>
          <div className='text-center mb-5'>
            <h2
              className='display-6 fw-bold mb-3'
              style={{
                background: 'linear-gradient(to right, #222, #1a237e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Complete Equipment Catalog
            </h2>
            <p
              className='lead text-muted mx-auto'
              style={{ maxWidth: '700px' }}
            >
              Browse our extensive range of precision instruments and
              accessories — all available with technical support and global
              shipping.
            </p>
          </div>

          <div className='bg-light border rounded-3 p-2 p-lg-4 shadow-sm'>
            <div className='row g-sm-0 g-lg-3'>
              {[
                'Autoclave',
                'Centrifuge',
                'Refrigerated Centrifuge',
                'Refrigerator',
                'Freezer',
                'Freeze Dryer',
                'Chiller',
                'Thermal Cycler',
                'RT Thermal Cycler',
                'Biosafety Cabinet',
                'Laminar Flow',
                'Fume Hood',
                'PCR Cabinet',
                'Plant Growth Chamber',
                'Rotary Evaporator',
                'Analyzer',
                'Reader & Washer',
                'Spectrophotometer',
                'Meter',
                'Flame Photometer',
                'Incubator',
                'CO2 Incubator',
                'Oven',
                'Vortex',
                'Water Bath',
                'Dry Bath',
                'Stirrer',
                'Hot Plate',
                'Heat Block',
                'Microscope',
                'Nitrogen Container',
                'Ice Maker',
                'Muffle Furnace',
                'Shaker',
                'Sonicator',
                'Vacuum Pump',
              ].map((item, index) => (
                <div key={index} className='col-md-4 col-sm-6'>
                  <div className='d-flex align-items-center text-dark p-0 p-lg-1 rounded hover-bg-light'>
                    <Check size={16} className='text-primary me-2' />
                    <medium>{item}</medium>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-light'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-6 text-center'>
              <img
                src={labtechnician}
                alt='Certified Lab Technician'
                className='img-fluid rounded-3 shadow-sm'
                style={{ maxWidth: '90%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
            <div className='col-lg-6'>
              <AnimatedText>
                <span className='badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill mb-3'>
                  Why Choose Us
                </span>
              </AnimatedText>
              <h2
                className='display-6 fw-bold mb-3'
                style={{
                  background: 'linear-gradient(to right, #222, #1a237e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Beyond Equipment Supply
              </h2>

              {features.map((feature) => (
                <div key={feature.id} className='d-flex mb-4'>
                  <div className='flex-shrink-0 me-4'>
                    <div
                      className='bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-flex align-items-center justify-content-center'
                      style={{ width: '52px', height: '52px' }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className='h6 mb-1 fw-semibold'>{feature.title}</h3>
                    <p className='text-muted mb-0'>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className='py-5 bg-secondary text-white'
        style={{ background: 'linear-gradient(135deg, #0056b3, #003366)' }}
      >
        <div className='container py-5 text-center'>
          <h2 className='display-6 fw-bold mb-3'>Ready to Equip Your Lab?</h2>
          <p
            className='lead opacity-90 mb-5 mx-auto'
            style={{ maxWidth: '700px' }}
          >
            Our technical specialists are ready to assist with equipment
            selection, installation, and support.
          </p>
          <div className='d-flex flex-wrap justify-content-center gap-3'>
            <button
              className='btn btn-light btn-md px-4 py-2 rounded-pill shadow-sm'
              onClick={(e) => {
                e.stopPropagation();
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Technical Consultation
            </button>
            <button className='btn btn-outline-light btn-md px-4 py-2 rounded-pill'>
              Download Full Catalog
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
