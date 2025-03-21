import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import innoMC20R from '/assets/inno-MC20R.png';
import innoMC16R from '/assets/inno-MC20R.png';
import innoMC15 from '/assets/inno-MC15.png';
import autoclave from '/assets/autoclave-sterilizer.png';
import liquidcontainer from '/assets/liquid-nitrogen-container.png';
import freezer86 from '/assets/86-freezer.png';
import freezer40 from '/assets/40-Freezer.png';
import phmeter from '/assets/PH-18P.png';
import sbspectrophotometer from '/assets/single-beam-spectrophotometer.png';
import dbspectrophotometer from '/assets/double-beam-spectrophotometer.png';

const ProductListing = () => {
  const [showMore, setShowMore] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Micro Centrifuge inno-MC-20R',
      image: innoMC20R,
    },
    {
      id: 2,
      name: 'Micro Centrifuge inno-MC-16R',
      image: innoMC16R,
    },
    {
      id: 3,
      name: 'Micro Centrifuge inno-MC-15',
      image: innoMC15,
    },
    {
      id: 4,
      name: 'Autoclaves inno-AC51',
      image: autoclave,
    },
    {
      id: 5,
      name: 'Autoclaves inno-AC101',
      image: autoclave,
    },
    {
      id: 6,
      name: 'Liquid Nitrogen Container C10',
      image: liquidcontainer,
    },
    {
      id: 7,
      name: 'Liquid Nitrogen Container C35',
      image: liquidcontainer,
    },
    {
      id: 8,
      name: 'Liquid Nitrogen Container C50',
      image: liquidcontainer,
    },
    {
      id: 9,
      name: '-86°C Freezer inno-86690',
      image: freezer86,
    },
    {
      id: 10,
      name: '-40°C Freezer inno-40460',
      image: freezer40,
    },
    {
      id: 11,
      name: 'Benchtop pH Meter inno-PH18',
      image: phmeter,
    },
    {
      id: 12,
      name: 'Single Beam Spectrophoto...',
      image: sbspectrophotometer,
    },
    {
      id: 13,
      name: 'Double Beam Spectrophoto...',
      image: dbspectrophotometer,
    },
  ];

  const visibleProducts = showMore ? products : products.slice(0, 8);

  return (
    <section className='py-5' style={{ padding: '2rem' }} id='products'>
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
                  <p
                    className='card-title text-start d-block'
                    style={{ fontWeight: '500', color: '#2d2d2d' }}
                  >
                    {product.name}
                  </p>
                  <div className='d-flex justify-content-between mt-2'>
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
