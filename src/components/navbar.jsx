import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import innotech from '/assets/nav-logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    if (isOpen) setIsOpen(false);

    if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const navbarData = [
    { title: 'About', path: '#about' },
    { title: 'Products', path: '/product' },
    { title: 'Services', path: '#services' },
    { title: 'Contact Us', path: '#contact' },
  ];

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light'
      style={{ position: 'relative', zIndex: 1, padding: '0rem' }}
    >
      <div className='container'>
        <Link to='/' className='navbar-brand d-flex align-items-center'>
          <img src={innotech} alt='Logo' width={130} height={50} />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          ☰<span className={isOpen ? 'icon-cross' : 'icon-bars'}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            {navbarData.map((item, index) => (
              <li className='nav-item' key={index}>
                {item.external ? (
                  <Link
                    to={item.path}
                    className='nav-link mx-2 px-3 highlight'
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    to={item.path}
                    className='nav-link mx-2 px-3'
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
