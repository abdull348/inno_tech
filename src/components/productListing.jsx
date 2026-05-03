import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  Home,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  LifeBuoy,
  FileText,
} from 'lucide-react';
import products from '../productData.js';
import AnimatedText from './animatedText';
import SEO from './seo';

const SITE = 'https://innotechtechnologies.us';

const deriveCategory = (name = '') => {
  const n = name.toLowerCase();
  if (n.includes('centrifuge')) return 'Centrifugation';
  if (
    n.includes('freezer') ||
    n.includes('refrigerator') ||
    n.includes('chiller')
  )
    return 'Cold Storage';
  if (n.includes('autoclave') || n.includes('sterilizer'))
    return 'Sterilization';
  if (n.includes('spectrophotometer')) return 'Spectroscopy';
  if (n.includes('ph') || n.includes('meter')) return 'Measurement';
  if (n.includes('nitrogen')) return 'Cryogenics';
  if (n.includes('incubator')) return 'Incubation';
  return 'Lab Equipment';
};

const slugify = (s) => s.replace(/\s+/g, '-').toLowerCase();

const trustItems = [
  { icon: <ShieldCheck size={16} />, label: 'ISO Certified' },
  { icon: <Truck size={16} />, label: '48h Dispatch' },
  { icon: <LifeBuoy size={16} />, label: '24/7 Support' },
  { icon: <FileText size={16} />, label: 'Full Documentation' },
];

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productName } = useParams();
  const product = products.find((p) => slugify(p.name) === productName);

  const gallery = useMemo(() => {
    if (!product) return [];
    return [product.image, ...(product.additionalImages || [])].slice(0, 4);
  }, [product]);

  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState('overview');

  if (!product) {
    return (
      <section className='it-section-pad bg-white'>
        <div className='container text-center'>
          <h2 className='it-heading mb-3'>Product not found</h2>
          <p style={{ color: 'var(--it-muted)' }} className='mb-4'>
            The product you&apos;re looking for may have been moved or no longer
            exists.
          </p>
          <button
            className='btn-it-primary'
            onClick={() => navigate('/products')}
          >
            Back to Products
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    );
  }

  const category = deriveCategory(product.name);
  const related = products
    .filter((p) => p.id !== product.id && deriveCategory(p.name) === category)
    .slice(0, 4);
  const hasTable = product.table && Object.keys(product.table).length > 0;
  const hasRotor = product.rotorSpecs && product.rotorSpecs.length > 0;

  const goToContact = () =>
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });

  const seoDescription = (
    product.description?.replace(/\s+/g, ' ').trim().slice(0, 160) ||
    `${product.name} — precision lab equipment from InnoTech Technologies.`
  );

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `${SITE}${product.image}`,
    description: product.description?.replace(/\s+/g, ' ').trim() || product.name,
    sku: product.specs?.Model || `inno-${product.id}`,
    mpn: product.specs?.Model || undefined,
    category,
    brand: {
      '@type': 'Brand',
      name: 'InnoTech Technologies',
    },
    manufacturer: {
      '@id': `${SITE}/#organization`,
    },
    additionalProperty: product.specs
      ? Object.entries(product.specs)
          .filter(([, v]) => v && v !== 'N/A')
          .map(([k, v]) => ({
            '@type': 'PropertyValue',
            name: k,
            value: String(v),
          }))
      : [],
    offers: {
      '@type': 'Offer',
      url: `${SITE}/products/${slugify(product.name)}`,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: 'Contact for quote',
      },
      seller: { '@id': `${SITE}/#organization` },
    },
  };

  return (
    <>
      <SEO
        title={`${product.name} — ${category}`}
        description={seoDescription}
        path={`/products/${slugify(product.name)}`}
        image={`${SITE}${product.image}`}
        type='product'
        jsonLd={productJsonLd}
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: category, path: '/products' },
          { name: product.name, path: `/products/${slugify(product.name)}` },
        ]}
      />
      <section className='it-detail-bar'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between gap-3 flex-wrap'>
            <button
              type='button'
              className='it-back-btn'
              onClick={() => navigate('/products')}
              aria-label='Back to products'
            >
              <ChevronLeft size={15} />
              Back to Products
            </button>

            <nav
              aria-label='Breadcrumb'
              className='it-breadcrumb-light'
            >
              <Link to='/' aria-label='Home'>
                <Home size={13} />
                Home
              </Link>
              <ChevronRight size={12} className='sep' />
              <Link to='/products'>Products</Link>
              <ChevronRight size={12} className='sep' />
              <span className='cat'>{category}</span>
              <ChevronRight size={12} className='sep' />
              <span
                className='current'
                title={product.name}
              >
                {product.name}
              </span>
            </nav>
          </div>
        </div>
      </section>

      <section className='py-5 bg-white'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6'>
              <AnimatedText>
                <div
                  className='rounded-4 p-4 d-flex align-items-center justify-content-center mb-3'
                  style={{
                    background: '#fff',
                    border: '1px solid var(--it-border)',
                    minHeight: '420px',
                    position: 'relative',
                  }}
                >
                  <span className='it-product-badge'>{category}</span>
                  <img
                    src={gallery[activeImg]}
                    alt={product.name}
                    style={{
                      maxHeight: '380px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </AnimatedText>

              {gallery.length > 1 && (
                <div className='d-flex gap-2 flex-wrap'>
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      type='button'
                      className={`it-thumb border-0 ${
                        activeImg === i ? 'active' : ''
                      }`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Show image ${i + 1}`}
                    >
                      <img src={img} alt='' />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className='col-lg-6'>
              <AnimatedText>
                <span className='it-eyebrow mb-3'>{category}</span>
              </AnimatedText>
              <AnimatedText delay={0.05}>
                <h1
                  className='it-heading mb-3'
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
                >
                  {product.name}
                </h1>
              </AnimatedText>
              <AnimatedText delay={0.12}>
                <div className='it-divider mb-3' />
              </AnimatedText>
              <AnimatedText delay={0.16}>
                <p
                  style={{
                    color: 'var(--it-muted)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                  }}
                  className='mb-4'
                >
                  {product.description?.slice(0, 220)}
                  {product.description?.length > 220 ? '…' : ''}
                </p>
              </AnimatedText>

              {product.specs && (
                <AnimatedText delay={0.2}>
                  <div className='it-spec-grid mb-4'>
                    {Object.entries(product.specs)
                      .filter(([, v]) => v && v !== 'N/A')
                      .slice(0, 6)
                      .map(([k, v]) => (
                        <div key={k} className='it-spec-row'>
                          <div className='label'>{k}</div>
                          <div className='value'>{v}</div>
                        </div>
                      ))}
                  </div>
                </AnimatedText>
              )}

              <AnimatedText delay={0.26}>
                <div className='d-flex flex-wrap gap-3 mb-4'>
                  <button
                    className='btn-it-primary'
                    onClick={goToContact}
                  >
                    <ShoppingCart size={16} />
                    Add to Inquiry
                  </button>
                  <button
                    className='btn-it-ghost'
                    onClick={goToContact}
                    style={{
                      color: 'var(--it-blue)',
                      background: 'transparent',
                      border: '1px solid var(--it-blue)',
                    }}
                  >
                    Request Quote
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.32}>
                <div
                  className='d-flex flex-wrap gap-2 pt-3'
                  style={{ borderTop: '1px solid var(--it-border)' }}
                >
                  {trustItems.map((t, i) => (
                    <div key={i} className='trust-pill'>
                      {t.icon}
                      <span>{t.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 it-section-soft'>
        <div className='container'>
          <div className='it-tabs'>
            <button
              className={`it-tab ${tab === 'overview' ? 'active' : ''}`}
              onClick={() => setTab('overview')}
              type='button'
            >
              Overview
            </button>
            {hasTable && (
              <button
                className={`it-tab ${tab === 'specs' ? 'active' : ''}`}
                onClick={() => setTab('specs')}
                type='button'
              >
                Technical Specs
              </button>
            )}
            {hasRotor && (
              <button
                className={`it-tab ${tab === 'rotor' ? 'active' : ''}`}
                onClick={() => setTab('rotor')}
                type='button'
              >
                Rotor Specs
              </button>
            )}
          </div>

          {tab === 'overview' && (
            <div
              className='bg-white rounded-4 p-4 p-lg-5'
              style={{ border: '1px solid var(--it-border)' }}
            >
              <h3
                className='mb-3'
                style={{
                  color: 'var(--it-ink)',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                }}
              >
                Product Overview
              </h3>
              <p
                style={{
                  color: 'var(--it-text)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                }}
                className='mb-0'
              >
                {product.description}
              </p>
            </div>
          )}

          {tab === 'specs' && hasTable && (
            <div className='it-spec-table-wrap'>
              <div className='table-responsive'>
                <table className='it-spec-table'>
                  <tbody>
                    {Object.entries(product.table).map(([k, v]) => (
                      <tr key={k}>
                        <th>{k}</th>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'rotor' && hasRotor && (
            <div className='it-spec-table-wrap'>
              <div className='table-responsive'>
                <table className='it-spec-table'>
                  <thead>
                    <tr>
                      <th>Rotor</th>
                      <th>Capacity</th>
                      <th>Max Speed</th>
                      <th>Max RCF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.rotorSpecs.map((r, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600, color: 'var(--it-ink)' }}>
                          {r.rotor}
                        </td>
                        <td>{r.capacity}</td>
                        <td>{r.maxSpeed}</td>
                        <td>{r.maxRCF}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className='it-section-pad bg-white'>
          <div className='container'>
            <div className='d-flex align-items-end justify-content-between flex-wrap gap-3 mb-4'>
              <div>
                <AnimatedText>
                  <span className='it-eyebrow mb-2'>Related Equipment</span>
                </AnimatedText>
                <AnimatedText delay={0.08}>
                  <h2 className='display-6 it-heading mb-0'>
                    More in{' '}
                    <span className='it-heading-grad'>{category}</span>
                  </h2>
                </AnimatedText>
              </div>
              <Link
                to='/products'
                style={{
                  color: 'var(--it-blue)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                View all
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className='row g-4'>
              {related.map((item, i) => (
                <div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
                  <AnimatedText delay={0.04 * i}>
                    <div
                      className='it-product-card'
                      onClick={() => navigate(`/products/${slugify(item.name)}`)}
                      role='button'
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter')
                          navigate(`/products/${slugify(item.name)}`);
                      }}
                    >
                      <div className='it-product-media'>
                        <span className='it-product-badge'>
                          {deriveCategory(item.name)}
                        </span>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className='it-product-body'>
                        <div className='it-product-title'>{item.name}</div>
                        <div className='it-product-meta'>
                          {item.specs?.Model || 'View specifications'}
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
      )}
    </>
  );
};

export default ProductDetail;
