import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import products from '../productData.js';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import ContactUs from './contact.jsx';
import ScrollToTop from './scrollTop.jsx';

const ListingProduct = () => {
  const navigate = useNavigate();
  const { productName } = useParams();
  const product = products.find(
    (p) => p.name.replace(/\s+/g, '-').toLowerCase() === productName
  );

  if (!product) return <div>Product not found.</div>;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className='py-5'>
        <div className='container p-4'>
          <h2 className='text-center fw-bold mb-2'>{product.name}</h2>
          <div className='row mt-5 align-items-center'>
            <div className='col-md-6 text-center'>
              <img
                src={product.image}
                alt={product.name}
                className='img-fluid'
                style={{
                  maxWidth: '100%',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  padding: '5px',
                }}
              />
            </div>

            <div className='col-md-6 px-2 px-lg-5 mt-4 mt-lg-0'>
              <h4 className='fw-bold mb-4'>Specifications</h4>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} style={{ marginBottom: '12px' }}>
                    <strong>{key}:</strong> {value}
                    <hr style={{ marginTop: '8px', color: '#1a1a1a' }} />
                  </li>
                ))}
              </ul>

              <div className='mt-4'>
                <h4 className='fw-bold mb-2'>Shipping & Return</h4>
                <p
                  className='lh-lg'
                  style={{
                    color: '#555',
                    marginBottom: '0',
                    letterSpacing: '0.2px',
                    lineHeight: '1.6',
                  }}
                >
                  Enjoy complimentary shipping and hassle-free returns on all
                  orders.
                  <br /> Estimated delivery time:{' '}
                  <strong>5-6 business days</strong>. <br />
                  For more details, please contact our support team.
                </p>
              </div>
            </div>
          </div>

          <div className='mt-4 py-5'>
            <h4 className='fw-bold'>Description</h4>
            <p
              className='lh-lg'
              style={{
                color: '#444',
                letterSpacing: '0.2px',
                lineHeight: '1.6',
              }}
            >
              {product.description}
            </p>
          </div>

          <div className='mt-2'>
            <h4 className='fw-bold mb-4'>Related Products</h4>
            <div className='row'>
              {products
                .filter((relatedProduct) => relatedProduct.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <div key={relatedProduct.id} className='col-md-3 mb-4'>
                    <div
                      className='card h-100 shadow-sm'
                      style={{
                        borderRadius: '8px',
                        transition: 'all 0.3s',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={relatedProduct.image}
                        className='card-img-top'
                        alt={relatedProduct.name}
                        style={{
                          transition: 'opacity 0.3s',
                          borderRadius: '10px 10px 0 0',
                        }}
                        onClick={() =>
                          navigate(
                            `/product/${relatedProduct.name
                              .replace(/\s+/g, '-')
                              .toLowerCase()}`
                          )
                        }
                      />
                      <div className='card-body text-center'>
                        <p
                          className='card-title text-start d-block'
                          style={{ fontWeight: '500', color: '#2d2d2d' }}
                        >
                          {relatedProduct.name.length > 30
                            ? `${relatedProduct.name.slice(0, 30)}..`
                            : relatedProduct.name}
                        </p>
                        <div className='d-flex justify-content-between mt-2'>
                          <a href='#contact' className='ask-price'>
                            Ask for Price
                          </a>
                          <a className='cart-icon'>
                            <FaShoppingCart />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <ContactUs className='container mx-auto mt-5 p-4' />
      <Footer />
    </>
  );
};

export default ListingProduct;
