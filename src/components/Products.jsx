import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import products from '../productData.js';
import AnimatedText from './animatedText.jsx';

const ProductListing = () => {
  const navigate = useNavigate();

  return (
    <section className='py-5 bg-light' id='products'>
      <div className='container py-4'>
        <div className='text-center mb-5'>
          <h2 className='display-5 fw-bold mb-3'>Laboratory Equipment</h2>
          <AnimatedText>
            <p
              className='lead text-muted mx-auto'
              style={{ maxWidth: '700px' }}
            >
              Certified instruments for research, diagnostics, and quality
              control
            </p>
          </AnimatedText>
        </div>

        <div className='row g-4'>
          {products.map((product) => (
            <div
              key={product.id}
              className='col-xl-3 col-lg-4 col-md-6 mx-auto'
            >
              <div
                className='product-card card h-100 border-0 shadow-sm overflow-hidden'
                onClick={() =>
                  navigate(
                    `/products/${product.name
                      .replace(/\s+/g, '-')
                      .toLowerCase()}`
                  )
                }
              >
                <div className='position-relative'>
                  <img
                    src={product.image}
                    className='card-img-top'
                    alt={product.name}
                    style={{
                      objectFit: 'contain',
                      cursor: 'pointer',
                    }}
                  />

                  <h6 className='card-title p-3' style={{ minHeight: '48px' }}>
                    {product.name.length > 30
                      ? `${product.name.slice(0, 30)}...`
                      : product.name}
                  </h6>
                </div>

                <div className='card-footer bg-transparent border-top-0 pt-0 pb-3'>
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

        <div className='text-center mt-5'>
          <button className='btn btn-outline-primary px-4'>
            View All Equipment <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
