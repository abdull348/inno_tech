import { Mail, MapPin, Phone, SquareArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import usa from '/assets/us.svg';

function Footer() {
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Laboratory Equipment', url: '/' },
        { name: 'Medical Devices', url: '/' },
        { name: 'Industrial Instruments', url: '/' },
        { name: 'Featured Products', url: '/products' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Privacy Policy', url: '/' },
        { name: 'Terms & Conditions', url: '/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Technical Documents', url: '/' },
        { name: 'Product Manuals', url: '/' },
        { name: 'Safety Standards', url: '/' },
        { name: 'FAQ', url: '/' },
      ],
    },
  ];

  return (
    <footer className='bg-dark text-white pt-5 pb-3'>
      <div className='container'>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-6'>
            <h5 className='h6 mb-3 text-white'>Contact Information</h5>

            <div className='d-flex mb-3'>
              <div className='me-3 text-primary'>
                <MapPin size={18} />
              </div>
              <div>
                <p className='mb-0 small text-white'>Lenexa, KS 66215, USA</p>
                <div className='d-flex align-items-center mt-1'>
                  <img src={usa} alt='USA' width='20' className='me-2' />
                  <span className='small text-white-50 fw-normal'>
                    Headquarters
                  </span>
                </div>
              </div>
            </div>

            <div className='d-flex mb-3'>
              <div className='me-3 text-primary'>
                <Mail size={18} />
              </div>
              <div>
                <a
                  href='mailto:info@innotechtechnologies.us'
                  className='small text-white-50 d-block text-decoration-none text-reset opacity-75 hover-opacity-100 transition'
                >
                  info@innotechtechnologies.us
                </a>
                <a
                  href='mailto:sales@innotechtechnologies.us'
                  className='small text-white-50 d-block text-decoration-none text-reset opacity-75 hover-opacity-100 transition'
                >
                  sales@innotechtechnologies.us
                </a>
              </div>
            </div>

            <div className='d-flex'>
              <div className='me-3 text-primary'>
                <Phone size={18} />
              </div>
              <div>
                <a
                  href='tel:+18189431786'
                  className='small text-white-50 text-decoration-none text-reset opacity-75 hover-opacity-100 transition'
                >
                  +1 (818) 943-1786
                </a>
                <p className='small text-white-50 mb-0 mt-1 fw-normal opacity-75'>
                  Mon-Fri: 8AM - 6PM EST
                </p>
              </div>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className='col-lg-3 col-md-6'>
              <h5 className='h6 mb-3 text-white'>{section.title}</h5>
              <ul className='list-unstyled'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className='mb-2'>
                    <Link
                      to={link.url}
                      className='d-inline-flex align-items-center text-white-50 small text-decoration-none hover-primary fw-normal position-relative'
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#9abeff';
                        e.currentTarget
                          .querySelector('svg')
                          .classList.remove('opacity-0');
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '';
                        e.currentTarget
                          .querySelector('svg')
                          .classList.add('opacity-0');
                      }}
                    >
                      {link.name}
                      <SquareArrowUpRight
                        size={14}
                        className='ms-2 opacity-0 text-primary'
                        style={{ transition: 'opacity 0.2s' }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className='my-4 border-secondary' />

        <div className='row align-items-center text-center text-md-start'>
          <div className='col-md-6'>
            <p className='small text-white-50 mb-0 fw-normal opacity-75'>
              © {new Date().getFullYear()} InnoTech Technologies.
            </p>
          </div>
          <div className='col-md-6 text-md-end mt-3 mt-md-0'>
            <p className='small text-white-50 mb-0 fw-normal opacity-75 fw-normal'>
              Developed by{' '}
              <a
                href='https://devprimo.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white-50 text-decoration-none'
              >
                Devprimo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
