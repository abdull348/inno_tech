import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Product1 from './../assets/CL750.png';
import Product2 from './../assets/CL750.png';
import Product3 from './../assets/CL750.png';
import Product4 from './../assets/CL750.png';
import Product5 from './../assets/CL750.png';
import Product6 from './../assets/CL750.png';
import Product7 from './../assets/CL750.png';
import Product8 from './../assets/CL750.png';
import Product9 from './../assets/CL750.png';
import Product10 from './../assets/CL750.png';
import Product11 from './../assets/CL750.png';
import Product12 from './../assets/CL750.png';

const ProductListing = () => {
  const [showMore, setShowMore] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Innovative Medical Device',
      image: Product1,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Advanced Diagnostic Tool',
      image: Product2,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Cutting-Edge Lab Equipment',
      image: Product3,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Efficient Medical Solution',
      image: Product4,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'High-Performance Analyzer',
      image: Product5,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Portable Medical Device',
      image: Product6,
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Innovative Medical Device',
      image: Product7,
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Advanced Diagnostic Tool',
      image: Product8,
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Cutting-Edge Lab Equipment',
      image: Product9,
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Efficient Medical Solution',
      image: Product10,
    },
    {
      id: 11,
      name: 'Product 11',
      description: 'High-Performance Analyzer',
      image: Product11,
    },
    {
      id: 12,
      name: 'Product 12',
      description: 'Portable Medical Device',
      image: Product12,
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Cutting-Edge Lab Equipment',
      image: Product9,
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Efficient Medical Solution',
      image: Product10,
    },
    {
      id: 11,
      name: 'Product 11',
      description: 'High-Performance Analyzer',
      image: Product11,
    },
    {
      id: 12,
      name: 'Product 12',
      description: 'Portable Medical Device',
      image: Product12,
    },
  ];

  const visibleProducts = showMore ? products : products.slice(0, 8);

  return (
    <section className='py-5' style={{ padding: '2rem' }}>
      <div className='container my-5'>
        <h2 className='fw-bold mb-5 text-center'>
          Our Featured <span style={{ color: '#f16921' }}>Products</span>
        </h2>
        <div className='row g-4'>
          {visibleProducts.map((product) => (
            <div key={product.id} className='col-md-3'>
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
                />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{product.name}</h5>
                  <p className='card-text'>{product.description}</p>
                  <div className='d-flex justify-content-between mt-4'>
                    <a href='#' className='ask-price'>
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
        {!showMore && (
          <div className='text-center mt-5'>
            <a className='about-button px-4' onClick={() => setShowMore(true)}>
              View More
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductListing;
