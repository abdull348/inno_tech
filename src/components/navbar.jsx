import innotech from '../assets/innotech.png';
const Navbar = () => {
  return (
    <header id='header' className='header-space'>
      <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm'>
        <div className='container pt-0 pb-0'>
          <a className='navbar-brand' href='/' aria-label='tailus logo'>
            <img src={innotech} alt='Logo' width={160} height={60} />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item active'>
                <a className='nav-link ms-4' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ms-4' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ms-4' href='#'>
                  Products
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ms-4' href='#'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ms-4 btn btn-contact' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
