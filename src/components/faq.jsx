import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedText from './animatedText';
import { defaultFaqs } from '../data/faqData';

const FAQ = ({ items = defaultFaqs, eyebrow = 'FAQ', title = 'Frequently Asked Questions', description = 'Quick answers to common questions about our equipment, services, and support.' }) => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className='it-section-pad bg-white' id='faq' aria-labelledby='faq-heading'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-5'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>
                <HelpCircle size={13} /> {eyebrow}
              </span>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h2 id='faq-heading' className='display-5 it-heading mb-3'>
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className='it-heading-grad'>{title.split(' ').slice(-1)[0]}</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.16}>
              <div className='it-divider mb-3' />
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  lineHeight: 1.7,
                }}
                className='mb-0'
              >
                {description}
              </p>
            </AnimatedText>
          </div>

          <div className='col-lg-7'>
            <div itemScope itemType='https://schema.org/FAQPage'>
              {items.map((item, i) => {
                const isOpen = openIdx === i;
                return (
                  <AnimatedText key={i} delay={0.04 * i}>
                    <div
                      className={`it-faq-item ${isOpen ? 'open' : ''}`}
                      itemScope
                      itemProp='mainEntity'
                      itemType='https://schema.org/Question'
                    >
                      <button
                        type='button'
                        className='it-faq-q'
                        aria-expanded={isOpen}
                        onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      >
                        <span itemProp='name'>{item.q}</span>
                        <span className='it-faq-toggle' aria-hidden='true'>
                          <ChevronDown size={16} />
                        </span>
                      </button>
                      {isOpen && (
                        <div
                          className='it-faq-a'
                          itemScope
                          itemProp='acceptedAnswer'
                          itemType='https://schema.org/Answer'
                        >
                          <span itemProp='text'>{item.a}</span>
                        </div>
                      )}
                    </div>
                  </AnimatedText>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      q: PropTypes.string.isRequired,
      a: PropTypes.string.isRequired,
    })
  ),
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default FAQ;
