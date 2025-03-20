import contactIllustration from '../assets/contact.svg';

function ContactUs() {
  const formFields = [
    {
      id: 'name',
      label: 'Your Name',
      type: 'text',
      placeholder: 'Name',
    },
    {
      id: 'email',
      label: 'Your Email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: `Tell us what's on your mind...`,
      rows: 4,
      colSize: 12,
    },
  ];

  return (
    <div className='container py-5 section-wrapper' id='contact'>
      <div className='row align-items-center py-5'>
        <div
          className='text-center'
          data-aos='fade-up'
          data-aos-duration='2000'
        >
          <h2 className='fw-bold mb-2 text-center'>Get In Touch!</h2>
        </div>
        <div className='col-12 col-lg-6 mb-4 mb-lg-0 text-center'>
          <img
            data-aos='zoom-in'
            data-aos-duration='2000'
            src={contactIllustration}
            alt='Contact Illustration'
            className='img-fluid'
            style={{ position: 'relative', zIndex: 1 }}
            width={350}
            height={250}
          />
        </div>

        <div className='col-12 col-lg-6 p-2 p-lg-5'>
          <div
            className='card shadow-sm border rounded-3'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <div className='card-body'>
              <form noValidate>
                <div className='row p-3'>
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className={`col-12 col-md-${field.colSize || 6} mb-3`}
                    >
                      <label
                        htmlFor={field.id}
                        className='form-label'
                        style={{ fontWeight: '400' }}
                      >
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.id}
                          className='form-control'
                          placeholder={field.placeholder}
                          rows={field.rows || 4}
                          required
                        />
                      ) : (
                        <input
                          id={field.id}
                          type={field.type}
                          className='form-control'
                          placeholder={field.placeholder}
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className='mt-3 px-3'>
                  <button type='submit' className='about-button w-100'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
