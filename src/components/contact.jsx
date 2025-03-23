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
    <div className='container section-wrapper' id='contact'>
      <div className='row align-items-center py-5'>
        <div className='col-12 col-lg-6 mb-lg-0 p-4 p-lg-2'>
          <h2 className='fw-bold fs-2 mb-2'>
            Get In <span style={{ color: '#f16921' }}>Touch!</span>
          </h2>
          <p
            className='mt-2 lh-lg'
            style={{
              fontSize: '18px',
              letterSpacing: '0.2px',
              lineHeight: '1.6',
            }}
          >
            Need to get in touch with us? Either fill out the form with your
            inquiry or <br />
            find the{' '}
            <a
              href='mailto:info@innotechtechnologies.us'
              style={{
                fontWeight: '500',
                color: '#045cb4',
                textDecoration: 'none',
              }}
            >
              official email
            </a>{' '}
            you&apos;d like to contact below.
          </p>
        </div>

        <div className='col-12 col-lg-6 p-4 p-lg-5'>
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
