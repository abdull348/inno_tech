import { Star } from 'lucide-react';
import AnimatedText from './animatedText';

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
      'Their sterilization equipment cut our lab contamination rate by 62%. Game-changing reliability for our pathology workflows.',
    name: 'Prof. James Wilson',
    affiliation: 'Stanford Medical',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'The -80°C freezer maintains perfect temperature stability — even during power fluctuations. Sample integrity has never been better.',
    name: 'Dr. Priya Patel',
    affiliation: 'Mayo Clinic Labs',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'Their technical team diagnosed our spectrometer issue remotely in under 15 minutes. Brilliant US-based support.',
    name: 'Dr. Michael Okafor',
    affiliation: 'NIH Research Center',
    rating: 5,
  },
];

const initials = (name) =>
  name
    .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/i, '')
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Testimonials = () => {
  return (
    <section className='it-section-pad it-section-soft' id='testimonials'>
      <div className='container'>
        <div className='text-center mb-5'>
          <AnimatedText>
            <span className='it-eyebrow mb-3'>Trusted by Research Leaders</span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className='display-5 it-heading mb-2'>
              What <span className='it-heading-grad'>US Labs</span> Say About Us
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
              From Ivy League research labs to leading medical centers, our
              equipment supports the work that moves science forward.
            </p>
          </AnimatedText>
        </div>

        <div className='row g-4'>
          {testimonials.map((t, i) => (
            <div key={t.id} className='col-md-6 col-lg-3'>
              <AnimatedText delay={0.05 * i}>
                <div className='testimonial-card'>
                  <span className='testimonial-quote-mark'>&ldquo;</span>
                  <div className='testimonial-stars'>
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={14} fill='currentColor' />
                    ))}
                  </div>
                  <p className='testimonial-quote'>{t.quote}</p>
                  <div className='testimonial-meta'>
                    <div className='testimonial-avatar'>{initials(t.name)}</div>
                    <div>
                      <div className='testimonial-name'>{t.name}</div>
                      <div className='testimonial-affil'>{t.affiliation}</div>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
