import { UserRound, Download, ShieldCheck, ChevronRight } from 'lucide-react';
import Hero1 from '/assets/Hero1.webp';
import Hero2 from '/assets/Hero2.webp';
import Hero3 from '/assets/Hero3.webp';
import Hero4 from '/assets/Hero4.webp';
import AnimatedText from './animatedText';

const heroStats = [
  { num: '500+', label: 'Institutions Served' },
  { num: '30+', label: 'Countries Shipped' },
  { num: '10+', label: 'Years of Expertise' },
  { num: '24/7', label: 'Technical Support' },
];

const Hero = () => {
  return (
    <section className='container-fluid position-relative hero-section overflow-hidden p-0'>
      <div
        id='labCarousel'
        className='carousel slide position-absolute top-0 start-0 w-100 h-100'
        data-bs-ride='carousel'
        data-bs-interval='4500'
        style={{ zIndex: 0 }}
      >
        <div className='carousel-inner h-100'>
          {[Hero1, Hero2, Hero3, Hero4].map((img, index) => (
            <div
              key={index}
              className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={img}
                alt={`Laboratory Equipment ${index + 1}`}
                className='w-100 h-100'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className='position-absolute top-0 start-0 w-100 h-100 hero-overlay'
        style={{ zIndex: 1 }}
      />

      <div
        className='position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center'
        style={{ zIndex: 2 }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-xl-8'>
              <AnimatedText>
                <span className='it-eyebrow dark mb-3'>
                  <ShieldCheck size={14} />
                  Trusted Lab Partner — Made for US Research
                </span>
              </AnimatedText>

              <AnimatedText delay={0.1}>
                <h1 className='display-3 hero-tagline mb-3'>
                  Precision <span className='accent'>Laboratory</span>
                  <br className='d-none d-md-block' /> Equipment for Critical
                  Research
                </h1>
              </AnimatedText>

              <AnimatedText delay={0.2}>
                <p className='hero-description mb-4 col-lg-10'>
                  ISO-certified instruments backed by US-based technical
                  consultation, full documentation, and a 48-hour emergency
                  dispatch network — trusted by 500+ institutions across
                  diagnostics, pharma, and biotech.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.3}>
                <div className='d-flex flex-wrap gap-3'>
                  <button
                    className='btn-it-primary'
                    onClick={(e) => {
                      e.stopPropagation();
                      document
                        .getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <UserRound size={16} />
                    Request a Consultation
                    <ChevronRight size={16} />
                  </button>
                  <button className='btn-it-ghost d-none d-md-inline-flex'>
                    <Download size={16} />
                    Download Full Catalog
                  </button>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.45}>
                <div className='hero-stats row g-3'>
                  {heroStats.map((s, i) => (
                    <div key={i} className='col-6 col-md-3'>
                      <div className='hero-stat-num'>{s.num}</div>
                      <div className='hero-stat-label'>{s.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>

      <div
        className='position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-md-block'
        style={{ zIndex: 3 }}
      >
        <div className='carousel-indicators position-static'>
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              type='button'
              data-bs-target='#labCarousel'
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
