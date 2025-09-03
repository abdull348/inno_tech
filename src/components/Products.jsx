import { useNavigate } from 'react-router-dom';
import products from '../productData.js';
import AnimatedText from './animatedText.jsx';

const ProductListing = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-light' id='products'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h2
            className='display-6 fw-bold mb-2'
            style={{
              background: 'linear-gradient(to right, #222, #1a237e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              MozBackgroundClip: 'text',
              MozTextFillColor: 'transparent',
            }}
          >
            Laboratory Equipment
          </h2>
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

        <div className='row g-4 bg-blue'>
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

                  <h6
                    className='card- text-muted p-3 fw-normal'
                    style={{ minHeight: '48px' }}
                  >
                    {product.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
