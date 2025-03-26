import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import products from '../productData.js';
import ContactUs from './contact.jsx';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productName } = useParams();
  const product = products.find(
    (p) => p.name.replace(/\s+/g, '-').toLowerCase() === productName
  );

  if (!product)
    return <div className='container py-5 text-center'>Product not found</div>;

  return (
    <>
      <Navbar />
      <section className='py-4 bg-light'>
        <div
          className='container d-flex justify-content-center align-items-center'
          style={{ minHeight: '60px' }}
        >
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/products' className='text-decoration-none'>
                  Products
                </a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className='py-5'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6'>
              <div className='bg-white p-3 rounded-3 shadow-sm mb-4'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='img-fluid rounded-2'
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                />
              </div>
              <div className='d-flex gap-3'>
                {[product.image, ...(product.additionalImages || [])]
                  .slice(0, 4)
                  .map((img, i) => (
                    <div
                      key={i}
                      className='border p-2 rounded-2'
                      style={{ width: '80px', height: '80px' }}
                    >
                      <img
                        src={img}
                        alt=''
                        className='img-fluid h-100 w-100'
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className='col-lg-6'>
              <div style={{ top: '20px' }}>
                <h1 className='fw-bold mb-3'>{product.name}</h1>
                <div className='mt-5'>
                  <h3 className='fw-bold mb-4 pb-2 border-bottom'>
                    Technical Specifications
                  </h3>
                  <div className='bg-white p-4 rounded-3 shadow-sm'>
                    <div className='row'>
                      {Object.entries(product.specs).map(
                        ([key, value], index) => (
                          <div key={index} className='col-md-6 mb-3'>
                            <div className='d-flex align-items-start'>
                              <div
                                className='bg-primary bg-opacity-10 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center'
                                style={{ width: '32px', height: '32px' }}
                              >
                                <Check size={16} className='text-primary' />
                              </div>
                              <div>
                                <h6 className='fw-semibold mb-1 text-dark'>
                                  {key}
                                </h6>
                                <p className='text-muted mb-0'>{value}</p>
                              </div>
                            </div>
                            {index % 2 === 1 &&
                              index !==
                                Object.entries(product.specs).length - 1 && (
                                <hr className='d-md-none my-3 opacity-25' />
                              )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className='d-flex gap-3 mb-4'>
                  <button
                    className='btn btn-primary flex-grow-1 py-2 d-flex align-items-center justify-content-center'
                    style={{ maxWidth: '250px' }}
                  >
                    <ShoppingCart size={18} className='me-2' />
                    Add to Inquiry
                  </button>
                  <button
                    className='btn btn-outline-primary flex-grow-1 py-2'
                    style={{ maxWidth: '250px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('contact').scrollIntoView();
                    }}
                  >
                    Request Quote
                  </button>
                </div>

                <div className='justify-content-center mt-4'>
                  <div className='col-10 border-top pt-3'>
                    <h4 className='fw-bold mb-3'>Product Details</h4>
                    <p className='text-muted lh-lg'>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 bg-light'>
        <div className='container py-5'>
          <h2 className='fw-bold mb-4 pb-2 border-bottom'>Related Equipment</h2>
          <div className='row g-4 mt-5'>
            {products
              .filter(
                (p) => p.id !== product.id && p.category === product.category
              )
              .slice(0, 4)
              .map((item) => (
                <div
                  key={item.id}
                  className='col-xl-3 col-lg-4 col-md-6 mx-auto'
                >
                  <div
                    className='product-card card h-100 border-0 shadow-sm overflow-hidden'
                    onClick={() =>
                      navigate(
                        `/products/${item.name
                          .replace(/\s+/g, '-')
                          .toLowerCase()}`
                      )
                    }
                  >
                    <div className='position-relative'>
                      <img
                        src={item.image}
                        className='card-img-top'
                        alt={item.name}
                        style={{ objectFit: 'contain', cursor: 'pointer' }}
                      />
                      <h6
                        className='card-title p-3'
                        style={{ minHeight: '48px' }}
                      >
                        {item.name.length > 30
                          ? `${item.name.slice(0, 30)}...`
                          : item.name}
                      </h6>
                    </div>

                    <div className='card-footer bg-transparent border-top-0 pt-0 pb-3 px-3'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <button
                          className='elegant-btn'
                          onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById('contact').scrollIntoView();
                          }}
                        >
                          Request Quote
                        </button>
                        <button
                          className='btn btn-sm btn-outline-primary'
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className='py-5 bg-light' id='contact'>
        <div className='container py-5'>
          <ContactUs />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
