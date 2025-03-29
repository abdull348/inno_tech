import { Send } from 'lucide-react';
import AnimatedText from './animatedText';

function ContactUs() {
  return (
    <section className='py-5 bg-light' id='contact'>
      <div className='container py-4 py-lg-5'>
        <div className='text-center mb-5'>
          <AnimatedText>
            <span className='badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2'>
              Get In Touch
            </span>
          </AnimatedText>
          <h2 className='display-5 fw-bold mb-3'>
            <span className='text-primary'>Contact</span> Our Technical Team
          </h2>
          <p className='lead text-muted mx-auto' style={{ maxWidth: '700px' }}>
            Have questions about our laboratory equipment? Our specialists are
            ready to assist with technical specifications, quotes, and support.
          </p>
        </div>

        <div className='row g-4 justify-content-center'>
          <div className='col-lg-10'>
            <div className='card border-0 shadow-sm h-100'>
              <div className='card-body p-4 p-lg-5'>
                <h3 className='h5 fw-bold mb-4'>Send Us a Message</h3>
                <form>
                  <div className='row g-3'>
                    <div className='col-md-6'>
                      <label htmlFor='name' className='form-label fw-medium'>
                        Your Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Dr. John Smith'
                        required
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='email' className='form-label fw-medium'>
                        Email Address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='john.smith@lab.edu'
                        required
                      />
                    </div>
                    <div className='col-md-6'>
                      <label
                        htmlFor='institution'
                        className='form-label fw-medium'
                      >
                        Institution/Company
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='institution'
                        placeholder='Boston Research Institute'
                      />
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='phone' className='form-label fw-medium'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        className='form-control'
                        id='phone'
                        placeholder='+1 (123) 456-7890'
                      />
                    </div>
                    <div className='col-12'>
                      <label htmlFor='subject' className='form-label fw-medium'>
                        Subject
                      </label>
                      <select className='form-select' id='subject' required>
                        <option value=''>Select inquiry type</option>
                        <option>Equipment Inquiry</option>
                        <option>Technical Support</option>
                        <option>Partnership Opportunity</option>
                        <option>Service Request</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className='col-12'>
                      <label htmlFor='message' className='form-label fw-medium'>
                        Message
                      </label>
                      <textarea
                        className='form-control'
                        id='message'
                        rows='5'
                        placeholder='Please include equipment model numbers and specifications if applicable...'
                        required
                      ></textarea>
                    </div>
                    <div className='col-12 mt-3'>
                      <button
                        type='submit'
                        className='btn btn-primary px-4 py-2 d-flex align-items-center ms-auto'
                      >
                        Send Message <Send className='ms-2' size={18} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
