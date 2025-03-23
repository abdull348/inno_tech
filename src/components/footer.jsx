import { HiMail } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';
import usa from '/assets/us.svg';
import logo from '/assets/footer-logo.svg';

function Footer() {
  const footerInfo = [
    {
      icon: (
        <img
          src={usa}
          alt='USA Flag'
          style={{ width: '28px', height: 'auto' }}
          className='fs-1 me-1'
        />
      ),
      title: (
        <p className='text-white mb-0' style={{ fontSize: '14px' }}>
          Address
        </p>
      ),
      content: <p className='m-0 text-white'>Lenexa, KS 66215, USA</p>,
    },
    {
      icon: <HiMail className='text-white fs-3 me-1' />,
      title: (
        <p className='text-white mb-0' style={{ fontSize: '14px' }}>
          Email us
        </p>
      ),
      content: (
        <>
          <a
            href='mailto:info@innotechtechnologies.us'
            className='text-white text-decoration-none d-block'
            style={{ fontWeight: '400', fontSize: '16px' }}
          >
            info@innotechtechnologies.us
          </a>
          <a
            href='mailto:sales@innotechtechnologies.us'
            className='text-white text-decoration-none d-block'
            style={{ fontWeight: '400', fontSize: '16px' }}
          >
            sales@innotechtechnologies.us
          </a>
        </>
      ),
    },
    {
      icon: <TbPhoneCall className='text-white fs-3 me-1' />,
      title: (
        <p className='text-white mb-0' style={{ fontSize: '14px' }}>
          Call us
        </p>
      ),
      content: <p className='m-0 text-white'>+1 (818) 943-1786</p>,
    },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        background: 'linear-gradient(315deg, #334155, #1e293b, #0f172a)',
        paddingTop: '85px',
        paddingBottom: '20px',
      }}
    >
      <div className='container'>
        <div className='row text-center text-md-start'>
          <div className='col-12 col-md-3 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0'>
            <a className='navbar-brand' href='/'>
              <img
                src={logo}
                alt='Logo'
                className='img-fluid'
                style={{ maxWidth: '160px', maxHeight: '60px' }}
              />
            </a>
          </div>

          {footerInfo.map((info, index) => (
            <div
              className='col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0'
              key={index}
            >
              {info.icon}
              <div className='ms-2'>
                <p className='mb-1'>{info.title}</p>
                {info.content}
              </div>
            </div>
          ))}
        </div>

        <hr className='mt-5 mb-4 text-white' />

        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-auto'>
            <p className='mb-1 text-white' style={{ fontSize: '14px' }}>
              Privacy Policy<span style={{ margin: '0 10px' }}>|</span>Terms &
              Conditions
            </p>
          </div>
          <div className='col-auto'>
            <p className='mb-1 text-white' style={{ fontSize: '14px' }}>
              © 2025 Inno Tech.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
