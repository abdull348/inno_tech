import {
  FlaskConical,
  ShieldCheck,
  Globe,
  Award,
  HardHat,
  LifeBuoy,
  Check,
} from 'lucide-react';
import Navbar from '../components/navbar';
import ContactUs from '../components/contact';
import Footer from '../components/footer';
import labtechnician from '/assets/lab-technitian.jpg';

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
      icon: <ShieldCheck size={32} />,
    },
    {
      title: 'Centrifugation',
      items: ['Centrifuge', 'Refrigerated Centrifuge'],
      icon: <HardHat size={32} />,
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
      icon: <FlaskConical size={32} />,
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
      icon: <Award size={32} />,
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
      icon: <LifeBuoy size={32} />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className='bg-white'>
        <section className='py-3 bg-primary text-white'>
          <div className='container py-5'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <h1 className='display-4 fw-bold mb-4'>
                  Precision Laboratory Solutions
                </h1>
                <p className='lead mb-4'>
                  Trusted provider of high-performance lab equipment for
                  research, healthcare, and industrial applications
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-5 bg-light'>
          <div className='container py-4'>
            <div className='text-center mb-5'>
              <span className='badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2'>
                Our Expertise
              </span>
              <h2 className='display-5 fw-bold mb-3'>
                Comprehensive Equipment Portfolio
              </h2>
              <p
                className='lead text-muted mx-auto'
                style={{ maxWidth: '700px' }}
              >
                We supply and support the full spectrum of laboratory
                instruments for your research needs
              </p>
            </div>

            <div className='row g-4'>
              {equipmentCategories.map((category, index) => (
                <div key={index} className='col-lg-4 col-md-6 mx-auto'>
                  <div className='card h-100 border-0 shadow-sm hover-lift'>
                    <div className='card-body p-4'>
                      <div className='bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 d-inline-flex'>
                        {category.icon}
                      </div>
                      <h3 className='h4 mb-3'>{category.title}</h3>
                      <ul className='list-unstyled'>
                        {category.items.map((item, i) => (
                          <li key={i} className='mb-2 d-flex'>
                            <Check
                              size={18}
                              className='text-success me-2 mt-1 bg-success bg-opacity-10 rounded-circle'
                            />
                            <span>{item}</span>
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

        <section className='py-5 bg-light'>
          <div className='container py-4'>
            <div className='text-center mb-5'>
              <h2 className='display-5 fw-bold mb-3'>
                Complete Equipment Catalog
              </h2>
              <p
                className='lead text-muted mx-auto'
                style={{ maxWidth: '700px' }}
              >
                Browse our extensive range of laboratory instruments and
                accessories
              </p>
            </div>

            <div className='bg-white p-4 rounded-3 shadow-sm'>
              <div className='row'>
                {[
                  'Autoclave',
                  'Centrifuge',
                  'Refrigerated Centrifuge',
                  'Refrigerator',
                  'Freezer',
                  'Freeze Dryer',
                  'Chiller',
                  'Thermal Cycler',
                  'Rt Thermal Cycler',
                  'Biosafety Cabinet',
                  'Laminar Flow',
                  'Fume Hood',
                  'Pcr Cabinet',
                  'Plant Growth Chamber',
                  'Rotary Evaporator',
                  'Analyzer',
                  'Reader & Washer',
                  'Spectrophotometer',
                  'Meter',
                  'Flame Photometer',
                  'Incubator',
                  'Co2 Incubator',
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
                  <div key={index} className='col-md-4 col-sm-6 mb-2'>
                    <div className='d-flex align-items-center'>
                      <Check
                        size={16}
                        className='text-primary me-2 bg-primary bg-opacity-10 rounded-circle'
                      />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='py-5 bg-white'>
          <div className='container py-4'>
            <div className='row g-4 align-items-center'>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img
                  src={labtechnician}
                  alt='Technical Support'
                  className='img-fluid rounded-3 shadow'
                  style={{ maxWidth: '80%', height: 'auto' }}
                />
              </div>
              <div className='col-lg-6'>
                <span className='badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2'>
                  Why Choose Us
                </span>
                <h2 className='display-5 fw-bold mb-4'>
                  Beyond Equipment Supply
                </h2>
                <div className='d-flex mb-4'>
                  <div className='me-4'>
                    <div className='bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 d-inline-flex'>
                      <Globe size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className='h4 mb-2'>Global Support Network</h3>
                    <p className='text-muted mb-0'>
                      24/7 technical assistance with local service engineers in
                      major research hubs worldwide
                    </p>
                  </div>
                </div>
                <div className='d-flex mb-4'>
                  <div className='me-4'>
                    <div className='bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 d-inline-flex'>
                      <ShieldCheck size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className='h4 mb-2'>Certified Quality</h3>
                    <p className='text-muted mb-0'>
                      All equipment meets ISO & IEC standards with full
                      documentation
                    </p>
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='me-4'>
                    <div className='bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 d-inline-flex'>
                      <Award size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className='h4 mb-2'>OEM Partnerships</h3>
                    <p className='text-muted mb-0'>
                      Direct manufacturer relationships ensuring genuine parts
                      and best pricing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-5 bg-primary text-white'>
          <div className='container py-4 text-center'>
            <h2 className='display-5 fw-bold mb-4'>Ready to Equip Your Lab?</h2>
            <p className='lead mb-5 mx-auto' style={{ maxWidth: '700px' }}>
              Our technical specialists are available to discuss your equipment
              requirements and application needs
            </p>
            <div className='d-flex flex-wrap justify-content-center gap-3'>
              <a
                href='#contact'
                className='btn btn-light btn-lg px-3 py-2 fw-semibold'
              >
                Request Consultation
              </a>
              <a href='#' className='btn btn-outline-light btn-lg px-3 py-2'>
                Download Full Catalog
              </a>
            </div>
          </div>
        </section>
        <section className='py-5 bg-light' id='contact'>
          <div className='container py-5'>
            <ContactUs />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
