import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import innotech from '/assets/nav-logo.svg';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Centrifugation', url: '/products' },
      { name: 'Cold Storage', url: '/products' },
      { name: 'Sterilization', url: '/products' },
      { name: 'Spectroscopy', url: '/products' },
      { name: 'Featured Catalog', url: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', url: '/about' },
      { name: 'Services', url: '/services' },
      { name: 'Partnership', url: '/' },
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

function Footer() {
  return (
    <footer className='it-footer'>
      <div className='container position-relative'>
        <div className='row g-5'>
          <div className='col-lg-4 col-md-12'>
            <Link to='/' className='d-inline-block mb-3'>
              <img
                src={innotech}
                alt='InnoTech Technologies'
                height='44'
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                maxWidth: '380px',
              }}
              className='mb-4'
            >
              Precision laboratory equipment, certified quality, and US-based
              technical support — trusted by 500+ research institutions
              worldwide.
            </p>

            <div className='footer-newsletter'>
              <h6 style={{ marginBottom: '0.7rem' }}>Stay in the loop</h6>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem',
                  marginBottom: '0.75rem',
                }}
              >
                Product updates, technical guides, and special offers.
              </p>
              <form
                className='d-flex gap-2'
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type='email'
                  placeholder='you@lab.edu'
                  aria-label='Email address'
                  required
                />
                <button type='submit' aria-label='Subscribe'>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            <div className='d-flex align-items-center gap-2 mt-4'>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-social'
                aria-label='LinkedIn'
              >
                <Linkedin size={15} />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-social'
                aria-label='Twitter'
              >
                <Twitter size={15} />
              </a>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-social'
                aria-label='Facebook'
              >
                <Facebook size={15} />
              </a>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-social'
                aria-label='YouTube'
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className='col-lg-2 col-md-4 col-sm-6'>
              <h6>{section.title}</h6>
              <ul className='footer-link-list'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='col-lg-2 col-md-12'>
            <h6>Contact</h6>
            <ul className='footer-link-list'>
              <li className='d-flex align-items-start gap-2'>
                <MapPin
                  size={14}
                  style={{ color: '#7ad3ff', marginTop: '4px' }}
                />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Lenexa, KS 66215
                  <br />
                  USA
                </span>
              </li>
              <li>
                <a
                  href='tel:+18189431786'
                  className='d-inline-flex align-items-center gap-2'
                >
                  <Phone size={14} style={{ color: '#7ad3ff' }} />
                  +1 (818) 943-1786
                </a>
              </li>
              <li>
                <a
                  href='mailto:info@innotechtechnologies.us'
                  className='d-inline-flex align-items-center gap-2'
                >
                  <Mail size={14} style={{ color: '#7ad3ff' }} />
                  info@innotechtechnologies.us
                </a>
              </li>
              <li
                className='d-inline-flex align-items-center gap-2'
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                <ShieldCheck size={14} style={{ color: '#7ad3ff' }} />
                ISO Certified
              </li>
            </ul>
          </div>
        </div>

        <div className='footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between gap-2'>
          <p className='mb-0'>
            © {new Date().getFullYear()} InnoTech Technologies. All rights
            reserved.
          </p>
          <p className='mb-0'>
            Developed by{' '}
            <a
              href='https://devprimo.com/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#7ad3ff' }}
            >
              Devprimo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
