import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  X,
  Menu,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import innotech from '/assets/nav-logo.svg';

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Products', path: '/products' },
  { title: 'Services', path: '/services' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setIsOpen((v) => !v);

  const handleLinkClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const goToContact = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document
          .getElementById('contact')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className='it-topbar d-none d-lg-block'>
        <div className='container py-2'>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-3'>
              <span className='d-inline-flex align-items-center gap-2'>
                <ShieldCheck size={14} style={{ color: '#7ad3ff' }} />
                ISO Certified · US-Based Technical Support
              </span>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <a
                href='tel:+18189431786'
                className='d-inline-flex align-items-center gap-2'
              >
                <Phone size={13} /> +1 (818) 943-1786
              </a>
              <span className='topbar-divider' />
              <a
                href='mailto:info@innotechtechnologies.us'
                className='d-inline-flex align-items-center gap-2'
              >
                <Mail size={13} /> info@innotechtechnologies.us
              </a>
              <span className='topbar-divider' />
              <span className='d-inline-flex align-items-center gap-2'>
                <MapPin size={13} /> Lenexa, KS · USA
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className={`it-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className='container'>
          <div className='it-nav-inner d-flex align-items-center justify-content-between'>
            <Link to='/' className='d-flex align-items-center'>
              <img
                src={innotech}
                alt='InnoTech Technologies'
                className='it-nav-logo'
              />
            </Link>

            <ul className='navbar-nav d-none d-lg-flex flex-row align-items-center mb-0'>
              {navItems.map((item) => (
                <li className='nav-item' key={item.title}>
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='d-none d-lg-flex align-items-center gap-2'>
              <button className='btn-it-nav' onClick={goToContact}>
                Request Quote
                <ArrowRight size={14} />
              </button>
            </div>

            <button
              className='d-lg-none border-0 bg-transparent p-2'
              type='button'
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-label='Toggle navigation'
              style={{ color: 'var(--it-ink)' }}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div
              className='d-lg-none position-fixed top-0 start-0 w-100 h-100'
              style={{
                background: 'rgba(10,31,68,0.55)',
                zIndex: 1040,
                backdropFilter: 'blur(2px)',
              }}
              onClick={() => setIsOpen(false)}
            />
            <div
              className='d-lg-none position-fixed top-0 end-0 h-100 bg-white p-4 d-flex flex-column'
              style={{
                width: '78%',
                maxWidth: '320px',
                zIndex: 1050,
                boxShadow: '-8px 0 24px rgba(10,31,68,0.18)',
              }}
            >
              <div className='d-flex justify-content-between align-items-center mb-4'>
                <img src={innotech} alt='InnoTech' height='38' />
                <button
                  className='border-0 bg-transparent p-1'
                  onClick={() => setIsOpen(false)}
                  aria-label='Close menu'
                >
                  <X size={24} />
                </button>
              </div>
              <ul className='list-unstyled mb-4'>
                {navItems.map((item) => (
                  <li key={item.title} className='mb-1'>
                    <button
                      className='border-0 bg-transparent w-100 text-start py-2'
                      onClick={() => handleLinkClick(item.path)}
                      style={{
                        fontWeight: 600,
                        color:
                          location.pathname === item.path
                            ? 'var(--it-blue)'
                            : 'var(--it-ink)',
                        fontSize: '1rem',
                      }}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className='btn-it-primary w-100 justify-content-center'
                onClick={goToContact}
              >
                Request Quote <ArrowRight size={14} />
              </button>
              <div className='mt-auto pt-4 small' style={{ color: 'var(--it-muted)' }}>
                <div className='d-flex align-items-center gap-2 mb-2'>
                  <Phone size={14} style={{ color: 'var(--it-blue)' }} />
                  <a
                    href='tel:+18189431786'
                    style={{ color: 'var(--it-text)', textDecoration: 'none' }}
                  >
                    +1 (818) 943-1786
                  </a>
                </div>
                <div className='d-flex align-items-center gap-2'>
                  <Mail size={14} style={{ color: 'var(--it-blue)' }} />
                  <a
                    href='mailto:info@innotechtechnologies.us'
                    style={{ color: 'var(--it-text)', textDecoration: 'none' }}
                  >
                    info@innotechtechnologies.us
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
