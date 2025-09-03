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
import aboutlab from '/assets/about-lab.jpg';
import AnimatedText from '../components/animatedText';

const AboutUs = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'The centrifuge maintains perfect balance even at 15,000 RPM. Exceptional precision for our cell research.',
      name: 'Dr. Sarah Chen',
      affiliation: 'MIT Bioengineering',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Their sterilization equipment reduced our lab contamination rate by 62%. Game-changing reliability.',
      name: 'Prof. James Wilson',
      affiliation: 'Stanford Medical',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'The -80°C freezer maintains perfect temperature stability, even during power fluctuations.',
      name: 'Dr. Priya Patel',
      affiliation: 'Mayo Clinic Labs',
      rating: 5,
    },
    {
      id: 4,
      quote:
        'Their technical team diagnosed our spectrometer issue remotely in under 15 minutes. Brilliant support!',
      name: 'Dr. Michael Okafor',
      affiliation: 'NIH Research Center',
      rating: 5,
    },
  ];

  return (
    <>
      <section
        className='py-3 bg-secondary text-white'
        style={{ background: 'linear-gradient(135deg, #0056b3, #003366)' }}
      >
        <div className='container py-4 py-lg-5'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1 className='display-4 fw-bold mb-4'>
                Advancing Science Since{' '}
                <span className='text-warning'>2014</span>
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

      <section className='bg-light'>
        <div className='container'>
          <div className='text-center mb-5'>
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
              Our Core Principles
            </h2>
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
                icon: <FlaskConical size={28} className='text-primary' />,
                title: 'Scientific Integrity',
                description: 'Equipment that meets strict research standards',
              },
              {
                icon: <ShieldCheck size={28} className='text-primary' />,
                title: 'Quality Assurance',
                description: 'ISO-certified manufacturing processes',
              },
              {
                icon: <Globe size={28} className='text-primary' />,
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

      <section className='bg-light'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 order-lg-2 mb-4 mb-lg-0'>
              <h2 className='display-6 fw-bold mb-3'>
                <span className='text-primary'>Technical Excellence</span> in
                Lab Solutions
              </h2>

              <ul className='list-unstyled'>
                {[
                  '10+ years specializing in precision instruments',
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
                className='img-fluid rounded-3 shadow mx-auto responsive-img'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='container'>
          <div className='text-center mb-5'>
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
              Trusted Partners in Science
            </h2>
          </div>

          <div className='row g-4'>
            <div className='col-lg-6'>
              <h3 className='h5 fw-semibold mb-2'>Our Technical Team</h3>
              <p className='text-muted mb-4'>
                Our PhD-level scientists and engineers bring decades of combined
                experience in laboratory instrumentation and quality control.
              </p>
              <div className='d-flex flex-wrap gap-3'>
                <AnimatedText>
                  <span className='badge bg-primary bg-opacity-10 text-primary py-2 px-3'>
                    12 Certified Technicians
                  </span>
                </AnimatedText>
                <AnimatedText>
                  <span className='badge bg-primary bg-opacity-10 text-primary py-2 px-3'>
                    24/7 Support Staff
                  </span>
                </AnimatedText>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='row g-3'>
                {[
                  {
                    icon: <ShieldCheck size={38} className='text-success' />,
                    label: 'ISO Certified',
                  },
                  {
                    icon: <FileSearch size={38} className='text-primary' />,
                    label: 'CE Marked',
                  },
                  {
                    icon: <ClipboardCheck size={38} className='text-warning' />,
                    label: 'FDA Approved',
                  },
                ].map((cert, index) => (
                  <div key={index} className='col-4'>
                    <div className='card bg-light p-3 rounded-3 text-center h-100 d-flex flex-column align-items-center justify-content-center'>
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

      <section className='bg-light'>
        <div className='container'>
          <h2
            className='display-6 fw-bold mb-4 text-center'
            style={{
              background: 'linear-gradient(to right, #222, #1a237e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              MozBackgroundClip: 'text',
              MozTextFillColor: 'transparent',
            }}
          >
            Trusted By Research Leaders
          </h2>

          <div className='row g-4'>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className='col-md-6 col-lg-3'>
                <div className='card h-100 border-0 shadow-sm hover-shadow transition-all'>
                  <div className='card-body p-4 text-center'>
                    <div className='mx-auto mb-3'>
                      <div className='bg-gray-100 rounded-circle p-3 d-inline-flex'>
                        <User className='text-gray-500' size={32} />
                      </div>
                    </div>
                    <div className='mb-3 text-warning'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={
                            i < Math.floor(testimonial.rating)
                              ? 'currentColor'
                              : ''
                          }
                        />
                      ))}
                    </div>
                    <p className='mb-3 text-muted'>{testimonial.quote}</p>
                    <h6 className='mb-1'>{testimonial.name}</h6>
                    <small className='text-muted'>
                      {testimonial.affiliation}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
