import { Mail, MapPin, Phone } from 'lucide-react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import usa from '/assets/us.svg';
import logo from '/assets/footer-logo.svg';

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
    <footer className='bg-dark text-white pt-5 pb-1'>
      <div className='container'>
        <div className='row g-4'>
          <div className='col-lg-4'>
            <Link to='/' className='d-inline-block mb-4'>
              <img
                src={logo}
                alt='InnoTech Technologies'
                style={{ width: '180px', height: 'auto' }}
              />
            </Link>
            <p className='small text-white-50 mb-4'>
              Leading supplier of precision laboratory equipment for research,
              healthcare, and industrial applications since 2014.
            </p>

            <div className='d-flex gap-3 mb-4'>
              <a href='#' className='text-white-50 hover-primary'>
                <Linkedin size={22} />
              </a>
              <a href='#' className='text-white-50 hover-primary'>
                <Twitter size={22} />
              </a>
              <a href='#' className='text-white-50 hover-primary'>
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className='col-lg-2 col-md-4'>
              <h5 className='h6 mb-3 text-white'>{section.title}</h5>
              <ul className='list-unstyled'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className='mb-2'>
                    <Link
                      to={link.url}
                      className='text-white-50 small text-decoration-none hover-primary'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='col-lg-4 col-md-6'>
            <h5 className='h6 mb-3 text-white'>Contact Information</h5>
            <div className='d-flex mb-3'>
              <div className='me-3 text-primary'>
                <MapPin size={22} />
              </div>
              <div>
                <p className='mb-0 small text-white'>Lenexa, KS 66215, USA</p>
                <div className='d-flex align-items-center mt-1'>
                  <img src={usa} alt='USA' width='20' className='me-2' />
                  <span className='small text-white-50'>Headquarters</span>
                </div>
              </div>
            </div>

            <div className='d-flex mb-3'>
              <div className='me-3 text-primary'>
                <Mail size={22} />
              </div>
              <div>
                <a
                  href='mailto:info@innotechtechnologies.us'
                  className='small text-white-50 d-block text-decoration-none hover-primary'
                >
                  info@innotechtechnologies.us
                </a>
                <a
                  href='mailto:sales@innotechtechnologies.us'
                  className='small text-white-50 d-block text-decoration-none hover-primary'
                >
                  sales@innotechtechnologies.us
                </a>
              </div>
            </div>

            <div className='d-flex'>
              <div className='me-3 text-primary'>
                <Phone size={22} />
              </div>
              <div>
                <a
                  href='tel:+18189431786'
                  className='small text-white-50 text-decoration-none hover-primary'
                >
                  +1 (818) 943-1786
                </a>
                <p className='small text-white-50 mb-0 mt-1'>
                  Mon-Fri: 8AM - 6PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='my-4 border-secondary' />

        <div className='row align-items-center'>
          <div className='col-md-6 mb-0 mb-md-0'>
            <p className='small text-white-50 mb-0'>
              © {new Date().getFullYear()} InnoTech Technologies. All rights
              reserved.
            </p>
          </div>
          <div className='col-md-6 text-md-end'>
            <p className='text-xs text-gray-500'>
              Developed by{' '}
              <a
                href='https://devprimo.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white-50 text-decoration-none hover:text-blue-400 transition-colors duration-200'
              >
                DevPrimo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
