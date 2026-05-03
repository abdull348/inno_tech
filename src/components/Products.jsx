import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import products from '../productData.js';
import AnimatedText from './animatedText.jsx';

const deriveCategory = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('centrifuge')) return 'Centrifugation';
  if (n.includes('freezer') || n.includes('refrigerator') || n.includes('chiller'))
    return 'Cold Storage';
  if (n.includes('autoclave') || n.includes('sterilizer'))
    return 'Sterilization';
  if (n.includes('spectrophotometer')) return 'Spectroscopy';
  if (n.includes('ph') || n.includes('meter')) return 'Measurement';
  if (n.includes('nitrogen')) return 'Cryogenics';
  if (n.includes('incubator')) return 'Incubation';
  return 'Lab Equipment';
};

const previewProducts = products.slice(0, 8);

const ProductListing = () => {
  const navigate = useNavigate();

  const goToProduct = (name) =>
    navigate(`/products/${name.replace(/\s+/g, '-').toLowerCase()}`);

  return (
    <section className='it-section-pad it-section-soft' id='products'>
      <div className='container'>
        <div className='row align-items-end mb-5 g-3'>
          <div className='col-lg-7'>
            <AnimatedText>
              <span className='it-eyebrow mb-3'>Featured Catalog</span>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h2 className='display-5 it-heading mb-2'>
                Precision <span className='it-heading-grad'>Laboratory Equipment</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.18}>
              <p
                className='mb-0'
                style={{
                  color: 'var(--it-muted)',
                  fontSize: '1.02rem',
                  maxWidth: '620px',
                  lineHeight: 1.65,
                }}
              >
                Certified instruments for research, diagnostics, and quality
                control — every unit shipped with full documentation and
                US-based technical support.
              </p>
            </AnimatedText>
          </div>
          <div className='col-lg-5 text-lg-end'>
            <AnimatedText delay={0.2}>
              <button
                className='btn-it-primary'
                onClick={() => navigate('/services')}
              >
                Browse Full Catalog
                <ArrowRight size={16} />
              </button>
            </AnimatedText>
          </div>
        </div>

        <div className='row g-4'>
          {previewProducts.map((product, i) => (
            <div
              key={product.id}
              className='col-xl-3 col-lg-4 col-md-6'
            >
              <AnimatedText delay={0.04 * i}>
                <div
                  className='it-product-card'
                  onClick={() => goToProduct(product.name)}
                  role='button'
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') goToProduct(product.name);
                  }}
                >
                  <div className='it-product-media'>
                    <span className='it-product-badge'>
                      {deriveCategory(product.name)}
                    </span>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className='it-product-body'>
                    <div className='it-product-title'>{product.name}</div>
                    <div className='it-product-meta'>
                      {product.specs?.Model || 'View specifications'}
                    </div>
                    <span className='it-product-cta'>
                      View Details
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
