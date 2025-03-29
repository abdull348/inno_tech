import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, X } from 'lucide-react';
import innotech from '/assets/nav-Logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = (path) => {
    if (isOpen) setIsOpen(false);
    navigate(path);
  };

  const navbarData = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Services', path: '/services' },
  ];

  return (
    <>
      <nav
        className='navbar navbar-expand-lg sticky-top shadow-sm'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1030,
        }}
      >
        <div className='container py-0 py-lg-0'>
          <Link to='/' className='navbar-brand'>
            <img src={innotech} alt='InnoTech' width='160' height='60' />
          </Link>

          <div className='d-none d-lg-flex align-items-center ms-auto me-4'>
            <div className='d-flex align-items-center me-4'>
              <Phone size={18} className='text-primary me-2' />
              <a
                href='tel:+18189431786'
                className='text-dark text-decoration-none fw-medium'
              >
                +1 (818) 943-1786
              </a>
            </div>
            <div className='d-flex align-items-center'>
              <Mail size={18} className='text-primary me-2' />
              <a
                href='mailto:info@innotechtechnologies.us'
                className='text-dark text-decoration-none fw-medium'
              >
                info@innotechtechnologies.us
              </a>
            </div>
          </div>

          <button
            className='navbar-toggler border-0 p-0 d-lg-none'
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label='Toggle navigation'
          >
            {isOpen ? (
              <X size={28} className='text-dark' />
            ) : (
              <div className='navbar-toggler-icon-custom'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </button>

          <div className='collapse navbar-collapse d-lg-flex'>
            <ul className='navbar-nav ms-lg-auto'>
              {navbarData.map((item) => (
                <li className='nav-item mx-lg-1' key={item.title}>
                  <Link
                    to={item.path}
                    className={`nav-link px-3 py-3 py-lg-2 fw-medium ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick(item.path)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`d-lg-none mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1029,
          overflowY: 'auto',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          padding: '20px',
        }}
      >
        <div className='container'>
          <ul className='navbar-nav'>
            {navbarData.map((item) => (
              <li className='nav-item' key={item.title}>
                <Link
                  to={item.path}
                  className={`nav-link px-3 py-3 fw-medium d-block ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick(item.path)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='d-flex flex-column mt-4'>
            <div className='d-flex align-items-center mb-3'>
              <Phone size={18} className='text-primary me-2' />
              <a
                href='tel:+18189431786'
                className='text-dark text-decoration-none fw-medium'
              >
                +1 (818) 943-1786
              </a>
            </div>
            <div className='d-flex align-items-center'>
              <Mail size={18} className='text-primary me-2' />
              <a
                href='mailto:info@innotechtechnologies.us'
                className='text-dark text-decoration-none fw-medium'
              >
                info@innotechtechnologies.us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
