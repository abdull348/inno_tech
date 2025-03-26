// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import innotech from '/assets/nav-logo.svg';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLinkClick = (path) => {
//     if (isOpen) setIsOpen(false);

//     if (path.startsWith('#')) {
//       const sectionId = path.substring(1);
//       const section = document.getElementById(sectionId);

//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       navigate(path);
//     }
//   };

//   const navbarData = [
//     { title: 'About', path: '#about' },
//     { title: 'Products', path: '/product' },
//     { title: 'Services', path: '#services' },
//     { title: 'Contact', path: '#contact' },
//   ];

//   return (
//     <nav
//       className='navbar navbar-expand-lg navbar-light bg-light'
//       style={{ position: 'relative', zIndex: 1 }}
//     >
//       <div className='container pt-2 pb-2'>
//         <Link to='/' className='navbar-brand d-flex align-items-center'>
//           <img src={innotech} alt='Logo' width={130} height={50} />
//         </Link>
//         <button
//           className='navbar-toggler'
//           type='button'
//           onClick={handleToggle}
//           aria-expanded={isOpen}
//           aria-label='Toggle navigation'
//         >
//           ☰<span className={isOpen ? 'icon-cross' : 'icon-bars'}></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
//           <ul className='navbar-nav ms-auto'>
//             {navbarData.map((item, index) => (
//               <li className='nav-item' key={index}>
//                 {item.external ? (
//                   <Link
//                     to={item.path}
//                     className='nav-link mx-1 px-3 highlight'
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     onClick={handleLinkClick}
//                   >
//                     {item.title}
//                   </Link>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     className='nav-link mx-1 px-3'
//                     onClick={handleLinkClick}
//                   >
//                     {item.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import innotech from '/assets/nav-Logo.png';
import { Phone, Mail, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLinkClick = (path) => {
    if (isOpen) setIsOpen(false);
    path.startsWith('#')
      ? document
          .getElementById(path.substring(1))
          ?.scrollIntoView({ behavior: 'smooth' })
      : navigate(path);
  };

  const navbarData = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Products', path: '/products' },
    { title: 'Services', path: '/services' },
  ];

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light sticky-top bg-white shadow-sm'
      // style={{ zIndex: 999 }}
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
          className='navbar-toggler border-0 p-0'
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

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className='navbar-nav ms-lg-auto'>
            {navbarData.map((item) => (
              <li className='nav-item mx-lg-1' key={item.title}>
                <Link
                  to={item.path}
                  className='nav-link px-3 py-3 py-lg-2 fw-medium'
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
  );
}

export default Navbar;
