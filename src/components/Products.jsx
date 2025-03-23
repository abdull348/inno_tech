import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import products from '../productData.js';

const ProductListing = () => {
  const navigate = useNavigate();

  return (
    <section className='py-2 py-lg-5' style={{ padding: '1rem' }} id='products'>
      <div className='container my-0 my-lg-5'>
        <h2 className='fw-bold fs-2 mb-5 text-center'>
          Our Featured <span style={{ color: '#f16921' }}>Products</span>
        </h2>
        <div className='row g-4'>
          {products.map((product) => (
            <div key={product.id} className='col-md-3 mx-auto'>
              <div
                className='card h-100 shadow-sm'
                style={{
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={product.image}
                  className='card-img-top'
                  alt={product.name}
                  style={{
                    transition: 'opacity 0.3s',
                    borderRadius: '10px 10px 0 0',
                  }}
                  onClick={() =>
                    navigate(
                      `/product/${product.name
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
                    {product.name.length > 30
                      ? `${product.name.slice(0, 30)}..`
                      : product.name}
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
    </section>
  );
};

export default ProductListing;
