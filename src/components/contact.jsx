import { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import AnimatedText from './animatedText';

const inquiryTypes = [
  'Equipment Inquiry',
  'Technical Support',
  'Partnership Opportunity',
  'Service Request',
  'Other',
];

const initialForm = {
  name: '',
  email: '',
  institution: '',
  phone: '',
  subject: '',
  message: '',
  website: '',
};

function ContactUs() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const updateField = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try again.');
    }
  };

  return (
    <section className='it-section-pad it-section-soft' id='contact'>
      <div className='container'>
        <div className='text-center mb-5'>
          <AnimatedText>
            <span className='it-eyebrow mb-3'>Get in Touch</span>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className='display-5 it-heading mb-2'>
              Talk to Our{' '}
              <span className='it-heading-grad'>Technical Team</span>
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
              Specialists ready to help with specifications, quotes, and
              installation. Most inquiries answered within one business day.
            </p>
          </AnimatedText>
        </div>

        <div className='row g-4 align-items-stretch'>
          <div className='col-lg-5'>
            <AnimatedText>
              <div className='contact-side'>
                <h3
                  style={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.35rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  Contact Information
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '0.5rem',
                  }}
                >
                  Reach our US-based team directly. We respond to every inquiry
                  with a dedicated specialist — never a contact-form auto-reply.
                </p>

                <div className='mt-3'>
                  <div className='contact-info-row'>
                    <div className='contact-info-icon'>
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className='contact-info-label'>Call Us</div>
                      <a href='tel:+18189431786' className='contact-info-value'>
                        +1 (818) 943-1786
                      </a>
                    </div>
                  </div>

                  <div className='contact-info-row'>
                    <div className='contact-info-icon'>
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className='contact-info-label'>Email Us</div>
                      <a
                        href='mailto:sales@innotechtechnologies.us'
                        className='contact-info-value d-block'
                      >
                        sales@innotechtechnologies.us
                      </a>
                      <a
                        href='mailto:info@innotechtechnologies.us'
                        className='contact-info-value d-block mt-1'
                      >
                        info@innotechtechnologies.us
                      </a>
                    </div>
                  </div>

                  <div className='contact-info-row'>
                    <div className='contact-info-icon'>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className='contact-info-label'>Headquarters</div>
                      <div
                        style={{
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }}
                      >
                        Lenexa, KS 66215, USA
                      </div>
                    </div>
                  </div>

                  <div className='contact-info-row'>
                    <div className='contact-info-icon'>
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className='contact-info-label'>Business Hours</div>
                      <div
                        style={{
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }}
                      >
                        Mon – Fri · 8 AM – 6 PM EST
                      </div>
                      <div
                        style={{
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: '0.82rem',
                          marginTop: '2px',
                        }}
                      >
                        24/7 emergency technical support
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='mt-4 pt-3 d-flex align-items-center gap-2'
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '0.85rem',
                  }}
                >
                  <ShieldCheck size={16} style={{ color: '#7ad3ff' }} />
                  Your information is confidential and never shared.
                </div>
              </div>
            </AnimatedText>
          </div>

          <div className='col-lg-7'>
            <AnimatedText delay={0.05}>
              <div className='contact-card'>
                <h3
                  style={{
                    color: 'var(--it-ink)',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  Send Us a Message
                </h3>
                <p
                  style={{
                    color: 'var(--it-muted)',
                    fontSize: '0.92rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  Tell us about your equipment needs — we&apos;ll reply within
                  24 hours.
                </p>

                {status === 'success' && (
                  <div
                    role='status'
                    className='d-flex align-items-start gap-2 p-3 mb-3 rounded-3'
                    style={{
                      background: '#e9f7ee',
                      border: '1px solid #b9e1c7',
                      color: '#0f6b3a',
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      style={{ marginTop: '2px', flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontWeight: 700 }}>Message sent.</div>
                      <div style={{ fontSize: '0.9rem' }}>
                        Thanks — our team will get back to you within one
                        business day.
                      </div>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    role='alert'
                    className='d-flex align-items-start gap-2 p-3 mb-3 rounded-3'
                    style={{
                      background: '#fdecec',
                      border: '1px solid #f3c7c7',
                      color: '#a82424',
                    }}
                  >
                    <AlertCircle
                      size={18}
                      style={{ marginTop: '2px', flexShrink: 0 }}
                    />
                    <div>
                      <div style={{ fontWeight: 700 }}>Couldn&apos;t send.</div>
                      <div style={{ fontSize: '0.9rem' }}>
                        {errorMsg ||
                          'Please try again, or email us directly at info@innotechtechnologies.us.'}
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={onSubmit} noValidate>
                  <input
                    type='text'
                    name='website'
                    tabIndex={-1}
                    autoComplete='off'
                    value={form.website}
                    onChange={updateField('website')}
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      width: '1px',
                      height: '1px',
                      opacity: 0,
                    }}
                    aria-hidden='true'
                  />

                  <div className='row g-3'>
                    <div className='col-md-6'>
                      <label htmlFor='name' className='it-form-label'>
                        Your Name
                      </label>
                      <input
                        type='text'
                        className='it-form-control'
                        id='name'
                        placeholder='Dr. John Smith'
                        required
                        value={form.name}
                        onChange={updateField('name')}
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='email' className='it-form-label'>
                        Email Address
                      </label>
                      <input
                        type='email'
                        className='it-form-control'
                        id='email'
                        placeholder='john.smith@lab.edu'
                        required
                        value={form.email}
                        onChange={updateField('email')}
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='institution' className='it-form-label'>
                        Institution / Company
                      </label>
                      <input
                        type='text'
                        className='it-form-control'
                        id='institution'
                        placeholder='Boston Research Institute'
                        value={form.institution}
                        onChange={updateField('institution')}
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='phone' className='it-form-label'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        className='it-form-control'
                        id='phone'
                        placeholder='+1 (123) 456-7890'
                        value={form.phone}
                        onChange={updateField('phone')}
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className='col-12'>
                      <label htmlFor='subject' className='it-form-label'>
                        Inquiry Type
                      </label>
                      <select
                        className='it-form-select'
                        id='subject'
                        required
                        value={form.subject}
                        onChange={updateField('subject')}
                        disabled={status === 'sending'}
                      >
                        <option value='' disabled>
                          Select inquiry type
                        </option>
                        {inquiryTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className='col-12'>
                      <label htmlFor='message' className='it-form-label'>
                        Message
                      </label>
                      <textarea
                        className='it-form-control'
                        id='message'
                        rows='5'
                        placeholder='Please include equipment model numbers and specifications if applicable...'
                        required
                        value={form.message}
                        onChange={updateField('message')}
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className='col-12 mt-2 d-flex justify-content-end'>
                      <button
                        type='submit'
                        className='btn-it-primary'
                        disabled={status === 'sending'}
                      >
                        {status === 'sending' ? (
                          <>
                            <Loader2
                              size={15}
                              style={{ animation: 'it-spin 0.9s linear infinite' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
