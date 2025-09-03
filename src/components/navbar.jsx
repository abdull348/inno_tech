import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, X, Menu } from 'lucide-react';
import innotech from '/assets/nav-logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarData = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Services', path: '/services' },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isScrolled ? 'shadow-sm' : ''
      } bg-white`}
      style={{
        zIndex: 1050,
        position: 'sticky',
        top: 0,
        transition: 'all 0.3s ease',
      }}
    >
      <div className='container py-0 py-lg-0'>
        <Link to='/' className='navbar-brand d-flex align-items-center'>
          <img src={innotech} alt='InnoTech' width='115' height='50' />
        </Link>

        <div className='d-none d-lg-flex align-items-center ms-auto me-4'>
          <div className='d-flex align-items-center me-4 text-muted small'>
            <Phone size={16} className='text-primary me-2' />
            <a
              href='tel:+18189431786'
              className='text-reset text-decoration-none'
            >
              +1 (818) 943-1786
            </a>
          </div>
          <div className='d-flex align-items-center text-muted small'>
            <Mail size={16} className='text-primary me-2' />
            <a
              href='mailto:info@innotechtechnologies.us'
              className='text-reset text-decoration-none'
            >
              info@innotechtechnologies.us
            </a>
          </div>
        </div>

        <button
          className='navbar-toggler p-2 d-lg-none'
          type='button'
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
          style={{
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          }}
        >
          {isOpen ? (
            <X size={26} className='text-dark' />
          ) : (
            <Menu size={26} className='text-dark' />
          )}
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id='navbarContent'
        >
          <ul className='navbar-nav ms-lg-auto align-items-lg-center'>
            {navbarData.map((item) => (
              <li className='nav-item mx-lg-1' key={item.title}>
                <Link
                  to={item.path}
                  className={`nav-link px-2 py-3 py-lg-2 fw-normal small ${
                    location.pathname === item.path
                      ? 'text-primary active'
                      : 'text-dark'
                  }`}
                  onClick={() => handleLinkClick(item.path)}
                  style={{ fontSize: '0.98rem' }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className='d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50'
          style={{ zIndex: 1040 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
