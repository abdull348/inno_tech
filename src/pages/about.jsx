import {
  FlaskConical,
  ShieldCheck,
  Globe,
  CheckCircle,
  FileSearch,
  ClipboardCheck,
  Star,
  User,
} from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactUs from '../components/contact';
import aboutlab from '/assets/about-lab.jpg';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className='py-3 bg-primary text-white'>
        <div className='container py-4 py-lg-5'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <h1 className='display-4 fw-bold mb-4'>
                Advancing Science Since{' '}
                <span className='text-warning'>2005</span>
              </h1>
              <p className='lead mb-4'>
                InnoTech Technologies has been at the forefront of laboratory
                innovation, providing precision instruments to research
                institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 bg-white'>
        <div className='container py-5'>
          <div className='text-center mb-5'>
            <h2 className='display-5 fw-bold mb-3'>Our Core Principles</h2>
            <div className='mx-auto' style={{ maxWidth: '700px' }}>
              <p className='lead text-muted'>
                Driving scientific progress through uncompromising quality and
                innovation
              </p>
            </div>
          </div>

          <div className='row g-4'>
            {[
              {
                icon: <FlaskConical size={32} className='text-primary' />,
                title: 'Scientific Integrity',
                description: 'Equipment that meets strict research standards',
              },
              {
                icon: <ShieldCheck size={32} className='text-primary' />,
                title: 'Quality Assurance',
                description: 'ISO-certified manufacturing processes',
              },
              {
                icon: <Globe size={32} className='text-primary' />,
                title: 'Global Impact',
                description: 'Serving 500+ institutions across 30 countries',
              },
            ].map((item, index) => (
              <div key={index} className='col-md-4 shadow-sm hover-shadow '>
                <div className='text-center p-4 h-100'>
                  <div className='bg-primary bg-opacity-10 rounded-circle p-3 mb-3 d-inline-flex'>
                    {item.icon}
                  </div>
                  <h3 className='h5 mb-2'>{item.title}</h3>
                  <p className='text-muted mb-0'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-5 bg-light'>
        <div className='container py-5'>
          <div className='row align-items-center'>
            <div className='col-lg-6 order-lg-2 mb-4 mb-lg-0'>
              <h2 className='display-5 fw-bold mb-4'>
                <span className='text-primary'>Technical Excellence</span> in
                Lab Solutions
              </h2>
              <ul className='list-unstyled'>
                {[
                  '15+ years specializing in precision instruments',
                  'In-house R&D team developing cutting-edge technology',
                  'Dedicated calibration and validation specialists',
                  'OEM partnerships with leading manufacturers',
                ].map((item, index) => (
                  <li key={index} className='d-flex mb-3'>
                    <CheckCircle className='text-success me-2 mt-1' size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-lg-6 order-lg-1 d-flex align-items-center justify-content-center'>
              <img
                src={aboutlab}
                alt='Laboratory Equipment'
                className='img-fluid rounded-3 shadow mx-auto'
                style={{ maxWidth: '80%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 bg-white'>
        <div className='container py-5'>
          <div className='text-center mb-5'>
            <h2 className='display-5 fw-bold mb-3'>
              Trusted Partners in Science
            </h2>
          </div>

          <div className='row g-4'>
            <div className='col-lg-6'>
              <h3 className='h4 mb-4'>Our Technical Team</h3>
              <p className='text-muted mb-4'>
                Our PhD-level scientists and engineers bring decades of combined
                experience in laboratory instrumentation and quality control.
              </p>
              <div className='d-flex flex-wrap gap-3'>
                <span className='badge bg-primary bg-opacity-10 text-primary py-2 px-3'>
                  12 Certified Technicians
                </span>
                <span className='badge bg-primary bg-opacity-10 text-primary py-2 px-3'>
                  24/7 Support Staff
                </span>
              </div>
            </div>

            <div className='col-lg-6'>
              <h3 className='h4 mb-4'>Accreditations</h3>
              <div className='row g-3'>
                {[
                  {
                    icon: <ShieldCheck size={48} className='text-success' />,
                    label: 'ISO Certified',
                  },
                  {
                    icon: <FileSearch size={48} className='text-primary' />,
                    label: 'CE Marked',
                  },
                  {
                    icon: <ClipboardCheck size={48} className='text-warning' />,
                    label: 'FDA Approved',
                  },
                ].map((cert, index) => (
                  <div key={index} className='col-4'>
                    <div className='bg-light p-3 rounded-3 text-center h-100 d-flex flex-column align-items-center justify-content-center'>
                      {cert.icon}
                      <small className='mt-2 text-muted'>{cert.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 bg-light'>
        <div className='container py-5'>
          <h2 className='display-5 fw-bold mb-5 text-center'>
            Trusted By Research Leaders
          </h2>
          <div className='row g-4'>
            <div className='col-md-6 col-lg-3'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition-all'>
                <div className='card-body p-4 text-center'>
                  <div className='mx-auto mb-3'>
                    <div className='bg-gray-100 rounded-circle p-3 d-inline-flex'>
                      <User className='text-gray-500' size={40} />
                    </div>
                  </div>
                  <div className='mb-3 text-warning'>
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                  </div>
                  <p className='mb-3 text-muted'>
                    The centrifuge maintains perfect balance even at 15,000 RPM.
                    Exceptional precision for our cell research.
                  </p>
                  <h6 className='mb-1'>Dr. Sarah Chen</h6>
                  <small className='text-muted'>MIT Bioengineering</small>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition-all'>
                <div className='card-body p-4 text-center'>
                  <div className='mx-auto mb-3'>
                    <div className='bg-gray-100 rounded-circle p-3 d-inline-flex'>
                      <User className='text-gray-500' size={40} />
                    </div>
                  </div>
                  <div className='mb-3 text-warning'>
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                  </div>
                  <p className='mb-3 text-muted'>
                    Their sterilization equipment reduced our lab contamination
                    rate by 62%. Game-changing reliability.
                  </p>
                  <h6 className='mb-1'>Prof. James Wilson</h6>
                  <small className='text-muted'>Stanford Medical</small>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition-all'>
                <div className='card-body p-4 text-center'>
                  <div className='mx-auto mb-3'>
                    <div className='bg-gray-100 rounded-circle p-3 d-inline-flex'>
                      <User className='text-gray-500' size={40} />
                    </div>
                  </div>
                  <div className='mb-3 text-warning'>
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} />
                  </div>
                  <p className='mb-3 text-muted'>
                    The -80°C freezer maintains perfect temperature stability,
                    even during power fluctuations.
                  </p>
                  <h6 className='mb-1'>Dr. Priya Patel</h6>
                  <small className='text-muted'>Mayo Clinic Labs</small>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='card h-100 border-0 shadow-sm hover-shadow transition-all'>
                <div className='card-body p-4 text-center'>
                  <div className='mx-auto mb-3'>
                    <div className='bg-gray-100 rounded-circle p-3 d-inline-flex'>
                      <User className='text-gray-500' size={40} />
                    </div>
                  </div>
                  <div className='mb-3 text-warning'>
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                    <Star size={16} fill='currentColor' />
                  </div>
                  <p className='mb-3 text-muted'>
                    Their technical team diagnosed our spectrometer issue
                    remotely in under 15 minutes. Brilliant support!
                  </p>
                  <h6 className='mb-1'>Dr. Michael Okafor</h6>
                  <small className='text-muted'>NIH Research Center</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5 bg-light' id='contact'>
        <div className='container py-5'>
          <ContactUs />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
